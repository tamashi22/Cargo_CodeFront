import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import clsx from "clsx";

import { AppInput } from "@/components/ui/AppInput";
import truck from "@/assets/img/cargo.jpg";
import Logo from "@/assets/img/logo.png";
import { loginSchema } from "@/validations";
import styles from "./LoginLayout.module.scss";
export const LoginLayout = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });
  const onFormSubmit = (data) => {
    console.log(data);
  };
  const goToRegister = () => {
    router.push("/register");
  };
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className={styles.logo}>
            <Image src={Logo} alt="logo" objectFit="contain" layout="fill" />
          </div>
          <div className={styles.inputWrapper}>
            <AppInput
              className={styles.input}
              label="E-mail / Phone"
              {...register("login")}
              error={errors.login?.message}
            />
            <AppInput
              className={styles.input}
              label="Password"
              type="password"
              {...register("password")}
              error={errors.password?.message}
            />
          </div>
          <div className={styles.buttonsWrapper}>
            <button
              className={clsx("button", styles.registerButton)}
              type="button"
              onClick={goToRegister}
            >
              SignUp
            </button>
            <button className={clsx("button", styles.buttonSubmit)}>
              SignIn
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
