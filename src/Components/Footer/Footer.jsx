import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faPinterestP } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <div className="Footer">
            <div className="icons">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
                <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
                <FontAwesomeIcon icon={faPinterestP} size="2x"/>
            </div>
            <div className="links">
                <div className="about">About</div>
                <div className="about">Articles</div>
                <button className="Subscribe"> Subscribe </button>
            </div>
        </div>
    );
}
