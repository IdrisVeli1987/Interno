import React from "react";
import { Link, NavLink } from "react-router-dom";
import { myRoutes } from "../MyRoutes";
import styles from "./style.module.css";

const Navigation = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img src="../Logo.svg" alt="Logo" />
            <Link to="/"></Link>
          </div>
          <nav>
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
        </div>
      </div>
    </header>
  );
};

export default Navigation;
