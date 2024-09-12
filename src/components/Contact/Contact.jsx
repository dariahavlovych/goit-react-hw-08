import React from "react";
import s from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa6";

const Contact = ({ data: { id, name, number }, onDelete }) => {
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

      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
