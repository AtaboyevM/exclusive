import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./home.css";

import img1 from "../../assets/homesw.png";
import img2 from "../../assets/homesw.png";
import img3 from "../../assets/today1.png";
import img4 from "../../assets/today2.png";
import img5 from "../../assets/today3.png";
import img6 from "../../assets/today5.png";

import { CiMobile3, CiHeadphones } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";

import pr1 from "../../assets/pr1.png";
import pr2 from "../../assets/pr2.png";
import pr3 from "../../assets/pr3.png";
import pr4 from "../../assets/pr4.png";
import ctgimg from "../../assets/ctimg.png";

import ex1 from "../../assets/ex1.png";
import ex2 from "../../assets/ex2.png";
import ex3 from "../../assets/ex3.png";
import ex4 from "../../assets/ex4.png";
import ex5 from "../../assets/ex5.png";
import ex6 from "../../assets/ex6.png";
import ex7 from "../../assets/ex7.png";

import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const openDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-box">
          <aside className="sidebar">
            <ul>
              <li>
                <Link to="/woman-fashion">{t("categories.womansFashion")}</Link>
              </li>
              <li>
                <Link to="/man-fashion">{t("categories.mensFashion")}</Link>
              </li>
              <li>
                <Link to="/electronics">{t("categories.electronics")}</Link>
              </li>
              <li>
                <Link to="/home-lifestyle">
                  {t("categories.homeLifestyle")}
                </Link>
              </li>
              <li>
                <Link to="/medicine">{t("categories.medicine")}</Link>
              </li>
              <li>
                <Link to="/sports-outdoor">
                  {t("categories.sportsOutdoor")}
                </Link>
              </li>
              <li>
                <Link to="/baby-toys">{t("categories.babysToys")}</Link>
              </li>
              <li>
                <Link to="/groceries-pets">
                  {t("categories.groceriesPets")}
                </Link>
              </li>
              <li>
                <Link to="/health-beauty">{t("categories.healthBeauty")}</Link>
              </li>
            </ul>
          </aside>

          <div className="slider">
            <Swiper
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              modules={[Pagination, Autoplay]}
            >
              <SwiperSlide>
                <img src={img1} alt="Banner 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="Banner 2" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Today section start */}
      <section className="flash-section">
        <div className="flash-header">
          <div className="tag">{t("home.todays")}</div>
          <div className="title-row">
            <h2>{t("home.flashSales")}</h2>
            <div className="timer">
              <div>
                <small>{t("home.days")}</small>
                <b>03</b>
              </div>
              :
              <div>
                <small>{t("home.hours")}</small>
                <b>23</b>
              </div>
              :
              <div>
                <small>{t("home.minutes")}</small>
                <b>19</b>
              </div>
              :
              <div>
                <small>{t("home.seconds")}</small>
                <b>56</b>
              </div>
            </div>
          </div>
        </div>

        <div className="flash-grid">
          <div
            className="p-card"
            onClick={() => openDetail(1)}
            style={{ cursor: "pointer" }}
          >
            <div className="p-img">
              <img src={img3} alt="HAVIT HV-G92 Gamepad" />
            </div>
            <h4>HAVIT HV-G92 Gamepad</h4>
            <div className="p-price">
              <span className="red">$120</span>
              <span className="grey">$160</span>
            </div>
          </div>

          <div
            className="p-card"
            onClick={() => openDetail(2)}
            style={{ cursor: "pointer" }}
          >
            <div className="p-img">
              <img src={img4} alt="AK-900 Wired Keyboard" />
            </div>
            <h4>AK-900 Wired Keyboard</h4>
            <div className="p-price">
              <span className="red">$960</span>
              <span className="grey">$1160</span>
            </div>
          </div>

          <div
            className="p-card"
            onClick={() => openDetail(3)}
            style={{ cursor: "pointer" }}
          >
            <div className="p-img">
              <img src={img5} alt="IPS LCD Gaming Monitor" />
            </div>
            <h4>IPS LCD Gaming Monitor</h4>
            <div className="p-price">
              <span className="red">$370</span>
              <span className="grey">$400</span>
            </div>
          </div>

          <div
            className="p-card"
            onClick={() => openDetail(4)}
            style={{ cursor: "pointer" }}
          >
            <div className="p-img">
              <img src={img6} alt="S-Series Comfort Chair" />
            </div>
            <h4>S-Series Comfort Chair</h4>
            <div className="p-price">
              <span className="red">$375</span>
              <span className="grey">$400</span>
            </div>
          </div>
        </div>
      </section>
      {/* Today section end */}

      {/* Category section start */}
      <section className="category-section">
        <div className="category-header">
          <div className="category-title">{t("home.ourProducts")}</div>
          <h2>{t("home.browseByCategory")}</h2>
        </div>

        <div className="category-list">
          <div className="cat-card">
            <CiMobile3 className="icon" />
            <p>{t("categories.phones")}</p>
          </div>

          <div className="cat-card">
            <HiOutlineDesktopComputer className="icon" />
            <p>{t("categories.computers")}</p>
          </div>

          <div className="cat-card">
            <BsSmartwatch className="icon" />
            <p>{t("categories.smartWatch")}</p>
          </div>

          <div className="cat-card active">
            <FiCamera className="icon" />
            <p>{t("categories.camera")}</p>
          </div>

          <div className="cat-card">
            <CiHeadphones className="icon" />
            <p>{t("categories.headPhones")}</p>
          </div>

          <div className="cat-card">
            <IoGameControllerOutline className="icon" />
            <p>{t("categories.gaming")}</p>
          </div>
        </div>
      </section>
      {/* Category section end */}

      {/* Month section start */}
      <section className="month-section">
        <div className="month-hero">
          <div className="month-header">
            <div className="month-title">{t("home.thisMonth")}</div>
            <h2>{t("home.bestSellingProducts")}</h2>
          </div>
          <div className="month-buttton">
            <Link to="/wishlist" className="view-btn">
              {t("home.viewAll")}
            </Link>
          </div>
        </div>
        <div className="products-month">
          <div className="pro-divs">
            <img src={pr1} alt="" />
            <h2 className="product-title">The north coatch</h2>
            <p>
              $260 <span>360$</span>
            </p>
          </div>

          <div className="pro-divs">
            <img src={pr2} alt="" />
            <h2 className="product-title">Gucci duffle bag</h2>
            <p>
              $960 <span>1160$</span>
            </p>
          </div>

          <div className="pro-divs">
            <img src={pr3} alt="" />
            <h2 className="product-title">RGB liquid CPU Cooler</h2>
            <p>
              $160 <span>170$</span>
            </p>
          </div>

          <div className="pro-divs">
            <img src={pr4} alt="" />
            <h2 className="product-title">Small BookSelf</h2>
            <p>360$</p>
          </div>
        </div>
      </section>
      {/* Month section end */}

      {/* category img section start */}
      <section className="category-img">
        <h1 className="category-title1">{t("home.ourProducts")}</h1>
        <div className="category-titles1">
          <h2 className="category-title1">{t("home.musicBannerTitle")}</h2>
          <button className="img-btn1">{t("home.buyNow")}</button>
        </div>

        <div className="category-imgs">
          <div className="img-div">
            <img src={ctgimg} alt="" />
          </div>
        </div>
      </section>
      {/* category img section end */}

      <section className="explore-section">
        <div className="explore-header">
          <div className="explore-title">{t("home.ourProducts")}</div>
          <h2>{t("home.exploreOurProducts")}</h2>
        </div>

        <div className="explore-grid">
          <div className="product-card">
            <img src={ex1} alt="Breed Dry Dog Food" />
            <h4>Breed Dry Dog Food</h4>
            <p className="price">$100</p>
          </div>

          <div className="product-card">
            <img src={ex2} alt="CANON EOS DSLR Camera" />
            <h4>CANON EOS DSLR Camera</h4>
            <p className="price">$360</p>
          </div>

          <div className="product-card">
            <img src={ex3} alt="ASUS FHD Gaming Laptop" />
            <h4>ASUS FHD Gaming Laptop</h4>
            <p className="price">$700</p>
          </div>

          <div className="product-card">
            <img src={ex4} alt="Curology Product Set" />
            <h4>Curology Product Set</h4>
            <p className="price">$500</p>
          </div>

          <div className="product-card">
            <img src={ex5} alt="Kids Electric Car" />
            <h4>Kids Electric Car</h4>
            <p className="price">$960</p>
          </div>

          <div className="product-card">
            <img src={ex6} alt="Jr. Zoom Soccer Cleats" />
            <h4>Jr. Zoom Soccer Cleats</h4>
            <p className="price">$1160</p>
          </div>

          <div className="product-card">
            <img src={ex7} alt="GP11 Shooter USB Gamepad" />
            <h4>GP11 Shooter USB Gamepad</h4>
            <p className="price">$660</p>
          </div>

          <div className="product-card">
            <img src={ex3} alt="Quilted Satin Jacket" />
            <h4>Quilted Satin Jacket</h4>
            <p className="price">$660</p>
          </div>
        </div>

        <div className="explore-footer">
          <button className="view-btn">{t("home.viewAllProducts")}</button>
        </div>
      </section>

      <section className="services-section">
        <div className="service-card">
          <div className="icon-circle">
            <div className="icon-inner">
              <TbTruckDelivery className="s-icon" />
            </div>
          </div>
          <h3>{t("services.freeDeliveryTitle")}</h3>
          <p>{t("services.freeDeliveryDesc")}</p>
        </div>

        <div className="service-card">
          <div className="icon-circle">
            <div className="icon-inner">
              <RiCustomerService2Line className="s-icon" />
            </div>
          </div>
          <h3>{t("services.customerServiceTitle")}</h3>
          <p>{t("services.customerServiceDesc")}</p>
        </div>

        <div className="service-card">
          <div className="icon-circle">
            <div className="icon-inner">
              <HiOutlineDesktopComputer className="s-icon" />
            </div>
          </div>
          <h3>{t("services.moneyBackTitle")}</h3>
          <p>{t("services.moneyBackDesc")}</p>
        </div>
      </section>
    </>
  );
}
