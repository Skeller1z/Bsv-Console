// src/Register.tsx

import React, { useState } from 'react';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-md p-6 bg-white rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-6">Register</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

// import React from 'react'
// import OtpPage from './OtpPage'

// type Props = {}

// const Register = (props: Props) => {
//     return (
//         <>
//     <div className="bg-gray-50 items-center justify-center flex">
//       <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
//         <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5">
//           <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
//             1
//           </span>
//           <span>
//             <h3 className="font-medium leading-tight">ข้อมูลเบอร์มือถือ</h3>
//             <p className="text-sm">Step details here</p>
//           </span>
//         </li>
//         <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
//           <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
//             2
//           </span>
//           <span>
//             <h3 className="font-medium leading-tight">รหัส OTP</h3>
//             <p className="text-sm">Step details here</p>
//           </span>
//         </li>
//         <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
//           <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
//             3
//           </span>
//           <span>
//             <h3 className="font-medium leading-tight">กรอกข้อมูลส่วนบุคคล</h3>
//             <p className="text-sm">Step details here</p>
//           </span>
//         </li>
//       </ol>
//       <OtpPage />
//     </div>
            
//         </>

//     )
// }

// export default Register