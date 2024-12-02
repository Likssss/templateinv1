import React from 'react';
import './Gift.css';

const Gift = () => {
    return (
        <div className="gift-section">
            <h2 className="gift-header">
                Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan tanda kasih untuk mempelai dapat melalui:
            </h2>
            <div className="gift-address">
                <h3>Alamat</h3>
                <p>Alamat RT. /Rw. ,</p>
                <p>Wilayah, Kecamatan, Kota</p>
                <p>Daerah, Kode Zip</p>
                <a href="https://maps.app.goo.gl/FDTdgwmkumfq2fGM6" target="_blank" rel="noopener noreferrer">https://maps.app.goo.gl/FDTdgwmkumfq2fGM6</a>
            </div>
            <div className="gift-bank">
                <div className="bank-detail">
                    <p className="bank-name">Nama 1</p>
                    <img src={require('../../img/bank/bni.png')} alt="BNI Logo" className="bank-logo" />
                    <div className="bank-info">
                        <p>8*******9</p>
                        <p>a/n Nama 1</p>
                    </div>
                </div>
                <div className="bank-detail">
                    <p className="bank-name">Nama 2</p>
                    <img src={require('../../img/bank/bca.png')} alt="BCA Logo" className="bank-logo" />
                    <div className="bank-info">
                        <p>8*******9</p>
                        <p>a/n Nama 2</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gift;
