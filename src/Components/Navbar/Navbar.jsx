import React from "react";
import './Navbar.css'

export const Navbar = () => {
    return(
        <>
        <div className="Navbar">
            <div className="Logo">D</div>
            <div className="links">
                <div className="about">About</div>
                <div className="about">Articles</div>

            </div>
            <button className="Subscribe"> Subscribe </button>
        </div>
        
        </>
    )
}