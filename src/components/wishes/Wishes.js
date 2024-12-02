import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import './Wishes.css';

const Wishes = () => {
    const [wishes, setWishes] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const wishesCollection = collection(db, 'wishes');
            const wishesSnapshot = await getDocs(wishesCollection);
            setWishes(wishesSnapshot.docs.map(doc => doc.data()).reverse());
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && message) {
            const newWish = { name, message };
            setWishes([newWish, ...wishes]);
            setName('');
            setMessage('');
            const wishesCollection = collection(db, 'wishes');
            await addDoc(wishesCollection, newWish);
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
