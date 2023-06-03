import React from "react";
import classes from "./Footer.module.css";
import {
  FaLinkedinIn,
  FaGithubSquare,
  FaFacebookF,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={classes.mainfooter}>
      <div className={classes.container}>
        <div className={classes.upper}>
          <div className={classes.row1}>
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className={classes.social}>
              <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/aniket-deshmukh-b6045518b"><FaLinkedinIn /></a>
              <a target="_blank" rel="noreferrer" href="https://github.com/aniketdeshmukh548"><FaGithubSquare /></a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/aniket_d17"><FaInstagramSquare /></a>
              <a target="_blank" rel="noreferrer" href="https://facebook.com"><FaFacebookF /></a>
            </div>
          </div>
          <div className={classes.row2}>
            <h2 className={classes.heading}>Aniket Deshmukh</h2>
            <p class="main-footer__short-desc">
            Systems Engineer-TATA Consultancy Services.<br />
            Pune,Maharashtra.
            </p>
          </div>
        </div>
        <div className={classes.lower}>
          © Copyright
          <script>document.write(new Date().getFullYear())</script>2023. Made by
          <a rel="noreferrer" target="_blank" href="/">
            Aniket Deshmukh
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
