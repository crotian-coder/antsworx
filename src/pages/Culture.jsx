import React from "react";
import "./goal.css";
import { useInView } from "react-intersection-observer";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import wave from "../images/wave.svg";

export const Culture = () => {
  const animationConfiguration = {
    initial: { opacity: 0, x: "-50vw" },
    animate: { opacity: 1, x: "0" },
    exit: { opacity: 0 },
  };
  return (
    <div className="culture-container">
      <div className="goal-sub-container">
        <div className="goal-mission-container">
          <img
            className="vision-img"
            src="https://img.freepik.com/free-vector/office-concept-illustration_114360-1248.jpg?t=st=1650954456~exp=1650955056~hmac=c49cebade40fbd9cff012dd6be58452c749eaac81198bfeb1660c74f11b787d5&w=740"
            alt=""
          />
        </div>
        <div className="goal-vision">
          <h2 className="goal-mission-title">OUR CULTURE</h2>
          <p className="culture-content">
            <p>
              Our workplace is special. We feel it when we come to work every
              day, and others feel it when they interact with us. That feeling
              is a combination of our highly engaged people, our culture, the
              work we do for our customers & suppliers, and our focus on growth.
              It is what makes antsworx an incredible place to work. Each of us
              has a story about what connects us to antsworx, and one common
              purpose that binds us all is our deep understanding of the role we
              play in making our services better. We work together with our
              customers, suppliers striving to create & provide quality products
              & services that improves the revenues and optimizes the expenses..
              We are driven, and we deliver results while constantly challenging
              ourselves to achieve more. We do what we say. We care about each
              other like a family. By supporting and challenging each other, we
              achieve our best as a team. We overcome obstacles and celebrate
              our wins.
            </p>
          </p>
        </div>
      </div>
      <img className="culture-footer-img" src={wave} alt="" />
    </div>
  );
};
