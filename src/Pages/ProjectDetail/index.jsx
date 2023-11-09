import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navigation from "../../Components/Navigation";
import PageBanner from "../../Components/PageBanner";

const URL = "http://localhost:3000/OurProjects/";

const ProjectDeatil = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    axios.get(URL + id).then(({ data }) => {
      setProject(data);
    });
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Helmet>
        <title></title>
      </Helmet>

      <Navigation />
      <PageBanner
        src="../ProjectPage/ProjectPage.svg"
        page="project"
        title="Our Project"
      />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </motion.div>
  );
};

export default ProjectDeatil;
