import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./about.css";

import { CiShop } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { TbMoneybag, TbTruckDelivery } from "react-icons/tb";
import { FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs";

import abemploye from "../../assets/abemploye.png";
import abemploye1 from "../../assets/abemploye1.png";
import abemploye2 from "../../assets/abemploye2.png";
import abgirle from "../../assets/abgirle.png";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <p className="about-route">
        <Link to="/">{t("header.home")}</Link> /{" "}
        <span>{t("header.about")}</span>
      </p>

      <section className="about-story">
        <div className="about-story-text">
          <h1>{t("about.title")}</h1>
          <p>{t("about.storyP1")}</p>
          <p>{t("about.storyP2")}</p>
        </div>
        <div className="about-story-img">
          <img src={abgirle} alt={t("about.title")} />
        </div>
      </section>

      <section className="about-stats">
        <div className="about-stat-card">
          <div className="about-stat-icon">
            <CiShop />
          </div>
          <h3>10.5k</h3>
          <p>{t("about.stats.activeSellers")}</p>
        </div>

        <div className="about-stat-card about-stat-red">
          <div className="about-stat-icon">
            <AiOutlineDollar />
          </div>
          <h3>33k</h3>
          <p>{t("about.stats.monthlyProductSale")}</p>
        </div>

        <div className="about-stat-card">
          <div className="about-stat-icon">
            <PiShoppingBagOpenThin />
          </div>
          <h3>45.5k</h3>
          <p>{t("about.stats.activeCustomers")}</p>
        </div>

        <div className="about-stat-card">
          <div className="about-stat-icon">
            <TbMoneybag />
          </div>
          <h3>25k</h3>
          <p>{t("about.stats.annualGrossSale")}</p>
        </div>
      </section>

      <section className="about-team">
        <div className="about-member-card">
          <div className="about-member-img">
            <img src={abemploye} alt="Tom Cruise" />
          </div>
          <h3>Tom Cruise</h3>
          <p>{t("about.roles.founder")}</p>
          <div className="about-member-social">
            <a href="#twitter" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="#linkedin" aria-label="Linkedin">
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="about-member-card">
          <div className="about-member-img">
            <img src={abemploye1} alt="Emma Watson" />
          </div>
          <h3>Emma Watson</h3>
          <p>{t("about.roles.managingDirector")}</p>
          <div className="about-member-social">
            <a href="#twitter" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="#linkedin" aria-label="Linkedin">
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="about-member-card">
          <div className="about-member-img">
            <img src={abemploye2} alt="Will Smith" />
          </div>
          <h3>Will Smith</h3>
          <p>{t("about.roles.productDesigner")}</p>
          <div className="about-member-social">
            <a href="#twitter" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="#linkedin" aria-label="Linkedin">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </section>

      <div className="about-team-dots">
        <span></span>
        <span></span>
        <span className="about-dot-active"></span>
        <span></span>
        <span></span>
      </div>

      <section className="about-services">
        <div className="about-service-card">
          <div className="about-service-icon">
            <TbTruckDelivery />
          </div>
          <h4>{t("services.freeDeliveryTitle")}</h4>
          <p>{t("services.freeDeliveryDesc")}</p>
        </div>

        <div className="about-service-card">
          <div className="about-service-icon">
            <RiCustomerService2Line />
          </div>
          <h4>{t("services.customerServiceTitle")}</h4>
          <p>{t("services.customerServiceDesc")}</p>
        </div>

        <div className="about-service-card">
          <div className="about-service-icon">
            <BsShieldCheck />
          </div>
          <h4>{t("services.moneyBackTitle")}</h4>
          <p>{t("services.moneyBackDesc")}</p>
        </div>
      </section>
    </div>
  );
}
