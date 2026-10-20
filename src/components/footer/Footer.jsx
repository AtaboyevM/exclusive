import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { useTranslation } from "react-i18next";
import { VscSend } from "react-icons/vsc";
import {
  RiFacebookLine,
  RiTwitterLine,
  RiInstagramLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h2 className="footer-logo">Exclusive</h2>
          <h3>{t("footer.subscribe")}</h3>
          <p>{t("footer.discountText")}</p>
          <div className="subscribe-box">
            <input type="email" placeholder={t("footer.emailPlaceholder")} />
            <button type="button" aria-label="Send">
              <VscSend size={18} />
            </button>
          </div>
        </div>

        <div className="footer-col">
          <h3>{t("footer.support")}</h3>
          <p>{t("footer.address")}</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="footer-col">
          <h3>{t("footer.account")}</h3>
          <ul>
            <li>
              <Link to="/account">{t("footer.myAccount")}</Link>
            </li>
            <li>
              <Link to="/login">{t("footer.loginRegister")}</Link>
            </li>
            <li>
              <Link to="/cart">{t("footer.cart")}</Link>
            </li>
            <li>
              <Link to="/wishlist">{t("footer.wishlist")}</Link>
            </li>
            <li>
              <Link to="/shop">{t("footer.shop")}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>{t("footer.quickLink")}</h3>
          <ul>
            <li>
              <Link to="/privacy">{t("footer.privacyPolicy")}</Link>
            </li>
            <li>
              <Link to="/terms">{t("footer.termsOfUse")}</Link>
            </li>
            <li>
              <Link to="/faq">{t("footer.faq")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("footer.contact")}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>{t("footer.downloadApp")}</h3>
          <p className="sub-text">{t("footer.appOffer")}</p>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <RiFacebookLine size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <RiTwitterLine size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <RiInstagramLine size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <RiLinkedinLine size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
