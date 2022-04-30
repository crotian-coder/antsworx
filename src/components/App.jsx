import React from "react";
import Navbar from "./Navbar/Navbar";
import Technology from "../pages/Technologies";
import Solutions from "../pages/Solutions";
import { Vision } from "../pages/Vision";
import About from "../pages/About";
import { Who } from "../pages/Who";

import Home from "../pages/Home";
import { Goal } from "../pages/Goal";
import { Culture } from "../pages/Culture";
import { Footer } from "../pages/Footer";
import { Test } from "../pages/Test";
import { Quality } from "../pages/Quality";

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Home />
      <Technology /> */}
      <Solutions />
      {/* <Goal />
      <Vision />
      <About />
      <Who />
      <Culture />
      <Footer />
      <Quality /> */}
      {/* <Test /> */}
    </div>
  );
};

export default App;
