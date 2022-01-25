import React from 'react';

function Search() {
    return ( 
    <div class="row height d-flex justify-content-center my-5">
        <div class="col-md-5">
            <div class="form d-flex align-items-center justify-content-center input-group"> 
                <input type="text" class="form-control form-input search-box " placeholder="Search anything..."/> 
                <button class="btn btn-lightgreen search-btn"><i class="bi bi-search text-light px-2"></i> </button>
            </div>
        </div>
    </div>
)}

export default Search;
