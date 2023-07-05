import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppInput } from "@/components/ui/AppInput";
import { createCompany } from "@/redux/slices/auth.slice";
import styles from "./RegistrationForms.module.scss";

const CompanyForm = () => {
  const dispach = useDispatch();
  const IsSucceed = useSelector((state) => state.auth.IsSignUp);
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
    delete data.confirm_password;
    dispach(createCompany(data));
  };
  React.useEffect(() => {
    setValue("role", "COMPANY");
  }, []);
  React.useEffect(() => {
    IsSucceed && router.push("/");
  }, [IsSucceed]);
  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onFormSubmit)}>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="Company Name"
          {...register("name")}
        />
        <AppInput
          className={styles.input}
          label="Login"
          {...register("login")}
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="Address"
          {...register("address")}
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
          label="Insurance number"
          {...register("insurance_id")}
          type="number"
        />
        <AppInput
          className={styles.input}
          label="Confirm Password"
          {...register("confirm_password")}
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="Email"
          type="email"
          {...register("email")}
        />
        <button className={styles.submitButton}>Create Account</button>
      </div>
    </form>
  );
};

export default CompanyForm;
