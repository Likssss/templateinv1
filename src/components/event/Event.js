import React from 'react';
import './Event.css';

const Event = () => {
    const detectDeviceAndRedirect = (title, description, startTime, endTime, location) => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        const startDate = new Date(startTime).toISOString().replace(/[-:.]/g, '');
        const endDate = new Date(endTime).toISOString().replace(/[-:.]/g, '');

        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&dates=${startDate}/${endDate}`;
        const outlookCalendarUrl = `https://outlook.office.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description)}&startdt=${new Date(startTime).toISOString()}&enddt=${new Date(endTime).toISOString()}&location=${encodeURIComponent(location)}`;

        if (/android/i.test(userAgent)) {
            // Redirect to Google Calendar for Android
            window.open(googleCalendarUrl, '_blank');
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // Redirect to Apple Calendar for iOS
            const appleCalendarUrl = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description}
DTSTART:${startDate}
DTEND:${endDate}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`;
            window.open(appleCalendarUrl, '_blank');
        } else {
            // Default to Google Calendar
            window.open(googleCalendarUrl, '_blank');
        }
    };

    return (
        <div className="event-section">
            <div className="event-title-container">
                <h2 className="event-title">Save the date</h2>
                <p className="event-detail">Join us as we celebrate our union with love and joy.</p>
            </div>
            <div className="event-details">
                <div className="event-item">
                    <h3 className="event-number">1.</h3>
                    <h3>Pemberkatan</h3>
                    <p>Date: 05 November 2050</p>
                    <p>Time: 08:00 AM</p>
                    <p>Place: Jakarta Cathedral, Main Street</p>
                    <div className="button-container">
                        <button className="view-map-button" onClick={() => window.open('https://maps.google.com')}>View Map</button>
                        <button 
                            className="save-date-button" 
                            onClick={() => detectDeviceAndRedirect(
                                'Pemberkatan', 
                                'Join us for the wedding ceremony', 
                                '2050-11-05T08:00:00',
                                '2050-11-05T09:00:00',
                                'Jakarta Cathedral, Main Street'
                            )}
                        >
                            Save the Date
                        </button>
                    </div>
                </div>
                <div className="event-item">
                    <h3 className="event-number">2.</h3>
                    <h3>Resepsi</h3>
                    <p>Date: 05 November 2050</p>
                    <p>Time: 10:00 AM</p>
                    <p>Place: Jakarta International Stadium (JIS)</p>
                    <div className="button-container">
                        <button className="view-map-button" onClick={() => window.open('https://maps.google.com')}>View Map</button>
                        <button 
                            className="save-date-button" 
                            onClick={() => detectDeviceAndRedirect(
                                'Resepsi', 
                                'Join us for the wedding reception', 
                                '2050-11-05T10:00:00',
                                '2050-11-05T12:00:00',
                                'Jakarta International Stadium (JIS)'
                            )}
                        >
                            Save the Date
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;
