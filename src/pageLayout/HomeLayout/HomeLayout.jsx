import React from "react";
import dynamic from "next/dynamic";
import styles from "./HomeLayout.module.scss";
const HomeLayout = () => {
  const Map = dynamic(() => import("../../components/TrimbleMap/TrimbleMap"), {
    loading: () => "Loading...",
    ssr: false,
  });
  return (
    <div className={styles.wrapper}>
      <Map className={styles.mapContainer} /> 
    </div>
  );
};

export default HomeLayout;
