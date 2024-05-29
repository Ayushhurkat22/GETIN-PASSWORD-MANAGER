/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function LoginPage() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Login logic here
    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Login successful');
        // Redirect to dashboard or home page
      } else {
        alert('Login failed: ' + result.message);
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <div className="absolute inset-0 -z-10 size-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#085a99,#0647a1,#00d4ff,transparent)]" />
      <div className="mycontainer mx-auto p-4 max-w-md">
        <h1 className="text-4xl font-semibold text-center hover:text-bold">
          <span className="text-white">&lt;</span>
          <span className="gradient-text">GetIN</span>
          <span className="text-white">/&gt;</span>
        </h1>
        <p className="text-white text-lg text-center mb-8">Your own password manager</p>
        <form className="text-black flex flex-col p-4 gap-4 justify-center items-center" onSubmit={handleSubmit}>
          <input
            value={form.username}
            onChange={handleChange}
            placeholder="Enter Username"
            className="rounded-full border border-blue-500 w-full px-4 py-2"
            type="text"
            name="username"
            id="username"
            required
          />
          <input
            value={form.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="rounded-full border border-blue-500 w-full px-4 py-2"
            type="password"
            name="password"
            id="password"
            required
          />
          <button type="submit" className="flex justify-center items-center gap-2 bg-white rounded-full px-4 py-2 w-fit border-2 hover:bg-blue-200 border-blue-900">
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
              className="w-6 h-6"
            ></lord-icon>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
