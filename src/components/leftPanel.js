import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/leftpanel.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, Link, useParams} from "react-router-dom";

import MainContent from '../components/mainContent';


const LeftPanel = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3003/v1/essay/")
            .then(response => response.json())
            .then(data => {
                setData(data.results);
            });
    }, []);

    return(
        <div className="left-panel">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#Topics</th>
                    </tr>
                </thead>
                <tbody>
                        {data.map(x => (
                            <tr key={x.id}>
                                <td>
                                    <Link to={`/essay/${x.id}`}>{x.topic}</Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default LeftPanel;
