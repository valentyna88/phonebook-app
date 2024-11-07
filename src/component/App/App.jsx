import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ContactsPage from "../../pages/ContactsPage";
import RegistrationPage from "../../pages/RegistrationPage";
import LoginPage from "../../pages/LoginPage";
import Navigation from "../Navigation/Navigation";

const App = () => {
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
