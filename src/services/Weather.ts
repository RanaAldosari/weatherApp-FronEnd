import axios from 'axios';

const BASE_URL = 'https://weatherapp-backend-6tzd.onrender.com';

export const getWeatherData = async (lat: string, 
    lon: string, 
    token: string | null) => {
  if (!token) {
    throw new Error('token not found');
  }
// define URL
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: { 
lat,
lon 
},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};