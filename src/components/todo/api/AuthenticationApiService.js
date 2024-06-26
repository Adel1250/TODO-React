import { apiClient } from "./ApiClient";

export const basicAuthApi = (token) => apiClient.get("/basic-auth", {
    headers: {
        Authorization: token
    }
});

export const jwtAuthApi = (username, password) => apiClient.post("/authenticate", { username, password });