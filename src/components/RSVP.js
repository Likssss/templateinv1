import React, { useState } from 'react';

const RSVP = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate saving RSVP data
        setMessage(`Thank you, ${name}. Your RSVP has been submitted.`);
    };

    return (
        <div className="rsvp">
            <h2>RSVP</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Number of Guests:</label>
                    <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RSVP;
