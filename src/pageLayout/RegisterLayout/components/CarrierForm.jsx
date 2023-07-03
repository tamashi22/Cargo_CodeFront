import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { AppInput } from "@/components/ui/AppInput";
import styles from "./RegistrationForms.module.scss";
import { AppSelect } from "@/components/ui/AppSelect";
function CarrierForm() {
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
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppSelect
          {...register("company")}
          className={styles.input}
          label=" Выберите Компанию(при наличии)"
        >
          <option disabled selected />

          <option>FedEx</option>
          <option>DPD</option>
          <option>CargoCode</option>
        </AppSelect>
        <AppInput
          className={styles.input}
          label="Адрес"
          {...register("physical_address")}
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="MC/DOT номер"
          {...register("mc_dot_number")}
          type="number"
        />
        <AppInput
          className={styles.input}
          label="Пароль"
          {...register("password")}
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppInput className={styles.input} label="Подтвертите Пароль" />
      </div>
      <button className={styles.submitButton}>Зарегестрироваться</button>
    </form>
  );
}

export default CarrierForm;
