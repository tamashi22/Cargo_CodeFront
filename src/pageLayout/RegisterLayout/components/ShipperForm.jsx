import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { AppInput } from "@/components/ui/AppInput";
import { createShipper } from "@/redux/slices/auth.slice";

import styles from "./RegistrationForms.module.scss";

function ShipperForm({ variant, values, image }) {
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
    // defaultValues: {},
    // resolver: yupResolver(),
    // mode: "onChange",
  });

  const onFormSubmit = (data) => {
    if (variant == "profile") {
      console.log(data);
      return;
    }
    delete data.confirm_password;
    dispatch(createShipper(data));
  };
  React.useEffect(() => {
    reset(values);
  }, [values]);

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
        {variant == "profile" ? null : (
          <AppInput
            className={styles.input}
            label="Confirm password"
            {...register("confirm_password")}
          />
        )}
      </div>

      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="Email"
          {...register("email")}
        />
        {variant == "profile" ? null : (
          <AppInput
            className={styles.input}
            label="Password"
            {...register("password")}
          />
        )}
      </div>
      <div className={styles.inputWrapper}>
        <AppInput
          className={styles.input}
          label="Phone number"
          {...register("phone")}
          type="number"
        />
        <button className={styles.submitButton}>
          {variant == "profile" ? "Save Changes" : "Create Account"}
        </button>
      </div>
      {variant == "profile" ? null : (
        <>
          <div className={styles.link_to_main}>
            <p>
              Go to <Link href="/">Main page</Link>
            </p>
          </div>
          <div className={styles.link_to_signin}>
            <p>
              Already have account? <Link href="/login">Sign in</Link>
            </p>
          </div>
        </>
      )}
    </form>
  );
}

export default ShipperForm;
