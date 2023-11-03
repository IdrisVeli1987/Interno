import React, { useEffect, useState } from "react";
import Navigation from "../../Components/Navigation";
import { useParams } from "react-router";
import axios from "axios";
import PageBanner from "../../Components/PageBanner";

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
    <div>
      <Navigation />
      <PageBanner/>
      <h2>{plan.title}</h2>
      <p>{plan.description}</p>
    </div>
  );
};

export default WorkPlanCardsDetail;
