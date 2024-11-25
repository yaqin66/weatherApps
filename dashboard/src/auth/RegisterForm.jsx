import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register Data:', formData);
    // Tambahkan logika registrasi di sini
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md bg-white shadow-md rounded px-8 py-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <div>
          <label className="block text-gray-700">Name</label>
          <input 
            type="text" 
            name="name" 
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            name="email" 
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input 
            type="password" 
            name="password" 
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Register
        </button>
        <div className='flex gap-1 justify-center'>
        <h1>Don't have an account?</h1>
        <Link to='/login'>Login</Link> 
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
