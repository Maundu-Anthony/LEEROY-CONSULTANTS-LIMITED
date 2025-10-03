import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FinancialMarketingPage from './pages/FinancialMarketingPage';
import CorporateTrainingPage from './pages/CorporateTrainingPage';
import MentalWellnessPage from './pages/MentalWellnessPage';
import DisputeResolutionPage from './pages/DisputeResolutionPage';
import SocialMediaMarketingPage from './pages/SocialMediaMarketingPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/financial-marketing" element={<FinancialMarketingPage />} />
          <Route path="/services/corporate-training" element={<CorporateTrainingPage />} />
          <Route path="/services/mental-wellness" element={<MentalWellnessPage />} />
          <Route path="/services/dispute-resolution" element={<DisputeResolutionPage />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
