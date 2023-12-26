import React from "react";
import Navigation from "../../Components/Navigation";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import PageBanner from "../../Components/PageBanner";
import Footer from "../../Components/Footer";
import Projects from "../../Components/Project";

const Project = () => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Helmet>
        <title>Project</title>
      </Helmet>
      <Navigation />
      <PageBanner
        src="../Project/Banner.svg"
        page="Project"
        title="Our Project"
      />
      <Projects />
      <Footer />
    </motion.div>
  );
};

export default Project;
