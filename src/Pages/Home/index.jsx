import React from "react";
import Navigation from "../../Components/Navigation";
import Banner from "../../Components/Banner";
import WorkPlanCards from "../../Components/WorkPlanCards";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <WorkPlanCards />
    </div>
  );
};

export default Home;
