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
          label="First Name"
          {...register("firstName")}
        />
        <AppInput
          className={styles.input}
          label="Last Name"
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
          label="Phone number"
          {...register("phone")}
          type="number"
        />
      </div>

      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="Address"
          {...register("billing_address")}
        />
        <AppInput
          className={styles.input}
          label="Password"
          {...register("password")}
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="Confirm password"
          {...register("confirm_password")}
        />
      </div>
      <button className={styles.submitButton}>Create Account</button>
    </form>
  );
}

export default ShipperForm;
