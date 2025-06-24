import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
// import services
import { signUp } from '../services/Auth';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const switchToSignin = async () => {
    try {
      const response = await signUp(email, password);
      if (response.status === 201 || response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Account created successfully. Please sign in.",
          icon: "success"
        });
        navigate('/signin');
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Signup failed. Please try again."
      });
    }
  };
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-purple-400 px-4">
{/* content of headers */}
      <div className="text-center mb-8 flex flex-col p-0 m-0">
        <div className='flex items-center justify-center gap-3'>
          <h1 className="text-3xl font-bold text-white">WeatherApp</h1>
          <img src="/cloudy.png" alt="Weather App" className="w-14 h-14" />
        </div>
        <p className="text-gray-200 mt-2"> Your daily weather companion – anywhere, anytime! </p>
      </div>
{/* signup-form */}
      <div className="bg-white shadow-md rounded-lg px-8 py-8 mb-4 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>

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
            placeholder="****"
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button onClick={switchToSignin} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-purple-500 transition duration-300">Sign Up</button>

        <p className="text-center text-sm text-gray-600 pt-5"> Already have an account?
          <Link to="/signin" className="text-blue-500 hover:underline hover:text-purple-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}

export default Signup;
