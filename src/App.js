import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import RSVP from './components/RSVP';
import EventDetails from './components/EventDetails';
import PersonalizedMessage from './components/PersonalizedMessage';
import PhotoGallery from './components/PhotoGallery';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="/rsvp" element={<RSVP />} />
                    <Route path="/event-details" element={<EventDetails />} />
                    <Route path="/personalized-message/:name" element={<PersonalizedMessage />} />
                    <Route path="/photo-gallery" element={<PhotoGallery />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
