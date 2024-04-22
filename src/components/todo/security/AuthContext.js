import { createContext, useContext, useState } from "react";
import { jwtAuthApi } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

// Create context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Share the created context with other components
export default function AuthProvider({ children }) {
    // Put some state to the context
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);
    const [token, setToken] = useState("");

    // async function login(username, password) {
    //     const baToken = 'Basic ' + window.btoa(username + ":" + password);

    //     try {
    //         const response = await basicAuthApi(baToken);
    //         if (response.status === 200) {
    //             setIsAuthenticated(true);
    //             setUsername(username);
    //             setToken(baToken);
    //             apiClient.interceptors.request.use(
    //                 (config) => {
    //                     config.headers.Authorization = baToken
    //                     return config
    //                 }
    //             )
    //             return true;
    //         } else {
    //             logout();
    //             return false;
    //         }
    //     } catch {
    //         logout();
    //         return false;
    //     }
    // }

    async function login(username, password) {
        try {
            const response = await jwtAuthApi(username, password);
            if (response.status === 200) {
                const jwtToken = "Bearer " + response.data.token;
                setIsAuthenticated(true);
                setUsername(username);
                setToken(jwtToken);
                apiClient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )
                return true;
            } else {
                logout();
                return false;
            }
        } catch {
            logout();
            return false;
        }
    }

    function logout() {
        setIsAuthenticated(false);
        setToken(null);
        setUsername(null);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, username, token }}>
            {children}
        </AuthContext.Provider>
    )
}