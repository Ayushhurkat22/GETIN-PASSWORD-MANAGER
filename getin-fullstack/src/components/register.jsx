// /* eslint-disable no-unused-vars */

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const usernameValue = document.getElementById('username').value.trim();
//     const passwordValue = document.getElementById('password').value.trim();

//     if (usernameValue === '' || passwordValue === '') {
//       alert('Please fill in all fields.');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:3000/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username: usernameValue, password: passwordValue }),
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert('User registered successfully');
//         navigate('/Manager?user=' + encodeURIComponent(usernameValue));
//       } else {
//         alert(result.message);
//       }
//     } catch (error) {
//       console.error('Error registering user:', error);
//       alert('An error occurred while registering. Please try again later.');
//     }
//   };

//   return (
//     <div className="bg-[#112D4E] flex flex-col justify-center items-center min-h-screen text-white">
//       <div className="text-center text-4xl font-bold mb-12">GET IN!</div>
//       <h2 className="text-center text-2xl">Register</h2>
//       <div className="bg-[#F9F7F7] border-10 border-[#DBE2EF] rounded-2xl flex flex-col items-center p-8 mt-5 shadow-lg">
//         <div className="h-36 w-36 border-2 border-[#3F72AF] rounded-full overflow-hidden mb-5">
//           <img src="pattern-lock-ezgif.com-gif-maker.gif" alt="logo" className="h-full w-full object-cover" />
//         </div>
//         <div className="mt-5 w-72">
//           <form onSubmit={handleSubmit} className="flex flex-col items-center">
//             <label htmlFor="username" className="mb-2 font-medium">Username</label>
//             <input
//               type="text"
//               id="username"
//               placeholder="Enter Username"
//               required
//               className="p-2 mb-5 w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#3F72AF]"
//             />
//             <label htmlFor="password" className="mb-2 font-medium">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter Password"
//               required
//               className="p-2 mb-5 w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#3F72AF]"
//             />
//             <input
//               type="submit"
//               value="Submit"
//               className="p-3 bg-[#3F72AF] text-white rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-[#2C5A9D] hover:border-[#112D4E]"
//             />
//           </form>
//         </div>
//         <button onClick={() => navigate('/login')} className="mt-3 text-blue-300 hover:text-blue-500">
//           Already Registered? Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Register;
/* eslint-disable no-unused-vars */

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usernameValue = document.getElementById('username').value.trim();
    const passwordValue = document.getElementById('password').value.trim();

    if (usernameValue === '' || passwordValue === '') {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: usernameValue, password: passwordValue }),
      });

      const result = await response.json();

      if (result.success) {
        alert('User registered successfully');
        navigate('/Manager?user=' + encodeURIComponent(usernameValue));
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred while registering. Please try again later.');
    }
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 size-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#085a99,#0647a1,#00d4ff,transparent)]" />
      </div>

      <div className="mycontainer mx-auto p-4 max-w-md min-h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-semibold text-center hover:text-bold">
          <span className="text-white">&lt;</span>
          <span className="gradient-text">GetIN</span>
          <span className="text-white">/&gt;</span>
        </h1>
        <p className="text-lg text-center mb-2 mt-10">Register to get started</p>
        
        <div className="bg-transparent border-2 border-blue-300 rounded-2xl flex flex-col items-center p-8 shadow-lg">
          <div className="h-20 w-20 border-2 border-[#3F72AF] rounded-full overflow-hidden mb-5">
            <img src="/reset-password.png" alt="logo" className="h-full w-full object-cover" />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-72">
            <label htmlFor="username" className="mb-2 font-medium text-black">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              required
              className="p-2 mb-5 w-full border border-gray-300 rounded-full text-black focus:outline-none focus:border-[#3F72AF]"
            />
            <label htmlFor="password" className="mb-2 font-medium text-black">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              required
              className="p-2 mb-5 w-full border border-gray-300 rounded-full text-black focus:outline-none focus:border-[#3F72AF]"
            />
            <input
              type="submit"
              value="Register"
              className="p-3 bg-[#3F72AF] text-white rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[#2C5A9D] hover:border-[#112D4E]"
            />
          </form>
          <button onClick={() => navigate('/login')} className="mt-3 text-blue-500 hover:text-blue-700">
            Already Registered? Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
