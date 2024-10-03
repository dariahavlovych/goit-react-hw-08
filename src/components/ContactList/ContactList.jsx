import React from "react";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contactsData = useSelector(selectContacts);
  const filterData = useSelector(selectNameFilter);

  const filteredContacts = contactsData.filter((contact) =>
    contact.name.toLowerCase().includes(filterData.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
