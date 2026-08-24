import React from 'react';
import { Layers, CheckCircle2, Sparkles, Phone } from 'lucide-react';
import QuoteCalculator from '../components/QuoteCalculator';
import GoogleServiceMap from '../components/GoogleServiceMap';

export default function FasciaCleaningPage({ onOpenBooking }) {
  return (
    <div style={{ paddingTop: '4.5rem', backgroundColor: '#ffffff' }}>
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #3b0764 50%, #581c87 100%)',
        color: '#ffffff',
        padding: '4.5rem 0',
      }}>
        <div className="container">
          <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            <Layers size={14} /> UPVC Soffit & Cladding Restoration
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '1.2rem', lineHeight: 1.15 }}>
            Fascia & Soffit <span className="text-gradient">Cleaning</span> in Coventry
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.6, marginBottom: '2rem' }}>
            Brighten your property's exterior trim. We scrub away dark road film, green mildew, and unsightly stains from UPVC fascias, soffits, and cladding.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenBooking} className="btn btn-cyan" style={{ padding: '0.9rem 1.8rem' }}>
              <Sparkles size={18} /> Book Fascia Clean
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
                Instant <span className="text-gradient-purple">Curb Appeal</span> Boost
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Dirty, discolored fascias make even modern homes look aged and uncared for. Our foam detergents and soft brushes wash away years of pollution and grime.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  'UPVC Fascia, Soffit & Bargeboard Deep Wash',
                  'Removes Black Atmospheric Traffic Grime',
                  'Protective Sheen to Repel Dirt & Rain Stains',
                  'Safe Ground Pole Operations - No Scaffolding Needed',
                  'Adds Value & Pride to Your Home Exterior',
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
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                alt="Fascia Cleaning Coventry"
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
