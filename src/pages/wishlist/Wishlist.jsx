import React from 'react'
import './wish.css'
import '../../pages/home/home.css'
import pr1 from '../../assets/pr1.png'
import pr2 from '../../assets/pr2.png'
import pr3 from '../../assets/pr3.png'
import pr4 from '../../assets/pr4.png'

const Wishlist = () => {
  return (
    <div>
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
                  <div className="margin-btm"></div>
    </div>
  )
}

export default Wishlist