import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ currentSection, scrollToSection }) => {
    useEffect(() => {
        if (!currentSection) {
            scrollToSection('bride-groom-section');
        }
    }, [currentSection, scrollToSection]);

    return (
        <div className="navbar">
            <div className="navbar-item">
                <a
                    onClick={() => scrollToSection('bride-groom')}
                    className={`nav-item ${currentSection === 'bride-groom' ? 'selected' : ''}`}
                >
                    Groom & Bride
                </a>
            </div>
            <div className="navbar-item">
                <a
                    onClick={() => scrollToSection('event')}
                    className={`nav-item ${currentSection === 'event' ? 'selected' : ''}`}
                >
                    Event
                </a>
            </div>
            <div className="navbar-item">
                <a
                    onClick={() => scrollToSection('gallery')}
                    className={`nav-item ${currentSection === 'gallery' ? 'selected' : ''}`}
                >
                    Gallery
                </a>
            </div>
            <div className="navbar-item">
                <a
                    onClick={() => scrollToSection('wishes')}
                    className={`nav-item ${currentSection === 'wishes' ? 'selected' : ''}`}
                >
                    Wishes
                </a>
            </div>
            <div className="navbar-item">
                <a
                    onClick={() => scrollToSection('gift')}
                    className={`nav-item ${currentSection === 'gift' ? 'selected' : ''}`}
                >
                    Gift
                </a>
            </div>
        </div>
    );
};

export default Navbar;
