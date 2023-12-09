import styles from "./SuitableFor.module.scss";
import forManSvg from "../../images/forMan.svg";
import forStudentsSvg from "../../images/forStudents.svg";
import forMilitarySvg from "../../images/forMilitary.svg";
import forFamilySvg from "../../images/forFamily.svg";

export const SuitableFor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <p>Курс «Інтенсив з військовогo права»</p>
        <p className={styles.bottomText}>Кому підходить:</p>
      </div>
      <div className={styles.rightSide}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.imageBox}>
              <img src={forManSvg} alt="For Man SVG" />
            </div>
            <div className={styles.textContainer}>
              <p className={styles.title}>Чоловікам</p>
              <p>
                Чоловікам, які хочуть знати свої права та вміти захиститися від
                незаконних дій працівників ТЦК та СП;
              </p>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.imageBox}>
              <img src={forStudentsSvg} alt="For Students SVG" />
            </div>
            <div className={styles.textContainer}>
              <p className={styles.title}>Студентам юридичних факультетів</p>
              <p>
                Студентам юридичних факультетів, юристам, адвокатам, які хочуть
                більше дізнатися про актуальні питання військового права;
              </p>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.imageBox}>
              <img src={forMilitarySvg} alt="For Military SVG" />
            </div>
            <div className={styles.textContainer}>
              <p className={styles.title}>Військовослужбовцям</p>
              <p>
                Військовослужбовцям, які хочуть і мають право на звільнення з
                військової служби, визнання обмежено придатним або непридатним,
                на переведення до іншої вч і тд; хочуть отримати виплати у
                зв’язку з пораненням.
              </p>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.imageBox}>
              <img src={forFamilySvg} alt="For Family SVG" />
            </div>
            <div className={styles.textContainer}>
              <p className={styles.title}>
                Членам сімей та родичам військовослужбовців
              </p>
              <p>
                Членам сімей та родичам військовослужбовців, які знаходяться у
                полоні, безвісно відсутніх.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
