import React from 'react';
import { Link } from 'react-router-dom';
import './acc.css';

export default function Account() {
  return (
    <div className="account-page">
      {/* Tepadagi navigatsiya va salomlashish */}
      <div className="account-top">
        <p className="account-route">
          <Link to="/">Home</Link> / <span>My Account</span>
        </p>
        <p className="account-welcome">
          Welcome! <span>Md Rimel</span>
        </p>
      </div>

      <div className="account-main">
        {/* Chap tomondagi menyu */}
        <aside className="account-sidebar">
          <h4>Manage My Account</h4>
          <ul>
            <li className="account-active">My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>

          <h4>My Orders</h4>
          <ul>
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>

          <h4>My WishList</h4>
        </aside>

        {/* O'ng tomondagi forma */}
        <div className="account-card">
          <h3>Edit Your Profile</h3>

          <form className="account-form">
            <div className="account-row">
              <div className="account-field">
                <label>First Name</label>
                <input type="text" placeholder="Md" />
              </div>
              <div className="account-field">
                <label>Last Name</label>
                <input type="text" placeholder="Rimel" />
              </div>
            </div>

            <div className="account-row">
              <div className="account-field">
                <label>Email</label>
                <input type="email" placeholder="rimel1111@gmail.com" />
              </div>
              <div className="account-field">
                <label>Address</label>
                <input type="text" placeholder="Kingston, 5236, United State" />
              </div>
            </div>

            <div className="account-password">
              <label>Password Changes</label>
              <input type="password" placeholder="Current Password" />
              <input type="password" placeholder="New Password" />
              <input type="password" placeholder="Confirm New Password" />
            </div>

            <div className="account-buttons">
              <button type="button" className="account-cancel">Cancel</button>
              <button type="submit" className="account-save">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}