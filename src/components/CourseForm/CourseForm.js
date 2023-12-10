import React from "react";
import styles from "./CourseForm.module.scss";
import { CountdownTimer } from "../CountdownTimer/CountdownTimer";

const Input = ({ type, placeholder }) => (
  <input
    className={styles.input}
    type={type || "text"}
    placeholder={placeholder}
  />
);
const CourseForm = () => {
  return (
    <div className={styles.courseForm}>
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
        <p className={styles.timer}>{<CountdownTimer />}</p>
      </div>
      <div>
        <form className={styles.formInputs}>
          <Input placeholder={"text"} />
          <Input placeholder={"text"} />
          <Input placeholder={"text"} />
          <Input placeholder={"text"} />
          <input type={"text"} className={styles.textArea} />
          <button className={styles.button} type={"submit"}>
            Зареєструватися
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
