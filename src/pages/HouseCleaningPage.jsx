import React from 'react';
import { Home, CheckCircle2, Sparkles, Phone } from 'lucide-react';
import QuoteCalculator from '../components/QuoteCalculator';
import GoogleServiceMap from '../components/GoogleServiceMap';

export default function HouseCleaningPage({ onOpenBooking }) {
  return (
    <div style={{ paddingTop: '4.5rem', backgroundColor: '#ffffff' }}>
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #3b0764 50%, #581c87 100%)',
        color: '#ffffff',
        padding: '4.5rem 0',
      }}>
        <div className="container">
          <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            <Home size={14} /> Domestic & Tenancy Cleaning
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '1.2rem', lineHeight: 1.15 }}>
            House & Domestic <span className="text-gradient">Cleaning</span> in Coventry
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.6, marginBottom: '2rem' }}>
            Relax and enjoy a spotless home. From regular weekly or bi-weekly domestic upkeep to end-of-tenancy deep cleans across Coventry and Warwickshire.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenBooking} className="btn btn-cyan" style={{ padding: '0.9rem 1.8rem' }}>
              <Sparkles size={18} /> Book House Clean
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
                Complete Home <span className="text-gradient-purple">Sanitization & Care</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                We treat your home with the utmost care, using non-toxic, child-safe and pet-safe eco-cleaning products.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  'Kitchen Countertops, Sink Scrubbing & Appliance Wipedown',
                  'Bathroom Tile Descaling, Mirrors & Sanitaryware Polish',
                  'Living Areas, Bedrooms, Dusting & Furniture Polish',
                  'Vacuuming Carpets & Mopping Hardwood / Tile Floors',
                  'End of Tenancy Move-In & Move-Out Guaranteed Cleans',
                  '100% Eco-Friendly Non-Toxic Cleaning Agents',
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
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                alt="House Cleaning Coventry"
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
