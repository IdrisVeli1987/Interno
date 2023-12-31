import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { myRoutes } from "../MyRoutes";
import styles from "./style.module.css";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <div className="container">
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Link to="/">
              <img src="/Logo/Logo.svg" alt="Logo" />
            </Link>
          </div>
          <nav className={`${styles.navMenu} d-none d-md-block`}>
            {myRoutes.map(({ id, path, title }) => {
              return (
                title && (
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.navLink} ${styles.active}`
                        : styles.navLink
                    }
                    key={id}
                    to={path}
                  >
                    {title}
                  </NavLink>
                )
              );
            })}
          </nav>

          <div
            className={`d-block d-md-none ${styles.bars}`}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <FaBars />
          </div>

          {showMenu && (
            <div className={styles.mobileNav}>
              {myRoutes.map(({ id, path, title }) => {
                return (
                  title && (
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.navLink} ${styles.active}`
                          : styles.navLink
                      }
                      key={id}
                      to={path}
                    >
                      {title}
                    </NavLink>
                  )
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
