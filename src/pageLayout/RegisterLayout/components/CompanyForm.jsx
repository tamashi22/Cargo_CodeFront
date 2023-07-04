import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AppInput } from "@/components/ui/AppInput";
import styles from "./RegistrationForms.module.scss";

const CompanyForm = () => {
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
    setValue("role", "COMPANY");
  }, []);
  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onFormSubmit)}>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="Company Name"
          {...register("company_name")}
        />
        <AppInput
          className={styles.input}
          label="Email"
          {...register("email")}
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="Phone Number"
          {...register("phone")}
          type="number"
        />
        <AppInput
          className={styles.input}
          label="Insurance number"
          {...register("insurance")}
          type="number"
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="Address"
          {...register("physical_address")}
        />
        <AppInput
          className={styles.input}
          label="Password"
          {...register("password")}
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppInput className={styles.input} label="Confirm Password" />
      </div>

      <button className={styles.submitButton}>Create Account</button>
    </form>
  );
};

export default CompanyForm;
