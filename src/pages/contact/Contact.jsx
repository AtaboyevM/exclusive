import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiPhone, FiMail } from "react-icons/fi";
import "./contact.css";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <p className="contact-route">
        <Link to="/">{t("header.home")}</Link> /{" "}
        <span>{t("header.contact")}</span>
      </p>

      <div className="contact-box">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-head">
              <span className="contact-icon">
                <FiPhone />
              </span>
              <h3>{t("contact.callToUs")}</h3>
            </div>
            <p>{t("contact.callDesc")}</p>
            <p>{t("contact.callPhone")}</p>
          </div>

          <div className="contact-line"></div>

          <div className="contact-item">
            <div className="contact-head">
              <span className="contact-icon">
                <FiMail />
              </span>
              <h3>{t("contact.writeToUs")}</h3>
            </div>
            <p>{t("contact.writeDesc")}</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>

        <form className="contact-form">
          <div className="contact-inputs">
            <input
              type="text"
              placeholder={t("contact.namePlaceholder")}
              required
            />
            <input
              type="email"
              placeholder={t("contact.emailPlaceholder")}
              required
            />
            <input
              type="tel"
              placeholder={t("contact.phonePlaceholder")}
              required
            />
          </div>

          <textarea
            placeholder={t("contact.messagePlaceholder")}
            rows="8"
          ></textarea>

          <button type="submit" className="contact-btn">
            {t("contact.sendMessage")}
          </button>
        </form>
      </div>
    </div>
  );
}
