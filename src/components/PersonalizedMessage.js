import React from 'react';
import { useParams } from 'react-router-dom';

const PersonalizedMessage = () => {
    const { name } = useParams();

    return (
        <div className="personalized-message">
            <h2>Welcome, {name}!</h2>
            <p>We're thrilled to have you at our wedding. Thank you for being a part of our special day.</p>
        </div>
    );
};

export default PersonalizedMessage;
