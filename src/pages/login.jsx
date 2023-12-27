import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState(""); // Set an initial value for username

  const handleUsernameChange = (event) => {
    setUsername(event.target.value); // Update username state when input changes
  };

  return (
    <>
      <div>
        <h1 className="heading">Login Page</h1>

        <form>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={handleUsernameChange} // Add an onChange handler to update the state
          />
        </form>
      </div>
    </>
  );
}

export default LoginPage;

