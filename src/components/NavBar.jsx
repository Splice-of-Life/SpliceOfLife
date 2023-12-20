import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <h1> Welcome to Splice Of Life</h1>
      <nav>
        <Link to="/account">
          <button className="button" id="accountButton">
            {" "}
            Account
          </button>
        </Link>
        <Link to="/registration">
          <button className="button" id="registerButton">
            {" "}
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="button" id="loginButton">
            {" "}
            Login{" "}
          </button>
        </Link>
        <Link to="/cart">
          <button className="button" id="cartButton">
            {" "}
            Cart{" "}
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
