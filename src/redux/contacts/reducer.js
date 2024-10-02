import initialContacts from "../../initialContacts.json";
import { addContact, changeFilter, deleteContact } from "./actions";

const initialState = {
  contacts: {
    items: initialContacts,
  },
  filters: {
    name: "",
  },
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addContact.type:
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };

    case deleteContact.type:
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload
          ),
        },
      };

    case changeFilter.type:
      return {
        ...state,
        filters: {
          name: action.payload,
        },
      };

    default:
      return state;
  }
};
