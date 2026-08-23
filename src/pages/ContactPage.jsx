import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, Sparkles, Send } from 'lucide-react';
import CoverageMap from '../components/CoverageMap';
import GoogleServiceMap from '../components/GoogleServiceMap';

export default function ContactPage({ onOpenBooking }) {
  return (
    <div style={{ paddingTop: '7rem', backgroundColor: '#ffffff' }}>
      <section style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.55) 0%, rgba(30, 9, 56, 0.45) 50%, rgba(15, 23, 42, 0.7) 100%), url("/hero-bg-home.jpg") center/cover no-repeat',
        color: '#ffffff',
        padding: '5rem 0',
      }}>
        <div className="container">
          <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            <MapPin size={14} /> Get in Touch
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '1.2rem', lineHeight: 1.15, color: '#ffffff' }}>
            <span style={{ color: '#ffffff' }}>Contact</span> <span className="text-gradient">Kwabs Cleaning Services</span>
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.6 }}>
            Have a question or need a fast quote? Call, WhatsApp, or send us a message below. We serve Coventry and surrounding West Midlands regions.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem' }} className="contact-grid">
            
            {/* Contact Details */}
            <div>
              <h2 style={{ fontSize: '2.2rem', color: '#0f172a', marginBottom: '1.5rem' }}>
                We're Here to <span className="text-gradient-purple">Help You</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <a
                  href="tel:07741073919"
                  style={{
                    backgroundColor: '#faf5ff',
                    border: '1.5px solid #c084fc',
                    padding: '1.4rem',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.2rem',
                  }}
                >
                  <div style={{ backgroundColor: '#7e22ce', color: '#ffffff', padding: '0.8rem', borderRadius: '12px' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: '#6b21a8', fontWeight: 700, textTransform: 'uppercase' }}>Direct Telephone</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#3b0764' }}>07741 073919</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/447741073919"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#ecfdf5',
                    border: '1.5px solid #6ee7b7',
                    padding: '1.4rem',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.2rem',
                  }}
                >
                  <div style={{ backgroundColor: '#25D366', color: '#ffffff', padding: '0.8rem', borderRadius: '12px' }}>
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: '#047857', fontWeight: 700, textTransform: 'uppercase' }}>Instant WhatsApp</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#065f46' }}>+44 7741 073919</div>
                  </div>
                </a>

                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '1.4rem',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                }}>
                  <div style={{ backgroundColor: '#06b6d4', color: '#ffffff', padding: '0.8rem', borderRadius: '12px' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Email Address</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>info@kwabs-cleaning-services.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #e2e8f0',
              padding: '2.5rem',
              boxShadow: '0 15px 40px rgba(59, 7, 100, 0.08)',
            }}>
              <h3 style={{ fontSize: '1.5rem', color: '#3b0764', marginBottom: '1.2rem' }}>
                Send Us a Message
              </h3>
              <form onSubmit={(e) => { e.preventDefault(); onOpenBooking(); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>Your Name</label>
                  <input type="text" required placeholder="John Smith" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e1', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>Phone Number</label>
                  <input type="tel" required placeholder="07700 900000" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e1', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>Coventry Postcode</label>
                  <input type="text" placeholder="e.g. CV3 4AB" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e1', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>Message / Requirements</label>
                  <textarea rows="4" placeholder="How can Kwabs Cleaning help you?" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e1', outline: 'none', resize: 'none' }}></textarea>
                </div>
                <button type="submit" className="btn btn-purple" style={{ width: '100%', padding: '0.9rem' }}>
                  <Send size={18} /> Submit Enquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <CoverageMap onOpenBooking={onOpenBooking} />

      {/* Google Service Map right above Footer */}
      <GoogleServiceMap onOpenBooking={onOpenBooking} />

      <style>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
