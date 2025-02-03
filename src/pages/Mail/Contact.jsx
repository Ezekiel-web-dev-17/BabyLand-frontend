import React from 'react';
import "./Contact.css";
import { Link } from 'react-router-dom';
import phone from "../../assets/Phone.png";
import mail from "../../assets/mail.png";
import location from "../../assets/location.png";
import map from "../../assets/Map.png";

const Contact = () => {
  return (
    <div className="contact-sec container">
      <div className="contact-one text-start px-3 py-2 mb-3">
        <p className="m-0">
          <Link to="/" className="text-decoration-none">Home /</Link> <span><Link to="/contact"  className="text-decoration-none">Contact</Link></span>
        </p>
      </div>

      {/* ============================================================ */}

      <div className="contact-two px-3 text-start py-4 d-flex flex-column align-items-start gap-5 mb-3">
        <h2 className="m-0">Contact</h2>

        {/* =================================== */}

        <div className="all-media d-flex align-items-center justify-content-between">
          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-1">
            <div className="d-flex flex-column align-items-center gap-3">
              <img src={phone} alt="" />
              <p className="m-0 reach">Phone number</p>
            </div>
            <p className="m-0 get">+234 916 218 8221</p>
          </div>

          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-1">
            <div className="d-flex flex-column align-items-center gap-3">
              <img src={mail} alt="" />
              <p className="m-0 reach">Email</p>
            </div>
            <p className="m-0 get">tabubukeezekiel9@gmail.com</p>
          </div>

          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-1">
            <div className="d-flex flex-column align-items-center gap-3">
              <img src={location} alt="" />
              <p className="m-0 reach">Address Place</p>
            </div>
            <p className="m-0 get">1930 marigold lane, way Miami, Florida USA</p>
          </div>
        </div>
      </div>

      {/* ================================== */}

      <div className="loc-con d-flex align-items-center justify-content-between gap-4">
        <img src={map} alt="" />
       
        <form className="con-form text-start d-flex flex-column align-items-start gap-5" action="" >
          <div className="d-flex flex-column gap-4">
            <h3>Contact Us</h3>
            <div className="con-inp d-flex flex-column gap-4">
              <input className="px-3 py-2 rounded-3" type="text" placeholder="Your name" />
              <input className="px-3 py-2 rounded-3" type="number" placeholder="Phone number" />
              <input className="px-3 py-2 rounded-3" type="email" placeholder="Email address" />
              <textarea className="px-3 py-2 rounded-3" rows={5}  name="" id="" placeholder="Write your comment here..."></textarea>
            </div>
          </div>

          <button className="px-4 py-2 rounded-4 border-0">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact