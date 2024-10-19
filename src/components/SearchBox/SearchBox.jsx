import React from "react";
import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <label>
        <span>Find contacts by name</span>
        <input
          type="text"
          name="search"
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
