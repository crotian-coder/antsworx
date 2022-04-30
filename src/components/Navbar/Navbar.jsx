import React from "react";
import "./navbar.css";
import logo from "./antsworx-logo.png";
import { FaHome as HomeLogo } from "react-icons/fa";
import { MdOutlineMiscellaneousServices as ServicesLogo } from "react-icons/md";
import { HiLightBulb as SolutionsLogo } from "react-icons/hi";
import { MdWork as CareersLogo } from "react-icons/md";
import { IoIosContact as ContactLogo } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img
          className="nav-logo-img"
          src="https://www.antsworx.com/wp-content/uploads/2022/03/logo-300x265.png"
          alt=""
          srcset=""
        />
      </div>

      <div className="nav-btns">
        <div className="nav-btn">
          <ServicesLogo className="logo" style={{ zIndex: "3" }} />

          <span className="nav-btn-text">Services</span>
          <div className="nav-btn-content">
            <p className="nav-btn-content-item">Technology Operations</p>
            <p className="nav-btn-content-item">Business Operations</p>
            <p className="nav-btn-content-item">Consulting</p>
          </div>
        </div>
        <div className="nav-btn">
          <SolutionsLogo className="logo" style={{ zIndex: "3" }} />

          <span className="nav-btn-text">Solutions</span>
          <div className="nav-btn-content">
            <p className="nav-btn-content-item">Robotic Process Automation</p>
            <p className="nav-btn-content-item">
              Artificial Intelligence and Machine Learning
            </p>
            <p className="nav-btn-content-item">
              Contract Management Digitalization
            </p>
            <p className="nav-btn-content-item">SAP Implementation Services</p>
            <p className="nav-btn-content-item">SAP Upgrade Services</p>
            <p className="nav-btn-content-item">Managed Services</p>
            <p className="nav-btn-content-item">Migration Services</p>
          </div>
        </div>
        <div className="nav-btn">
          <HomeLogo className="logo" style={{ zIndex: "3" }} />
          <span className="nav-btn-text">Company</span>
          <div className="nav-btn-content">
            <p className="nav-btn-content-item">About us</p>
            <p className="nav-btn-content-item">Our vision and mission</p>
            <p className="nav-btn-content-item">Our values</p>
            <p className="nav-btn-content-item">Our cultures</p>
          </div>
        </div>
        <div className="nav-btn">
          <CareersLogo className="logo" style={{ zIndex: "3" }} />

          <span className="nav-btn-text">Careers</span>
        </div>
        <div className="nav-btn">
          <ContactLogo className="logo" style={{ zIndex: "3" }} />

          <span className="nav-btn-text">Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
