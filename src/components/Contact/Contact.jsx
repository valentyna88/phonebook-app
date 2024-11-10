import { useDispatch } from 'react-redux';
import { MdPerson, MdPhone } from 'react-icons/md';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.container}>
      <div>
        <p className={css.contactInfo}>
          <MdPerson />
          {contact.name}
        </p>
        <p className={css.contactInfo}>
          <MdPhone />
          {contact.number}
        </p>
      </div>
      <button type="button" className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
