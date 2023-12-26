import styles from "./SecurityPolicy.module.scss";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export const SecurityPolicy = () => {
  return (
    <div className={styles.container}>
      <p className={styles.logo_title}>
        <img className={styles.logo} src={logo} alt={"Logo"} />
        <span className={styles.author}>Мельник Андрій Володимирович</span>
      </p>
      <div className={styles.breadscrumbs}>
        <Link to={"/"}>Головна / </Link>Політика безпеки передачі реквізитів
        платіжної картки
      </div>
      <div className={styles.title}>
        Політика безпеки передачі реквізитів платіжної картки
      </div>
      <div className={styles.text}>
        <p>
          При оплаті замовлення банківською картою обробка платежу (включаючи
          введення номера картки) відбувається на захищеній сторінці
          процесингової системи. Це означає, що Ваші конфіденційні дані
          (реквізити картки, реєстраційні дані та ін.) не надходять до нас, їх
          обробка повністю захищена і ніхто не може отримати персональні та
          банківські дані клієнта. Під час роботи з картковими даними
          застосовується стандарт захисту інформації, розроблений міжнародними
          платіжними системами Visa та MasterCard – Payment Card Industry Data
          Security Standard (PCI DSS), що забезпечує безпечну обробку реквізитів
          Банківської картки Держателя. Технологія передачі даних, що
          застосовується, гарантує безпеку по операціях з Банківськими картами
          шляхом використання протоколів Secure Sockets Layer (SSL)."
        </p>
      </div>
    </div>
  );
};
