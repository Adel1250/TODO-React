import React, { useState } from 'react';
import './TodoApp.css';
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';

export default function TodoApp() {
    return (
        <div className='TodoApp'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
                    <Route path='/*' element={<ErrorComponent />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {
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

function WelcomeComponent() {
    const { username } = useParams();
    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="Error">
            <h1>
                Apologies for 404. Reach out to our team.
            </h1>
        </div>
    )
}