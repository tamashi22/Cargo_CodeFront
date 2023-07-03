import React, { useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { AppHeader } from "@/components/AppHeader";
import CarrierForm from "./components/CarrierForm";
import ShipperForm from "./components/ShipperForm";
import CompanyForm from "./components/CompanyForm";
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
    }
  }, [userType]);

  return (
    <>
      <AppHeader />
      <h3 className={styles.title}>Регистрация</h3>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <p className={styles.label}>Выберите роль:</p>
          <div className={styles.choiceWrapper}>
            <p
              onClick={() => setUserType("CARRIER")}
              className={clsx(
                styles.userType,
                userType == "CARRIER" && styles.active
              )}
            >
              Перевозчик
            </p>
            <p
              onClick={() => setUserType("SHIPPER")}
              className={clsx(
                styles.userType,
                userType == "SHIPPER" && styles.active
              )}
            >
              Грузоотправитель
            </p>
            <p
              onClick={() => setUserType("COMPANY")}
              className={clsx(
                styles.userType,
                userType == "COMPANY" && styles.active
              )}
            >
              Логистическая компания
            </p>
          </div>
          {renderForm}
        </div>
      </div>
    </>
  );
};
