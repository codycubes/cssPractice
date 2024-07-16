import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { facebook, linkedin, pinterest } from "fontawesome";



export const Footer = () => {
    return(
        <>

        <div className="Footer">

            <div className="icons">
                {/* <FontAwesomeIcon icon={linkedin} />
                <FontAwesomeIcon icon={facebook} />
                <FontAwesomeIcon icon={pinterest} /> */}
                <img src="./Facebook.png" />
                <img src="./LinkedIn.png" />
                <img src="./Pinterest.png" />
            </div>

            <div className="links">
                <div className="about">About</div>
                <div className="about">Articles</div>
                <button className="Subscribe"> Subscribe </button>
            </div>

           
        </div>
        
        </>
    )
}