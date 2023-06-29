import React, { useState } from "react";
import styles from "./LoginLayout.module.scss";
import { AppInput } from "@/components/ui/AppInput";
import clsx from "clsx";
export const LoginLayout = () => {
  const [form, setForm] = useState({ login: "", password: "" });
  const onInputChange = ({ target }) => {
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <AppInput
          className={styles.input}
          value={form.login}
          label="login"
          name="login"
          onChange={onInputChange}
        />
        <AppInput
          className={styles.input}
          value={form.password}
          label="password"
          name="password"
          onChange={onInputChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
};
