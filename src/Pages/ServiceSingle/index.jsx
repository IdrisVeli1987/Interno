import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import CarouselComponent from "../../Components/Carousel";
import Footer from "../../Components/Footer";
import Navigation from "../../Components/Navigation";
import PageBanner from "../../Components/PageBanner";
import ServiceDetails from "../../Components/ServiceDetails";
import Interior from "../../Components/ServiceDetails/Interior";
import DesignSection from "../../Components/ServiceDetails/DesignsSection";
import DesignVideo from "../../Components/ServiceDetails/DesignVideo";
import StaticNumbers from "../../Components/StaticNumbers";

const ServiceSingle = () => {
  const { id } = useParams();

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Helmet>
        <title>Services Single</title>
      </Helmet>
      <Navigation />
      <PageBanner
        src="../../ServiceSingle/Banner/ServicesSingle.svg"
        page="Services Single"
        title="Service Single"
      />
      <ServiceDetails />
      <CarouselComponent />
      <DesignVideo />
      <Interior />
      <DesignSection />
      <StaticNumbers/>  
      <Footer />
    </motion.div>
  );
};

export default ServiceSingle;
