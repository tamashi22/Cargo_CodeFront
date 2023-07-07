import React from "react";
import dynamic from "next/dynamic";

import { HomeBanner } from "./components/HomeBanner";
import Image from "next/image";
import HomeAbout from "./components/HomeAbout/HomeAbout";
import { HomeQuestions } from "./components/HomeQuestions";
import styles from "./HomeLayout.module.scss";

const HomeLayout = () => {
  const Map = dynamic(() => import("../../components/TrimbleMap/TrimbleMap"), {
    loading: () => "Loading...",
    ssr: false,
  });
  return (
    <div className={styles.wrapper}>
      {/* <Map className={styles.mapContainer} /> */}

      <HomeBanner />
      <div className="container">
        <HomeAbout />
        <HomeQuestions />
      </div>
    </div>
  );
};

export default HomeLayout;
