import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import {
  selectContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader>Loading ...</Loader>}
      {isError && <Error>Something went wrong</Error>}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
