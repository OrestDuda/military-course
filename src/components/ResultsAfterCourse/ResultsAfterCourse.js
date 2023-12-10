import styles from "./ResultsAfterCourse.module.scss";
import checkpoint from "../../images/checkpoint.svg";

const RESULT_ITEMS = [
  "Отримаєте базові знання з військового права.",
  "Будете впевнено себе почувати у розмові з працівниками ТЦК та СП, зати свої права, а значить спокійніше спати.",
  "Цей курс, чек листи, шаблони заяв та скарг завжди «під рукою». Вони Вам приходяться у потрібний момент.",
  <>
    Учасникам курсу знижка <span className={styles.orange}>50 %</span> на
    консультацію адвоката з військових справ.
  </>,
];
const RESULT_TITLE = "Результати після проходження курсу";

const Title = ({ topText }) => (
  <div className={styles.title}>
    <p>{topText}</p>
  </div>
);

const ResultItem = ({ children }) => (
  <li className={styles.listItem}>
    <img className={styles.checkpoint} src={checkpoint} alt={"checkpoint"} />
    <p className={styles.text}>{children}</p>
  </li>
);

const renderResults = (results) =>
  results.map((result, index) => <ResultItem key={index}>{result}</ResultItem>);

export const ResultsAfterCourse = () => (
  <div className={styles.container}>
    <Title topText={RESULT_TITLE} />
    <ul className={styles.blackbox}>{renderResults(RESULT_ITEMS)}</ul>
  </div>
);
