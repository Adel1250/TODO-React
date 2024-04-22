import { createContext, useContext, useState } from "react";
import { baiscAuthApi } from "../api/TodoApiService";
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

    async function login(username, password) {
        const baToken = 'Basic ' + window.btoa(username + ":" + password);

        try {
            const response = await baiscAuthApi(baToken);
            if (response.status === 200) {
                setIsAuthenticated(true);
                setUsername(username);
                setToken(baToken);
                apiClient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization = baToken
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