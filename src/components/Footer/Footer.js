import styles from "./Footer.module.scss";
import telegram from "../../images/telegramFooter.svg";
import viber from "../../images/viberFooter.svg";
import facebook from "../../images/facebookFooter.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <ul>
          <li>
            <Link to={"security-policy"}>Політика безпеки</Link>
          </li>
          <li>
            <Link to={"refund-policy"}>Політика повернення платежів</Link>
          </li>
          <li>
            <Link to={"privacy-policy"}>Політика конфіденційності</Link>
          </li>
          <li>
            <Link to={"public-agreement"}>Публічний договір</Link>
          </li>
        </ul>
      </div>
      <div className={styles.copyright}>
        <p>Copyright 2023</p>
      </div>
      <div className={styles.social}>
        <div className={styles.buttons}>
          <img
            src={telegram}
            alt={"Telegram"}
            onClick={() => {
              window.open("https://t.me/+380971866221", "_blank");
            }}
          />
          <img
            src={viber}
            alt={"Viber"}
            onClick={() => {
              window.open("viber://contact?number=%2B380971866221", "_blank");
            }}
          />
          <img
            src={facebook}
            alt={"Facebook"}
            onClick={() => {
              window.open(
                "https://www.facebook.com/advokat.melnyk.andriy?locale=uk_UA",
                "_blank"
              );
            }}
          />
        </div>
        <p>Loremail@gmail.com</p>
      </div>
    </div>
  );
};
