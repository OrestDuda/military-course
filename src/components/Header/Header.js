import styles from "./Header.module.scss";
import logo from "../../images/logo.svg";
export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <p className={styles.title}>
          <img className={styles.logo} src={logo} alt={"Logo"} />
          <span className={styles.author}>Мельник Андрій Володимирович</span>
        </p>
        <div className={styles.mainContent}>
          <p className={styles.mainText}>
            <span className={styles.course}>Курс</span> «Інтенсив з військового
            права»
          </p>
          <p className={styles.subText}>
            Допомога людям, що переживають несправедливе поводження від
            представників військової сфери.
          </p>
        </div>
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
};
