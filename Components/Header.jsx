import React from "react";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <div
      className={`d-flex  flex-row w-100   align-items-center px-3 ${styles.container}`}
    >
      <div className={`d-flex flex-row ${styles.logoContainer}`}>
        <img src="/images/quenchLogo.svg" alt="" />
      </div>
      <div className={`w-75 d-none d-md-flex ${styles.navListContainer}`}>
        <ul className="w-100">
          <li>
            Home
            <div className={` ${styles.currentTabIndicator}`}></div>
          </li>
          <li>Water Request</li>
          <li>Donation</li>
          <li>My Request</li>
          <li>Donation</li>
          <li>Corporations</li>
          <li>Corporate details</li>
          <li>
            <button>SIGN IN</button>
          </li>
        </ul>
      </div>
      <div
        className={`d-md-none d-flex flex-row justify-content-between  ${styles.mobileNavListContainer}`}
      >
        <button>SIGN IN</button>
        <img src="/images/menu.svg" alt="" />
      </div>
    </div>
  );
};

export default Header;
