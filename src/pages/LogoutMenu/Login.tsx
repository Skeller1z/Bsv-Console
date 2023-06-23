// src/LoginForm.tsx

import React, { useRef, useState } from 'react';
import Auth from '../../MainCall/Auth';
import auhv from "../../MainCall/auhv.json";

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { Authenticate } = auhv;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };


  const handleGoogleLoginFailure = (error: any) => {
    // Handle failed Google login here
    console.error(error);
  };

  const inputRef = useRef(null);

  function handleClick() {
    console.log(username);
    console.log(password);
  }

  const Login = () =>{
    Auth.Login(
      Authenticate,
      username,
      password
    ).then((res) => {
      if (res.Status === "Success") {
        alert("Welcome")
      } else {
        console.log("error")
      }
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-md p-6 bg-white rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            ref={inputRef}
            id="username"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
          onClick={Login}
        >
          Log In
        </button>
        <div className="mt-6">
        </div>
      <a href='register' className='underline text-blue-700'>ยังไม่มีบัญชี?</a>
        <div className="mt-4">
        </div>
      </form>
    </div>
  );
};

export default Login;
