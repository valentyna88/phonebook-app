import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/slice';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {Array.isArray(filteredContacts) && filteredContacts.length === 0 && (
        <p>There are no contacts in your phonebook yet!</p>
      )}
      {Array.isArray(filteredContacts) &&
        filteredContacts.length > 0 &&
        filteredContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
