import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./cart.css";
import imgcart from "../../assets/cartimg.png";
import imgcart1 from "../../assets/cartimg1.png";

export default function Cart() {
  const { t } = useTranslation();

  return (
    <div className="cart-page">
      <p className="cart-route">
        <Link to="/">{t("header.home")}</Link> / <span>{t("footer.cart")}</span>
      </p>

      <div className="cart-header">
        <p>{t("cart.product")}</p>
        <p>{t("cart.price")}</p>
        <p>{t("cart.quantity")}</p>
        <p>{t("cart.subtotal")}</p>
      </div>

      <div className="cart-item">
        <div className="cart-info">
          <button className="cart-del">x</button>
          <img src={imgcart} alt="LCD Monitor" />
          <span>LCD Monitor</span>
        </div>
        <p>$650</p>
        <input type="number" defaultValue="1" min="1" />
        <p>$650</p>
      </div>

      <div className="cart-item">
        <div className="cart-info">
          <button className="cart-del">x</button>
          <img src={imgcart1} alt="H1 Gamepad" />
          <span>H1 Gamepad</span>
        </div>
        <p>$550</p>
        <input type="number" defaultValue="2" min="1" />
        <p>$1100</p>
      </div>

      <div className="cart-buttons">
        <Link to="/">{t("cart.returnToShop")}</Link>
        <button>{t("cart.updateCart")}</button>
      </div>

      <div className="cart-bottom">
        <div className="cart-coupon">
          <input type="text" placeholder={t("cart.couponPlaceholder")} />
          <button>{t("cart.applyCoupon")}</button>
        </div>

        <div className="cart-total">
          <h3>{t("cart.cartTotal")}</h3>
          <div>
            <span>{t("cart.subtotal")}:</span>
            <span>$1750</span>
          </div>
          <div>
            <span>{t("cart.shipping")}:</span>
            <span>{t("cart.free")}</span>
          </div>
          <div className="cart-line">
            <span>{t("cart.total")}:</span>
            <span>$1750</span>
          </div>
          <button className="cart-red-btn">
            {t("cart.proceedToCheckout")}
          </button>
        </div>
      </div>
    </div>
  );
}
