import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ContactsPage from "../../pages/ContactsPage";
import RegistrationPage from "../../pages/RegistrationPage";
import LoginPage from "../../pages/LoginPage";

const App = () => {
  return (
    <div>
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
