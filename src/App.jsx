
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home.jsx';
import BreedPage from './pages/breed.jsx';
import AccountPage from './pages/account.jsx';
import LoginPage from './pages/login.jsx';
import RegistrationPage from './pages/registration.jsx';
import CartPage from './pages/cart.jsx';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/breed' element={<BreedPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/cart' element={<CartPage />} /> 
       
      </Routes>

    </>
  );
}

export default App;
