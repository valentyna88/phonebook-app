import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ContactsPage from "../../pages/ContactsPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import Navigation from "../Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apiRefreshUser } from "../../redux/auth/operations";
import { selectUserDataIsRefreshing } from "../../redux/auth/slice";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUserDataIsRefreshing);

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Refreshing...</div>;
  }

  return (
    <div className={css.container}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
