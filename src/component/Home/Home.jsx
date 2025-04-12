import React from "react";
import Banner from "./Banner";
import Solutions from "./Solutions";
import PastProject from "./PastProject";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Solutions />
      <PastProject />
      <Testimonial />
    </React.Fragment>
  );
};

export default Home;
