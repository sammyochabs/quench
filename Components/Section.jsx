import React from "react";
import styles from "../styles/section.module.css";

const Section = ({ image }) => {
  return (
    <div
      className={`d-flex flex-row justify-content-center p-5 ${styles.section}`}
    >
      <div
        className={`d-flex flex-row align-items-center justify-content-center ${styles.sectionImageDiv}`}
      >
        <img
          className={styles.sectionImage}
          src="/images/girlWithCup.png"
          alt=""
        />
      </div>

      <div
        className={`d-flex flex-column justify-content-center  ${styles.sectionText}`}
      >
        <div
          className={`d-flex flex-row align-items-center ${styles.headerDiv}`}
        >
          <img src="/images/dot.svg" alt="" />
          <p className={styles.headerText}>Why give with us?</p>
          <img src="/images/line.svg" alt="" />
        </div>

        <div className={styles.listItem}>
          <img src="/images/list.svg" alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,{" "}
          </p>
        </div>
        <div className={styles.listItem}>
          <img src="/images/list.svg" alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's .
          </p>
        </div>
        <button className="d-flex flex-row py-2 px-1">
          View Water Requests <img src="images/forward.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Section;
