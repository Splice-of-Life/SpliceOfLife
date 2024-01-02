import axios from "axios";
import { useState } from 'react';

export default function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('')

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/users/register`, {
      username,
      email,
      password,
    },
      {
        validateStatus: () => true,
      }
    );
    const data = response.data;
    console.log('response', response)
    if (response.status === 200) {
      setResponse('Registration Successful')
      console.log('data', data)
    } else {
      // TODO: get error message from response
      setResponse(`Error: ${response.data}`)
    }
  }

  return (
    <>
      <div style={{ marginLeft: '50px' }}>
        <h1 className="heading"> Registration Page</h1>
        {/* Create Register Form with Username and Password */}
        <div className="form">
          <div className="username">
            <label className="form__label">Username: </label>
            <input onChange={handleUsernameChange} className="form__input" type="text" id="firstName" placeholder="First Name" />
          </div>
          <div className="email">
            <label className="form__label">Email: </label>
            <input onChange={handleEmailChange} className="form__input" type="text" id="email" placeholder="email" />
          </div>
          <div className="password">
            <label className="form__label">Password: </label>
            <input onChange={handlePasswordChange} className="form__input" type="text" id="password" placeholder="Password" />
          </div>
        </div>
        <button
          disabled={!(username && email && password)}
          onClick={handleSubmit} className="btn"
        >Register</button>
        <div>
          {response}
        </div>
      </div>
    </>
  );
}
