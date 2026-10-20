import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./eror.css";

export default function Eror() {
  const { t } = useTranslation();

  return (
    <div className="error-page">
      <p className="error-route">
        <Link to="/">{t("header.home")}</Link> / <span>404 Error</span>
      </p>

      <div className="error-content">
        <h1>{t("notFound.title")}</h1>
        <p>{t("notFound.desc")}</p>
        <Link to="/" className="error-btn">
          {t("notFound.backHome")}
        </Link>
      </div>
    </div>
  );
}
