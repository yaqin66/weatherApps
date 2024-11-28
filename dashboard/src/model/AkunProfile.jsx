import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AkunProfile = () => {
  const navigate = useNavigate();
  const userEmail = sessionStorage.getItem('userEmail');
  const username = userEmail ? userEmail.split('@')[0] : '';

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('userEmail');
    Swal.fire({
        title: 'Logout',
        text: 'Are you sure logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I quit!"
      }).then((result) => {
        if (result.isConfirmed){
            Swal.fire({
                title: "Quit",
                text: "You success quit.",
                icon: "success"
            });
        }
      });
    navigate('/login');
  };

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  // Sembunyikan dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById('profile-dropdown');
      if (dropdown && !dropdown.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Profil Avatar */}
      <div
        className="border h-16 w-16 rounded-full cursor-pointer"
        onClick={toggleDropdown}
      ></div>

      {/* Dropdown */}
      {isDropdownVisible && (
        <div
          id="profile-dropdown"
          className="absolute -translate-x-8 translate-y-1 bg-white border p-2 rounded shadow-lg transition-all duration-300"
        >
          {username && <p className="mb-2 font-semibold">{username}</p>}
          <div
            onClick={handleLogout}
            className="cursor-pointer text-red-600 hover:underline"
          >
            Keluar
          </div>
        </div>
      )}
    </div>
  );
};

export default AkunProfile;
