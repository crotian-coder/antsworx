import React from "react";
import "./goal.css";
import { useInView } from "react-intersection-observer";

import { useEffect, useState } from "react";
import { VscDebugBreakpointData as PointIcon } from "react-icons/vsc";

export const Goal = () => {
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
      <div
        ref={ref}
        className={
          show ? "goal-sub-container-show" : "goal-sub-container-hidden"
        }
      >
        <div className="goal-mission">
          <h2 className="goal-mission-title">MISSION</h2>
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
        <div className="goal-mission-container">
          <img
            className="mission-img"
            src="https://img.freepik.com/free-vector/staff-management-perspective-definition-target-orientation-teamwork-organization-business-coach-company-executive-personnel-cartoon-characters_335657-2967.jpg?t=st=1650867966~exp=1650868566~hmac=7bc5c58c9ecc0f7f2440c2bfb34300ef9315c91980bb4cd8d1d91f8efd38daba&w=740"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
