import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Image from "next/image";
import jwt_decode from "jwt-decode";
import { AppHeader } from "@/components/AppHeader";
import { getUser } from "@/redux/slices/users.slice";
import { logout } from "@/redux/slices/auth.slice";
import ShipperForm from "../RegisterLayout/components/ShipperForm";
import CompanyForm from "../RegisterLayout/components/CompanyForm";
import OperatorForm from "../RegisterLayout/components/OperatorForm";
import userImage from "@/assets/img/defaulItmage.jpg";
import styles from "./style.module.scss";

const ProfileLayout = () => {
  const dispatch = useDispatch();
  const [file, setFile] = React.useState();
  const [fileUrl, setFileUrl] = React.useState();
  const [role, setRole] = React.useState();

  const token = useSelector((state) => state.auth.access_token);
  const user = useSelector((state) => state.users.user);
  console.log(user);
  const changePhoto = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
    setFileUrl(URL.createObjectURL(e.target.files[0]));
  };
  const LogOut = () => {
    dispatch(logout());
  };

  // const renderForm = React.useMemo(() => {
  //   switch (role) {
  //     case "SHIPPER":
  //       return <ShipperForm values={user} variant="profile" />;

  //     case "COMPANY":
  //       return <CompanyForm values={user} variant="profile" />;

  //     case "OPERATOR":
  //       return <OperatorForm values={user} variant="profile" />;
  //   }
  // }, [role, user]);

  React.useEffect(() => {
    if (token) {
      var decoded = jwt_decode(token);
      dispatch(getUser(decoded.id));
      setRole(decoded.role);
    }
  }, [token]);
  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <div>
        <div className="container">
          <div className={styles.conentWrapper}>
            <div className={styles.userImage}>
              <div className={styles.ImageWrapper}>
                <Image
                  src={fileUrl || userImage}
                  alt="user"
                  objectFit="cover"
                  layout="responsive"
                  width={100}
                  height={100}
                ></Image>
              </div>

              <label className={styles.inputButton}>
                <p>Change Photo</p>
                <input type="file" onChange={changePhoto}></input>
              </label>
              <button onClick={LogOut} className={styles.logOutBtn}>
                Log out
              </button>
            </div>
            <div className={styles.formWrapper}>
              {role == "SHIPPER" && (
                <ShipperForm values={user} variant="profile" />
              )}
              {role == "COMPANY" && (
                <CompanyForm values={user} variant="profile" />
              )}
              {role == "OPERATOR" && (
                <OperatorForm values={user} variant="profile" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
