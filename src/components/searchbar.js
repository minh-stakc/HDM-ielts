import React, {useEffect, useState} from 'react';
import searchIcon from '../image/search-icon.png'

import '../css/searchbar.css';

const SearchBar = () => {

    const [data, setData] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3003/v1/essay/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                setData(data.results);
            });
    }, []);

    const toggleClassName = () =>{
        const navs = document.querySelectorAll('.searchInput');
        navs.forEach(nav => nav.classList.add('expand_search-input'));
        return;
    }

    function toggleSearchBar(){


        return;
    }


    return (
        <>
            <input
                type = "text"
                id = "myInput"
                className = "searchInput"
                onClick = {toggleClassName}
                placeholder="_____">
            </input>
            <button className={"search-button"}>
                <img src={searchIcon} className={"search-icon"}/>
            </button>
        </>
    );
};

export default SearchBar;