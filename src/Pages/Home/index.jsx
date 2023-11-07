import React from "react";
import Navigation from "../../Components/Navigation";
import Banner from "../../Components/Banner";
import WorkPlanCards from "../../Components/WorkPlanCards";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Stylishly from "../../Components/Stylishly";
import PeopleCards from "../../Components/PeopleCards";
import CarouselComponent from "../../Components/Carousel";
import OurProjects from "../../Components/OurProjects";

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
    </motion.div>
  );
};

export default Home;
