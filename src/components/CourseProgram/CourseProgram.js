import styles from "./CourseProgram.module.scss";
export const CourseProgram = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.topText}>Програма курсу</p>
        <p className={styles.bottomText}>7 занять</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <div className={styles.itemBox}>1</div>
          <div className={styles.textContainer}>
            <p className={styles.itemTitle}>Мобілізація:</p>
            <p>
              вручення повістки, форма повістки, хто має право вручати повістку,
              відповідальність за нез'явлення за повсткою; мобілізація жінок.
            </p>
          </div>
        </li>

        <li className={styles.listItem}>
          <div className={styles.itemBox}>2</div>
          <div className={styles.textContainer}>
            <p className={styles.itemTitle}>Конктракт із ЗСУ:</p>
            <p>переведення, призупинення, звільнення.</p>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemBox}>3</div>
          <div className={styles.textContainer}>
            <p className={styles.itemTitle}>Відстрочка, бронювання:</p>
            <p>підстави, документи, порядок отримання.</p>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemBox}>4</div>
          <div className={styles.textContainer}>
            <p className={styles.itemTitle}>
              Проходження ВЛК, оскарження висновку ВЛК.
            </p>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemBox}>5</div>
          <div className={styles.textContainer}>
            <p className={styles.itemTitle}>
              Статус УБД, особи з інвалідністю внаслідок війни, особи зникої
              безвісти, порядок визнання особи померлою.
            </p>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemBox}>6</div>
          <div className={styles.textContainer}>
            <p className={styles.itemTitle}>
              Соціальні гарантії та пенсійне забезпечення війьковослужбовців та
              членів їх сімей.
            </p>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemBox}>7</div>
          <div className={styles.textContainer}>
            <p className={styles.itemTitle}>
              Виїзд за кордон військовозобов’язаних:
            </p>
            <p>
              перелік осіб, які мають право на перетин кордону, доументи
              необхідні для перетину кордону, проблемні аспекти.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
