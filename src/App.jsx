import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';
import FaqPage from './pages/FaqPage';
import QuotePage from './pages/QuotePage';

// Legacy service subpage redirects to /services
import WindowCleaningPage from './pages/WindowCleaningPage';
import GutterCleaningPage from './pages/GutterCleaningPage';
import ConservatoryCleaningPage from './pages/ConservatoryCleaningPage';
import FasciaCleaningPage from './pages/FasciaCleaningPage';
import OfficeCleaningPage from './pages/OfficeCleaningPage';
import HouseCleaningPage from './pages/HouseCleaningPage';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
        
        {/* Sticky Header Navigation bar containing the 7 requested pages */}
        <Header onOpenBooking={handleOpenBooking} />

        {/* 7 Core Standalone Pages Routing */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<ContactPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/reviews" element={<ReviewsPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/faq" element={<FaqPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/quote" element={<QuotePage onOpenBooking={handleOpenBooking} />} />

            {/* Individual service deep links */}
            <Route path="/window-cleaning" element={<WindowCleaningPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/gutter-cleaning" element={<GutterCleaningPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/conservatory-cleaning" element={<ConservatoryCleaningPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/fascia-cleaning" element={<FasciaCleaningPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/office-cleaning" element={<OfficeCleaningPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/house-cleaning" element={<HouseCleaningPage onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* Quick Booking Modal */}
        <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseBooking} />

      </div>
    </Router>
  );
}
