import { useEffect, useState } from "react"
import { deleteTodoApi, retrieveTodosForUsernameApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function TodoListComponent() {
    const authContext = useAuth();
    const username = authContext.username;
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    function refreshTodos() {
        retrieveTodosForUsernameApi(username)
            .then(response => setTodos(response.data))
            .catch(error => console.log(error))
    }

    // eslint-disable-next-line
    useEffect(() => refreshTodos(), []);

    function deleteTodo(id) {
        deleteTodoApi(username, id)
            .then(() => {
                refreshTodos();
                setMessage(`Todo ${id} has been delete successfully!`);
            })
            .catch(error => console.log(error))
    }

    function updateTodo(id) {
        navigate(`/todo/${id}`);
    }

    return (
        <div className="container">
            {message && <div className="alert alert-warning">{message}</div>}
            <h1>
                Things you want to do!
            </h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Is done?</th>
                        <th>Target date</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button></td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}