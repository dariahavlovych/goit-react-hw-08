import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={s.wrapper}>
      <label>
        <span>Find contacts by name</span>
        <input
          type="text"
          name="search"
          onChange={(e) => onSearch(e.target.value)}
          value={value}
        />
      </label>
    </div>
  );
};

export default SearchBox;
