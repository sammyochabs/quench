import React from "react";
import styles from "../styles/banner.module.css";

const Banner = () => {
  return (
    <>
      <div className={` ${styles.container}`}>
        <div className={` ${styles.layer}`}></div>
        <img className={styles.light} src="/images/light.svg" alt="" />
        <img className={styles.Heart} src="/images/Heart.svg" alt="" />
        <img className={styles.cup} src="/images/cup.svg" alt="" />
        <div
          className={`d-flex flex-row align-items-center h-100 ${styles.welcomeNote}`}
        >
          <div>
            <h4>
              Directly increase clean water access for humans around the world.
            </h4>
            <div>
              <input type="text" />
              <button>Quench Poverty</button>
            </div>
            <h3 className="mt-2">
              You're sending 1000L of water with this donation
            </h3>
          </div>
          <div className={` ${styles.giveWater}`}>
            <img src="/images/givewater.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
