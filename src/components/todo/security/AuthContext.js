import { createContext, useContext, useState } from "react";

// Create context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Share the created context with other components
export default function AuthProvider({ children }) {
    // Put some state to the context
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState(null)

    function login(username, password) {
        if (username === "adel" && password === "password") {
            setIsAuthenticated(true);
            setUsername(username);
            return true;
        } else {
            setIsAuthenticated(false);
            setUsername(null)
            return false;
        }
    }

    function logout() {
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
            {children}
        </AuthContext.Provider>
    )
}