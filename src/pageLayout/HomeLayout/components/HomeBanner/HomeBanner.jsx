import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import truck from "@/assets/img/truck.webp";
import styles from "./HomeBanner.module.scss";

export const HomeBanner = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.ImageWrapper}>
        <Image src={truck} alt="truck" objectFit="cover" layout="fill" />
        <div className={styles.conent}>
          <div className={styles.contentWrapper}>
            <p>THE FUTURE REVOLUTION OF TRUCK TRAKING</p>
            <button className={styles.button}>Learn More </button>
          </div>
        </div>
      </div>
    </div>
  );
};
