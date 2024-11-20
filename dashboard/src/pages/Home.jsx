import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useWeather } from '../model/WeatherContext';
import { PiThermometerColdBold } from "react-icons/pi";
import { FaWind } from "react-icons/fa";
import WeatherModel from '../model/WeatherModel';

const Home = () => {
  const { selectedCityId } = useWeather();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { getWeatherIcon } = WeatherModel();

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!selectedCityId) return;
      console.log(selectedCityId);
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:5000/api/weather/${selectedCityId}`);
        setWeatherData(response.data);
      } catch (error) {
        setError('Failed to fetch weather data. Please try again.');
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [selectedCityId]);

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && (
        <div className="text-center">
          <p className="text-gray-600">Loading weather data...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {weatherData && !loading && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Weather Information</h2>
          <div className="grid gap-4">
            <div className="p-4 rounded">
              <div className='flex mt-5 border rounded-3xl w-full h-32 p-2 shadow-md cursor-pointer items-center'>
                {/* Menggunakan getWeatherIcon untuk menampilkan icon yang sesuai */}
                <div className="ml-2">
                  {getWeatherIcon(weatherData.data[0].cuaca[0][0].weather_desc)}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Rain Probability</h3>
                  {weatherData.data[0].cuaca[0][0].weather_desc}
                </div>
              </div>
              <div className='flex mt-5 border rounded-3xl w-full h-32 p-2 shadow-md cursor-pointer items-center'>
                <PiThermometerColdBold size={50} className='ml-2 text-blue-500' />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Temperature</h3>
                  {weatherData.data[0].cuaca[0][0].t}°C
                </div>
              </div>
              <div className='flex mt-5 border rounded-3xl w-full h-32 p-2 shadow-md cursor-pointer items-center'>
                <FaWind size={50} className='ml-2 text-blue-500' />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Wind Speed</h3>
                  {weatherData.data[0].cuaca[0][0].ws} km/h
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;