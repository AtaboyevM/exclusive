import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
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
    <div style={{ padding: "40px 120px" }}>
      <h2>Savatcha</h2>
      <div style={{ marginTop: "20px" }}>
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px 20px",
              marginBottom: "10px",
              border: "1px solid #e5e5e5",
              borderRadius: "6px",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              width="60"
              style={{ objectFit: "contain" }}
            />
            <h4 style={{ margin: 0 }}>{item.name}</h4>
            <p style={{ margin: 0, fontWeight: "bold" }}>${item.price}</p>
            <button
              style={{
                backgroundColor: "#db4444",
                color: "#fff",
                border: "none",
                padding: "8px 14px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              O'chirish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
