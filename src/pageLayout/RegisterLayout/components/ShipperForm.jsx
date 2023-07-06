import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { AppInput } from "@/components/ui/AppInput";
import { createShipper } from "@/redux/slices/auth.slice";
import styles from "./RegistrationForms.module.scss";

function ShipperForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const IsSucceed = useSelector((state) => state.auth.IsSignUp);
  console.log(IsSucceed);
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
    dispatch(createShipper(data));
  };
  useEffect(() => {
    IsSucceed && router.push("/login");
  }, [IsSucceed]);

  useEffect(() => {
    setValue("role", "SHIPPER");
  }, []);
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
          label="Address"
          {...register("billing_address")}
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="Last Name"
          {...register("lastname")}
        />
        <AppInput
          className={styles.input}
          label="Confirm password"
          {...register("confirm_password")}
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
          label="Password"
          {...register("password")}
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
}

export default ShipperForm;
