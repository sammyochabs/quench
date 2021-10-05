import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.topDiv} p-5`}>
        <div className={`w-25 ${styles.logoDiv}`}>
          <img src="/images/footerLogo.svg" alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's .Lorem Ipsum{" "}
          </p>
        </div>
        <div className={`w-25 ${styles.quickLink}`}>
          <span>Quick Link</span>
          <ul>
            <li>Principle</li>
            <li>Founding Team</li>
            <li>Water Fest</li>
            <li>Contribute</li>
          </ul>
        </div>
        <div className={` w-25 ${styles.quickLink}`}>
          <span>Quench Poverty</span>
          <ul>
            <li>Hydrate</li>
            <li>Water Delivery</li>
            <li>Quench Cali</li>
            <li>US SDG 6.1</li>
          </ul>
        </div>
        <div className={`w-25 shadow p-3 ${styles.socialLinks}`}>
          <div>
            <img src="/images/phone.png" alt="" />
            <span>1234567890</span>
          </div>
          <div>
            <img src="/images/mail.png" alt="" />
            <span>Quench@gmail.com</span>
          </div>
          <div>
            <img src="/images/location.png" alt="" />
            <span>A -789 Apple Avenue Nr post Offered Plaza US</span>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: 1, background: "white" }}></div>
      <div
        className={`d-flex flex-row w-100 justify-content-between  ${styles.bottomDiv}`}
      >
        <p>Copyright © 2021 Quench Pvt. Ltd. All rights reserved.</p>
        <div>
          <img src="/images/soc1.svg" alt="" />
          <img src="/images/soc2.svg" alt="" />
          <img src="/images/soc3.svg" alt="" />
          <img src="/images/soc4.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
