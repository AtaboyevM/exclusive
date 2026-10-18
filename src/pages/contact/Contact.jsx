import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail } from 'react-icons/fi';
import './contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <p className="contact-route">
        <Link to="/">Home</Link> / <span>Contact</span>
      </p>

      <div className="contact-box">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-head">
              <span className="contact-icon"><FiPhone /></span>
              <h3>Call To Us</h3>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>

          <div className="contact-line"></div>

          <div className="contact-item">
            <div className="contact-head">
              <span className="contact-icon"><FiMail /></span>
              <h3>Write To US</h3>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>

        <form className="contact-form">
          <div className="contact-inputs">
            <input type="text" placeholder="Your Name *" required />
            <input type="email" placeholder="Your Email *" required />
            <input type="tel" placeholder="Your Phone *" required />
          </div>

          <textarea placeholder="Your Message" rows="8"></textarea>

          <button type="submit" className="contact-btn">Send Massage</button>
        </form>
      </div>
    </div>
  );
}