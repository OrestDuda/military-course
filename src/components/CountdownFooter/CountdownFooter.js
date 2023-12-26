import styles from "./CountdownFooter.module.scss";
import CourseForm from "../CourseForm/CourseForm";

export const CountdownFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <CourseForm />
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
};
