import React from "react";
import "./solutions.css";
import { MdOutlineExpandMore as MoreIcon } from "react-icons/md";

import { useInView } from "react-intersection-observer";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Solutions = () => {
  return (
    <div className="solutions-container">
      <div className="solution-sub-container">
        <h1 className="solutions-title">OUR SOLUTIONS</h1>
        <div className="solution-cards">
          <div className="solution-card">
            <img
              className="solution-card-img"
              src="https://img.freepik.com/free-vector/consultative-sales-concept-illustration_114360-7388.jpg?t=st=1650689495~exp=1650690095~hmac=3d907296b6e42aed98c9c9c43ac3fb4816d1d1d548f1c1ef9906796fedcd81d2&w=740"
              alt=""
            />

            <div className="solution-content">
              <h3 className="solutions-card-title">CONSULTING</h3>
              <p className="solution-desc">
                Redefine your Business Model, Improve the Overall Profits and
                reduce costs from the emerging technologies and Market Dynamics
                with our domain expertise
              </p>
            </div>
          </div>
          <div className="solution-card">
            <img
              className="solution-card-img"
              src="https://img.freepik.com/free-vector/it-managers-integrate-technologies-into-business-operations-enterprise-it-management-it-software-solutions-enterprise-architecture-concept-illustration_335657-2376.jpg?t=st=1650736139~exp=1650736739~hmac=4fb33afc7ed5f576d04c58ab1dda79d74b06b69d10f23ce18f3ebd738f3d7dc9&w=740"
              alt=""
            />
            <div className="solution-content">
              <h3 className="solutions-card-title">TECHNOLOGY OPERATIONS</h3>
              <p>
                Reach Greater Heights through our deep understanding on cloud,
                AI, Blockchain, SAP & infra knowledge.
              </p>
            </div>
          </div>
          <div className="solution-card">
            <img
              className="solution-card-img"
              src="https://img.freepik.com/free-vector/recruitment-agency-applicants-job-interview_1262-18959.jpg?t=st=1651297412~exp=1651298012~hmac=9f8266b29d7b9cbf682aa2881e1972442415e2b6a7921e9c211883d14e336a24&w=740"
              alt=""
            />
            <div className="solution-content">
              <h3 className="solutions-card-title">BUSINESS OPERATIONS</h3>
              <p>
                Digitally transform your Business Operations by Improving
                customer experience & generate customer value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
