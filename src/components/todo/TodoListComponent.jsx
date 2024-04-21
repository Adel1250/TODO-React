import { useEffect, useState } from "react"
import { deleteTodoApi, retrieveTodosForUsernameApi } from "./api/TodoApiService";

export default function TodoListComponent() {
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);

    function refreshTodos() {
        retrieveTodosForUsernameApi('adel')
            .then(response => setTodos(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => refreshTodos(), []);

    function deleteTodo(id) {
        deleteTodoApi('adel', id)
            .then(() => {
                refreshTodos();
                setMessage(`Todo ${id} has been delete successfully!`);
            })
            .catch(error => console.log(error))
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
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}