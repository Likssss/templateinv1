import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Wishes.css';

const Wishes = () => {
    const [wishes, setWishes] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    // Load wishes from the server when the component mounts
    useEffect(() => {
        axios.get(`https://tempalteapi.vercel.app/api/getWishes`)
            .then(response => {
                const data = response.data.split('\n').filter(wish => wish);
                const formattedWishes = data.map(entry => {
                    const [namePart, messagePart] = entry.split(', Message: ');
                    const name = namePart.replace('Name: ', '');
                    return { name, message: messagePart };
                });
                setWishes(formattedWishes.reverse());  // Reverse the order to show the most recent wishes at the top
            })
            .catch(error => {
                console.error('Error fetching wishes:', error);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && message) {
            const newWish = { name, message };
            setWishes([newWish, ...wishes]);  // Add the new wish at the top
            setName('');
            setMessage('');

            try {
                await axios.post(`https://tempalteapi.vercel.app/api/saveWish`, { name, message });
            } catch (error) {
                console.error('Error saving wish to server:', error);
            }
        }
    };

    return (
        <div className="wishes-section">
            <h2 className="wishes-title">Ucapan & Doa Restu</h2>
            <p className="wishes-description">
                Ungkapan terima kasih yang sangat tulus dari kami apabila Saudara/i berkenan hadir dan turut memberikan doa restu kepada kami.
            </p>
            <div className="wishes-form-container">
                <form onSubmit={handleSubmit} className="wishes-form">
                    <label htmlFor="name">Nama</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <label htmlFor="message">Ucapan & Doa Restu</label>
                    <textarea 
                        id="message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    />
                    <button type="submit">Kirim Ucapan</button>
                </form>
                <div className="wishes-list-container">
                    <div className="wishes-list">
                        {wishes.map((wish, index) => (
                            <div key={index} className="wish-item">
                                <h4>{wish.name}</h4>
                                <p>{wish.message}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishes;
