import React, { useEffect, useState } from "react";
import styles from "./AppHeader.module.scss";
import Image from "next/image";
import Link from "next/link";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Logo from "@/assets/img/logo.png";
import User from "@/assets/svg/user.svg";
import clsx from "clsx";

const NAVS_LIST = [
  {title: 'Home', path: '/'},
  {title: 'Orders', path: '/orders'},
  {title: 'Help', path: '/help'},
  {title: 'FAQ', path: '/faq'}
]

export const AppHeader = () => {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const [activeNav, setActiveNav] = useState(-1);
  const IsSigIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    setIsLogged(IsSigIn);
  }, []);

  useEffect(() => {
    let route = router.route.split('/')[1];
    const index = NAVS_LIST.findIndex((nav) => nav.path === ('/' + route));
    setActiveNav(index);
  }, [router]);

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
                NAVS_LIST.map((nav, index) => (
                  <Link key={index} className={clsx(styles.nav, index === activeNav && styles.active_nav)} href={nav.path}>{nav.title}</Link>
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
