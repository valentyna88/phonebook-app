import ContactForm from "../component/ContactForm/ContactForm";
import SearchBox from "../component/SearchBox/SearchBox";
import ContactList from "../component/ContactList/ContactList";
import Loader from "../component/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import { selectError, selectIsLoading } from "../redux/contactsSlice";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
