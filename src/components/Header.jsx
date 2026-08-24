import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';

const LOGO_URL = 'https://images.squarespace-cdn.com/content/v1/688aceb02ab24d581ddd4d26/b7e346a0-f93a-49bb-9947-c78b6c86262b/KWABS.png';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
      {/* Main Navbar */}
      <nav style={{
        backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.96)' : 'rgba(46, 16, 101, 0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid rgba(6, 182, 212, 0.3)' : '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0,0,0,0.15)',
        padding: isScrolled ? '0.55rem 0' : '0.85rem 0',
        transition: 'all 0.3s ease',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img 
              src={LOGO_URL} 
              alt="Kwabs Cleaning Services Logo" 
              style={{ height: isScrolled ? '42px' : '48px', transition: 'all 0.3s ease', objectFit: 'contain' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
                KWABS <span style={{ color: '#00f5d4' }}>CLEANING</span>
              </span>
              <span style={{ fontSize: '0.68rem', color: '#67e8f9', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Coventry & Warwickshire
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  color: location.pathname === link.path ? '#00f5d4' : '#f8fafc',
                  fontSize: '0.84rem',
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

          {/* CTA Button & Mobile Menu Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <button 
              onClick={onOpenBooking} 
              className="btn btn-cyan desktop-menu"
              style={{ padding: '0.55rem 1.2rem', fontSize: '0.85rem' }}
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
                padding: '0.55rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.25)',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
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
            gap: '0.6rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  color: location.pathname === link.path ? '#00f5d4' : '#ffffff',
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.65rem 0',
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
              style={{ width: '100%', marginTop: '0.8rem', padding: '0.85rem' }}
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
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
