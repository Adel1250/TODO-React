import { useParams } from "react-router-dom"
import { retrieveTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";

export default function TodoComponent() {
    const { id } = useParams();
    const authContext = useAuth();
    const username = authContext.username;
    const [description, setDescription] = useState('');

    useEffect(
        // eslint-disable-next-line
        () => retrieveTodo(), [id]
    )

    function retrieveTodo() {
        retrieveTodoApi(username, id)
            .then(response => { setDescription(response.data.description); })
            .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <h1>
                Enter Todo details
            </h1>
            <dev>
                Description: {description}
            </dev>
        </div>
    )
}