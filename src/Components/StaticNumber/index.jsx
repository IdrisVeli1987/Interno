import React from "react";
import styles from "./style.module.css";
import StaticNumber from "../StaticNumber";
import axios from "axios";

const URL = "http://localhost:3000/StaticNumbers";

const StaticNumbers = () => {
  const [statics, setStatics] = useState([]);

  useEffect(() => {
    axios.get(URL).then(({ data }) => {
        console.log(data)
      setStatics(data);
    });
  }, []);
  return (
    <div>
      <div className={`${styles.staticBox}`}>
        <div className={styles.staticNumber}>
          {statics.length &&
            statics.map((numbers) => {
              return <StaticNumber key={numbers.id} {...numbers} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default StaticNumbers;
