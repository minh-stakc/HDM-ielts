import React, {useState} from 'react';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

import 'bootstrap/dist/css/bootstrap.min.css'

const About = () =>{
    return(
        <div>
            <div><Navbar/></div>
            <div><Footer/></div>
        </div>
    )
}

export default About;