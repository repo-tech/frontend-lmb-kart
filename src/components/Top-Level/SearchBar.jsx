import React from "react";
import "../../styles/scss/SearchBar.scss"
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <>
      <form id="form-pc" className="flex flex-row-reverse" action="#" method="get">
        <button className="btn-pc flex absolute right-auto pr-2">
          <IoSearchOutline className="text-3xl text-gray-400" />
        </button>
        <input
          className="search-input-custom p-2 border-2"
          type="text"
          name="search"
          placeholder="Search for products"
        />
      </form>
    </>
  );
};

export default SearchBar;
