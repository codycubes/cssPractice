import React from "react";
import './Footer.css'



export const Footer = () => {
    return(
        <>

        <div className="Footer">

            <div className="icons">
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