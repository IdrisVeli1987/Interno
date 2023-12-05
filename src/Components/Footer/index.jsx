import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="container">
      <div className={styles.FooterContent}>
        <div className={`${styles.FooterLogo} `}>
          <Link to="/">
            <img
              className={`${styles.footerLogo} `}
              src="/Logo/Logo.svg"
              alt="Logo"
            />
          </Link>
          <p>
            It is a long established fact that a reader <br /> will be
            distracted lookings.
          </p>
          <div className={`${styles.SocialIcons} mb-3 `}>
            <Link to="http://Facebook.com">
              <FaFacebookF style={{ color: "black" }} />
            </Link>
            <Link to="http://Twitter.com">
              <FaTwitter style={{ color: "black" }} />
            </Link>
            <Link to="http://Linkedin.com">
              <FaLinkedinIn style={{ color: "black" }} />
            </Link>
            <Link to="http://Instagram.com">
              <FaInstagram style={{ color: "black" }} />
            </Link>
          </div>
        </div>
        <div className={`${styles.footerLinks} `}>
          <div className={`${styles.pages} `}>
            <h4>Pages</h4>
            <Link to="/about">
              <p>About</p>
            </Link>
            <Link to="/OurProjects">
              <p>Our Projects</p>
            </Link>
            <Link to="/#">
              <p>Our Team</p>
            </Link>
            <Link to="/#">
              <p>Contact Us</p>
            </Link>
            <Link to="/services">
              <p>Services</p>
            </Link>
          </div>
          <div className={`${styles.Services}`}>
            <h4>Services</h4>
            <Link to="#">
              <p>Kitchan</p>
            </Link>
            <Link to="#">
              <p>Liviing Area</p>
            </Link>
            <Link to="#">
              <p>Bathroom</p>
            </Link>
            <Link to="#">
              <p>Dining Hall</p>
            </Link>
            <Link to="#">
              <p>Bedroom</p>
            </Link>
          </div>
          <div className={`${styles.Contact} `}>
            <h4>Contact</h4>
            <p>
              <CiLocationOn className={styles.IconComponentLocation} />
              Building 187C, 115 Heydar Aliyev Ave, Baku 1029
            </p>
            <p>
              <MdMarkEmailRead className={styles.IconComponent} />
              <span className="ms-1"> idrisveliev@gmail.com</span>
            </p>
            <p>
              <IoMdPhonePortrait className={styles.IconComponent} /> (+994)
              77-233-93-31
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.Copyright} `}>
        <p>
          Copyright © Interno | Designed by Victorflow Templates - Powered by
          Webflow
        </p>
      </div>
    </div>
  );
};

export default Footer;
