import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../redux/like";
import { updateTime } from "../../redux/clockSlice";
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
import { IoHeart, IoHeartOutline, IoEyeOutline } from "react-icons/io5";

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
  const dispatch = useDispatch();

  const likedIds = useSelector((state) => state.like?.likedIds || []);
  const time = useSelector((state) => state.clock?.time);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(updateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  const openDetail = (id) => {
    navigate(`/product/${id}`);
  };

  const handleLikeClick = (e, id) => {
    e.stopPropagation();
    dispatch(toggleLike(id));
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

      <section className="flash-section">
        <div className="flash-header">
          <div className="tag">{t("home.todays")}</div>
          <div className="title-row">
            <h2>{t("home.flashSales")}</h2>
            <div className="timer">
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>{time}</div>
            </div>
          </div>
        </div>

        <div className="flash-grid">
          <div className="p-card" onClick={() => openDetail(1)}>
            <div className="p-img">
              <div className="card-icons">
                <button
                  type="button"
                  className={`card-icon-btn ${likedIds.includes(1) ? "liked" : ""}`}
                  onClick={(e) => handleLikeClick(e, 1)}
                >
                  {likedIds.includes(1) ? (
                    <IoHeart color="#db4444" size={18} />
                  ) : (
                    <IoHeartOutline size={18} />
                  )}
                </button>
                <button
                  type="button"
                  className="card-icon-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IoEyeOutline size={18} />
                </button>
              </div>
              <img src={img3} alt="HAVIT HV-G92 Gamepad" />
            </div>
            <h4>HAVIT HV-G92 Gamepad</h4>
            <div className="p-price">
              <span className="red">$120</span>
              <span className="grey">$160</span>
            </div>
          </div>

          <div className="p-card" onClick={() => openDetail(2)}>
            <div className="p-img">
              <div className="card-icons">
                <button
                  type="button"
                  className={`card-icon-btn ${likedIds.includes(2) ? "liked" : ""}`}
                  onClick={(e) => handleLikeClick(e, 2)}
                >
                  {likedIds.includes(2) ? (
                    <IoHeart color="#db4444" size={18} />
                  ) : (
                    <IoHeartOutline size={18} />
                  )}
                </button>
                <button
                  type="button"
                  className="card-icon-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IoEyeOutline size={18} />
                </button>
              </div>
              <img src={img4} alt="AK-900 Wired Keyboard" />
            </div>
            <h4>AK-900 Wired Keyboard</h4>
            <div className="p-price">
              <span className="red">$960</span>
              <span className="grey">$1160</span>
            </div>
          </div>

          <div className="p-card" onClick={() => openDetail(3)}>
            <div className="p-img">
              <div className="card-icons">
                <button
                  type="button"
                  className={`card-icon-btn ${likedIds.includes(3) ? "liked" : ""}`}
                  onClick={(e) => handleLikeClick(e, 3)}
                >
                  {likedIds.includes(3) ? (
                    <IoHeart color="#db4444" size={18} />
                  ) : (
                    <IoHeartOutline size={18} />
                  )}
                </button>
                <button
                  type="button"
                  className="card-icon-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IoEyeOutline size={18} />
                </button>
              </div>
              <img src={img5} alt="IPS LCD Gaming Monitor" />
            </div>
            <h4>IPS LCD Gaming Monitor</h4>
            <div className="p-price">
              <span className="red">$370</span>
              <span className="grey">$400</span>
            </div>
          </div>

          <div className="p-card" onClick={() => openDetail(4)}>
            <div className="p-img">
              <div className="card-icons">
                <button
                  type="button"
                  className={`card-icon-btn ${likedIds.includes(4) ? "liked" : ""}`}
                  onClick={(e) => handleLikeClick(e, 4)}
                >
                  {likedIds.includes(4) ? (
                    <IoHeart color="#db4444" size={18} />
                  ) : (
                    <IoHeartOutline size={18} />
                  )}
                </button>
                <button
                  type="button"
                  className="card-icon-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IoEyeOutline size={18} />
                </button>
              </div>
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
            <div className="p-img">
              <div className="card-icons">
                <button
                  type="button"
                  className={`card-icon-btn ${likedIds.includes(5) ? "liked" : ""}`}
                  onClick={(e) => handleLikeClick(e, 5)}
                >
                  {likedIds.includes(5) ? (
                    <IoHeart color="#db4444" size={18} />
                  ) : (
                    <IoHeartOutline size={18} />
                  )}
                </button>
                <button
                  type="button"
                  className="card-icon-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IoEyeOutline size={18} />
                </button>
              </div>
              <img src={pr1} alt="" />
            </div>
            <h2 className="product-title">The north coatch</h2>
            <p>
              $260 <span>360$</span>
            </p>
          </div>

          <div className="pro-divs">
            <div className="p-img">
              <div className="card-icons">
                <button
                  type="button"
                  className={`card-icon-btn ${likedIds.includes(6) ? "liked" : ""}`}
                  onClick={(e) => handleLikeClick(e, 6)}
                >
                  {likedIds.includes(6) ? (
                    <IoHeart color="#db4444" size={18} />
                  ) : (
                    <IoHeartOutline size={18} />
                  )}
                </button>
                <button
                  type="button"
                  className="card-icon-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IoEyeOutline size={18} />
                </button>
              </div>
              <img src={pr2} alt="" />
            </div>
            <h2 className="product-title">Gucci duffle bag</h2>
            <p>
              $960 <span>1160$</span>
            </p>
          </div>

          <div className="pro-divs">
            <div className="p-img">
              <div className="card-icons">
                <button
                  type="button"
                  className={`card-icon-btn ${likedIds.includes(7) ? "liked" : ""}`}
                  onClick={(e) => handleLikeClick(e, 7)}
                >
                  {likedIds.includes(7) ? (
                    <IoHeart color="#db4444" size={18} />
                  ) : (
                    <IoHeartOutline size={18} />
                  )}
                </button>
                <button
                  type="button"
                  className="card-icon-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IoEyeOutline size={18} />
                </button>
              </div>
              <img src={pr3} alt="" />
            </div>
            <h2 className="product-title">RGB liquid CPU Cooler</h2>
            <p>
              $160 <span>170$</span>
            </p>
          </div>

          <div className="pro-divs">
            <div className="p-img">
              <div className="card-icons">
                <button
                  type="button"
                  className={`card-icon-btn ${likedIds.includes(8) ? "liked" : ""}`}
                  onClick={(e) => handleLikeClick(e, 8)}
                >
                  {likedIds.includes(8) ? (
                    <IoHeart color="#db4444" size={18} />
                  ) : (
                    <IoHeartOutline size={18} />
                  )}
                </button>
                <button
                  type="button"
                  className="card-icon-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IoEyeOutline size={18} />
                </button>
              </div>
              <img src={pr4} alt="" />
            </div>
            <h2 className="product-title">Small BookSelf</h2>
            <p>360$</p>
          </div>
        </div>
      </section>

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

      <section className="explore-section">
        <div className="explore-header">
          <div className="explore-title">{t("home.ourProducts")}</div>
          <h2>{t("home.exploreOurProducts")}</h2>
        </div>

        <div className="explore-grid">
          {[
            { id: 9, img: ex1, title: "Breed Dry Dog Food", price: "$100" },
            { id: 10, img: ex2, title: "CANON EOS DSLR Camera", price: "$360" },
            {
              id: 11,
              img: ex3,
              title: "ASUS FHD Gaming Laptop",
              price: "$700",
            },
            { id: 12, img: ex4, title: "Curology Product Set", price: "$500" },
            { id: 13, img: ex5, title: "Kids Electric Car", price: "$960" },
            {
              id: 14,
              img: ex6,
              title: "Jr. Zoom Soccer Cleats",
              price: "$1160",
            },
            {
              id: 15,
              img: ex7,
              title: "GP11 Shooter USB Gamepad",
              price: "$660",
            },
            { id: 16, img: ex3, title: "Quilted Satin Jacket", price: "$660" },
          ].map((item) => (
            <div
              className="product-card"
              key={item.id}
              onClick={() => openDetail(item.id)}
            >
              <div className="p-img">
                <div className="card-icons">
                  <button
                    type="button"
                    className={`card-icon-btn ${likedIds.includes(item.id) ? "liked" : ""}`}
                    onClick={(e) => handleLikeClick(e, item.id)}
                  >
                    {likedIds.includes(item.id) ? (
                      <IoHeart color="#db4444" size={18} />
                    ) : (
                      <IoHeartOutline size={18} />
                    )}
                  </button>
                  <button
                    type="button"
                    className="card-icon-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IoEyeOutline size={18} />
                  </button>
                </div>
                <img src={item.img} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
              <p className="price">{item.price}</p>
            </div>
          ))}
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
