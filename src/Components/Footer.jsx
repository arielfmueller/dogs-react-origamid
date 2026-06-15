import React from "react";
import styles from "../Styles/Components/Footer.module.css";
import Dogs from "../Assets/dogs-footer.svg?react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Dogs. Alguns direitos reservados.</p>
      <Dogs />
    </footer>
  );
};

export default Footer;
