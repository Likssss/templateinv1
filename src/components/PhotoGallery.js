import React from 'react';
import { Carousel } from 'react-bootstrap';

const PhotoGallery = () => {
    return (
        <div className="photo-gallery">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="photo1.jpg" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="photo2.jpg" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="photo3.jpg" alt="Third slide" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default PhotoGallery;
