import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppInput } from "@/components/ui/AppInput";
import { AppSelect } from "@/components/ui/AppSelect";
import { createOperator } from "@/redux/slices/auth.slice";
import styles from "./RegistrationForms.module.scss";

const OperatorForm = () => {
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
    dispach(createOperator(data));
  };
  React.useEffect(() => {
    setValue("role", "OPERATOR");
  }, []);
  React.useEffect(() => {
    IsSucceed && router.push("/");
  }, [IsSucceed]);
  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onFormSubmit)}>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="First Name"
          {...register("firstname")}
        />
        <AppInput
          className={styles.input}
          label="MC/DOT numer"
          {...register("mc_dot_number")}
          type="number"
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="LastName"
          {...register("lastname")}
        />
        <AppInput
          className={styles.input}
          label="Address"
          {...register("physical_address")}
        />
        
        
      </div>
      <div className={styles.inputWrapper}>
        <AppSelect
          {...register("company_id")}
          className={styles.input}
          label="Company"
        >
          <option disabled selected />

          <option>FedEx</option>
          <option>DPD</option>
          <option>CargoCode</option>
        </AppSelect>
        <AppInput
          className={styles.input}
          label="Password"
          {...register("password")}
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
          label="Confirm Password"
          {...register("confirm_password")}
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="Phone number"
          {...register("phone")}
          type="number"
        />
        <button className={styles.submitButton}>Create Account</button>
      </div>
    </form>
  );
};

export default OperatorForm;
