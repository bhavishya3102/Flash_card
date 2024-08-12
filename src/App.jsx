
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Add from './pages/Add';
import Delete from './pages/Delete';
import View from './pages/View';
import Update from './pages/Update';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/delete" element={<Delete />} />
                    <Route path="/view" element={<View />} />
                    <Route path="/edit" element={<Update />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
