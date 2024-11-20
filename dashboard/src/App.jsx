import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import Navbar from './component/Navbar';
import { WeatherProvider } from './model/WeatherContext';

const App = () => {
  return (
    <WeatherProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/report' element={<Report />} />
        </Routes>
      </BrowserRouter>
    </WeatherProvider>
  );
};

export default App;