import React from 'react';
import brideImage from '../../img/bride.jpg';
import groomImage from '../../img/groom.jpg';
import './GroomBride.css';

const BrideGroom = () => {
    return (
        <div className="bride-groom-container">
            <div className="bride-groom">
                <h3 className="bride-name">Groom</h3>
                <a className="instagram-link" href="https://www.instagram.com/onepro_organizer_entertain" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i> Instagram
                </a>
                <img src={groomImage} alt="Bride" />
                <p className="bride-role">Putra Pertama dari</p>
                <p className="parent-names">John &<br />Jane Doe</p>
            </div>
            <div className="bride-groom">
                <h3 className="groom-name">Bride</h3>
                <a className="instagram-link" href="https://www.instagram.com/onepro_organizer_entertain" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i> Instagram
                </a>
                <img src={brideImage} alt="Groom" />
                <p className="groom-role">Putri Kedua dari</p>
                <p className="parent-names">John &<br />Jane Doe</p>
            </div>
        </div>
    );
};

export default BrideGroom;
