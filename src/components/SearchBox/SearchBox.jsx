import React from "react";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div>
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
