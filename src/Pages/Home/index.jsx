import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner";
import CarouselComponent from "../../Components/Carousel";
import Navigation from "../../Components/Navigation";
import OurProjects from "../../Components/OurProjects";
import PeopleCards from "../../Components/PeopleCards";
import Stylishly from "../../Components/Stylishly";
import WorkPlanCards from "../../Components/WorkPlanCards";
import StaticNumbers from "../../Components/StaticNumbers";

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Helmet>
        <title>Interno</title>
      </Helmet>
      <Navigation />
      <Banner />
      <WorkPlanCards />
      <Stylishly />
      <PeopleCards />
      <CarouselComponent />
      <OurProjects />
      <StaticNumbers />
    </motion.div>
  );
};

export default Home;
