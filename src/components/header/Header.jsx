import React from 'react'
import { Link } from 'react-router-dom'
import './head.css'

import { CiSearch, CiHeart } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'

const Header = () => {
  return (
    <header className="header">
      <div className="qora-linya">
        <div className="top-header">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
            <Link to="/shop" className="shopnow-link">
              ShopNow
            </Link>
          </p>
        </div>

        <div className="language-selector">
          <span name="language" id="language">
            <option value="en">English</option>
            <option value="uz">Uzbek</option>
            <option value="ru">Russian</option>
          </span>
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
            />
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
        </div>
      </div>
    </header>
  )
}

export default Header