import React, { useEffect, useState } from "react";
import styles from "./AppHeader.module.scss";
import Image from "next/image";
import Link from "next/link";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Logo from "@/assets/img/logo.png";
import User from "@/assets/svg/user.svg";

const NAVS_LIST = [
  {title: 'Home', path: '/'},
  {title: 'Orders', path: '/orders'},
  {title: 'Help', path: '/help'},
  {title: 'FAQ', path: '/faq'}
]

export const AppHeader = () => {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const IsSigIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    setIsLogged(IsSigIn);
  }, []);

  const goToProfile = () => {
    router.push("/profile");
  };

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <div>
            <Link href={"/"}>
              <div className={styles.logo}>
                <Image src={Logo} alt="logo" objectFit="contain" layout="fill" />
              </div>
            </Link>
            <div className={styles.nav_list}>
              {
                NAVS_LIST.map((nav) => (
                  <Link className={styles.nav} href={nav.path}>{nav.title}</Link>
                ))
              }
            </div>

          </div>
          <div>
            {!isLogged ? (
              <div className={styles.linksWrapper}>
                <Link href={"/login"}>Sign In</Link>
                <Link href={"/register"}>Sign Up</Link>
              </div>
            ) : (
              //!Here is an erorr
              <div>
                <Link href="/profile">
                  <User />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
