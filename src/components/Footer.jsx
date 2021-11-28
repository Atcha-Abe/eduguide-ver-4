import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <section className="Footer-Fixing">
        <div align="center" className="foot_dev">
          <a href="https://www.messenger.com/t/110839054741107">
            <img
              src="./icons/MessengerWhite.png"
              className="footer-icons"
            ></img>
          </a>
          <a href="mailto:eduguide.acmt@gmail.com/?subject=Questions and Concerns">
            <img src="./icons/GMailWhite.png" className="footer-icons"></img>
          </a>
        </div>
        <div align="center">
          <p style={{ color: "white" }}> All Rights Reserved </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
