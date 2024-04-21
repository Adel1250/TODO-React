import { useEffect, useState } from "react"
import { retrieveTodosForUsername } from "./api/TodoApiService";

export default function TodoListComponent() {
    const [todos, setTodos] = useState([]);

    function refreshTodos() {
        retrieveTodosForUsername('adel')
            .then(response => setTodos(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => refreshTodos(), []);

    return (
        <div className="container">
            <h1>
                Things you want to do!
            </h1>
            <table className='table'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Description</td>
                        <td>Is done?</td>
                        <td>Target date</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}