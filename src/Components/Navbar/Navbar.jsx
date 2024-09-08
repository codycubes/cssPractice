import { useState, useEffect } from 'react';
import React from "react";
import './Navbar.css'

export const Navbar = () => {

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };


    return(
        <>
        <nav className={scrolling ? 'navbar-scroll' : ''}>
            <div className='logoContainer'>
                <div className="Logo1">D</div>
                <div className="Logo2">Z</div>
            </div>

            <div className="links">
                <a href='#about-section'>About</a>
                <a href='#cta-section'>Articles</a>
            </div>
            <button className="Subscribe"> Subscribe </button>
        </nav>
        
        </>
    )
}