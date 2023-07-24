import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import PaginatedItems from '../components/topicsquare.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homepage/topicsquare.css';
import SearchBar from "../components/searchbar";

const Homepage = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('/tests').then(res => {
            setData(res.data)
        }).catch(err => console.error(err))
    },[])

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    {/* Hidden column for screens below medium */}
                    <div className="d-none d-md-block col-lg-2 col-xl-3 side-col"></div>

                    {/*Modified the column classes:

                    Added col-md-12 to the middle column to make it full-width on screens below the medium size.
                    Added col-lg-8 and col-xl-6 to center the middle column on large and extra-large screens.
                    Added hidden columns:

                    Added d-none d-md-block classes to the left and right columns to hide them on screens below the medium size.*/}

                    <div className="col-md-12 col-lg-8 col-xl-6 topic-wrap topic-square">
                        {/* <SearchBar/> */}
                        <PaginatedItems props={data}/>
                    </div>

                    {/* Hidden column for screens below medium */}
                    <div className="d-none d-md-block col-lg-2 col-xl-3 side-col"></div>
                </div>
            </div>
            <Footer className="footer" />
        </>
    );
};

export default Homepage;
