import React from "react";
import Navigation from "../../Components/Navigation";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import PageBanner from "../../Components/PageBanner";
import SingleBlog from "../../Components/Blog";
import Footer from "../../Components/Footer";
import BlogsArticle from "../../Components/Blog/BlogsArticle";

const Blog = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Helmet>
          <title>Blog</title>
        </Helmet>

        <Navigation />
        <PageBanner
          src="../Blog/Blog_Banner.svg"
          page="Blog"
          title="Articles & News"
        />
        {/* <h2>{project.title}</h2>
        <p>{project.description}</p> */}

        <SingleBlog />
        <BlogsArticle />
        <Footer/>
      </motion.div>
    </div>
  );
};

export default Blog;
