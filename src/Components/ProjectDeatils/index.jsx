import React from "react";
import styles from "./style.module.css";

const ProjectDetails = () => {
  return (
    <div className="container">
      <div className="row align-items-center mt-5 ">
        <div className="col-4 p-3">
          <div className={styles.ClientCard}>
            <div className={styles.ClientCardList}>
              <p>Client</p>
              <p>Category</p>
              <p>Tags</p>
              <p>Date</p>
              <p>Link</p>
            </div>
            <div className={styles.ListInfo}>
              <p>Your client name</p>
              <p>Interiors</p>
              <p>interior, Home</p>
              <p>Date 23,02, 2022</p>
              <p>Link example.com</p>
            </div>
          </div>
        </div>

        <div className={`col-8 ${styles.CardTitle}`}>
          <h2>Minimal Look Bedrooms</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem
            vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa,
            vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent
            at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in
            the ipsum vel lectus bibendum commodo.
          </p>
          <p className={styles.description}>
            In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet
            tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque
            arcu. Donec a pellentesque Cras erat enim, gravida non ante
            vitae,elequis convallis elit, in viverra felis. Donec ultrices
            tellus vitae iaculisvd porta. Proin tincidunt ligula id purus
            porttitor.
          </p>
        </div>

        <div className={styles.DetailImg}>
          <img src="../ProjectsDetail/Photo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
