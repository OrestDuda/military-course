import styles from "./AboutCourse.module.scss";
import CourseForm from "../CourseForm/CourseForm";

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
        <CourseForm />
      </div>
    </div>
  );
};
