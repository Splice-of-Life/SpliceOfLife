import { Link } from "react-router-dom";
import Image from "../assets/images/SpliceOfLife_Logo.png";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/">
      <img src = "https://media.giphy.com/media/3o85xGrC7nPVbA2y3K/giphy.gif" alt="dna strands being exchanged" />
        <img className="logo" src={Image} alt="Splice Of Life Logo" />
      </Link>
      <nav>
        <ul className="navLinks">
        <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/account">Account</a>
          </li>
          <li>
            <a href="/registration">registration</a>
          </li>{" "}
          <li>
            <a href="/login">login</a>
          </li>{" "}
          <li>
            <a href="/cart">cart</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
