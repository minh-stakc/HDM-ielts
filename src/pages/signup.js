import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../css/login.css";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function RegisterPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleRegisterSubmit(ev){
        ev.preventDefault();
        try{
            await axios.post("/register", {
                name,
                email,
                password,
            });
            alert('Registration successful!')
        }catch(e){
            alert('Registration failed!');
        }
    }
    return (
        <div>
            <Navbar/>
            <form onSubmit={handleRegisterSubmit} className="login">
                <div className="input-form">
                    <h1>Register</h1>
                    <div>
                        <input type="text" placeholder="name"
                               value={name}
                               onChange={ev => setName(ev.target.value)}
                               className="input"/>
                    </div>
                    <div>
                        <input type="email" placeholder="email"
                               value={email}
                               onChange={ev => setEmail(ev.target.value)}
                               className="input"/>
                    </div>
                    <div>
                        <input type="password" placeholder="password"
                               value={password}
                               onChange={ev => setPassword(ev.target.value)}
                               className="input"/>
                    </div>
                    <button className="button">Register</button>
                    <div className="line">already a member? <Link to={'/login'}>Login</Link></div>
                </div>
            </form>
        </div>
    )
}