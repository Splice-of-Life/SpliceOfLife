const NavBar = () => {
  return (
    <header>
      <h1> Welcome to Splice Of Life</h1>
      <nav>
        <button className="button" id="accountButton">
          {" "}
          Account
        </button>
        <button className="button" id="registerButton">
          {" "}
          Register
        </button>
        <button className="button" id="loginButton">
          {" "}
          Login{" "}
        </button>
        <button className="button" id="cartButton">
          {" "}
          Cart{" "}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
