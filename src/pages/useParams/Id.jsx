import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./id.css";

import img3 from "../../assets/today1.png";
import img4 from "../../assets/today2.png";
import img5 from "../../assets/today3.png";
import img6 from "../../assets/today5.png";

import { AiOutlineHeart } from "react-icons/ai";

const productsData = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    img: img3,
    description:
      "PlayStation 5 DualSense Wireless Controller provides immersive haptic feedback, dynamic adaptive triggers and a built-in microphone.",
    colors: ["#A0BCE0", "#E07575"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    price: 960,
    img: img4,
    description:
      "RGB Backlit Gaming Keyboard with mechanical feel and durable construction designed for long gaming sessions.",
    colors: ["#000000", "#E07575"],
    sizes: ["Standard"],
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    price: 370,
    img: img5,
    description:
      "Ultra-wide gaming monitor with stunning colors, high refresh rate and minimal response time.",
    colors: ["#000000"],
    sizes: ["24 inch", "27 inch", "32 inch"],
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    price: 375,
    img: img6,
    description:
      "Ergonomic chair designed for office work and prolonged gaming sessions with premium comfort.",
    colors: ["#D1D1D1", "#000000"],
    sizes: ["M", "L"],
  },
];

export default function Id() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const product =
    productsData.find((item) => item.id === Number(id)) || productsData[0];

  return (
    <div className="detail-page">
      <p className="detail-route">
        <Link to="/">{t("header.home")}</Link> / <span>{t("categories.gaming")}</span> / <b>{product.title}</b>
      </p>

      <div className="detail-box">
        <div className="detail-thumbs">
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
        </div>

        <div className="detail-main-img">
          <img src={product.img} alt={product.title} />
        </div>

        <div className="detail-info">
          <h2>{product.title}</h2>
          <div className="detail-price">${product.price}.00</div>
          <p className="detail-desc">{product.description}</p>

          <div className="detail-line"></div>

          <div className="detail-row">
            <span>{t("productDetail.colours")}</span>
            <div className="detail-colors">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="color-dot"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>

          <div className="detail-row">
            <span>{t("productDetail.size")}</span>
            <div className="detail-sizes">
              {product.sizes.map((size, index) => (
                <button key={index} type="button">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="detail-actions">
            <div className="detail-qty">
              <button
                type="button"
                onClick={() => setQty((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                -
              </button>
              <span>{qty}</span>
              <button type="button" onClick={() => setQty((prev) => prev + 1)}>
                +
              </button>
            </div>
            <button className="detail-buy">{t("productDetail.buyNow")}</button>
            <button className="detail-fav">
              <AiOutlineHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}