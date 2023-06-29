import React from "react";
import styles from "./AppHeader.module.scss";
import Link from "next/link";
export const AppHeader = () => {
  return (
    <div className="container">
      <Link href={"/"}>
        <div className={styles.logo}> Logo</div>
      </Link>
    </div>
  );
};
