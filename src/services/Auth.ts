
import axios from 'axios';
// backend URL
const API_URL_BackEnd = "https://weatherapp-backend-6tzd.onrender.com/auth";
// signIn
export const signIn = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL_BackEnd }/signin`, {
 email,
 password });
  return response.data;
};
// signUp
export const signUp = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL_BackEnd }/signup`, {
 email,
 password
 });
  return response;
};
