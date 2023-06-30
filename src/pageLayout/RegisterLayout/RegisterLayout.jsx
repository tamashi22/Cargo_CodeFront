import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styles from "./RegisterLayout.module.scss";
import { AppInput } from "@/components/ui/AppInput";
import truck from "@/assets/img/cargo.jpg";
import Logo from "@/assets/img/logo.png";
import clsx from "clsx";
import { AppHeader } from "@/components/AppHeader";

export const RegisterLayout = () => {
  const [userType, setUserType] = useState();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(),
    mode: "onChange",
  });

  return (
    <>
      <AppHeader />
      <h3 className={styles.title}>Регистрация</h3>
      <div className={styles.container}>
        <form className={styles.formWrapper}>
          <div className={styles.inputWrapper}>
            <AppInput className={styles.input}></AppInput>
            <AppInput className={styles.input}></AppInput>
          </div>
        </form>
      </div>
    </>
  );
};
