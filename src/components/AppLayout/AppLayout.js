import React from "react";
import { AppFooter } from "../AppFooter";
import { AppHeader } from "../AppHeader";
import styles from "./AppLayout.module.scss";
export const AppLayout = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
};
