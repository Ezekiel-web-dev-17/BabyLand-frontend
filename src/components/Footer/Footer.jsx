import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
import footImg from "../../assets/babyland img.png"
import footLogo from "../../assets/image 2.png"
import ig from "../../assets/insta.png"
import fb from "../../assets/facebook.png"
import X from "../../assets/X.png"
import pin from "../../assets/pininterest.png"

const Footer = () => {
  return (
    <footer className="position-relative">
      <img className="foot-img position-relative" src={footImg} alt="" />
      <div className="inn-footer text-start d-flex align-items-start position-absolute">
        <div className="foot-one d-flex flex-column">
          <div className="d-flex flex-column align-items-start gap-3">
            <Link to="/">
              <img src={footLogo} alt="" />
            </Link>
            <p className="m-0">
              Nunc consequat interdum varius sit amet mattis. 
            </p>
          </div>

          <div className="d-flex align-items-start gap-3">
            <a href="#">
              <img src={ig} alt="" />
            </a>

            <a href="#">
              <img src={X} alt="" />
            </a>
            <a href="#">
              <img src={fb} alt="" />
            </a>
            <a href="#">
              <img src={pin} alt="" />
            </a>
          </div>
        </div>

        {/* ========================== */}
        
        <div className="foot-two d-flex flex-column align-items-start">
          <h5 className="mb-0">My account</h5>

          <div className="d-flex flex-column align-items-start gap-3">
            <p>Track my order</p>
            <p>Terms of use</p>
            <p>Wishlist</p>
            <p>Submit Your feedback</p>
          </div>
        </div>

        {/* ========================= */}

        <div className="foot-three d-flex flex-column align-items-start">
          <h5 className="mb-0">Customer service</h5>

          <div className="d-flex flex-column align-items-start gap-3">
            <p>Monday to Friday</p>
            <p>10am - 6pm( persoNewYork time)</p>
            <p>Call us: <span>123-456-7868</span></p>
            <p>Email us: <span>tabukeezekiel9@gmail.com</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer