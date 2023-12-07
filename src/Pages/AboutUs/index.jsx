import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navigation from "../../Components/Navigation";
import PageBanner from "../../Components/PageBanner";
import Footer from "../../Components/Footer";
import Quote from "../../Components/Quote";

const AboutUs = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Helmet>
          <title>About Us</title>
        </Helmet>
        <Navigation />
        <PageBanner
          src="../AboutUs/Banner.svg"
          page="About Us"
          title="About Us"
        />
        <Quote />
        <Footer />
      </motion.div>
    </div>
  );
};

export default AboutUs;
