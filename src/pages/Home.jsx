import React from "react";
import "./home.css";
import back from "../images/back.png";
import blob from "../images/blob.svg";
import Typical from "react-typical";
import { BsArrowRight as RightArrow } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Home() {
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
    <div className="home-container">
      <div
        ref={ref}
        className={
          show ? "home-title-container-show" : "home-title-container-hidden"
        }
      >
        <p className="home-title">
          We offer modern solutions for growing your business
        </p>

        <p className="home-sub-title">
          We use{" "}
          <Typical
            steps={["SAP", 1000, "A.I", 1000, "CLOUD", 1000]}
            loop={Infinity}
            wrapper="span"
          />{" "}
          <br />
          to help your buisness grow
        </p>

        <button className="home-title-btn">
          Get Started{" "}
          <RightArrow
            className="right-arrow"
            style={{
              color: "white",
              marginLeft: "5px",
            }}
          />{" "}
        </button>
      </div>
      <img
        className={show ? "home-img-show" : "home-img-hidden"}
        src="https://img.freepik.com/free-vector/software-engineer-statistician-visualizer-analyst-working-project-big-data-conference-big-data-presentation-data-science-concept_335657-1850.jpg?t=st=1651237524~exp=1651238124~hmac=19bcf005d6a7f188b73890d3b03d193ba8676ffc08c67eff96d85b9a99aea7d1&w=740"
        alt=""
      />
    </div>
  );
}

export default Home;
