import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <section>
        <section className="Footer_Left">
          <section>
            <div align="center" className="foot_dev">
              <img src="./icons/MessengerWhite.png"  className="social-icons"></img>
              <img src="./icons/GMailWhite.png" className="social-icons"></img>
              <p> All Rights Reserved 2021 </p>
            </div>
          </section>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
