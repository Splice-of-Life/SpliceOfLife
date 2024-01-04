import axios from "axios";
import { useState } from 'react';


function FormField({ label, placeholder, handler, password = false }) {
  const inputStyle = { color: 'black', width: "200px", outline: 'none', paddingLeft: '5px' }
  if (password) {
    inputStyle['-webkit-text-security'] = 'circle'
  }
  return (
    <div className="formField" style={{ marginBottom: '5px' }}>
      <label style={{ width: "100px", display: 'inline-block' }} className="formLabel">{label}: </label>
      <input
        style={inputStyle}
        className="formInput"
        onChange={handler}
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}

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
    if (response.status === 200) {
      setResponse('Registration Successful')
    } else {
      // TODO: get error message from response
      setResponse(`Error: ${response.data}`)
    }
  }

  return (
    <>
      <div style={{ marginLeft: '50px', color: 'white', }}>
        <div style={{ fontSize: '30px' }}>Register Now</div>
        {/* Create Register Form with Username and Password */}
        <div className="form">
          <FormField
            label="Username"
            handler={handleUsernameChange}
            placeholder="username"
          />
          <FormField
            label="Email"
            handler={handleEmailChange}
            placeholder="username@email.com"
          />
          <FormField
            label="Password"
            handler={handlePasswordChange}
            placeholder="◦◦◦◦◦◦◦◦◦◦"
            password={true}
          />
        </div>
        <button
          style={{ backgroundColor: 'white', color: 'black' }}
          disabled={!(username && email && password)}
          onClick={handleSubmit} className="btn"
        >Register</button>
        <div>
          {response}
        </div>
      </div >
    </>
  );
}
