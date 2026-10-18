import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase';
import './login.css';
import authImg from '../../assets/kirish.png'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const auth = getAuth(app);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image">
        <img src={authImg} alt="Exclusive Shopping" />
      </div>

      <div className="auth-content">
        <div className="auth-box">
          <h2>Log in to Exclusive</h2>
          <p className="auth-subtitle">Enter your details below</p>

          <form onSubmit={handleLogin} className="auth-form">
            <input
              type="email"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <span className="auth-error">{error}</span>}

            <div className="login-actions">
              <button type="submit" className="login-btn">Log In</button>
              <Link to="/forgot-password" className="forgot-link">Forget Password?</Link>
            </div>
          </form>

          <div className="auth-bottom">
            <span>Don't have an account?</span>
            <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}