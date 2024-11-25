import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Cek status login dari sessionStorage
  const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
