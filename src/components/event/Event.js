import React from 'react';
import './Event.css';
import { atcb_action } from 'add-to-calendar-button';

const Event = () => {
    const events = [
        {
            title: 'Pemberkatan',
            description: 'Join us for the wedding ceremony',
            startDate: '2050-11-05T08:00:00',
            endDate: '2050-11-05T09:00:00',
            location: 'Jakarta Cathedral, Main Street',
        },
        {
            title: 'Resepsi',
            description: 'Join us for the wedding reception',
            startDate: '2050-11-05T10:00:00',
            endDate: '2050-11-05T12:00:00',
            location: 'Jakarta International Stadium (JIS)',
        },
    ];

    const handleSaveDate = (event) => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        let options = ['Google', 'iCal', 'Outlook.com', 'Yahoo']; // Default options
        if (/android/i.test(userAgent)) {
            // For Android devices, prioritize Google Calendar
            options = ['Google'];
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // For iOS devices, prioritize Apple Calendar
            options = ['Apple'];
        }

        atcb_action({
            name: event.title,
            description: event.description,
            startDate: event.startDate.split('T')[0],
            startTime: event.startDate.split('T')[1].slice(0, -3), // Remove seconds
            endDate: event.endDate.split('T')[0], // Ensure end date is included
            endTime: event.endDate.split('T')[1].slice(0, -3), // Remove seconds
            location: event.location,
            options: options,
            timeZone: 'Asia/Jakarta', // Optional: specify time zone
            iCalFileName: `${event.title.replace(/ /g, '_')}`,
        });
    };

    return (
        <div className="event-section">
            <div className="event-title-container">
                <h2 className="event-title">Save the date</h2>
                <p className="event-detail">Join us as we celebrate our union with love and joy.</p>
            </div>
            <div className="event-details">
                {events.map((event, index) => (
                    <div className="event-item" key={index}>
                        <h3 className="event-number">{index + 1}.</h3>
                        <h3>{event.title}</h3>
                        <p>Date: {new Date(event.startDate).toLocaleDateString()}</p>
                        <p>Time: {new Date(event.startDate).toLocaleTimeString()}</p>
                        <p>Place: {event.location}</p>
                        <div className="button-container">
                            <button className="view-map-button" onClick={() => window.open('https://maps.google.com')}>
                                View Map
                            </button>
                            <button
                                className="save-date-button"
                                onClick={() => handleSaveDate(event)}
                            >
                                Save the Date
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Event;
