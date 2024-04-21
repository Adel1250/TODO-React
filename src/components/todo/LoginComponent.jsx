import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showSuccessMessage, setshowSuccessMessage] = useState(false);
    const [showFailureMessage, setshowFailureMessage] = useState(false);
    const navigate = useNavigate();

    function handleUsername(event) {
        setUsername(event.target.value)
    }

    function handlePassword(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if (username === "adel" && password === "password") {
            setshowSuccessMessage(true);
            setshowFailureMessage(false);
            navigate(`/welcome/${username}`)
        } else {
            setshowFailureMessage(true);
            setshowSuccessMessage(false);
        }
    }

    return (
        <div className="Login">
            <h1>
                Time to login!
            </h1>
            {showSuccessMessage && <div className='successMessage'>Authenticated Successfully!</div>}
            {showFailureMessage && <div className='errorMessage'>Authention failure! Please check your username and password.</div>}
            <div className="LoginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsername} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePassword} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}