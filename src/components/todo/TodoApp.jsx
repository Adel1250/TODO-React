import { useState } from 'react';
import './TodoApp.css'

export default function TodoApp() {
    return (
        <>
            <LoginComponent />
            {/* <WelcomeComponent /> */}
        </>
    )
}

function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showSuccessMessage, setshowSuccessMessage] = useState(false);
    const [showFailureMessage, setshowFailureMessage] = useState(false);

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
        } else {
            setshowFailureMessage(true);
            setshowSuccessMessage(false);
        }
    }

    return (
        <div className="Login">
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

// function WelcomeComponent() {
//     return (
//         <div className="Welcome">Welcome</div>
//     )
// }