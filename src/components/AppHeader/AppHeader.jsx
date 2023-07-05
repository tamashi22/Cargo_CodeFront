import React from "react";
import styles from "./AppHeader.module.scss";
import Image from "next/image";
import Link from "next/link";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Logo from "@/assets/img/logo.png";
import User from "@/assets/svg/user.svg";

export const AppHeader = () => {
  const router = useRouter();

  const IsSigIn = useSelector((state) => state.auth.isLoggedIn);

  const goToProfile = () => {
    router.push("/profile");
  };
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <Link href={"/"}>
            <div className={styles.logo}>
              <Image src={Logo} alt="logo" objectFit="contain" layout="fill" />
            </div>
          </Link>
          <div>
            {!IsSigIn ? (
              <div className={styles.linksWrapper}>
                <Link href={"/login"}>Sign In</Link>
                <Link href={"/register"}>Sign Up</Link>
              </div>
            ) : (
              //!Here is an erorr
              <button className={styles.userButton} onClick={goToProfile}>
                <User />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
