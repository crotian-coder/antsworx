import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <span className="footer-heading">SERVICES</span>
      <div className="footer-content">
        <div>
          <span className="footer-points" href="">
            Technology Operations
          </span>
          <div className="footer-sub-points">
            <a className="footer-sub-point" href="">
              Software Development & Maintenance
            </a>
            <a className="footer-sub-point" href="">
              Software Quality Assurance & Automation
            </a>
            <a className="footer-sub-point" href="">
              Devops
            </a>
            <a className="footer-sub-point" href="">
              Infra & Cloud Services
            </a>
            <a className="footer-sub-point" href="">
              SAP Hana
            </a>
          </div>
        </div>
        <div>
          <span className="footer-points" href="">
            Technology Operations
          </span>
          <div className="footer-sub-points">
            <a href="" className="footer-sub-point">
              Lead to Cash (L2C)
            </a>
            <a href="" className="footer-sub-point">
              Record to Report
            </a>
            <a href="" className="footer-sub-point">
              Source to Pay Process
            </a>
            <a href="" className="footer-sub-point">
              Transform your Trouble to Resolve
            </a>
            <a href="" className="footer-sub-point">
              Process
            </a>
            <a href="" className="footer-sub-point">
              Business Assurance
            </a>
            <a href="" className="footer-sub-point">
              Billing Operations
            </a>
            <a href="" className="footer-sub-point">
              Customer Support (CSaaS)
            </a>
            <a href="" className="footer-sub-point">
              Technical Support (TSaaS)
            </a>
          </div>
        </div>
        <div>
          <span className="footer-points" href="">
            Technology Operations
          </span>
          <div className="footer-sub-points">
            <a href="" className="footer-sub-point">
              Cost Transformation
            </a>
            <a href="" className="footer-sub-point">
              Operational Transformation
            </a>
            <a href="" className="footer-sub-point">
              Technology Transformation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
