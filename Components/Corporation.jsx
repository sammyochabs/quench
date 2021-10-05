import React from "react";
import styles from "../styles/corporation.module.css";

const Corporation = ({ image }) => {
  return (
    <div className={`mt-4  ${styles.container}`}>
      <div className={` ${styles.imgDiv}`}>
        <img src={image} alt="" />
      </div>
      <div className={`${styles.headerDiv}`}>
        <span> Support a corporation</span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
      </div>
      <div className={`${styles.buttonDiv}`}>
        <button>View More</button>
        <button>12 Litres</button>
      </div>
    </div>
  );
};

export default Corporation;
