import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import Navbar from './component/Navbar';
import { WeatherProvider } from './model/WeatherContext';
import Login from './auth/LoginForm';
import ProtectedRoute from './Route/ProtectedRoute';
import RegisterForm from './auth/RegisterForm';

// Komponen Layout untuk halaman dengan Navbar
const LayoutWithNavbar = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-4">{children}</main>
    </>
  );
};

// Komponen utama
const App = () => {
  return (
    <WeatherProvider>
      <BrowserRouter>
        <Routes>
          {/* Halaman tanpa Navbar */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />

          {/* Halaman dengan Navbar */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <LayoutWithNavbar>
                  <Home />
                </LayoutWithNavbar>
              </ProtectedRoute>
            }
          />
          <Route
            path="/report"
            element={
              <ProtectedRoute>
                <LayoutWithNavbar>
                  <Report />
                </LayoutWithNavbar>
              </ProtectedRoute>
            }
          />

          {/* Halaman fallback */}
          <Route path="*" element={<div>Halaman tidak ditemukan</div>} />
        </Routes>
      </BrowserRouter>
    </WeatherProvider>
  );
};

export default App;
