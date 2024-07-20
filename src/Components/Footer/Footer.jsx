import React from "react";
import './Footer.css';

export const Footer = () => {
    return (
        <div className="Footer">
            <div className="icons">
    
                <img src="./facebook.jpg" />
                <img src="./linkedin.jpg" />
                <img src="./pinterest.jpg" />
            </div>
            <div className="links">
                <div className="about">About</div>
                <div className="about">Articles</div>
                <button className="Subscribe"> Subscribe </button>
            </div>
        </div>
    );
}
