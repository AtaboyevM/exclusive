import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import "./cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Savatchangiz bo'sh</h2>
        <br />
        <Link
          to="/wishlist"
          style={{ color: "#db4444", textDecoration: "underline" }}
        >
          Wishlist sahifasiga o'tish
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-route">
        <Link to="/">Home</Link> / <span>Cart</span>
      </div>

      <div className="cart-header">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="cart-info">
            <button
              type="button"
              className="cart-del"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              ×
            </button>
            <img src={item.img} alt={item.name} />
            <span>{item.name}</span>
          </div>
          <p>${item.price}</p>
          <input type="number" min="1" defaultValue="1" />
          <p>${item.price}</p>
        </div>
      ))}

      <div className="cart-buttons">
        <Link to="/wishlist">Return To Shop</Link>
      </div>

      <div className="cart-bottom">
        <div className="cart-coupon">
          <input type="text" placeholder="Coupon Code" />
          <button type="button">Apply Coupon</button>
        </div>

        <div className="cart-total">
          <h3>Cart Total</h3>
          <div>
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="cart-line">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
          <button type="button" className="cart-red-btn">
            Process to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
