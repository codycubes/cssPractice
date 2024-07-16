import React, { useState, useEffect } from 'react';
import './Navbar.css';

export const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

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

    return (
        <nav className={scrolling ? 'navbar-scroll' : ''}>
            <div className='logoContainer'>
                <div className="Logo1">D</div>
                <div className="Logo2">Z</div>
            </div>
            <div className="links">
                <a href=''>About</a>
                <a href=''>Articles</a>
            </div>
            <button className="Subscribe"> Subscribe </button>
        </nav>
    );
};
