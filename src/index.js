import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios'
import Homepage from './pages/home'
import EssayPage from './pages/essay';
import About from "./pages/about";
import Login from "./pages/login";
import Signup from "./pages/signup";

axios.defaults.baseURL = 'http://127.0.0.1:4000/api';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Homepage/>}/>
                <Route path={"/essay/:essayID"} element={<EssayPage/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/signup"} element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
