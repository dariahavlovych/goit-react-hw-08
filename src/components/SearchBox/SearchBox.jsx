import React from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/contacts/actions";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.wrapper}>
      <label>
        <span>Find contacts by name</span>
        <input type="text" name="search" onChange={handleSearch} />
      </label>
    </div>
  );
};

export default SearchBox;
