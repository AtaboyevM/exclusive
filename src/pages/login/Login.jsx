import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase';
import './login.css';
import authImg from '../../assets/kirish.png';

export default function Login() {
  const { t } = useTranslation();
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
          <h2>{t('auth.loginToExclusive')}</h2>
          <p className="auth-subtitle">{t('auth.enterDetails')}</p>

          <form onSubmit={handleLogin} className="auth-form">
            <input
              type="email"
              placeholder={t('auth.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder={t('auth.passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <span className="auth-error">{error}</span>}

            <div className="login-actions">
              <button type="submit" className="login-btn">
                {t('auth.logIn')}
              </button>
              <Link to="/forgot-password" className="forgot-link">
                {t('auth.forgotPassword')}
              </Link>
            </div>
          </form>

          <div className="auth-bottom">
            <span>{t('auth.dontHaveAccount')} </span>
            <Link to="/signup">{t('auth.signUp')}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}