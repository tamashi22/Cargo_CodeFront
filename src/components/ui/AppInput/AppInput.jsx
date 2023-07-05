import clsx from "clsx";
import React from "react";
import styles from "./AppInput.module.scss";

export const AppInput = React.forwardRef(
  ({ error, label, className, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        <label className={styles.label}>{label}</label>
        <input
          ref={ref}
          className={clsx(styles.input, className, error && styles.errorInput)}
          {...props}/>
        <p className={styles.error}>{error}</p>
      </div>
    );
  }
);
