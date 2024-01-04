import React, { useState } from "react";
import axios from "axios"; // You might need to install axios if you haven't already
import image from "../assets/images/SpliceOfLife_Logo.png";
import { HandIcon } from "lucide-react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const logIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/users/login", {
        username,
        password,
      });
      console.log(response.data.message);
      window.localStorage.setItem("TOKEN", response.data.token);
      // Handle successful login
      if (response.data.message === "Login successful") {
        // set token
        localStorage.setItem("token", response.data.token);
        window.location.href = "/";
      } else {
        handleInvalidLogin();
      }
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      // Handle login error, e.g., show error message
    }
  };

  return (
    <>
      <section className="vh w-screen flex justify-center items-center ">
        <div className="text-black flex flex-col justify-center w-[600px] h-[500px] bg-white p-10 text-center rounded-lg">
          <img className="w-60 mb-4 mx-auto" src={image} alt="" />
          <h1 className="text-lg font-semibold heading mb-2">
            Welcome to Splice of Life
          </h1>
          <p>Please enter your username and password!</p>
          <br />

          <form className="text-white" onSubmit={logIn}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              className="py-2 rounded-md px-6 black-font"
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="py-2 rounded-md px-6 black-font"
            />
            <br />
            <br />
            <button className="font-bold text-lg btn text-black" type="submit">
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
