import React, { useState } from "react";
import axios from "axios"; // You might need to install axios if you haven't already

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
      const response = await axios.post("/api/login", { username, password });
      console.log(response.data.message);
      // Handle successful login, e.g., store token in localStorage
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      // Handle login error, e.g., show error message
    }
  };

  return (
    <>
      <div>
        <h1 className="heading">Login Page</h1>

        <form onSubmit={logIn}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;

