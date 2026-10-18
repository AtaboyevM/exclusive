import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import imgcart from'../../assets/cartimg.png'
import imgcart1 from'../../assets/cartimg1.png'
export default function Cart() {
  return (
    <div className="cart-page">
      <p className="cart-route">
        <Link to="/">Home</Link> / <span>Cart</span>
      </p>

      <div className="cart-header">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

      <div className="cart-item">
        <div className="cart-info">
          <button className="cart-del">x</button>
          <img src={imgcart} alt="" />
          <span>LCD Monitor</span>
        </div>
        <p>$650</p>
        <input type="number" defaultValue="1" min="1" />
        <p>$650</p>
      </div>

      <div className="cart-item">
        <div className="cart-info">
          <button className="cart-del">x</button>
          <img src={imgcart1} alt="" />
          <span>H1 Gamepad</span>
        </div>
        <p>$550</p>
        <input type="number" defaultValue="2" min="1" />
        <p>$1100</p>
      </div>

      <div className="cart-buttons">
        <Link to="/">Return To Shop</Link>
        <button>Update Cart</button>
      </div>

      <div className="cart-bottom">
        <div className="cart-coupon">
          <input type="text" placeholder="Coupon Code" />
          <button>Apply Coupon</button>
        </div>

        <div className="cart-total">
          <h3>Cart Total</h3>
          <div>
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="cart-line">
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <button className="cart-red-btn">Process to checkout</button>
        </div>
      </div>
    </div>
  );
}