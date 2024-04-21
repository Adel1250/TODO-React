import React, { useState } from 'react';
import './TodoApp.css';
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';

export default function TodoApp() {
    return (
        <div className='TodoApp'>
            <HeaderComponent />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<TodoListComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />
                    <Route path='/*' element={<ErrorComponent />} />
                </Routes>
            </BrowserRouter>
            <FooterComponent />
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
            <div>
                Manage your todos. <Link to='/todos'>Here!</Link>
            </div>
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

function TodoListComponent() {
    const targetDate = new Date();
    const todos = [
        {
            id: 1,
            description: "Learn Java",
            done: false,
            targetDate: targetDate
        },
        {
            id: 2,
            description: "Learn Spring",
            done: false,
            targetDate: targetDate
        }
    ]
    return (
        <div className="Todo">
            <h1>
                Things you want to do!
            </h1>
            <table>
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
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

function HeaderComponent() {
    return (
        <div className="header">
            Header <hr />
        </div>
    )
}

function FooterComponent() {
    return (
        <div className="footer">
            <hr /> Footer
        </div>
    )
}

function LogoutComponent() {
    return (
        <div className="logout">
            <h1>
                Thanks for using our App. Come back soon!
            </h1>
        </div>
    )
}