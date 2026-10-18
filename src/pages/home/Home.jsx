import React from "react";
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

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

import { CiMobile3 } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import { CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";


import pr1 from '../../assets/pr1.png'
import pr2 from '../../assets/pr2.png'
import pr3 from '../../assets/pr3.png'
import pr4 from '../../assets/pr4.png'
import ctgimg from '../../assets/ctimg.png'

import ex1 from '../../assets/ex1.png';
import ex2 from '../../assets/ex2.png';
import ex3 from '../../assets/ex3.png';
import ex4 from '../../assets/ex4.png';
import ex5 from '../../assets/ex5.png';
import ex6 from '../../assets/ex6.png';
import ex7 from '../../assets/ex7.png';


import { TbTruckDelivery } from 'react-icons/tb';
import { RiCustomerService2Line } from 'react-icons/ri';


export default function Home() {

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
                <Link to="/woman-fashion">Woman's Fashion</Link>
              </li>
              <li>
                <Link to="/man-fashion">Men's Fashion</Link>
              </li>
              <li>
                <Link to="/electronics">Electronics</Link>
              </li>
              <li>
                <Link to="/home-lifestyle">Home Lifestyle</Link>
              </li>
              <li>
                <Link to="/medicine">Medicine</Link>
              </li>
              <li>
                <Link to="/sports-outdoor">Sports Outdoor</Link>
              </li>
              <li>
                <Link to="/baby-toys">Baby's Toys</Link>
              </li>
              <li>
                <Link to="/groceries-pets">Groceries Pets</Link>
              </li>
              <li>
                <Link to="/health-beauty">Health Beauty</Link>
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
        <div className="tag">Today's</div>
        <div className="title-row">
          <h2>Flash Sales</h2>
          <div className="timer">
            <div>
              <small>Days</small>
              <b>03</b>
            </div>
            :
            <div>
              <small>Hours</small>
              <b>23</b>
            </div>
            :
            <div>
              <small>Minutes</small>
              <b>19</b>
            </div>
            :
            <div>
              <small>Seconds</small>
              <b>56</b>
            </div>
          </div>
        </div>
      </div>

      <div className="flash-grid">
        <div className="p-card" onClick={() => openDetail(1)} style={{ cursor: 'pointer' }}>
          <div className="p-img">
            <img src={img3} alt="HAVIT HV-G92 Gamepad" />
          </div>
          <h4>HAVIT HV-G92 Gamepad</h4>
          <div className="p-price">
            <span className="red">$120</span>
            <span className="grey">$160</span>
          </div>
        </div>

        <div className="p-card" onClick={() => openDetail(2)} style={{ cursor: 'pointer' }}>
          <div className="p-img">
            <img src={img4} alt="AK-900 Wired Keyboard" />
          </div>
          <h4>AK-900 Wired Keyboard</h4>
          <div className="p-price">
            <span className="red">$960</span>
            <span className="grey">$1160</span>
          </div>
        </div>

        <div className="p-card" onClick={() => openDetail(3)} style={{ cursor: 'pointer' }}>
          <div className="p-img">
            <img src={img5} alt="IPS LCD Gaming Monitor" />
          </div>
          <h4>IPS LCD Gaming Monitor</h4>
          <div className="p-price">
            <span className="red">$370</span>
            <span className="grey">$400</span>
          </div>
        </div>

        <div className="p-card" onClick={() => openDetail(4)} style={{ cursor: 'pointer' }}>
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
          <div className="category-title">Categories</div>
          <h2>Browse By Category</h2>
        </div>

        <div className="category-list">
          <div className="cat-card">
            <CiMobile3 className="icon" />
            <p>Phones</p>
          </div>

          <div className="cat-card">
            <HiOutlineDesktopComputer className="icon" />
            <p>Computers</p>
          </div>

          <div className="cat-card">
            <BsSmartwatch className="icon" />
            <p>SmartWatch</p>
          </div>

          <div className="cat-card active">
            <FiCamera className="icon" />
            <p>Camera</p>
          </div>

          <div className="cat-card">
            <CiHeadphones className="icon" />
            <p>HeadPhones</p>
          </div>

          <div className="cat-card">
            <IoGameControllerOutline className="icon" />
            <p>Gaming</p>
          </div>
        </div>
      </section>
      {/* Category section end */}

      {/* Month section start */}
      <section className="month-section">
        <div className="month-hero">
          <div className="month-header">
            <div className="month-title">This Month</div>
            <h2>Best Silling Products</h2>
          </div>
          <div className="month-buttton">
            <button className="view-btn">View All</button>
          </div>
        </div>
        <div className="products-month">
          <div className="pro-divs">
            <img src={pr1} alt="" />
            <h2 className="product-title">The north coatch</h2>
            <p>$260 <span>360$</span></p>
          </div>

            <div className="pro-divs">
            <img src={pr2} alt="" />
            <h2 className="product-title">Gucci duffle bag</h2>
            <p>$960 <span>1160$</span></p>
          </div>

            <div className="pro-divs">
            <img src={pr3} alt="" />
            <h2 className="product-title">RGB liquid CPU Cooler</h2>
            <p>$160 <span>170$</span></p>
          </div>

            <div className="pro-divs">
            <img src={pr4} alt="" />
            <h2 className="product-title">Small BookSelf</h2>
            <p>360$</p>
          </div>
        </div>
      </section>
      {/* Month section end */}
      {/* category img sectio0n start */}
      <section className="category-img">
        <h1 className="category-title1">Categories</h1>
        <div className="category-titles1">
          <h2 className="category-title1">Enhance Your Music Experience</h2>
          <button className="img-btn1">Buy Now!</button>
        </div>

        <div className="category-imgs">
          <div className="img-div">
            <img src={ctgimg} alt="" />
          </div>
        </div>
      </section>
      {/* category img sectio0n end */}

      <section className="explore-section">
      <div className="explore-header">
        <div className="explore-title">Our Products</div>
        <h2>Explore Our Products</h2>
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
        <button className="view-btn">View All Products</button>
      </div>
    </section>
    <section className="services-section">
      <div className="service-card">
        <div className="icon-circle">
          <div className="icon-inner">
            <TbTruckDelivery className="s-icon" />
          </div>
        </div>
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
      </div>

      <div className="service-card">
        <div className="icon-circle">
          <div className="icon-inner">
            <RiCustomerService2Line className="s-icon" />
          </div>
        </div>
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>

      <div className="service-card">
        <div className="icon-circle">
          <div className="icon-inner">
          <HiOutlineDesktopComputer className="s-icon" />
          </div>
        </div>
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
      </div>
    </section>
    </>
  );
}
