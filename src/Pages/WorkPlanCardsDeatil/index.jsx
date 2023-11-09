import React, { useEffect, useState } from "react";
import Navigation from "../../Components/Navigation";
import { useParams } from "react-router";
import axios from "axios";
import PageBanner from "../../Components/PageBanner";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const URL = "http://localhost:3000/WorkPlan/";
const WorkPlanCardsDetail = () => {
  const { id } = useParams();

  const [plan, setPlan] = useState([]);

  useEffect(() => {
    axios.get(URL + id).then(({ data }) => {
      setPlan(data);
    });
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Helmet>
        <title>Work Plan</title>
      </Helmet>
      <Navigation />
      <PageBanner
        src="/PageBanner/Logo.png"
        title="Work Plan Single"
        page="WorkPlanCards"
      />
      <h2>{plan.title}</h2>
      <p>{plan.description}</p>
    </motion.div>
  );
};

export default WorkPlanCardsDetail;
