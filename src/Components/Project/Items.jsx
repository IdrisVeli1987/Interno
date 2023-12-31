import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Items({ currentItems }) {
  return (
    <div
      className={styles.RoomsImagesContainer}
      initial={{ transform: "scale(0)" }}
      animate={{ transform: "scale(1)" }}
    >
      {currentItems &&
        currentItems.map(({ id, src, title, subtitle }, index) => {
          return (
            <motion.div
              key={id}
              className={styles.RoomsImages}
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
            >
              <div className={styles.Rooms}>
                <div className={styles.RoomListImages}>
                  <img src={src} alt="" />
                </div>
                <div className={styles.RoomListTitles}>
                  <div>
                    <h5>{title}</h5>
                    <p>{subtitle}</p>
                  </div>
                  <div>
                    <Link to={`/project/${id}`}>
                      <button className={`${styles.card_arrow}`}>
                        <MdOutlineArrowForwardIos />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
    </div>
  );
}

export default Items;
