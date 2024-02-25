import React, { useState } from 'react';
import Pagination from './Pagination';
import './Pagination.css';


const PaginationTest = () => {
    const dummyData = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
    }));
    const itemsPerPage = 10;
    const [currentPage, setCurrentpage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

    function onhandlePage(currentPageNo){
        setCurrentpage(currentPageNo);
    }

    return (
        <div>
            <h1>Pagination</h1>
            <ul className='list-items'>
                {currentListOfItems.map((list)=>(
                    <li key={list.id}>{list.name}</li>
                ))}
            </ul>
            <Pagination currentPage={currentPage} totalPages={dummyData.length / itemsPerPage} onPageChange={onhandlePage}></Pagination>
        </div>
    )
}

export default PaginationTest
