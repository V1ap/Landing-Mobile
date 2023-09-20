import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { getTimer } from "../../utils/getTimer";
import { newCost, previousCost } from "../../cost/cost";

const Hero = () => {
  const [timer, setTimer] = useState(17476);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__offer}>
        <p className={styles.hero__text}>LIMITED OFFER</p>
        <h2 className={styles.hero__timer}>{getTimer(timer)}</h2>
      </div>
      <div className={styles.hero__cost}>
        <p className={styles.hero__previousCost}>{previousCost}</p>
        <p className={styles.hero__newCost}>{newCost}</p>
      </div>
    </section>
  );
};

export default Hero;
