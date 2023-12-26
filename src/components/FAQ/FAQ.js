import React, { useState } from "react";
import styles from "./FAQ.module.scss";
import cross from "../../images/cross.svg";
import minus from "../../images/minus.svg";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Як відбуваються заняття?",
      content:
        "Заняття проводяться онлайн через відеоконференційні платформи. Учасники можуть приєднатися за посиланням, яке надсилається перед початком кожного заняття. Доцільно встановити перед початком заняття необхідне програмне забезпечення та перевірити з'єднання з Інтернетом.",
    },
    {
      question: "На який строк мені надається доступ до особистого кабінету?",
      content:
        "Доступ до особистого кабінету надається протягом всього періоду участі в курсі. Після завершення курсу доступ залишається активним протягом певного часу, щоб ви мали можливість переглядати матеріали та отримувати необхідну інформацію.",
    },
    {
      question: "Чи є технічні вимоги щодо відтворення відеоматеріалів?",
      content:
        "Для відтворення відеоматеріалів рекомендується використовувати сучасний браузер та мати стабільне Інтернет-з'єднання. Додатково, для кращої якості відтворення використовуйте пристрої з високою роздільною здатністю екрану.",
    },
    {
      question:
        "Чи можу я передавати іншим дані для входу в особистий кабінет, а також будь-які матеріали курсу або посилання на них?",
      content:
        "З міркувань безпеки та конфіденційності, не рекомендується передавати свої дані для входу в особистий кабінет іншим особам. Матеріали курсу призначені виключно для учасників і не повинні розголошуватися або передаватися третім сторонам.",
    },
    {
      question: "Чи є записи занять?",
      content:
        "Так, всі заняття записуються і зберігаються в особистому кабінеті. Учасники можуть переглядати записи для повторення матеріалів або якщо вони пропустили яке-небудь заняття. Записи доступні протягом усього періоду участі в курсі.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {faqData.map((item, index) => (
          <li key={index} className={styles.listItem}>
            <div className={styles.questionWrapper}>
              <p>{item.question}</p>
              <img
                onClick={() => handleToggle(index)}
                src={openIndex === index ? minus : cross}
                alt={openIndex === index ? "Minus Icon" : "Cross Icon"}
                className={`${styles.icon} ${
                  openIndex === index ? styles.iconRotate : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <span className={styles.answer}>{item.content}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
