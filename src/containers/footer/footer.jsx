import React from "react";

import socialIcon1 from "../../assets/images/instagram.svg";
import socialIcon2 from "../../assets/images/facebook.svg";
import socialIcon3 from "../../assets/images/twitter.svg";
import socialIcon4 from "../../assets/images/google.svg";

import "./footer.css";

export default function Footer() {
  return (
    <div className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__inner">
          <p className="site-footer__title">
            Our platform is trusted by millions & features best updated movies
            all around the world.
          </p>
          <div className="site-footer__nav">
            <p>
              Home <span>/</span> Discover <span>/</span> Influence{" "}
              <span>/</span> Release
            </p>
            <ul>
              <li>
                <img src={socialIcon1} alt="social icon" />
              </li>
              <li>
                <img src={socialIcon2} alt="social icon" />
              </li>
              <li>
                <img src={socialIcon3} alt="social icon" />
              </li>
              <li>
                <img src={socialIcon4} alt="social icon" />
              </li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <ul>
            <li>Privacy policy</li>
            <li>Term of service</li>
            <li>Language</li>
          </ul>
          <p>© 2023</p>
        </div>
      </div>
    </div>
  );
}
