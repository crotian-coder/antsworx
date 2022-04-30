import React from "react";
import "./test.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export const Test = () => {
  const [show, setShow] = useState(false);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    console.log("inView", inView);

    if (inView) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [inView]);

  return (
    <div className="test-container">
      <div ref={ref} className={show ? "show" : "hidden"}>
        hello
      </div>
    </div>
  );
};
