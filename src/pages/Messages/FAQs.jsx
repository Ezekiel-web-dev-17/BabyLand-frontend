import React, { useState } from 'react';
import "./FAQs.css";
import { Link } from 'react-router-dom';
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png"

const FAQs = () => {
  // State to track which accordion is active
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle accordion click
  const handleToogle = (index) => {
    setActiveIndex((prevIndex) => {
      return prevIndex === index ? null : index;
    })
  }

  const faqs = [
    {
      question: "How will my order be delivered to me?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },

    {
      question: "What do I need to know?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      question: "How will I know if order is placed successfully?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      question: "How do I check the status of my order?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      question: "Can I cancel my order?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },

  ]
  return (
    <div className="faq-sec container">
      <div className="faq-one text-start px-3 py-3 mb-3">
        <p><Link className="text-decoration-none" to="/">Home</Link>{" "} / <span><Link className="text-decoration-none">FAQ's</Link></span></p>
      </div>

      {/* ================================================================ */}

      <div className="faq-two text-start px-3 d-flex flex-column align-items-start">
        <h2>FAQ'S</h2>
        <div className="arcodion d-flex flex-column align-items-start gap-4 w-100 rounded-4">{faqs.map((faq, index) => {
          return( <div className={`arco-item ${activeIndex === index ? "active" : ""}`} key={index}>
            <div className="faq-click d-flex align-items-center gap-3" onClick={() => {
              return handleToogle(index);
            }}>
              <img src={activeIndex === index ? minus : plus} alt="" />
              <h5 className="m-0">{faq.question}</h5>
            </div>

            <div className="faq-para mt-4 pt-2" style={{maxHeight: activeIndex === index ? "200px" : "0",
              overflow: "hidden",
              transition: "max-height 0.5s ease-in-out",
            }}>
              <p>{faq.answer}</p>
            </div>
          </div>
          )
        })}</div>
      </div>
    </div>
  );
};

export default FAQs;