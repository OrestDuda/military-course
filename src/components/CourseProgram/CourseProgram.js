import styles from "./CourseProgram.module.scss";

const Title = ({ topText, bottomText }) => (
  <div className={styles.title}>
    <p className={styles.topText}>{topText}</p>
    <p className={styles.bottomText}>{bottomText}</p>
  </div>
);

const ListItem = ({ index, itemTitle, children }) => (
  <li className={styles.listItem}>
    <div className={styles.itemBox}>{index}</div>
    <div className={styles.textContainer}>
      <p className={styles.itemTitle}>{itemTitle}</p>
      <p>{children}</p>
    </div>
  </li>
);

export const CourseProgram = () => {
  const listItems = [
    {
      title: "Мобілізація:",
      description:
        "вручення повістки, форма повістки, хто має право вручати повістку, відповідальність за нез'явлення за повсткою; мобілізація жінок.",
    },
    {
      title: "Конктракт із ЗСУ:",
      description: "переведення, призупинення, звільнення.",
    },
    {
      title: "Відстрочка, бронювання:",
      description: "підстави, документи, порядок отримання.",
    },
    {
      title: "Проходження ВЛК, оскарження висновку ВЛК.",
    },
    {
      title:
        "Статус УБД, особи з інвалідністю внаслідок війни, особи зникої безвісти, порядок визнання особи померлою.",
    },
    {
      title:
        "Соціальні гарантії та пенсійне забезпечення війьковослужбовців та членів їх сімей.",
    },
    {
      title: "Виїзд за кордон військовозобов’язаних:",
      description:
        "перелік осіб, які мають право на перетин кордону, доументи необхідні для перетину кордону, проблемні аспекти.",
    },
  ];

  return (
    <div className={styles.container}>
      <Title topText="Програма курсу" bottomText="7 занять" />
      <ul className={styles.list}>
        {listItems.map((item, index) => (
          <ListItem index={index + 1} itemTitle={item.title} key={index}>
            {item.description}
          </ListItem>
        ))}
      </ul>
    </div>
  );
};
