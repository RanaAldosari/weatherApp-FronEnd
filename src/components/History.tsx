// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface WeatherData {
//   name: string;
//   main: {
//     temp: number;
//     humidity: number;
//     pressure: number;
//   };
//   weather: { description: string }[];
//   wind: {
//     speed: number;
//   };
// }

// interface HistoryItem {
//   _id: string;
//   lat: number;
//   lon: number;
//   requestedAt: string;
//   weather: WeatherData;
// }

// interface User {
//   id: string;
//   email: string;
// }

// const History = () => {
//   const [history, setHistory] = useState<HistoryItem[]>([]);
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchHistory = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           setError('User not authenticated');
//           setLoading(false);
//           return;
//         }

//         const userData = JSON.parse(localStorage.getItem('user') || 'null');
//         setUser(userData);

//         const response = await axios.get('http://localhost:3000/history', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
// // results
// setHistory(response.data);
//       } catch (err: any) {
// setError('Failed to load history');
//       } finally {
// setLoading(false);
//       }
//     };

//     fetchHistory();
//   }, []);

//   if (loading) return <p>Loading history...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-6">
//         {user ? `${user.email}'s Weather History` : 'Weather History'}
//       </h2>

//       {history.length === 0 ? (
//         <p>No history found.</p>
//       ) : (
//         <ul>
//           {history.map((item) => (
//             <li key={item._id} className="mb-6 border-b pb-4">
//               <p><strong>Date:</strong> {new Date(item.requestedAt).toLocaleString()}</p>
//               <p>
//                 <strong>Location:</strong> Lat {item.lat.toFixed(2)}, Lon {item.lon.toFixed(2)} ({item.weather?.name || 'Unknown'})
//               </p>
//               <p><strong>Temperature:</strong> {item.weather?.main?.temp ?? 'N/A'} °C</p>
//               <p><strong>Weather:</strong> {item.weather?.weather?.[0]?.description ?? 'N/A'}</p>
//               <p><strong>Humidity:</strong> {item.weather?.main?.humidity ?? 'N/A'} %</p>
//               <p><strong>Wind Speed:</strong> {item.weather?.wind?.speed ?? 'N/A'} m/s</p>
//               <p><strong>Pressure:</strong> {item.weather?.main?.pressure ?? 'N/A'} hPa</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default History;
