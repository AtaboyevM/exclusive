import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./acc.css";

export default function Account() {
  const { t } = useTranslation();

  return (
    <div className="account-page">
      <div className="account-top">
        <p className="account-route">
          <Link to="/">{t("header.home")}</Link> /{" "}
          <span>{t("account.myAccount")}</span>
        </p>
        <p className="account-welcome">
          {t("account.welcome")} <span>Md Rimel</span>
        </p>
      </div>

      <div className="account-main">
        <aside className="account-sidebar">
          <h4>{t("account.manageAccount")}</h4>
          <ul>
            <li className="account-active">{t("account.myProfile")}</li>
            <li>{t("account.addressBook")}</li>
            <li>{t("account.myPaymentOptions")}</li>
          </ul>

          <h4>{t("account.myOrders")}</h4>
          <ul>
            <li>{t("account.myReturns")}</li>
            <li>{t("account.myCancellations")}</li>
          </ul>

          <h4>{t("account.myWishlist")}</h4>
        </aside>

        {/* O'ng tomondagi forma */}
        <div className="account-card">
          <h3>{t("account.editProfile")}</h3>

          <form className="account-form">
            <div className="account-row">
              <div className="account-field">
                <label>{t("account.firstName")}</label>
                <input type="text" placeholder="Md" />
              </div>
              <div className="account-field">
                <label>{t("account.lastName")}</label>
                <input type="text" placeholder="Rimel" />
              </div>
            </div>

            <div className="account-row">
              <div className="account-field">
                <label>{t("account.email")}</label>
                <input type="email" placeholder="rimel1111@gmail.com" />
              </div>
              <div className="account-field">
                <label>{t("account.address")}</label>
                <input type="text" placeholder="Kingston, 5236, United State" />
              </div>
            </div>

            <div className="account-password">
              <label>{t("account.passwordChanges")}</label>
              <input
                type="password"
                placeholder={t("account.currentPassword")}
              />
              <input type="password" placeholder={t("account.newPassword")} />
              <input
                type="password"
                placeholder={t("account.confirmNewPassword")}
              />
            </div>

            <div className="account-buttons">
              <button type="button" className="account-cancel">
                {t("account.cancel")}
              </button>
              <button type="submit" className="account-save">
                {t("account.saveChanges")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
