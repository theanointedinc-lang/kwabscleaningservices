import React from 'react';
import { Home, CheckCircle2, Sparkles, Phone } from 'lucide-react';
import QuoteCalculator from '../components/QuoteCalculator';
import GoogleServiceMap from '../components/GoogleServiceMap';

export default function ConservatoryCleaningPage({ onOpenBooking }) {
  return (
    <div style={{ paddingTop: '4.5rem', backgroundColor: '#ffffff' }}>
      <section style={{
        background: 'linear-gradient(135deg, #1e0938 0%, #3b0764 50%, #581c87 100%)',
        color: '#ffffff',
        padding: '4.5rem 0',
      }}>
        <div className="container">
          <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            <Home size={14} /> Roof Glass & UPVC Restoral
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '1.2rem', lineHeight: 1.15 }}>
            Conservatory <span className="text-gradient">Roof Cleaning</span> in Coventry
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.6, marginBottom: '2rem' }}>
            Restore bright natural daylight into your conservatory. We remove dark algae, lichen, and dirt build-up from glass and polycarbonate roof panels.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenBooking} className="btn btn-cyan" style={{ padding: '0.9rem 1.8rem' }}>
              <Sparkles size={18} /> Book Conservatory Clean
            </button>
            <a href="tel:07741073919" className="btn btn-outline-white" style={{ padding: '0.9rem 1.6rem' }}>
              <Phone size={18} style={{ color: '#00f5d4' }} /> Call 07741 073919
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }} className="details-grid">
            <div>
              <h2 style={{ fontSize: '2.4rem', color: '#0f172a', marginBottom: '1.2rem' }}>
                Full Conservatory <span className="text-gradient-purple">Glass & Frame Restoral</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Over time, British weather leaves conservatory roofs covered in heavy moss, lichen, and traffic film.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  'Deep Clean of Glass & Polycarbonate Roof Panels',
                  'UPVC Ridge, Finial & Decorative Moulding Detailing',
                  'Eco-Friendly Algae & Moss Inhibitor Treatment',
                  'Restores Natural Light & Heat Efficiency',
                  'Internal Glass Cleaning Options Available',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontWeight: 600, color: '#1e293b' }}>
                    <CheckCircle2 size={18} style={{ color: '#00f5d4', shrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                alt="Conservatory Cleaning Coventry"
                style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(59, 7, 100, 0.15)', border: '2px solid #e2e8f0' }}
              />
            </div>
          </div>
        </div>
      </section>

      <QuoteCalculator onOpenBooking={onOpenBooking} />

      {/* Google Service Map right above Footer */}
      <GoogleServiceMap onOpenBooking={onOpenBooking} />

      <style>{`
        @media (max-width: 992px) {
          .details-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
