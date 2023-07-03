import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AppInput } from "@/components/ui/AppInput";
import styles from "./RegistrationForms.module.scss";

function ShipperForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    // formState: { errors },
    reset,
  } = useForm({
    // resolver: yupResolver(),
    // mode: "onChange",
  });

  const onFormSubmit = (data) => {
    console.log(data);
  };
  React.useEffect(() => {
    setValue("role", "SHIPPER");
  }, []);
  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onFormSubmit)}>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="Имя"
          {...register("firstName")}
        />
        <AppInput
          className={styles.input}
          label="Фамилия"
          {...register("lastName")}
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="Email"
          {...register("email")}
        />
        <AppInput
          className={styles.input}
          label="Телефон"
          {...register("phone")}
          type="number"
        />
      </div>

      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="Адрес"
          {...register("billing_address")}
        />
        <AppInput
          className={styles.input}
          label="Пароль"
          {...register("password")}
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="Подтвертите Пароль"
          {...register("confirm_password")}
        />
      </div>
      <button className={styles.submitButton}>Зарегестрироваться</button>
    </form>
  );
}

export default ShipperForm;
