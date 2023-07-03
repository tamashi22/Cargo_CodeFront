import React, { Children } from "react";
import clsx from "clsx";
import styles from "./AppSelect.module.scss";

export const AppSelect = React.forwardRef(
  ({ error, label, className, children, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        <p className={styles.label}>{label}</p>
        <select
          ref={ref}
          className={clsx(styles.select, className, error && styles.error)}
          {...props}
        >
          {children}
        </select>
        <p className={styles.errorMessage}>{error}</p>
      </div>
    );
  }
);
