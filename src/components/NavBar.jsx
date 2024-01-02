import { Link } from "react-router-dom";
import Image from "../assets/images/SpliceOfLife_Logo.png";
import { ShoppingCartIcon } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex justify-between py-10 px-20 bg-white text-black">
      {/* Left side holds Registration, Account, and Login */}
      <nav>
        <ul className="flex gap-6 text-lg items-center h-full">
          <li className="btn">
            <a href="/registration">Registration</a>
          </li>
          <li className="btn">
            <a href="/account">Account</a>
          </li>
          <li className="btn">
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>

      {/* Spice of life logo img ================================================ */}
      <Link className="flex gap-6 items-center flex-shrink-0" to="/">
        <img className="w-[12rem]" src={Image} alt="Splice Of Life Logo" />
      </Link>

      {/* Right side holds Home, Search, and Cart */}
      <nav>
        <ul className="flex gap-6 text-lg items-center h-full">
          <li className="btn">
            <a href="/">Home</a>
          </li>
          <li className="btn">
            <a href="#">Search</a>
          </li>
          <Link
            className="ml-6 hover:bg-slate-100 px-6 py-1 rounded-lg hover:shadow-md"
            to="/cart"
          >
            {/* Cart icon with bouncing ping ========================================= */}
            <span className="relative flex ml-6 h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <ShoppingCartIcon />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
