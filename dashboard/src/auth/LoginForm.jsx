import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // const Swal = require('sweetalert2')

  const handleSubmit = (e) => {
    e.preventDefault();

    // Autentikasi sementara
    if (email === 'yaqin@gmail.com' && password === '12345678') {
      // Simpan status login di sessionStorage
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('userEmail', email);
      Swal.fire({
        title: 'Success!',
        text: 'Welcome',
        icon: 'success',
        confirmButtonText: 'Confirm'
      })
      setError('');
      navigate('/'); // Redirect ke halaman Home
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Username or Password Wrong',
        icon: 'error',
        confirmButtonText: 'Try Again!'
      })
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan password"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
