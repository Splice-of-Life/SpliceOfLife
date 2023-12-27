import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import BreedPage from "./pages/breed.jsx";
import AccountPage from "./pages/account.jsx";
import LoginPage from "./pages/login.jsx";
import RegistrationPage from "./pages/registration.jsx";
import CartPage from "./pages/cart.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creatures/:id" element={<BreedPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
