import React from "react";
import "./footer.css";
//Import react-icons
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <a href="#terrnit-logo" className="footer__logo">
        {" "}
        TERRNIT{" "}
      </a>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://instagram.com">
          <GrInstagram />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyrights">
        <small>&copy; TerrniT CO. All rights reserved</small>
      </div>
    </footer>
  );
};

export default footer;
