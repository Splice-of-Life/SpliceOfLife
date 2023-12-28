import { Link } from "react-router-dom";
import Image from "../assets/images/SpliceOfLife_Logo.png";
import { ShoppingCartIcon } from "lucide-react";
import { useState } from "react";
import { SearchIcon } from "lucide-react";

const NavBar = () => {
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search clicked");
  };

  const toggleSearch = () => {
    setSearchClicked(!searchClicked);
  };

  const handleSubmit = () => {
    console.log("Search submitted");
    setSearchClicked(!searchClicked);
  };

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

      <nav>
        <div className="flex gap-6 text-lg items-center h-full">
          <a className="btn" href="/">
            Home
          </a>
          {searchClicked ? (
            <div>
              <a className="btn" onClick={toggleSearch} href="#">
                Search
              </a>
              <div className="absolute z-30 mt-6 bg-white p-6 rounded-b-xl pt-12">
                <form className="flex gap-4" onSubmit={handleSearch}>
                  <input
                    className="rounded-lg p-1 text-white"
                    type="text"
                    placeholder="Search..."
                  />
                  <SearchIcon
                    className="cursor-pointer"
                    onClick={handleSubmit}
                  />
                </form>
              </div>
            </div>
          ) : (
            <a className="btn" onClick={toggleSearch} href="#">
              Search
            </a>
          )}

          <Link
            className="ml-6 hover:bg-slate-100 px-6 py-1 rounded-lg hover:shadow-md"
            to="/cart"
          >
            {/* Cart icon with bouncing ping ========================================= */}
            <span className="relative flex ml-6 h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <ShoppingCartIcon onClick={toggleSearch} />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
