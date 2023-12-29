import styles from "./style.module.css";
import { motion } from "framer-motion";

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
              <div>
                <img src={src} alt="" />
              </div>
              <div>
                <h5>{title}</h5>
                <p>{subtitle}</p>
              </div>
            </motion.div>
          );
        })}
    </div>
  );
}

export default Items;
