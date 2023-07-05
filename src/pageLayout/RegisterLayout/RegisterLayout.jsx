import React, { useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { AppHeader } from "@/components/AppHeader";

import CarrierForm from "./components/CarrierForm";
import ShipperForm from "./components/ShipperForm";
import CompanyForm from "./components/CompanyForm";
import OperatorForm from "./components/OperatorForm";
import styles from "./RegisterLayout.module.scss";

export const RegisterLayout = () => {
  const [userType, setUserType] = useState("CARRIER");
  const router = useRouter();

  const renderForm = React.useMemo(() => {
    switch (userType) {
      case "CARRIER":
        return <CarrierForm />;

      case "SHIPPER":
        return <ShipperForm />;

      case "COMPANY":
        return <CompanyForm />;

      case "EMPLOYEE":
        return <OperatorForm />;
    }
  }, [userType]);

  return (
    <>
      <AppHeader />
      <h3 className={styles.title}>Create New Account</h3>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <p className={styles.label}>Choose role:</p>
          <div className={styles.choiceWrapper}>
            <p
              onClick={() => setUserType("CARRIER")}
              className={clsx(
                styles.userType,
                userType == "CARRIER" && styles.active
              )}
            >
              Carrier
            </p>
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
              onClick={() => setUserType("EMPLOYEE")}
              className={clsx(
                styles.userType,
                userType == "EMPLOYEE" && styles.active
              )}
            >
              Company employee
            </p>
          </div>
          {renderForm}
        </div>
      </div>
    </>
  );
};
