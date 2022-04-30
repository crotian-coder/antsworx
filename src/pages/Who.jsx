import React from "react";
import "./goal.css";
import { useInView } from "react-intersection-observer";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export const Who = () => {
  const animationConfiguration = {
    initial: { opacity: 0, x: "-50vw" },
    animate: { opacity: 1, x: "0" },
    exit: { opacity: 0 },
  };
  return (
    <div className="goal-container">
      <div className="goal-sub-container">
        <div className="who-content">
          <h2 className="who-title">Who We Are</h2>
          <p className="goal-mission-content">
            <p>
              We believe in a world where people make decisions based on facts
              and truthful data. We believe in a connected, transparent and
              sustainable world. We ensure the highest levels of certainty and
              satisfaction through a deep-set commitment to our clients,
              comprehensive industry expertise and a global network of
              innovation and delivery centers. We function as a full stakeholder
              to business, offering a consulting-led approach with an integrated
              portfolio of technology led solutions that encompass the entire
              Enterprise value chain. Our Customer-centric Engagement Model
              defines how we do engage with you.
            </p>
          </p>
        </div>
        <div className="who-image-container">
          <img
            className="who-img"
            src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-18636.jpg?t=st=1650953743~exp=1650954343~hmac=b84c76889190465eb8962a89d3b9d5000b30e4693630c2ffb99cf948d495c834&w=740"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
