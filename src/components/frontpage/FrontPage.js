import React, { useEffect, useState } from 'react';
import './FrontPage.css';
import backgroundImage1 from '../../img/frontpage/img1.jpg';
import backgroundImage2 from '../../img/frontpage/img2.jpg';
import backgroundImage3 from '../../img/frontpage/img3.jpg';
import backgroundImage4 from '../../img/frontpage/img4.jpg';
// import backToTopImage from '../img/Back1.png';
import CountdownTimer from '../countdowntimer/CountdownTimer';
import GroomBride from '../groombride/GroomBride';
import Event from '../event/Event';
import Gallery from '../gallery/Gallery';
import Wishes from '../wishes/Wishes';
import Gift from '../gift/Gift';
import Navbar from '../navbar/Navbar';

const FrontPage = () => {
    const weddingDate = "2050-11-05T17:00:00";
    const [showNavbar, setShowNavbar] = useState(false);
    const [currentSection, setCurrentSection] = useState('bride-groom');
    const [fadeClass, setFadeClass] = useState('section-fade-up');

    useEffect(() => {
        let index = 0;
        const slides = document.querySelectorAll('.slide');
        slides[index].classList.add('active');

        const interval = setInterval(() => {
            slides[index].classList.remove('active');
            index = (index + 1) % slides.length;
            slides[index].classList.add('active');
        }, 3000);

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        console.log("Current Section:", currentSection);  // Debug log
        if (!currentSection) {
            setCurrentSection('groom-bride');
        }
    }, [currentSection]);

    const handleScroll = () => {
        const section = document.getElementById("groom-bride-section");
        if (section) {
            const rect = section.getBoundingClientRect();
            setShowNavbar(rect.top <= 0);
        }

        const backToTopButton = document.getElementById("back-to-top");
        if (backToTopButton) {
            if (window.scrollY > 200) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        }
    };

    const scrollToSection = (sectionId) => {
        console.log("Scrolling to section:", sectionId);  // Debug log
        setFadeClass('');  // Remove the fade class to reset
        setTimeout(() => {
            setCurrentSection(sectionId);
            setFadeClass('section-fade-up');  // Reapply the fade-up class
        }, 50);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error("Element not found:", sectionId);  // Debug log for missing element
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderSection = () => {
        switch (currentSection) {
            case 'groom-bride':
                return <GroomBride />;
            case 'event':
                return <Event />;
            case 'gallery':
                return <Gallery />;
            case 'wishes':
                return <Wishes />;
            case 'gift':
                return <Gift />;
            default:
                return <GroomBride />;
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
                <h1 className="wedding-title">The Wedding of</h1>
                <h2 className="couple-names">Groom & Bride</h2>
                <p className="save-the-date">Save the Date</p>
                <div className="countdown-timer">
                    <CountdownTimer targetDate={new Date(weddingDate)} />
                </div>
                <button className="invitation-button" onClick={() => scrollToSection("bride-groom-section")}>Open Invitation</button>
            </div>

            <div id="bride-groom-section" className={`bride-groom-section ${showNavbar ? 'show-navbar' : ''}`}>
                <Navbar currentSection={currentSection} scrollToSection={scrollToSection} />
                <div className={`section-content ${fadeClass}`}>
                    {renderSection()}
                </div>
            </div>

            <footer className="footer">
                &copy; Copyright OnePro Organizer 2005 | Developed by ....
            </footer>

            {/* <button id="back-to-top" onClick={scrollToTop}>
                <img src={backToTopImage} alt="Back to Top" className="back-to-top-image" />
            </button> */}
        </div>
    );
};

export default FrontPage;
