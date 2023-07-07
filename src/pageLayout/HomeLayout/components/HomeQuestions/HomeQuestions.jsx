import React, { useState } from "react";
import styles from "./HomeQuestions.module.scss";
import { QuestionAnswer } from "@/constants/questionAnswer";
import { ToggleFaq } from "@/components/ui/ToggleFaq";

const HomeQuestions = ({ questions }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Question and Answers</h1>
      <div className={styles.faqItems}>
        {QuestionAnswer.map((q) => {
          return (
            <ToggleFaq key={q.id} answer={q.answer} question={q.question} />
          );
        })}
      </div>
    </div>
  );
};

export default HomeQuestions;
