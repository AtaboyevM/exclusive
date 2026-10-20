import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import "./singup.css";
import authImg from "../../assets/kirish.png";

export default function Singup() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const auth = getAuth(app);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
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
          <h2>{t("auth.createAccount")}</h2>
          <p className="auth-subtitle">{t("auth.enterDetails")}</p>

          <form onSubmit={handleRegister} className="auth-form">
            <input
              type="text"
              placeholder={t("auth.namePlaceholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder={t("auth.emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder={t("auth.passwordPlaceholder")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <span className="auth-error">{error}</span>}

            <button type="submit" className="auth-btn red-btn">
              {t("auth.createAccountBtn")}
            </button>
          </form>

          <div className="auth-bottom">
            <span>{t("auth.alreadyHaveAccount")} </span>
            <Link to="/login">{t("auth.logIn")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
