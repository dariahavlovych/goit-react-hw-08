import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

// TODO:
// 1. split to slices
// 2. add LS via Redux Persist

function App() {
  // const LS_KEY = "contacts";
  // const storedContacts = window.localStorage.getItem(LS_KEY);

  // const [contacts, setContacts] = useState(() => {
  //   if (storedContacts !== null) {
  //     return JSON.parse(storedContacts);
  //   }

  //   return initialContacts;
  // });

  // useEffect(() => {
  //   window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="appWrapper">
      <h1 className="header">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
