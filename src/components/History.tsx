// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function History() {
//   const [historyData, setHistoryData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem('token');
//   const userEmail = localStorage.getItem('email');

//   useEffect(() => {
//     const fetchHistory = async () => {
//       try {
//         const res = await axios.get('https://weatherapp-backend-6tzd.onrender.com/history', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!res.data || !Array.isArray(res.data)) {
//           throw new Error('Invalid history data');
//         }

//         const filteredData = res.data.filter((item: any) => item.email === userEmail);

//         setHistoryData(filteredData);
//       } catch (error) {
//         console.error('Failed to load history:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHistory();
//   }, [token, userEmail]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-400 px-6 py-10 text-white">
//       <h2 className="text-2xl font-bold mb-6">Coordinates History</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : historyData.length === 0 ? (
//         <p>No history found.</p>
//       ) : (
//         <div className="space-y-4">
//           {historyData.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white text-gray-800 p-4 rounded-md shadow-md flex items-center gap-4"
//             >
//               <img src="/location.png" alt="location" className="w-8 h-8" />
//               <p className="font-medium">Lat: {item.lat} — Lon: {item.lon}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default History;
