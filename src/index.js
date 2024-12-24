import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import YerimInvitation from './page/yerim/yerim_invitation.js';
import SeosInvitation from './page/seos/seos_invitation.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/yerim" element={<YerimInvitation />} />
        <Route path="/seos" element={<SeosInvitation />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

