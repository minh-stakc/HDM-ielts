import axios from "axios";
import '../css/login.css';

import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

import Navbar from "../components/navbar";
import Footer from "../components/footer";


export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try{
            const {data} = await axios.post('/login', {email, password});
            setUser(data);
            alert('Login successful');
            setRedirect(true);
        } catch (e) {
            alert('Login failed');
        }
    }

    if (redirect){return <Navigate to={'/'} />}

    return (
        <div>
            <Navbar/>
            <form onSubmit={handleLoginSubmit} className="login">
                <div className="input-form">
                    <h1>Login</h1>
                    <div>
                        <input
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}
                            className="input">
                        </input>
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}
                            className="input">
                        </input>
                    </div>
                        <div>
                        <button className="button">Login</button>
                    </div>
                    <div className="line">dont have an account yet? <Link to={'/signup'}>Register</Link></div>
                </div>
            </form>
            <Footer/>
        </div>
    )
}