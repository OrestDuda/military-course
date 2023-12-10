import styles from "./CountdownFooter.module.scss";
import CourseForm from "../CourseForm/CourseForm";

export const CountdownFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <CourseForm />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.descriptionWrapper}>
          <p className={styles.title}>Lorem ipsum</p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};
