import { useDispatch } from 'react-redux';
import {
  MdDeleteOutline,
  MdOutlineEdit,
  MdPerson,
  MdPhone,
} from 'react-icons/md';
import { openModal, openEditModal } from '../../redux/contacts/slice';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(openModal(contact.id));
  };

  const handleEdit = () => {
    dispatch(openEditModal(contact));
  };

  return (
    <div className={css.container}>
      <div className={css.contactInfo}>
        <p className={css.text}>
          <MdPerson />
          {contact.name}
        </p>
        <p className={css.text}>
          <MdPhone />
          {contact.number}
        </p>
      </div>
      <div className={css.btnContainer}>
        <button className={css.btn} onClick={handleEdit}>
          Edit <MdOutlineEdit size={16} />
        </button>
        <button className={css.btn} onClick={handleDelete}>
          Delete <MdDeleteOutline size={16} />
        </button>
      </div>
    </div>
  );
};

export default Contact;
