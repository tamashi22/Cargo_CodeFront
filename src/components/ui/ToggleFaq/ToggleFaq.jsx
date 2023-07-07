import React, { useState } from "react";
import clsx from "clsx";
import styles from "./ToggleFaq.module.scss";
import Arrow from "@/assets/svg/arrowDown.svg";
import Image from "next/image";

export const ToggleFaq = ({ answer, question, icon, className }) => {
  const [toggleThisElement, setToggleThisElement] = useState(false);
  return (
    <div className={clsx(styles.faqItem, className)}>
      <div
        className={clsx(
          styles.questionWrapper,
          toggleThisElement && styles.questionWrapperActive
        )}
        onClick={() => setToggleThisElement((prev) => !prev)}
      >
        <div className={styles.questionContainer}>
          {icon && (
            <div className={styles.iconWrapper}>
              <Image src={icon} alt="ico" width={24} height={24}></Image>
            </div>
          )}
          <div className={styles.question}>{question}</div>
        </div>
        <div className={styles.arrow}>
          <Arrow />
        </div>
      </div>
      <div
        className={clsx(
          styles.answerWraper,
          toggleThisElement && styles.answerWraperActive
        )}
      >
        <div
          className={styles.answer}
          dangerouslySetInnerHTML={{ __html: answer }}
        ></div>
      </div>
    </div>
  );
};
