
import React, { useEffect, useState } from 'react';
import {Link, useLocation} from "react-router-dom";

import logo from '../image/flyIELTS-logos_white.png';
import hamburgerMenu from '../image/134216_menu_lines_hamburger_icon.png';

import '../css/navbar.css';
import SearchBar from './searchbar';

const Navbar = () => {

    const location = useLocation().pathname;
    console.log('location:', location);

    const toggleNavbar = () =>{
        const box = document.querySelectorAll('.navbar');
        box.forEach(nav=>nav.classList.toggle('change_height'))
        const navs = document.querySelectorAll('.nav-block');
        navs.forEach(nav => nav.classList.toggle('display_nav-link'))
        const i = document.querySelectorAll('.nav-search');
        i.forEach(nav => nav.classList.toggle('display_nav-search'))
        return;
    }

    return (
        <div className="navbar">
            <div className='nav-brand'>
                <Link to={"/"} classname="homelink"><h1 className="homelink">HOME</h1></Link>
            </div>
            <div>
                <button className="navbar-toggle" onClick={toggleNavbar}>menu</button>
            </div>
            <div className = "nav-search">
                <SearchBar/>
            </div>
            <nav className='nav-block'>
                
                <Link to={"/"} className={location === "/" ? 'special' : 'nav-link'}>Home</Link>
                
                <Link to={"/essay/id"} className={location.includes('essay') ? 'special' : 'nav-link'}>Essays</Link>
                 
                <Link to={"/login"} className={location === "/login" ? 'special' : 'nav-link'}>Login</Link>
            </nav>
        </div>
    );
};

export default Navbar;
