import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FrontPage from './components/frontpage/FrontPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
