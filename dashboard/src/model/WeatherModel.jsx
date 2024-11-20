import React from 'react';
import { Sun, Cloud, CloudRain, CloudDrizzle, CloudSun } from 'lucide-react';

const WeatherModel = () => {
  const getWeatherIcon = (weatherDesc) => {
    const desc = weatherDesc.toLowerCase();
    const iconSize = 50;
    const iconClass = 'text-blue-500';
    
    if (desc.includes('cerah') || desc.includes('clear')) {
      return <Sun size={iconSize} className={iconClass} />;
    } else if (desc.includes('berawan') || desc.includes('cloudy')) {
      return <Cloud size={iconSize} className={iconClass} />;
    } else if (desc.includes('hujan') || desc.includes('rain')) {
      return <CloudRain size={iconSize} className={iconClass} />;
    } else if (desc.includes('gerimis') || desc.includes('drizzle')) {
      return <CloudDrizzle size={iconSize} className={iconClass} />;
    } else if (desc.includes('berawan sebagian') || desc.includes('partly cloudy')) {
      return <CloudSun size={iconSize} className={iconClass} />;
    }
    
    // Default icon
    return <Cloud size={iconSize} className={iconClass} />;
  };

  return { getWeatherIcon };
};

export default WeatherModel;