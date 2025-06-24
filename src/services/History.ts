// import axios from 'axios';
// // backend URL
// const BASE_URL = 'https://weatherapp-backend-6tzd.onrender.com';

// export const getUserHistory = async (token: string | null) => {
//   if (!token) throw new Error('No authentication token provided');
// // backend URL&router path
//   const response = await axios.get(`${BASE_URL}/history`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response.data;
// };