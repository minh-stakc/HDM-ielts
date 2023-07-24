import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/leftpanel.css';
import '../css/footer.css'

import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, Link, useParams} from "react-router-dom";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import LeftPanel from '../components/leftPanel';
import MainContent from "../components/mainContent";
import axios from 'axios';

const EssayPage = () =>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('/tests').then(res => {
            setData(res.data)
        }).catch(err => console.error(err))
    },[])
    const {essayID} = useParams();

    return (
        <>
            <Navbar />
            <div className="container-fluid">
            <div className="row">
                {/*chiếm 5 cột*/}
                <div className="col-5">
                    <LeftPanel />
                </div>
                {/*chiếm 7 cột padding = 4*/}
                <div className="col-7 py-4">
                    <MainContent ID={essayID} />
                </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default EssayPage;
