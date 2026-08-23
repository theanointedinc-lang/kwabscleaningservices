import React from 'react';
import { ShieldCheck, Award, Droplets, CheckCircle2, Phone, Sparkles, MapPin } from 'lucide-react';
import GoogleServiceMap from '../components/GoogleServiceMap';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div style={{ paddingTop: '7rem', backgroundColor: '#ffffff' }}>
      
      {/* Page Hero */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.55) 0%, rgba(30, 9, 56, 0.45) 50%, rgba(15, 23, 42, 0.7) 100%), url("/hero-bg-about.jpg") center/cover no-repeat',
        color: '#ffffff',
        padding: '5rem 0',
      }}>
        <div className="container">
          <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            <Award size={14} /> About Kwabs Cleaning Services
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '1.2rem', lineHeight: 1.15, color: '#ffffff' }}>
            <span style={{ color: '#ffffff' }}>Coventry's Trusted</span> <span className="text-gradient">Cleaning Specialists</span>
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.6, marginBottom: '2rem' }}>
            Kwabs Cleaning Services is a locally owned, top-rated professional cleaning provider delivering pure water window cleaning, gutter clearance, conservatory roof restoral, fascia washing, office and domestic cleaning across Coventry and West Midlands.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenBooking} className="btn btn-cyan" style={{ padding: '0.9rem 1.8rem' }}>
              <Sparkles size={18} /> Request Free Quote
            </button>
            <a href="tel:07741073919" className="btn btn-outline-white" style={{ padding: '0.9rem 1.6rem' }}>
              <Phone size={18} style={{ color: '#00f5d4' }} /> 07741 073919
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3.5rem', alignItems: 'center' }} className="about-grid">
            <div>
              <h2 style={{ fontSize: '2.4rem', color: '#0f172a', marginBottom: '1.2rem' }}>
                Delivering Flawless Standards <span className="text-gradient-purple">Since Day One</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                At Kwabs Cleaning Services, we believe that property maintenance should be stress-free, dependable, and executed to perfection.
              </p>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.8rem' }}>
                We invest heavily in state-of-the-art 0 TDS pure water purification systems and carbon fibre reach-and-wash poles to ensure our technicians clean safely from the ground without damaging roof tiles, lawns, or guttering.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: '#faf5ff', padding: '1.2rem', borderRadius: '14px', border: '1px solid #e9d5ff' }}>
                  <div style={{ fontWeight: 800, color: '#3b0764', fontSize: '1.1rem', marginBottom: '0.3rem' }}>0 TDS Pure Water</div>
                  <div style={{ fontSize: '0.86rem', color: '#64748b' }}>Zero chemical residue left on glass or frames.</div>
                </div>

                <div style={{ backgroundColor: '#ecfeff', padding: '1.2rem', borderRadius: '14px', border: '1px solid #a5f3fc' }}>
                  <div style={{ fontWeight: 800, color: '#0891b2', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Fully Insured</div>
                  <div style={{ fontSize: '0.86rem', color: '#64748b' }}>Comprehensive £5,000,000 public liability.</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Clean window glass, frames, sills & doors included on every visit',
                  'Automatic SMS / WhatsApp reminder sent the day before service',
                  'Easy payment via BACS online bank transfer or cash',
                  '100% Satisfaction & 24-Hour Re-Clean Guarantee',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontWeight: 600, color: '#1e293b' }}>
                    <CheckCircle2 size={18} style={{ color: '#00f5d4', shrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{
                backgroundColor: '#3b0764',
                color: '#ffffff',
                padding: '2.5rem',
                borderRadius: '24px',
                boxShadow: '0 20px 40px rgba(59, 7, 100, 0.25)',
              }}>
                <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '1.2rem' }}>
                  Our Service Promises
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div>
                    <div style={{ fontWeight: 800, color: '#00f5d4', fontSize: '1.05rem', marginBottom: '0.2rem' }}>1. Reliability & Communication</div>
                    <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                      We arrive on time, text you beforehand, and treat your property with complete respect.
                    </p>
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#00f5d4', fontSize: '1.05rem', marginBottom: '0.2rem' }}>2. Safety First</div>
                    <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                      Ground-operated poles and vacuums eliminate ladder risks on high-reach windows and gutters.
                    </p>
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#00f5d4', fontSize: '1.05rem', marginBottom: '0.2rem' }}>3. Guaranteed Satisfaction</div>
                    <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                      If any pane or sil is missed, we return within 24 hours to re-clean it free of charge.
                    </p>
                  </div>
                </div>

                <button onClick={onOpenBooking} className="btn btn-cyan" style={{ width: '100%', marginTop: '2rem' }}>
                  Book Service Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Service Areas Map placed right above Footer */}
      <GoogleServiceMap onOpenBooking={onOpenBooking} />

      <style>{`
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
