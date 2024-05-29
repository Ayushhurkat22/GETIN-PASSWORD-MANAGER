/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: usernameValue, password: passwordValue }),
      });
  
      const data = await response.json();
  
      if (response.ok && data.success) {
        alert('Login successful!');
        navigate('/Manager?user=' + encodeURIComponent(usernameValue));
      } else {
        alert(data.message || 'Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
      alert('An error occurred during login. Please try again.');
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
        <p className="text-lg text-center mt-10">Welcome back!</p>
        <p className="text-lg text-center mb-2">Please login to continue.</p>
        
        <div className="bg-transparent border-2 border-blue-300 rounded-2xl flex flex-col items-center p-8 shadow-lg">
          <div className="h-20 w-20 border-2 border-[#3F72AF] rounded-full overflow-hidden mb-6">
            <img src="reset-password.png" alt="logo" className="h-full w-full object-cover" />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-72">
            <label htmlFor="username" className="mb-2 font-medium text-black">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              required
              className="p-2 mb-6 w-full border border-gray-300 rounded-full  text -black focus:outline-none focus:border-[#3F72AF]"
            />
            <label htmlFor="password" className="mb-2 font-medium text-black">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              required
              className="p-2 mb-6 w-full border border-gray-300 rounded-full text-black focus:outline-none focus:border-[#3F72AF]"
            />
            <button type="submit" className="px-6 py-3 bg-[#3F72AF] text-white rounded-full hover:bg-[#2C5A9D] transition-colors duration-300">
              Login
            </button>
          </form>
          <button onClick={() => navigate('/register')} className="mt-6 text-blue-500 hover:text-blue-700">
            New User? Register Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
