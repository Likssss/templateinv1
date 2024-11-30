import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const formatNumber = (number) => {
        return number < 10 ? `0${number}` : number;
    };

    return (
        <div className="countdown">
            <span className="number">{formatNumber(timeLeft.days)}</span><span className="value">D</span>
            <span className="number">{formatNumber(timeLeft.hours)}</span><span className="value">H</span>
            <span className="number">{formatNumber(timeLeft.minutes)}</span><span className="value">M</span>
            <span className="number">{formatNumber(timeLeft.seconds)}</span><span className="value">S</span>
        </div>
    );
};

export default CountdownTimer;
