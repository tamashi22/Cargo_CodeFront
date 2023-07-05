import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppInput } from "@/components/ui/AppInput";
import truck from "@/assets/img/cargo.jpg";
import Logo from "@/assets/img/logo.png";
import { loginSchema } from "@/validations";
import { login } from "@/redux/slices/auth.slice";
import styles from "./LoginLayout.module.scss";
import Link from "next/link";

export const LoginLayout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const IsSucceed = useSelector((state) => state.auth.isLoggedIn);
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
    dispatch(login(data));
  };
  const goToRegister = () => {
    router.push("/register");
  };
  React.useEffect(() => {
    IsSucceed && router.push("/");
  }, [IsSucceed]);
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
            <button className={clsx("button", styles.buttonSubmit)}>
              Sign in
            </button>
          </div>
          <span className={styles.divide_line}>or</span>
          <div className={styles.signup_link_wrapper}>
            <Link
              type="button"
              className={clsx("button", styles.signup_link)}
              href="/register">
              Sign up
            </Link>
          </div>
        </form>
      </div>
      <div className={styles.imageWraper}>
        <Image alt="truck" src={truck} objectFit="cover" layout="fill"></Image>
      </div>
    </div>
  );
};
