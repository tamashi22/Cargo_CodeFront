import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppInput } from "@/components/ui/AppInput";
import { AppSelect } from "@/components/ui/AppSelect";
import { createOperator } from "@/redux/slices/auth.slice";
import styles from "./RegistrationForms.module.scss";
import Link from "next/link";

const OperatorForm = ({ values, variant }) => {
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
    if (variant == "profile") {
      console.log(data);
      return;
    }
    delete data.confirm_password;
    dispach(createOperator(data));
  };
  React.useEffect(() => {
    reset(values);
  }, [values]);
  React.useEffect(() => {
    setValue("role", "OPERATOR");
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
          label="Email"
          {...register("email")}
        />
        {variant == "profile" ? null : (
          <AppInput
            className={styles.input}
            label="Confirm Password"
            {...register("confirm_password")}
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
        <button className={styles.submitButton}>Create Account</button>
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
};

export default OperatorForm;
