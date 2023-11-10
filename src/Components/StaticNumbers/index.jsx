import React from "react";
import styles from "./style.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { animate, useMotionValue, useTransform } from "framer-motion";

const URL = "http://localhost:3000/StaticNumbers";

// export function Counter({ from, to }) {
//   const nodeRef = useRef();

//   useEffect(() => {
//     const node = nodeRef.current;

//     const controls = animate(from, to, {
//       duration: 1,
//       onUpdate(value) {
//         node.textContent = value.toFixed(2);
//       },
//     });

//     return () => controls.stop();
//   }, [from, to]);

//   return <p ref={nodeRef} />;
// }

// const count = useMotionValue(0);
// const rounded = useTransform(count, (latest) => Math.round(latest));

// useEffect(() => {
//   const controls = animate(count, 100);

//   return controls.stop;
// }, []);

// return <motion.div>{rounded}</motion.div>;

const StaticNumbers = () => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      setNumbers(data);
    });
  }, []);

  return (
    <>
      <div className={`${styles.staticBox} `}>
        <div className="container">
          <div
            className={`${styles.statics} col d-flex align-items-center justify-content-center py-5 gap-3 mt-5 mb-5`}
          >
            {numbers.map(({ id, number, description }) => {
              return (
                <div
                  key={id}
                  className={`${styles.staticNumber} ${styles.line}`}
                >
                  <h6 className={`${styles.staticNbr}`}>{number}</h6>
                  <p className={styles.staticDesc}>{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticNumbers;
