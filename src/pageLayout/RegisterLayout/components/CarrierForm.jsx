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
          label="First Name"
          {...register("firstName")}
        />
        <AppInput
          className={styles.input}
          label="LastName"
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
        />
      </div>
      <div className={styles.inputWrapper}>
        <AppSelect
          {...register("company")}
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
        <AppInput className={styles.input} label="Confirm Password" />
      </div>
      <button className={styles.submitButton}>Create Account</button>
    </form>
  );
}

export default CarrierForm;
