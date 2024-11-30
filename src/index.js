import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

// Get the root element
const rootElement = document.getElementById('root');
// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);
// Render the App component inside the root
root.render(<App />);
