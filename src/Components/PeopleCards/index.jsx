import React from "react";
import styles from "./style.module.css";

const PeopleCards = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className={styles.aboutUs}>
            <h2 className={styles.peopleCardsTitle}>
              What the People Thinks About Us
            </h2>

            <div className={`row g-2 gy-2 gx-2 ${styles.people_cards}`}>
              <div className={`col-12 col-xl-4`}>
                <div className={`p-4 ${styles.person_card}`}>
                  <div className={styles.cardsBlock}>
                    <img
                      src="../AboutUs/person1.svg"
                      alt=""
                      className={styles.personImage}
                    />
                    <div className={styles.peopleName}>
                      <h4 className={styles.personName}>Nattasha Mith</h4>
                      <p className={styles.nameDesc}>Sydney, USA</p>
                    </div>
                  </div>
                  <div className={styles.peopleDescriptions}>
                    <p className={styles.pepoleDescription}>
                      Lorem Ipsum is simply dummy text of the typesetting
                      industry. Ipsum has been.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`col-12 col-xl-4`}>
                <div className={`p-4 ${styles.person_card}`}>
                  <div className={` ${styles.cardsBlock}`}>
                    <img
                      className={styles.personImage}
                      src="../AboutUs/person2.svg"
                      alt=""
                    />
                    <div className={styles.peopleName}>
                      <h4 className={styles.personName}>Raymond Galario</h4>
                      <p className={styles.nameDesc}>Sydney, Australia</p>
                    </div>
                  </div>
                  <div className={styles.peopleDescriptions}>
                    <p className={styles.pepoleDescription}>
                      Lorem Ipsum is simply dummy text of the typesetting
                      industry. Ipsum has been scrambled it to make a type book.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`col-12 col-xl-4`}>
                <div className={`p-4 ${styles.person_card}`}>
                  <div className={styles.cardsBlock}>
                    <img
                      src="../AboutUs/person3.svg"
                      alt=""
                      className={styles.personImage}
                    />
                    <div className={styles.peopleName}>
                      <h4 className={styles.personName}>Benny Roll</h4>
                      <p className={styles.nameDesc}>Sydney, New York</p>
                    </div>
                  </div>
                      <div className={styles.peopleDescriptions}>
                        <p className={styles.pepoleDescription}>
                          Lorem Ipsum is simply dummy text of the typesetting
                          industry. Ipsum has been scrambled.
                        </p>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCards;
