import React from 'react';

function Search() {
    return ( 
    <div className="row height d-flex justify-content-center my-5">
        <div className="col-md-5">
            <div className="form d-flex align-items-center justify-content-center input-group"> 
                <input type="text" className="form-control form-input search-box " placeholder="Search anything..."/> 
                <button className="btn btn-lightgreen search-btn"><i className="bi bi-search text-light px-2"></i> </button>
            </div>
        </div>
    </div>
)}

export default Search;
