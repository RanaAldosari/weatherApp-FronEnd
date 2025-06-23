// import React, { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router';

function Weather() {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('email');
    setUserEmail(email);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setWeatherData(null);

    if (!lat || !lon) {
      setError('Please enter both latitude and longitude');
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem('token');

      const response = await axios.get('https://weatherapp-backend-6tzd.onrender.com/weather', {
        params: { lat, lon },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
// get
      setWeatherData(response.data); 

    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to fetch weather');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-blue-400 to-purple-400 px-4 py-10">
      <div className="flex justify-start gap-2 items-center w-full max-w-4xl mb-8">
        <h2 className="text-[.9rem] lg:text-2xl font-bold text-white">
          Welcome {userEmail || 'User'}
        </h2>
        <button
          onClick={() => navigate('/user-history')}
          className="bg-white text-blue-700 font-medium py-1 px-4 rounded-md shadow hover:bg-gray-100 transition duration-300"
        >
          My History
        </button>
      </div>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">Get Weather Info</h3>
{/* results of weather */}
<form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            step="any"
            placeholder="Latitude"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            step="any"
            placeholder="Longitude"
            value={lon}
            onChange={(e) => setLon(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`py-2 rounded-md text-white transition duration-300 ${
              loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-purple-600'
            }`}
          >
            {loading ? 'Loading...' : 'Get Weather'}
          </button>
        </form>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>

      {weatherData && (
        <div className="mt-10 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: 'Location', value: weatherData.name, icon: '/location.png' },
            { label: 'Temperature', value: `${weatherData.main.temp} °C`, icon: '/celsius.png' },
            { label: 'Weather', value: weatherData.weather[0].description, icon: '/weather.png' },
            { label: 'Humidity', value: `${weatherData.main.humidity}%`, icon: '/humidity.png' },
            { label: 'Wind Speed', value: `${weatherData.wind.speed} m/s`, icon: '/windy.png' },
            { label: 'Pressure', value: `${weatherData.main.pressure} hPa`, icon: '/barometer.png' },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-md shadow-md">
              <img src={item.icon} alt={item.label} className="w-10 h-10" />
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="font-semibold capitalize text-gray-800">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Weather;
