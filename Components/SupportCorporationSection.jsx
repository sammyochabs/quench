import React from "react";
import styles from "../styles/section.module.css";
import Corporation from "./Corporation";

const SupportCorporationSection = () => {
  return (
    <div
      className={`d-flex flex-column align-items-center ${styles.supportCorporation}`}
    >
      <div className={`d-flex flex-row align-items-center ${styles.headerDiv}`}>
        <img src="/images/dot.svg" alt="" />
        <p className={styles.headerText}>Water Access Flyway</p>
        <img src="/images/line.svg" alt="" />
      </div>
      <span>Support corporations that support water equality</span>
      <div
        className={`d-flex flex-row justify-content-center ${styles.corporationsList}`}
      >
        <Corporation image={"/images/girlCup.png"} />
        <Corporation image={"/images/boyRain.png"} />
        <Corporation image={"/images/handInWater.png"} />
      </div>
      <div
        className={`d-flex flex-row align-items-center justify-content-end mt-4 ${styles.moreButtons}`}
      >
        <button className="d-flex flex-row py-2 px-1">
          Find more corporations <img src="images/forward.svg" alt="" />
        </button>
        <button>12 Litres</button>
      </div>
    </div>
  );
};

export default SupportCorporationSection;
