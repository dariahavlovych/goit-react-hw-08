import React from "react";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;