import styles from "./Footer.module.scss";
import telegram from "../../images/telegramFooter.svg";
import viber from "../../images/viberFooter.svg";
import facebook from "../../images/facebookFooter.svg";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <p>Policy Privacy</p>
      </div>
      <div className={styles.copyright}>
        <p>Copyright 2023</p>
      </div>
      <div className={styles.social}>
        <div className={styles.buttons}>
          <img src={telegram} alt={"Telegram"} />
          <img src={viber} alt={"Viber"} />
          <img src={facebook} alt={"Facebook"} />
        </div>
        <p>Loremail@gmail.com</p>
      </div>
    </div>
  );
};
