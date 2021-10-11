import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      
          <section className="Footer-Fixing"> 
            <div align="center" className="foot_dev">
              <a href='https://messenger.com/'><img src="./icons/MessengerWhite.png"  className="footer-icons"></img></a>
              <a href='https://www.google.com.ph/'><img src="./icons/GMailWhite.png" className="footer-icons"></img></a>
            </div>
            <div align="center">
              <h6> All Rights Reserved </h6>
            </div>
          </section>
       
    </footer>
  );
}

export default Footer;
