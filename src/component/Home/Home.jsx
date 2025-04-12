import React from "react";
import Banner from "./Banner";
import Solutions from "./Solutions";
import PastProject from "./PastProject";
import Testimonial from "./Testimonial";
import Articule from "./Articule";
import EventGallery from "./Events";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Solutions />
      <PastProject />
      <Testimonial />
      <Articule />
      <EventGallery />
    </React.Fragment>
  );
};

export default Home;
