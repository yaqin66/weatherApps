import React, { createContext, useContext, useState } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [selectedCityId, setSelectedCityId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <WeatherContext.Provider value={{ selectedCityId, setSelectedCityId,isAuthenticated, setIsAuthenticated }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);