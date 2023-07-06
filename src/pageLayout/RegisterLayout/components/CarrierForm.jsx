import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppInput } from "@/components/ui/AppInput";
import { AppSelect } from "@/components/ui/AppSelect";
import { createCarrier } from "@/redux/slices/auth.slice";

import styles from "./RegistrationForms.module.scss";

function CarrierForm() {
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
    console.log(data);
    dispach(createCarrier(data));
  };
  React.useEffect(() => {
    setValue("role", "CARRIER");
  }, []);
  React.useEffect(() => {
    IsSucceed && router.push("/login");
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
          label="LastName"
          {...register("lastname")}
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
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppSelect
          {...register("company_id")}
          className={styles.input}
          label="Company Name (do not choose if individually)"
        >
          <option disabled selected />

          <option>FedEx</option>
          <option>DPD</option>
          <option>CargoCode</option>
        </AppSelect>
        <AppInput
          className={styles.input}
          label="Address"
          {...register("physical_address")}
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="MC/DOT numer"
          {...register("mc_dot_number")}
          type="number"
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
          label="Confirm Password"
          {...register("confirm_password")}
        />
      </div>
      <button className={styles.submitButton}>Create Account</button>
    </form>
  );
}

export default CarrierForm;
