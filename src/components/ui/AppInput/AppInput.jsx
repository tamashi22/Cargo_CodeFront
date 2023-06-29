import clsx from "clsx";
import React from "react";
import styles from "./AppInput.module.scss";
export const AppInput = React.forwardRef(({ error, label, className, ...props }, ref) => {
  return (
    <div className={styles.wrapper}>
      <p  className={styles.label}>{label}</p>
      <input ref={ref} className={clsx(styles.input, className)} {...props} />
    </div>
  );
});
