import React, { useState } from "react";
import Image from "next/image";
import styles from "./LoginLayout.module.scss";
import { AppInput } from "@/components/ui/AppInput";
import truck from "@/assets/img/cargo.jpg";
import Logo from "@/assets/img/logo.png";
import clsx from "clsx";
export const LoginLayout = () => {
  const [form, setForm] = useState({ login: "", password: "" });
  const onInputChange = ({ target }) => {
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <form onSubmit={onFormSubmit}>
          <div className={styles.logo}>
            <Image src={Logo} alt="logo" objectFit="contain" layout="fill" />
          </div>
          <AppInput
            className={styles.input}
            value={form.login}
            label="E-mail / Логин"
            name="login"
            onChange={onInputChange}
          />
          <AppInput
            className={styles.input}
            value={form.password}
            label="Пароль"
            name="password"
            onChange={onInputChange}
          />
          <div className={styles.buttonsWrapper}>
            <button
              className={clsx("button", styles.registerButton)}
              type="button"
            >
              Регистрация
            </button>
            <button className={clsx("button", styles.buttonSubmit)}>
              Войти
            </button>
          </div>
        </form>
      </div>
      <div className={styles.imageWraper}>
        <Image alt="truck" src={truck} objectFit="cover" layout="fill"></Image>
      </div>
    </div>
  );
};
