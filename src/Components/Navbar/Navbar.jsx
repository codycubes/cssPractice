import React, { useState, useEffect } from 'react';
import './Navbar.css';

export const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${scrolling ? 'navbar-scroll' : ''}`}>
            <div className='logoContainer'>
                <div className="Logo1">D</div>
                <div className="Logo2">Z</div>
            </div>
            <div className={`links ${menuOpen ? 'open' : ''}`}>
                <a href='#about'>About</a>
                <a href='#articles'>Articles</a>
            </div>
            <button className="Subscribe"> Subscribe </button>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};
