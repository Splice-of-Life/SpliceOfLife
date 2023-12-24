import { Link } from "react-router-dom";
import Image from "../assets/images/SpliceOfLife_Logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-between py-10 px-8 ">
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
      <Link className="flex gap-6 items-center" to="/">
        {/* <img
          className="w-10 h-10 rounded-full"
          src="https://media.giphy.com/media/3o85xGrC7nPVbA2y3K/giphy.gif"
          alt="dna strands being exchanged"
        /> */}
        {/* <h1 className="text-4xl font-bold">S / L</h1> */}
        <img className="w-[12rem]" src={Image} alt="Splice Of Life Logo" />
      </Link>
      <nav>
        <ul className="flex gap-6 text-lg items-center h-full">
          <li className="btn">
            <a href="/">Home</a>
          </li>
          <li className="btn">
            <a href="#">Search</a>
          </li>
          <li className="btn">
            <a href="/cart">Cart</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
