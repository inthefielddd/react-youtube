import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo((props) => (
    <footer className={styles.footer}>
        <p className={styles.text}>&copy; 2021 INTHEFILED </p>
    </footer>
));
export default Footer;
