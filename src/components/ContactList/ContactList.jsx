import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map((el) => (
        <li className={css.contact} key={el.id}>
          <Contact contact={el} />
        </li>
      ))}
    </ul>
  );
}
