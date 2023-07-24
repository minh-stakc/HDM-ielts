import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import {Link} from "react-router-dom";

import '../css/homepage/topicsquare.css';

// Example items, to simulate fetching from another resources.

function PaginatedItems({ props }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const data = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Topics</th>
                </tr>
                </thead>
                <tbody>
                {data.map((x) => (
                    <tr key={x.id}>
                        <td>
                            <Link to={`/essay/${x.id}`}>{x.topic}</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-link"
                activeLinkClassName="active"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
            />
        </>
    );
}

export default PaginatedItems;