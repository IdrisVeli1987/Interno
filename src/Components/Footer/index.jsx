import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container">
      <div className={`${styles.FooterContent} mt-5`}>
        <div className="col-6">
          <Link to="/">
            <img
              className={`${styles.footerLogo} mb-2`}
              src="/Logo/Logo.svg"
              alt="Logo"
            />
          </Link>
          <p>
            It is a long established fact that a reader <br /> will be
            distracted lookings.
          </p>
          <div className={`${styles.SocialIcons}`}>
            <Link to="http://Facebook.com">
              <FaFacebookF />
            </Link>
            <Link to="http://Twitter.com">
              <FaTwitter />
            </Link>
            <Link to="http://Linkedin.com">
              <FaLinkedinIn />
            </Link>
            <Link to="http://Instagram.com">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
