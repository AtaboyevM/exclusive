import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./head.css";
import { useTranslation } from "react-i18next";
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiShoppingBag, FiStar, FiLogOut } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [ochiq, setOchiq] = useState(false);
  
  const navigate = useNavigate();
  const auth = getAuth(app);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const chiqish = async () => {
    try {
      await signOut(auth);
      setOchiq(false);
      navigate("/signup");
    } catch (error) {
      console.error("Chiqishda xatolik:", error);
    }
  };

  return (
    <header className="header">
      <div className="qora-linya">
        <div className="top-header">
          <p>
            {t("topNav.saleText")}{" "}
            <Link to="/shop" className="shopnow-link">
              {t("topNav.shopNow")}
            </Link>
          </p>
        </div>

        <div className="languages">
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("uz")}>Uzbek</button>
          <button onClick={() => changeLanguage("ru")}>Russian</button>
        </div>
      </div>

      <div className="main-header">
        <div className="logo">
          <Link to="/">
            <h2>Exclusive</h2>
          </Link>
        </div>

        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">{t("header.home")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("header.contact")}</Link>
            </li>
            <li>
              <Link to="/about">{t("header.about")}</Link>
            </li>
            <li>
              <Link to="/signup">{t("header.signUp")}</Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <input type="text" placeholder={t("header.searchPlaceholder")} />
            <button type="button" aria-label="Search">
              <CiSearch size={20} />
            </button>
          </div>

          <Link to="/wishlist" className="action-icon" aria-label="Wishlist">
            <CiHeart size={24} />
          </Link>

          <Link to="/cart" className="action-icon" aria-label="Cart">
            <IoCartOutline size={24} />
          </Link>

          <div className="user-box">
            <button
              type="button"
              className={`user-icon ${ochiq ? "active" : ""}`}
              onClick={() => setOchiq((prev) => !prev)}
            >
              <CiUser size={22} />
            </button>

            {ochiq && (
              <div className="user-menu">
                <Link
                  to="/account"
                  className="menu-link"
                  onClick={() => setOchiq(false)}
                >
                  <CiUser size={20} />
                  <span>Manage My Account</span>
                </Link>

                <Link
                  to="/error"
                  className="menu-link"
                  onClick={() => setOchiq(false)}
                >
                  <FiShoppingBag size={18} />
                  <span>My Order</span>
                </Link>

                <Link
                  to="/error"
                  className="menu-link"
                  onClick={() => setOchiq(false)}
                >
                  <MdOutlineCancel size={18} />
                  <span>My Cancellations</span>
                </Link>

                <Link
                  to="/error"
                  className="menu-link"
                  onClick={() => setOchiq(false)}
                >
                  <FiStar size={18} />
                  <span>My Reviews</span>
                </Link>

                <button
                  type="button"
                  className="menu-link chiqish-btn"
                  onClick={chiqish}
                >
                  <FiLogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;