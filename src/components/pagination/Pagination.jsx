import React from 'react';
import './Pagination.css';

const Pagination = ({currentPage,totalPages,onPageChange}) => {
    function generateNoOfpages(){
        const pages = [];
        for(let i=1; i <= totalPages; i++){
            pages.push(i)
        }
        return pages;
    }
  return (
    <div className='pagination'>
      <button disabled={currentPage === 1} onClick={()=>onPageChange(currentPage - 1)} className='pagination-btn'>Prev</button>
       {generateNoOfpages().map((pageNo)=>(
       <button key={pageNo} onClick={()=>onPageChange(pageNo)} className="pagination-btn">{pageNo}</button>
       ))}
      <button disabled={currentPage === totalPages} onClick={()=>onPageChange(currentPage + 1)} className='pagination-btn'>Next</button>
    </div>
  )
}

export default Pagination
