import styles from "./AboutAuthor.module.scss";

const AUTHOR_TITLE = "Про автора";
const AUTHOR_PROFESSION = "Адвокат";
const AUTHOR_NAME = "Мельник Андрій Володимирович";
const AUTHOR_DESCRIPTION =
  "Кандидат юридичних наук. Є доцентом кафедри цивільного права та процесу ЛНУ ім. Івана Франка. Автор численних наукових праць та статей. З початку масштабного вторгнення рф надав професійну юридичну допомогу понад ста клієнтам з питань військової справи. На даний час успішно допомагає сім'ям безвісти зниклих та полонених військовослужбовців. Має посвідчення адвоката, а також атестат кандидата наук.";

const Title = ({ leadingText, mainText, followingText }) => (
  <div className={styles.title}>
    <p className={styles.leadingText}>{leadingText}</p>
    <p className={styles.middle}>{mainText}</p>
    <p className={styles.bottom}>{followingText}</p>
  </div>
);

export const AboutAuthor = () => (
  <div className={styles.container}>
    <div className={styles.leftSide}>
      <Title
        leadingText={AUTHOR_TITLE}
        mainText={AUTHOR_PROFESSION}
        followingText={AUTHOR_NAME}
      />
      <p className={styles.text}>{AUTHOR_DESCRIPTION}</p>
    </div>
    <div className={styles.rightSide}></div>
  </div>
);
