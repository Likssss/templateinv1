import React from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const ExportPage = () => {
    const exportWishesToFile = async () => {
        const wishesCollection = collection(db, 'wishes');
        const wishesSnapshot = await getDocs(wishesCollection);
        const wishesArray = wishesSnapshot.docs.map(doc => doc.data());

        let wishesText = 'Name,Message\n';
        wishesArray.forEach(wish => {
            wishesText += `${wish.name},${wish.message}\n`;
        });

        const blob = new Blob([wishesText], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'wishes.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="export-page">
            <h2>Export Wishes</h2>
            <button onClick={exportWishesToFile}>Export Wishes to Text File</button>
        </div>
    );
};

export default ExportPage;
