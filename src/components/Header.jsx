import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Clock, MapPin, Menu, X, ChevronRight, Sparkles } from 'lucide-react';

const LOGO_URL = 'https://images.squarespace-cdn.com/content/v1/688aceb02ab24d581ddd4d26/b7e346a0-f93a-49bb-9947-c78b6c86262b/KWABS.png';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu & scroll to top on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'COVERAGE & CONTACT', path: '/contact' },
    { name: 'REVIEWS', path: '/reviews' },
    { name: 'FAQ', path: '/faq' },
    { name: 'INSTANT QUOTE', path: '/quote' },
  ];

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, transition: 'all 0.3s ease' }}>
      {/* Top Bar */}
      <div style={{
        backgroundColor: '#2e1065',
        color: '#ffffff',
        padding: '0.4rem 0',
        fontSize: '0.82rem',
        borderBottom: '1px solid rgba(6, 182, 212, 0.2)',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#67e8f9' }}>
              <MapPin size={14} /> Coventry, Bedworth, Nuneaton, Hinckley & Warwickshire
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#e2e8f0' }} className="mobile-hide">
              <Clock size={14} /> Mon - Sat: 8:00 AM - 6:00 PM
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a 
              href="tel:07741073919" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#ffffff', fontWeight: 700 }}
            >
              <Phone size={14} style={{ color: '#00f5d4' }} /> 07741 073919
            </a>
            <a 
              href="https://wa.me/447741073919" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                backgroundColor: '#25D366',
                color: '#ffffff',
                padding: '0.2rem 0.65rem',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 700,
              }}
            >
              <MessageSquare size={13} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{
        backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.96)' : 'rgba(59, 7, 100, 0.94)',
        backdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid rgba(6, 182, 212, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none',
        padding: isScrolled ? '0.6rem 0' : '0.9rem 0',
        transition: 'all 0.3s ease',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <img 
              src={LOGO_URL} 
              alt="Kwabs Cleaning Services Logo" 
              style={{ height: isScrolled ? '46px' : '54px', transition: 'all 0.3s ease', objectFit: 'contain' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em', fontFamily: 'var(--font-heading)' }}>
                KWABS <span style={{ color: '#00f5d4' }}>CLEANING</span>
              </span>
              <span style={{ fontSize: '0.72rem', color: '#67e8f9', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Coventry & Warwickshire
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (The 7 Exact Requested Pages) */}
          <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '1.3rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  color: location.pathname === link.path ? '#00f5d4' : '#f8fafc',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  padding: '0.4rem 0',
                  borderBottom: location.pathname === link.path ? '2px solid #00f5d4' : '2px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <button 
              onClick={onOpenBooking} 
              className="btn btn-cyan desktop-menu"
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.86rem' }}
            >
              <Sparkles size={15} /> Free Quote
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-only-btn"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '0.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'none',
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: '#0f172a',
            borderTop: '1px solid rgba(6, 182, 212, 0.3)',
            padding: '1.2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  color: location.pathname === link.path ? '#00f5d4' : '#ffffff',
                  fontSize: '1rem',
                  fontWeight: 700,
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {link.name}
                <ChevronRight size={16} style={{ color: '#00f5d4' }} />
              </Link>
            ))}

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }} 
              className="btn btn-cyan"
              style={{ width: '100%', marginTop: '0.8rem' }}
            >
              <Sparkles size={18} /> Book Free Quote
            </button>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 1100px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-only-btn {
            display: block !important;
          }
          .mobile-hide {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
