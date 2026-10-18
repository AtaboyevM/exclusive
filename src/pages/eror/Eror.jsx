import React from 'react';
import { Link } from 'react-router-dom';
import './eror.css';

export default function Eror() {
  return (
    <div className="error-page">
      <p className="error-route">
        <Link to="/">Home</Link> / <span>404 Error</span>
      </p>

      <div className="error-content">
        <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Link to="/" className="error-btn">Back to home page</Link>
      </div>
    </div>
  );
}