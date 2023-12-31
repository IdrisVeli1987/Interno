import React from "react";
import Navigation from "../../Components/Navigation";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import PageBanner from "../../Components/PageBanner";
import Footer from "../../Components/Footer";
import Join from "../../Components/Join";
import ServicesWorkPlan from "../../Components/Services/ServicesWorkPlan";
import WeWork from "../../Components/Services/WeWork";


const Services = () => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <Navigation />
      <PageBanner
        src="../../Services/Banner/servicesBanner.svg"
        page="Services"
        title="Services"
      />
      <ServicesWorkPlan />
      <WeWork />
      <Join />
      <Footer />
    </motion.div>
  );
};

export default Services;
