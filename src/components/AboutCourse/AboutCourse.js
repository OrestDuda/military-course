import styles from "./AboutCourse.module.scss";
export const AboutCourse = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <p className={styles.title}>Про курс</p>
        <p className={styles.topText}>
          Курс складається з <span className={styles.bold}>10</span>-ти занять
          по <span className={styles.bold}>20-30</span> хв. Після оплати ми
          надсилаємо Вам посилання на запис занять.
        </p>
        <p className={styles.bottomText}>
          Чек листи та шаблони заяв та скарг у подарунок. Знижка 50 % на
          консультацію адвоката.
        </p>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.formDescription}>
          <p className={styles.joinCourse}>Приєднайся до онлайн курсу</p>
          <p className={styles.courseName}>«Інтенсив з військового права»</p>
          <p className={styles.promotion}>
            за спеціальною акційною пропозицією всього за
          </p>
          <div className={styles.priceContainer}>
            <span className={styles.newPrice}>375 грн. </span>
            <span className={styles.oldPrice}>1500 грн.</span>
          </div>
          <p className={styles.timer}>00 : 07 : 12 : 34</p>
        </div>
        <div>
          <form className={styles.formInputs}>
            <input
              className={styles.input}
              type={"text"}
              placeholder={"text"}
            />
            <input
              className={styles.input}
              type={"text"}
              placeholder={"text"}
            />
            <input
              className={styles.input}
              type={"text"}
              placeholder={"text"}
            />
            <input
              className={styles.input}
              type={"text"}
              placeholder={"text"}
            />
            <input type={"text"} className={styles.textArea} />
            <button className={styles.button} type={"submit"}>
              Зареєструватися
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
