import React, { useEffect, useState } from 'react';
import './FrontPage.css';
import backgroundImage1 from '../img/img1.jpg';
import backgroundImage2 from '../img/img2.jpg';
import backgroundImage3 from '../img/img3.jpg';
import backgroundImage4 from '../img/img4.jpg';
import backToTopImage from '../img/Back1.png'; // Import the image
import CountdownTimer from './CountdownTimer';
import BrideGroom from './BrideGroom';
import Event from './Event';
import Gallery from './Gallery';
import Wishes from './Wishes';
import Gift from './Gift';

const FrontPage = () => {
    const weddingDate = "2024-12-20T17:00:00"; // Replace with your wedding date and time
    const [showNavbar, setShowNavbar] = useState(false);
    const [currentSection, setCurrentSection] = useState('bride-groom');

    useEffect(() => {
        let index = 0;
        const slides = document.querySelectorAll('.slide');
        slides[index].classList.add('active');

        const interval = setInterval(() => {
            slides[index].classList.remove('active');
            index = (index + 1) % slides.length;
            slides[index].classList.add('active');
        }, 3000);

        window.addEventListener('scroll', handleScroll); // Add scroll event listener
        console.log("Scroll event listener added");

        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll); // Clean up scroll event listener
            console.log("Scroll event listener removed");
        };
    }, []);

    const handleScroll = () => {
        console.log("handleScroll called");
        const section = document.getElementById("bride-groom-section");
        if (section) {
            const rect = section.getBoundingClientRect();
            setShowNavbar(rect.top <= 0);
        }

        const backToTopButton = document.getElementById("back-to-top");
        if (backToTopButton) {
            if (window.scrollY > 200) {
                backToTopButton.style.display = "block";
                console.log("Showing back to top button");
            } else {
                backToTopButton.style.display = "none";
                console.log("Hiding back to top button");
            }
        } else {
            console.log("Back to top button not found");
        }
    };

    const scrollToSection = (sectionId) => {
        console.log(`Scrolling to section: ${sectionId}`);
        setCurrentSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToTop = () => {
        console.log("Scrolling to top");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderSection = () => {
        switch (currentSection) {
            case 'bride-groom':
                return <BrideGroom />;
            case 'event':
                return <Event />;
            case 'gallery':
                return <Gallery />;
            case 'wishes':
                return <Wishes />;
            case 'gift':
                return <Gift />;
            default:
                return <BrideGroom />;
        }
    };

    return (
        <div>
            <div className="front-page">
                <div className="slideshow">
                    <img src={backgroundImage1} alt="Slide 1" className="slide" />
                    <img src={backgroundImage2} alt="Slide 2" className="slide" />
                    <img src={backgroundImage3} alt="Slide 3" className="slide" />
                    <img src={backgroundImage4} alt="Slide 4" className="slide" />
                </div>
                <h1 className="wedding-title">The Wedding</h1>
                <h2 className="couple-names">Darren & Jun</h2>
                <p className="save-the-date">Save the Date</p>
                <div className="countdown-timer">
                    <CountdownTimer targetDate={new Date(weddingDate)} />
                </div>
                <button className="invitation-button" onClick={() => scrollToSection("bride-groom-section")}>Open Invitation</button>
            </div>

            <div id="bride-groom-section" className={`bride-groom-section ${showNavbar ? 'show-navbar' : ''}`}>
                <div className="navbar">
                    <div className="navbar-item">
                        <a
                            onClick={() => scrollToSection('bride-groom-section')}
                            className={`nav-item ${currentSection === 'bride-groom' ? 'selected' : ''}`}
                        >
                            Bride & Groom
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
                {renderSection()}
            </div>

            <footer className="footer">
                &copy; Copyright OnePro Organizer 2005 | Developed by ....
            </footer>

            <button id="back-to-top" onClick={scrollToTop}>
                <img src={backToTopImage} alt="Back to Top" className="back-to-top-image" />
            </button>
        </div>
    );
};

export default FrontPage;
