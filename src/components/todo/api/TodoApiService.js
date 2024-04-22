import { apiClient } from "./ApiClient";


export const baiscAuthApi = (token) => apiClient.get("/users/basic-auth", {
    headers: {
        Authorization: token
    }
});

export const retrieveTodosForUsernameApi = (username) => apiClient.get(`/users/${username}/todos`);

export const deleteTodoApi = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`);

export const retrieveTodoApi = (username, id) => apiClient.get(`/users/${username}/todos/${id}`);

export const updateTodoApi = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo);

export const addNewTodoApi = (username, todo) => apiClient.post(`/users/${username}/todos`, todo);