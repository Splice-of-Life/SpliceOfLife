import React from "react";
import image from "../assets/images/SpliceOfLife_Logo.png";
import axios from "axios";

function RegistrationPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("api/users/register", {
        username: username,
        password: password,
        email: email,
      });

      // const data = response.data;
      // console.log("username:", data.username, "email:", data.email);

      console.log("User has been registered");
      window.location.href = "/login";
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };
  return (
    <section className="vh w-screen flex justify-center items-center ">
      <div className="text-black flex flex-col justify-center w-[600px] h-[500px] bg-white p-10 text-center rounded-lg">
        <img className="w-60 mb-4 mx-auto" src={image} alt="" />
        <h1 className="text-lg font-semibold heading mb-2">
          Welcome to Splice of Life
        </h1>
        <p>To register, enter a username, password, and email</p>
        <br />

        <form className="text-white">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            className="py-2 rounded-md px-6"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="py-2 rounded-md px-6"
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={handleEmailChange}
            className="py-2 rounded-md px-6"
          />
          <br />
          <br />
          <button
            className="font-bold text-lg btn text-black"
            type="submit"
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
}

export default RegistrationPage;
