import styles from "./Certificates.module.scss";
import CertificateFirst from "../../images/certificate1_original.png";
import CertificateSecond from "../../images/certificate2_original.png";
import CertificateThird from "../../images/certificate3_original.png";

const Title = ({ leadingText }) => (
  <div className={styles.title}>
    <p className={styles.leadingText}>{leadingText}</p>
  </div>
);

export const Certificates = () => {
  return (
    <div className={styles.container}>
      <Title leadingText={"Дипломи"} />
      <div className={styles.certificates}>
        <img
          className={styles.image}
          src={CertificateFirst}
          alt={"Certificate-1"}
        />
        <img
          className={styles.image}
          src={CertificateSecond}
          alt={"Certificate-2"}
        />
        <img
          className={styles.image}
          src={CertificateThird}
          alt={"Certificate-3"}
        />
      </div>
    </div>
  );
};
