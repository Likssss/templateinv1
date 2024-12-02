import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './components/frontpage/FrontPage';
import ExportPage from './components/export/ExportPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="/export" element={<ExportPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
