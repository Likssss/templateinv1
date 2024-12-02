import React, { useState } from 'react';
import './Gallery.css';

const images = [
    require('../../img/gallery/gallery1.jpg'),
    require('../../img/gallery/gallery2.jpg'),
    require('../../img/gallery/gallery3.jpg'),
    require('../../img/gallery/gallery4.jpg'),
    require('../../img/gallery/gallery5.jpg'),
    require('../../img/gallery/gallery6.jpg'),
];

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openCarousel = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeCarousel = () => {
        setIsOpen(false);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="gallery-section">
            <h2 className="gallery-title">Photo & Video Gallery</h2>
            <div className="gallery-container">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => openCarousel(index)}
                    >
                        <img src={image} alt={`Gallery Image ${index + 1}`} />
                    </div>
                ))}
                <div className="gallery-item video-item">
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {isOpen && (
                <div className="overlay">
                    <div className="carousel">
                        <button className="carousel-close" onClick={closeCarousel}>
                            &times;
                        </button>
                        <button className="carousel-nav left" onClick={goToPrevious}>
                            &#8249;
                        </button>
                        <img
                            src={images[currentIndex]}
                            alt={`Carousel Image ${currentIndex + 1}`}
                            className="carousel-image"
                        />
                        <button className="carousel-nav right" onClick={goToNext}>
                            &#8250;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
