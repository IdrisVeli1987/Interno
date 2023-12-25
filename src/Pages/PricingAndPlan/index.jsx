import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "../../Components/Navigation";
import PageBanner from "../../Components/PageBanner";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer";
import PricingAndPlan from "../../Components/PricingAndPlan";

const PricingAndPlanPage = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Helmet>
          <title>Pricing And Plan</title>
        </Helmet>
        <Navigation />
        <PageBanner
          src="../PricingAndPlan/Banner.svg"
          page="Pricing"
          title="Pricing and plan"
        />
        <PricingAndPlan />
        <Footer />
      </motion.div>
    </div>
  );
};
export default PricingAndPlanPage;
