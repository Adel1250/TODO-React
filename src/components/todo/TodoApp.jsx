import React from 'react';
import './TodoApp.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import WelcomeComponent from './WelcomeComponent';
import TodoListComponent from './TodoListComponent';
import ErrorComponent from './ErrorComponent';
import LoginComponent from './LoginComponent';

export default function TodoApp() {
    return (
        <div className='TodoApp'>
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<TodoListComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />
                    <Route path='/*' element={<ErrorComponent />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </div>
    )
}