import React from "react";
import styles from "./AppHeader.module.scss";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/img/logo.png";

export const AppHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <Link href={"/"}>
            <div className={styles.logo}>
              <Image src={Logo} alt="logo" objectFit="contain" layout="fill" />
            </div>
          </Link>
          <div className={styles.linksWrapper}>
            <Link href={"/login"}>Вход</Link>
            <Link href={"/register"}>Регистарация</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
