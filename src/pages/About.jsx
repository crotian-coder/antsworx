import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <div className="about-left-sub">
          <div className="about-title">
            {" "}
            <p className="about-title-content">ABOUT</p>{" "}
            <p className="about-title-content">US</p>{" "}
          </div>
          <div className="about-content">
            Antsworx is a Next-Gen business service provider that offers
            optimized managed services (IT, Consulting & Business Operations
            services). We at Antsworx combines tech expertise and business
            intelligence to catalyze change and deliver results. we help you
            realize that golden ratio where your technology and business are in
            complete synergy, making your company greater than the sum of its
            parts. Founded in 2019, by a group of aspiring individuals who have
            been experts in their respective fields of services like Telecom,
            Info. Technologies, Banking & Financial Services etc.
          </div>
        </div>
      </div>
      <img
        src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?t=st=1650947603~exp=1650948203~hmac=a986df83888eba7f73e602cfa59597cb99d09ee8fc4de2045ed9568d363043dc&w=740"
        alt=""
      />
    </div>
  );
};

export default About;
