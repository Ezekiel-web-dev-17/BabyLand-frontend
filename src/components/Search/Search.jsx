import React from 'react';
import "./Search.css";
import navCart from "../../assets/Group 29.png"
import navSearch from "../../assets/Frame 72.png"

const Search = () => {
  return (
    <div className="d-flex align-items-center gap-5">
        <img src={navCart} alt="" />
        <div className="position-relative">
            <input className="navinput" type="text" placeholder="Search" />
            <img className="position-absolute end-0" src={navSearch} alt="" />
        </div>
    </div>
  );
};

export default Search;