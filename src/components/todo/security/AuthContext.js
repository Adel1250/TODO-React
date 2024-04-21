import { createContext, useContext, useState } from "react";

// Create context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Share the created context with other components
export default function AuthProvider({ children }) {
    // Put some state to the context
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function login(username, password) {
        if (username === "adel" && password === "password") {
            setIsAuthenticated(true);
            return true;
        } else {
            setIsAuthenticated(false);
            return false;
        }
    }

    function logout() {
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}