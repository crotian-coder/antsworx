import React from "react";
import "./quality.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export const Quality = () => {
  const [show, setShow] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    console.log("inView", inView);

    if (inView) {
      setShow(true);
    }
  }, [inView]);
  return (
    <div ref={ref} className={"quality-container-show"}>
      <div className="quality-title-container">
        <span className="quality-title">QUALITY FIRST</span>
      </div>
      <div className="quality-cards">
        <div className="quality-card">
          <img
            className="quality-img"
            src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899173.jpg?size=626&ext=jpg&ga=GA1.2.1355740865.1650295976"
            alt=""
          />
          <p className="quality-content">
            <div className="quality-sub-title-container">
              <p className="quality-sub-title">Customer Focus</p>
              <div className="quality-underline"></div>
            </div>
            <br />
            We are intensely committed and dedicated to our customers. Our
            specialized business units allow us to stay close to our customers
            and help us achieve the highest level of customer engagement. We
            drive engagement with our customers through collaboration and
            innovative, high quality products & services
          </p>
        </div>
        <div className="quality-card">
          <img
            src="https://img.freepik.com/free-vector/business-team-doing-lightbulb-from-jigsaw-puzzle-rising-arrow-creative-idea-insight-notion-invention-concept-white-background_335657-1684.jpg?t=st=1651120971~exp=1651121571~hmac=85ac94aae9bdf0c6da06a3c9000f469c92c3fd0e577d7aad2ba6df298b8e8428&w=740"
            alt=""
            className="quality-img"
          />
          <p className="quality-content">
            <div className="quality-sub-title-container">
              <p className="quality-sub-title">Innovation</p>
              <div className="quality-underline"></div>
            </div>{" "}
            <br />
            We are intensely committed and dedicated to our customers. Our
            specialized business units allow us to stay close to our customers
            and help us achieve the highest level of customer engagement. We
            drive engagement with our customers through collaboration and
            innovative, high quality products & services
          </p>
        </div>

        <div className="quality-card">
          <img
            src="https://img.freepik.com/free-vector/successful-partnership-negotiation-partners-handshaking_335657-2453.jpg?t=st=1651123717~exp=1651124317~hmac=aff5440eb3b0d8f95eae2f6eff5e3dc2c6446acc9dfd4c9e17021734b916cd5e&w=740"
            alt=""
            className="quality-img"
          />
          <p className="quality-content">
            <div className="quality-sub-title-container">
              <p className="quality-sub-title">Globalization</p>
              <div className="quality-underline"></div>
            </div>
            <br />
            We are intensely committed and dedicated to our customers. Our
            specialized business units allow us to stay close to our customers
            and help us achieve the highest level of customer engagement. We
            drive engagement with our customers through collaboration and
            innovative, high quality products & services
          </p>
        </div>
        <div className="quality-card">
          <img
            src="https://img.freepik.com/free-vector/indian-rupee-investment-concept_23-2148007574.jpg?t=st=1651123851~exp=1651124451~hmac=d722bb26f1beabc453a8cb562386265542d595e0e36bdd6e2d10e73345e2217c&w=740"
            alt=""
            className="quality-img"
          />
          <p className="quality-content">
            <div className="quality-sub-title-container">
              <p className="quality-sub-title">Cost Transformation</p>
              <div className="quality-underline"></div>
            </div>
            <br />
            We are intensely committed and dedicated to our customers. Our
            specialized business units allow us to stay close to our customers
            and help us achieve the highest level of customer engagement. We
            drive engagement with our customers through collaboration and
            innovative, high quality products & services
          </p>
        </div>
      </div>
    </div>
  );
};
