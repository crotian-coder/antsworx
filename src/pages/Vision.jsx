import React from "react";
import "./goal.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { VscDebugBreakpointData as PointIcon } from "react-icons/vsc";

export const Vision = () => {
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
    <div className="goal-container">
      <div className={"vision-sub-container-show"}>
        <div className={"goal-vision-container-show"}>
          <img
            className={show ? "vision-img-show" : "vision-img-hidden"}
            src="https://img.freepik.com/free-vector/businessman-top-looking-into-telescope-employees-business-opportunity-bizopp-franchising-distribution-concept-white-background_335657-2028.jpg?t=st=1650868275~exp=1650868875~hmac=0ce57abb05ed5d90374c551d3f2992ed1628469826c23a2b809e802ac3b5ce56&w=740"
            alt=""
          />
        </div>
        <div
          ref={ref}
          className={show ? "goal-vision-show" : "goal-vision-hidden"}
        >
          <h2 className="goal-mission-title">VISION</h2>
          <p className="goal-mission-content">
            <p className="goal-vision-content-points-container">
              {" "}
              <PointIcon className="point-icon" />{" "}
              <span className="goal-vision-content-points">
                Delivering a New world of services
              </span>
            </p>
            <p className="goal-vision-content-points-container">
              {" "}
              <PointIcon className="point-icon" />{" "}
              <span className="goal-vision-content-points">
                Constantly focus on innovating
              </span>
            </p>
            <p className="goal-vision-content-points-container">
              {" "}
              <PointIcon className="point-icon" />{" "}
              <span className="goal-vision-content-points">
                Providing simple solutions to complex issues.
              </span>
            </p>
            <p className="goal-vision-content-points-container">
              {" "}
              <PointIcon className="point-icon" />{" "}
              <span className="goal-vision-content-points">
                Deep collaboration which allows us to achieve Perfection
              </span>
            </p>
            <p className="goal-vision-content-points-container">
              {" "}
              <PointIcon className="point-icon" />{" "}
              <span className="goal-vision-content-points">
                Excellence is what we strive for
              </span>
            </p>
            <p className="goal-vision-content-points-container">
              {" "}
              <PointIcon className="point-icon" />{" "}
              <span className="goal-vision-content-points">
                Courage to admit when we’re wrong
              </span>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};
