import React from 'react';

const Searchbar = () => {
    return(
        <div style={{display:'flex',flexDirection:'row',gap:'1rem'}}>
        <input type="text"placeholder="Search Waptech" />
           <p> <button>Search</button></p>
        </div>
    )
}
export default Searchbar;