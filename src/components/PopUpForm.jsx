// PopUpForm.js

import React, { useEffect, useState } from "react";
import axios from "axios";

const PopUpForm = ({ selectedUserId, onClose }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [usernameUpdate, setUsernameUpdate] = useState("");
  const [emailUpdate, setEmailUpdate] = useState("");

  // get user from the database
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`api/users/${selectedUserId}`);
        const data = response.data;
        setUser(data.username);
        setEmail(data.email);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [selectedUserId]);

  const updateUser = async () => {
    try {
      const response = await axios.put(`api/users/${selectedUserId}`, {
        username: usernameUpdate,
        email: emailUpdate,
      });
      const data = response.data;
      setUser(data.username);
      setEmail(data.email);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-md z-10"></div>
      <div className="bg-white shadow-2xl w-[700px] h-[500px] p-20 rounded-md text-center relative z-20">
        <button className="absolute top-2 right-5 font-bold" onClick={onClose}>
          X
        </button>
        <h1 className="text-xl font-semibold mb-4">Update {user}</h1>
        {user && email ? (
          <form className="text-white">
            <input
              className="mb-4 p-2 w-full"
              type="text"
              placeholder={user}
              value={usernameUpdate}
              onChange={(e) => setUsernameUpdate(e.target.value)}
            />
            <br />
            <input
              className="mb-4 p-2 w-full"
              type="text"
              placeholder={email}
              value={emailUpdate}
              onChange={(e) => setEmailUpdate(e.target.value)}
            />
            <br />
            <button type="button" className="btn5" onClick={updateUser}>
              Update User
            </button>
          </form>
        ) : (
          <form className="text-white">
            <input
              className="mb-4 p-2 w-full"
              type="text"
              placeholder={user}
              value={usernameUpdate}
              onChange={(e) => setUsernameUpdate(e.target.value)}
            />
            <br />
            <input
              className="mb-4 p-2 w-full"
              type="text"
              placeholder={email}
              value={emailUpdate}
              onChange={(e) => setEmailUpdate(e.target.value)}
            />
            <br />
            <button type="button" className="btn5" onClick={updateUser}>
              Update User
            </button>
            <p>Must update username and email</p>
          </form>
        )}
      </div>
    </div>
  );
};

export default PopUpForm;
