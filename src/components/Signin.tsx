import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
function SignIn() {
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
// login func
  const handleSignIn = async () => {
    try {
      const signinURL = await axios.post("https://weatherapp-backend-6tzd.onrender.com/auth/signin", {
        email,
        password
      });
localStorage.setItem('token', signinURL.data.token);
localStorage.setItem('email', email);
// success
      Swal.fire({
        title: "Success!",
        text: "Login successful!",
        icon: "success"
      });
 navigate('/weather-data');
    } 
// fail
    catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Signin failed, please try again"
      });
    }
  };

  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-purple-400 px-4">
{/* header */}
      <div className="text-center mb-8 flex flex-col p-0 m-0">
        <div className='flex items-center justify-center gap-3'>
          <h1 className="text-3xl font-bold text-white">WeatherApp</h1>
          <img src="/cloudy.png" alt="Weather App" className="w-14 h-14" />
        </div>
        <p className="text-gray-200 mt-2">Your daily weather companion – anywhere, anytime!</p>
      </div>
{/* signin-form */}
      <div className="bg-white shadow-md rounded-lg px-8 py-8 mb-4 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

        <div className="mb-4">
          <label className="text-sm font-bold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
            placeholder="username@gmail.com"
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-bold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
            placeholder="****"
          />
        </div>

        <button
          onClick={handleSignIn}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-purple-500 transition duration-300"
        >
          Sign In
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?
          <Link to="/" className="text-blue-500 hover:underline hover:text-purple-500 ml-1">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
</>
  );
}

export default SignIn;
