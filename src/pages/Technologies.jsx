import React, { useState } from "react";
import "./technologies.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Technologies() {
  const [imgState, setImgState] = useState({
    img1: true,
    img2: false,
    img3: false,
    img4: false,
    img5: false,
    img6: false,
  });

  const onMouseEnterFunc = (key) => {
    let imgStateCopy = { ...imgState };

    Object.keys(imgStateCopy).forEach((key) => (imgStateCopy[key] = false));

    imgStateCopy[`img${key}`] = true;

    setImgState(imgStateCopy);
  };

  const onMouseLeaveFunc = (key) => {
    let imgStateCopy = { imgState };
    imgStateCopy.img0 = true;
    imgStateCopy[`img${key}`] = false;
    setImgState(imgStateCopy);
  };

  return (
    <div className="technology-container">
      <h1 className="technology-title">TECHNOLOGIES WE USE</h1>
      <div className="technology-sub-container">
        <div className="technology-left">
          <div className="technology-left-sub">
            <button
              onMouseEnter={() => onMouseEnterFunc(1)}
              className="technology-button-item"
            >
              {" "}
              <span className="technology-button-text">SAP</span>{" "}
            </button>
            <button
              className="technology-button-item"
              onMouseEnter={() => onMouseEnterFunc(2)}
            >
              <span className="technology-button-text">
                ARTIFICIAL INTELLIGENCE
              </span>
            </button>
            <button
              className="technology-button-item"
              onMouseEnter={() => onMouseEnterFunc(3)}
            >
              <span className="technology-button-text">BLOCK CHAIN </span>{" "}
            </button>
            <button
              className="technology-button-item"
              onMouseEnter={() => onMouseEnterFunc(4)}
            >
              <span className="technology-button-text">CLOUD COMPUTING</span>
            </button>
            <button
              className="technology-button-item"
              onMouseEnter={() => onMouseEnterFunc(5)}
            >
              <span className="technology-button-text">CYBER SECURITY</span>
            </button>
            <button
              className="technology-button-item"
              onMouseEnter={() => onMouseEnterFunc(6)}
            >
              <span
                style={{ zIndex: "10000" }}
                className="technology-button-text"
              >
                ROBOTIC PROCESS AUTOMATION
              </span>
            </button>
          </div>
        </div>
        <div className="technology-right">
          <div className="technology-right-sub">
            <img
              style={{
                display: `${imgState.img1 ? "block" : "none"}`,
              }}
              className="technology-img"
              id="technology-img-1"
              src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?w=740&t=st=1650555812~exp=1650556412~hmac=0662510c96bb30f50fefd628694a3db292d44e9605f1d43b924be58546c127e3"
              alt=""
            />
            <img
              style={{ display: `${imgState.img2 ? "block" : "none"}` }}
              className="technology-img"
              id="technology-img-1"
              src="https://img.freepik.com/free-vector/brain-with-digital-circuit-programmer-with-laptop-machine-learning-artificial-intelligence-digital-brain-artificial-thinking-process-concept-vector-isolated-illustration_335657-2246.jpg?t=st=1650556280~exp=1650556880~hmac=1361f14ceee8f7423485805bb641e74591893a8ff0ce747d3306f326252915ab&w=740"
              alt=""
            />
            <img
              style={{ display: `${imgState.img3 ? "block" : "none"}` }}
              className="technology-img"
              id="technology-img-1"
              src="https://img.freepik.com/free-vector/characters-people-holding-blockchain-network_53876-26824.jpg?t=st=1650556808~exp=1650557408~hmac=83ae72c056f8b7e8dad8473a8448e6f9ec580d1bc3a8e33a94501f996bbaa13f&w=740"
              alt=""
            />
            <img
              style={{ display: `${imgState.img4 ? "block" : "none"}` }}
              className="technology-img"
              id="technology-img-1"
              src="https://img.freepik.com/free-vector/big-data-center-server-room-rack-engineering-process-teamwork-computer-technology-cloud-storage_39422-1032.jpg?t=st=1650555748~exp=1650556348~hmac=e7b7f4bbf349402c29942e4f98221e88125bcd8841a8e31e8dd363c8fc338ff8&w=740"
              alt=""
            />
            <img
              style={{ display: `${imgState.img5 ? "block" : "none"}` }}
              className="technology-img"
              id="technology-img-1"
              src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37375.jpg?w=740&t=st=1650556643~exp=1650557243~hmac=4c0d9c21a9e43c7ce5bcfe556a4f33276b99077294a2df3109530d0d3a171a02"
              alt=""
            />
            <img
              style={{ display: `${imgState.img6 ? "block" : "none"}` }}
              className="technology-img"
              id="technology-img-1"
              src="https://img.freepik.com/free-vector/robotic-process-automation-isometric-composition-with-little-human-characters-s-office-workspace-essential-elements-illustration_1284-60282.jpg?w=740&t=st=1650555987~exp=1650556587~hmac=20f405490d883ba1389bb674cb682574981d49a3d21023dc8149119af27aa958"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
