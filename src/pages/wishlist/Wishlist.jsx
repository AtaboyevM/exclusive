import React from "react";
import { useTranslation } from "react-i18next";
import "./wish.css";
import "../../pages/home/home.css";
import pr1 from "../../assets/pr1.png";
import pr2 from "../../assets/pr2.png";
import pr3 from "../../assets/pr3.png";
import pr4 from "../../assets/pr4.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div>
      <section className="month-section">
        <div className="month-hero">
          <div className="month-header">
            <div className="month-title">{t("home.thisMonth")}</div>
            <h2>{t("home.bestSellingProducts")}</h2>
          </div>
          <div className="month-buttton">
            <button className="view-btn">{t("home.viewAll")}</button>
          </div>
        </div>
        <div className="products-month">
          <div className="pro-divs">
            <img src={pr1} alt="" />
            <h2 className="product-title">The north coatch</h2>
            <p>$260 <span>360$</span></p>
            <button className="addwish"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: 1,
                    name: "The north coatch",
                    price: 260,
                    img: pr1,
                  })
                )
              }
            >
              Add To Cart
            </button>
          </div>

          <div className="pro-divs">
            <img src={pr2} alt="" />
            <h2 className="product-title">Gucci duffle bag</h2>
            <p>$960 <span>1160$</span></p>
            <button className="addwish"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: 2,
                    name: "Gucci duffle bag",
                    price: 960,
                    img: pr2,
                  })
                )
              }
            >
              Add To Cart
            </button>
          </div>

          <div className="pro-divs">
            <img src={pr3} alt="" />
            <h2 className="product-title">RGB liquid CPU Cooler</h2>
            <p>$160 <span>170$</span></p>
            <button className="addwish"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: 3,
                    name: "RGB liquid CPU Cooler",
                    price: 160,
                    img: pr3,
                  })
                )
              }
            >
              Add To Cart
            </button>
          </div>

          <div className="pro-divs">
            <img src={pr4} alt="" />
            <h2 className="product-title">Small BookSelf</h2>
            <p>360$</p>
            <button className="addwish"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: 4,
                    name: "Small BookSelf",
                    price: 360,
                    img: pr4,
                  })
                )
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
      </section>
      <div className="margin-btm"></div>
    </div>
  );
};

export default Wishlist;