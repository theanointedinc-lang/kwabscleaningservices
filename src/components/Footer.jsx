import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck, Heart, Facebook, Instagram } from 'lucide-react';

const LOGO_URL = 'https://images.squarespace-cdn.com/content/v1/688aceb02ab24d581ddd4d26/b7e346a0-f93a-49bb-9947-c78b6c86262b/KWABS.png';

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="contact" style={{
      backgroundColor: '#090d16',
      color: '#ffffff',
      paddingTop: '5rem',
      paddingBottom: '2.5rem',
      borderTop: '1px solid rgba(6, 182, 212, 0.2)',
      position: 'relative',
    }}>
      <div className="container">
        
        {/* Top Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
          gap: '3rem',
          marginBottom: '4rem',
        }} className="footer-grid">
          
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
              <img
                src={LOGO_URL}
                alt="Kwabs Cleaning Logo"
                style={{ height: '48px', objectFit: 'contain' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em' }}>
                  KWABS <span style={{ color: '#00f5d4' }}>CLEANING</span>
                </span>
                <span style={{ fontSize: '0.72rem', color: '#67e8f9', fontWeight: 600, letterSpacing: '0.08em' }}>
                  Coventry & Warwickshire
                </span>
              </div>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Kwabs Cleaning Services is Coventry's premier residential & commercial cleaning provider. Pure water pole technology, high-reach gutter vacuuming, conservatory, fascia, office & house cleaning.
            </p>

            {/* Social Buttons */}
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <a
                href="https://www.facebook.com/share/16n8TgmQkv/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#06b6d4';
                  e.currentTarget.style.color = '#0f172a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                aria-label="Facebook Page"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/kwabscleaningservices"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#06b6d4';
                  e.currentTarget.style.color = '#0f172a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                aria-label="Instagram Page"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://wa.me/447741073919"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                }}
                aria-label="WhatsApp Direct Chat"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.92rem', color: '#cbd5e1' }}>
              <li><a href="#services" style={{ hover: { color: '#00f5d4' } }}>Window Cleaning (Pure Water)</a></li>
              <li><a href="#services">Gutter Cleaning & Clearance</a></li>
              <li><a href="#services">Conservatory Roof Restoral</a></li>
              <li><a href="#services">Fascia & Soffit Washing</a></li>
              <li><a href="#services">Commercial Office Cleaning</a></li>
              <li><a href="#services">House & Domestic Deep Clean</a></li>
            </ul>
          </div>

          {/* Column 3: Coverage Regions */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Coventry Coverage
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.92rem', color: '#cbd5e1' }}>
              <li>Coventry (CV1–CV8)</li>
              <li>Bedworth (CV12)</li>
              <li>Nuneaton (CV10, CV11)</li>
              <li>Hinckley (LE10)</li>
              <li>Kenilworth (CV8)</li>
              <li>Royal Leamington Spa</li>
              <li>Rugby & Solihull</li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Direct Contact
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.92rem', color: '#cbd5e1' }}>
              <a href="tel:07741073919" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#00f5d4', fontWeight: 700 }}>
                <Phone size={18} /> 07741 073919
              </a>

              <a href="https://wa.me/447741073919" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#ffffff' }}>
                <MessageSquare size={18} style={{ color: '#25D366' }} /> WhatsApp: +44 7741 073919
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={18} style={{ color: '#67e8f9' }} /> info@kwabs-cleaning-services.com
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MapPin size={18} style={{ color: '#c084fc' }} /> Coventry, West Midlands, UK
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
                <Clock size={16} /> Mon - Sat: 8:00 AM - 6:00 PM
              </div>
            </div>

            <button onClick={onOpenBooking} className="btn btn-cyan" style={{ marginTop: '1.5rem', width: '100%' }}>
              Book Online Now
            </button>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '2rem',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#64748b',
        }}>
          <div>
            © {new Date().getFullYear()} Kwabs Cleaning Services. All rights reserved. Registered in Coventry, UK.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>SEO & GEO Optimized</span>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
