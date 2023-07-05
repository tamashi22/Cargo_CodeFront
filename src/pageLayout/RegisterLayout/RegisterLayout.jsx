import React, { useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import ShipperForm from "./components/ShipperForm";
import CompanyForm from "./components/CompanyForm";
import OperatorForm from "./components/OperatorForm";
import styles from "./RegisterLayout.module.scss";

export const RegisterLayout = () => {
  const [userType, setUserType] = useState("SHIPPER");
  const router = useRouter();

  const renderForm = React.useMemo(() => {
    switch (userType) {
      case "SHIPPER":
        return <ShipperForm />;

      case "COMPANY":
        return <CompanyForm />;

      case "OPERATOR":
        return <OperatorForm />;
    }
  }, [userType]);

  return (
    <>
      <h3 className={styles.title}>Create New Account</h3>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.choiceWrapper}>
            <p
              onClick={() => setUserType("SHIPPER")}
              className={clsx(
                styles.userType,
                userType == "SHIPPER" && styles.active
              )}
            >
              Shipper
            </p>
            <p
              onClick={() => setUserType("COMPANY")}
              className={clsx(
                styles.userType,
                userType == "COMPANY" && styles.active
              )}
            >
              Logistic company
            </p>
            <p
              onClick={() => setUserType("OPERATOR")}
              className={clsx(
                styles.userType,
                userType == "OPERATOR" && styles.active
              )}
            >
              Operator
            </p>
          </div>
          {renderForm}
        </div>
      </div>
    </>
  );
};
