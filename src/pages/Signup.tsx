import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosInstance';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/users/register', { username, email, password });
      navigate('/login');
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSignup} className="w-96 p-8 bg-white shadow">
        <h1 className="text-2xl mb-6">Signup</h1>
        <input placeholder="Username" value={username} required onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
