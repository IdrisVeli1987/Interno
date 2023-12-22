import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navigation from "../../Components/Navigation";
import PageBanner from "../../Components/PageBanner";
import Footer from "../../Components/Footer";
import Quote from "../../Components/AboutUs/Quote";
import WhatWeDo from "../../Components/AboutUs/WhatWeDo";
import Result from "../../Components/AboutUs/Result";
import PeopleThinks from "../../Components/AboutUs/PeopleThinks";
import MyForm from "../../Components/AboutUs/Forms";

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
          <WhatWeDo />
          <Result/>
          <PeopleThinks/>
          <MyForm />
        <Footer />
      </motion.div>
    </div>
  );
};

export default AboutUs;
