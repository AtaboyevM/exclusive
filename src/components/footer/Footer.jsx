import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { VscSend } from 'react-icons/vsc'
import { RiFacebookLine, RiTwitterLine, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h2 className="footer-logo">Exclusive</h2>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button type="button" aria-label="Send">
              <VscSend size={18} />
            </button>
          </div>
        </div>

        <div className="footer-col">
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="footer-col">
          <h3>Account</h3>
          <ul>
            <li><Link to="/account">My Account</Link></li>
            <li><Link to="/login">Login / Register</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Quick Link</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms Of Use</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Download App</h3>
          <p className="sub-text">Save $3 with App New User Only</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <RiFacebookLine size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <RiTwitterLine size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <RiInstagramLine size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Linkedin">
              <RiLinkedinLine size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer