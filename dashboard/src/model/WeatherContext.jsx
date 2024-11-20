import React, { createContext, useContext, useState } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [selectedCityId, setSelectedCityId] = useState(null);

  return (
    <WeatherContext.Provider value={{ selectedCityId, setSelectedCityId }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);