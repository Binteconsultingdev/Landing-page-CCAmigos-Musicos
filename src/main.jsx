import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { LandingPage } from './LandingPage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/equiparte" element={<LandingPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
