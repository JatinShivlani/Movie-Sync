import React from 'react'
import './footer.scss';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
const Footer = () => {
  return (
    <footer className="footer">
    <ContentWrapper>
        <ul className="menuItems">
            <li className="menuItem">Terms & Conditions</li>
            <li className="menuItem">Privacy-Policy</li>
            <li className="menuItem">About</li>
            <li className="menuItem">Blog</li>
            <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
        Thank you for being a part of the "Movie Sync" community. We hope you enjoy exploring the world of movies and TV series with us. Your support and engagement make it all worthwhile!
        </div>
        <div className="socialIcons">
            <span className="icon">
                <FaFacebookF />
            </span>
            <span className="icon">
                <FaInstagram />
            </span>
            <span className="icon">
                <FaTwitter />
            </span>
            <span className="icon">
                <FaLinkedin />
            </span>
        </div>
    </ContentWrapper>
</footer>
  )
}

export default Footer
