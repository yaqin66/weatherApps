import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import data from './kota.json';
import { useWeather } from '../model/WeatherContext';
import AkunProfile from '../model/AkunProfile';

const Navbar = () => {
  const navigate = useNavigate();
  const { setSelectedCityId } = useWeather();
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [renderedResults, setRenderedResults] = useState([]);
  const [resultLimit, setResultLimit] = useState(10);
  const [showDropdown, setShowDropdown] = useState(false);


  const handleSearch = () => {
    if (query) {
      const filteredResults = data.filter((kota) =>
        kota.name.toLowerCase().includes(query.toLowerCase())
      );
      const uniqueResults = Array.from(new Set(filteredResults.map((k) => k.name)))
        .map((name) => filteredResults.find((k) => k.name === name));
      setSearchResults(uniqueResults);
      setRenderedResults(uniqueResults.slice(0, resultLimit));
    } else {
      setSearchResults([]);
      setRenderedResults([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
      setShowDropdown(true);
    }
  };

  const handleCitySelect = (city) => {
    setQuery(city.name);
    setSelectedCityId(city.id);
    setShowDropdown(false);
    navigate('/'); // Redirect ke halaman Home setelah memilih kota
  };

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && renderedResults.length < searchResults.length) {
      setResultLimit((prevLimit) => prevLimit + 10);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  

  return (
    <div className="p-4 bg-white shadow">
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Search city..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setResultLimit(10);
            setShowDropdown(true);
          }}
          onKeyDown={handleKeyDown}
          className="border p-2 rounded w-96 mr-6 ml-2 focus:outline-none"
        />
        <div className="flex items-center gap-4">
          <div
            onClick={() => navigate('/')}
            className="border rounded p-2 ml-10 cursor-pointer hover:bg-gray-500 hover:text-white"
          >
            Home
          </div>
          <div
            onClick={() => navigate('/report')}
            className="border rounded p-2 cursor-pointer hover:bg-gray-500 hover:text-white"
          >
            Reports
          </div>
          <div className='items-center flex justify-center justify-items-center'>
        <AkunProfile/>
        </div>
        </div>
       
      </div>

      {showDropdown && renderedResults.length > 0 && (
        <div
          onScroll={handleScroll}
          style={{ maxHeight: '200px', overflowY: 'auto', marginTop: '1rem' }}
          className="dropdown absolute bg-white ml-2 shadow-lg rounded"
        >
          <ul>
            {renderedResults.map((kota) => (
              <li
                className="cursor-pointer hover:bg-gray-100 p-2 rounded w-96"
                key={kota.id}
                onClick={() => handleCitySelect(kota)}
              >
                {kota.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;