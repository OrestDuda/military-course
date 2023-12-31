import styles from "./Timer.module.scss";
import { CountdownTimer } from "../CountdownTimer/CountdownTimer";

export const Timer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.description}>
          <span className={styles.text}>
            Приєднайся до онлайн курсу «Інтенсив з військового права» за
            спеціальною акційною пропозицією всього за
          </span>
          <span className={styles.priceContainer}>
            <span className={styles.newPrice}>375 грн.</span>
            <span className={styles.oldPrice}>1500 грн.</span>
          </span>
        </p>
        <p className={styles.timer}>{<CountdownTimer />}</p>
      </div>
    </div>
  );
};
