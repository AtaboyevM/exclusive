import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

import { CiShop } from 'react-icons/ci';
import { AiOutlineDollar } from 'react-icons/ai';
import { PiShoppingBagOpenThin } from 'react-icons/pi';
import { TbMoneybag } from 'react-icons/tb';
import { FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiCustomerService2Line } from 'react-icons/ri';
import { BsShieldCheck } from 'react-icons/bs';


import abemploye from '../../assets/abemploye.png';
import abemploye1 from '../../assets/abemploye1.png';
import abemploye2 from '../../assets/abemploye2.png';
import abgirle from '../../assets/abgirle.png';

export default function About() {
  return (
    <div className="about-page">
      <p className="about-route">
        <Link to="/">Home</Link> / <span>About</span>
      </p>

      <section className="about-story">
        <div className="about-story-text">
          <h1>Our Story</h1>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by
            wide range of tailored marketing, data and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 millions
            customers across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="about-story-img">
          <img src={abgirle} alt="Our Story" />
        </div>
      </section>

      <section className="about-stats">
        <div className="about-stat-card">
          <div className="about-stat-icon">
            <CiShop />
          </div>
          <h3>10.5k</h3>
          <p>Sallers active our site</p>
        </div>

        <div className="about-stat-card about-stat-red">
          <div className="about-stat-icon">
            <AiOutlineDollar />
          </div>
          <h3>33k</h3>
          <p>Monthly Product Sale</p>
        </div>

        <div className="about-stat-card">
          <div className="about-stat-icon">
            <PiShoppingBagOpenThin />
          </div>
          <h3>45.5k</h3>
          <p>Customer active in our site</p>
        </div>

        <div className="about-stat-card">
          <div className="about-stat-icon">
            <TbMoneybag />
          </div>
          <h3>25k</h3>
          <p>Anual gross sale in our site</p>
        </div>
      </section>

      <section className="about-team">
        <div className="about-member-card">
          <div className="about-member-img">
            <img src={abemploye} alt="Tom Cruise" />
          </div>
          <h3>Tom Cruise</h3>
          <p>Founder &amp; Chairman</p>
          <div className="about-member-social">
            <a href="#twitter"><FiTwitter /></a>
            <a href="#instagram"><FiInstagram /></a>
            <a href="#linkedin"><FiLinkedin /></a>
          </div>
        </div>

        <div className="about-member-card">
          <div className="about-member-img">
            <img src={abemploye1} alt="Emma Watson" />
          </div>
          <h3>Emma Watson</h3>
          <p>Managing Director</p>
          <div className="about-member-social">
            <a href="#twitter"><FiTwitter /></a>
            <a href="#instagram"><FiInstagram /></a>
            <a href="#linkedin"><FiLinkedin /></a>
          </div>
        </div>

        <div className="about-member-card">
          <div className="about-member-img">
            <img src={abemploye2} alt="Will Smith" />
          </div>
          <h3>Will Smith</h3>
          <p>Product Designer</p>
          <div className="about-member-social">
            <a href="#twitter"><FiTwitter /></a>
            <a href="#instagram"><FiInstagram /></a>
            <a href="#linkedin"><FiLinkedin /></a>
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
          <h4>FREE AND FAST DELIVERY</h4>
          <p>Free delivery for all orders over $140</p>
        </div>

        <div className="about-service-card">
          <div className="about-service-icon">
            <RiCustomerService2Line />
          </div>
          <h4>24/7 CUSTOMER SERVICE</h4>
          <p>Friendly 24/7 customer support</p>
        </div>

        <div className="about-service-card">
          <div className="about-service-icon">
            <BsShieldCheck />
          </div>
          <h4>MONEY BACK GUARANTEE</h4>
          <p>We return money within 30 days</p>
        </div>
      </section>
    </div>
  );
}