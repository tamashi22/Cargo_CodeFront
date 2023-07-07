import React from "react";
import Image from "next/image";
import pic1 from "@/assets/img/pic1.webp";
import pic2 from "@/assets/img/pic2.webp";
import styles from "./HomeAbout.module.scss";
const HomeAbout = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Key features of truck tracking by CargoCode
      </h1>
      <div className={styles.itemContainer}>
        <div className={styles.contentWrapper}>
          <h3>Accurate live lorry tracking</h3>
          <p>
            Take your fleet's efficiency to another level with precise tracking
            of truck driving times, mileage and locations. Truck tracking also
            makes it easier to keep on top of your fleet's fuel consumption.
            Just pinpoint where there's excessive usage, then take the
            appropriate fuel-saving measures.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image src={pic1} alt="pic" objectFit="cover" layout="fill" />
        </div>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.contentWrapper}>
          <h3>Access to real-time traffic information</h3>
          <p>
            Help your drivers avoid roadblocks, congestion and delays. Real-time
            traffic information makes a world of difference in ensuring your
            trucks are driving in the safest conditions. With real-time data on
            local traffic, it's also possible to boost your customer
            satis­faction
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image src={pic2} alt="pic" objectFit="cover" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
