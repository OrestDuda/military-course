import styles from "./FaceBookPost.module.scss";
import topQuote from "../../images/topQuote.svg";
import bottomQuote from "../../images/bottomQuote.svg";
import facebookLogo from "../../images/facebook.svg";

export const FaceBookPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}></div>
      <div className={styles.rightSide}>
        <p className={styles.topQuote}>
          <img src={topQuote} alt="topQuote" />
        </p>
        <div className={styles.descriptionWrapper}>
          <p className={styles.text}>
            Сьогодні мали теплу зустріч з представником Уповноваженого Верховної
            ради України з прав людини у Львівській області паном Тарасом
            Подвірним. Тарас Подвірний робить надзвичайно велику роботу для
            наших родин, де є наші Захисники у полоні або безвісти зниклі. Така
            праця важлива і клопітка, адже потребує великих зусиль і часу. Маємо
            надію, що нам вдасться знайти наших близьких людей. Дякую пану
            Андрію Andriy Melnyk, що разом робимо велику справу.
          </p>
          <div className={styles.button}>
            <img src={facebookLogo} alt="facebookLogo" />
            <span>Facebook</span>
          </div>
        </div>
        <p className={styles.bottomQuote}>
          <img src={bottomQuote} alt="bottomQuote" />
        </p>
      </div>
    </div>
  );
};
