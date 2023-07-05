import React from "react";
import { useDispatch } from "react-redux";
import { AppHeader } from "@/components/AppHeader";
import styles from "./style.module.scss";
import { logout } from "@/redux/slices/auth.slice";

const ProfileLayout = () => {
  const dispach = useDispatch();
  const LogOut = () => {
    event.preventDefault();
    dispach(logout());
  };
  return (
    <div>
      <AppHeader />
      <div className="container">
        <button onClick={LogOut}>Log Out</button>
      </div>
    </div>
  );
};

export default ProfileLayout;
