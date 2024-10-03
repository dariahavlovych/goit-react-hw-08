import React from "react";
import s from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={s.wrapper}>
      <div className={s.cardContent}>
        <p>
          <FaUser className={s.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={s.icon} />
          {number}
        </p>
      </div>

      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
