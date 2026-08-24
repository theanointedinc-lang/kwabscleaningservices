import React from 'react';
import { Wind, CheckCircle2, ShieldCheck, Sparkles, Phone, ArrowRight } from 'lucide-react';
import QuoteCalculator from '../components/QuoteCalculator';
import GoogleServiceMap from '../components/GoogleServiceMap';

export default function GutterCleaningPage({ onOpenBooking }) {
  return (
    <div style={{ paddingTop: '4.5rem', backgroundColor: '#ffffff' }}>
      
      {/* Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.55) 0%, rgba(30, 9, 56, 0.45) 50%, rgba(15, 23, 42, 0.7) 100%), url("/gutter-cleaning-hero.jpg") center/cover no-repeat',
        color: '#ffffff',
        padding: '5rem 0',
        position: 'relative',
      }}>
        <div className="container">
          <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            <Wind size={14} /> High-Reach Gutter Vacuum System
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '1.2rem', lineHeight: 1.15, color: '#ffffff' }}>
            <span style={{ color: '#ffffff' }}>High-Reach</span> <span className="text-gradient">Gutter Cleaning</span> <span style={{ color: '#ffffff' }}>in Coventry</span>
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.6, marginBottom: '2rem' }}>
            Prevent dampness, roof decay, and costly foundation damage. Our high-power gutter vacuum system clears moss, silt, leaves, and downpipe blockages safely from ground level.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenBooking} className="btn btn-cyan" style={{ padding: '0.9rem 1.8rem' }}>
              <Sparkles size={18} /> Book Gutter Clearance
            </button>
            <a href="tel:07741073919" className="btn btn-outline-white" style={{ padding: '0.9rem 1.6rem' }}>
              <Phone size={18} style={{ color: '#00f5d4' }} /> Call 07741 073919
            </a>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }} className="details-grid">
            <div>
              <h2 style={{ fontSize: '2.4rem', color: '#0f172a', marginBottom: '1.2rem' }}>
                Protect Your Property From <span className="text-gradient-purple">Water Damage</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Overflowing gutters are the leading cause of exterior wall damp, ruined fascia boards, and cracked foundations in UK homes.
              </p>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.8rem' }}>
                Kwabs Cleaning uses industrial suction vacuums fitted with wireless camera monitors to ensure every inch of your gutter channel and downpipe is completely free of debris.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  'Industrial 3000W Wet & Dry Gutter Vacuum',
                  'Clears Heavy Moss, Fallen Leaves, Silt & Weeds',
                  'Downpipe Flow Test and Unblocking Included',
                  'Wireless Ground Camera Visual Inspection',
                  'No Scaffolding Required - Up to 4 Stories Safe Access',
                  'Prevents Thousands in Structural Damp Repairs',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontWeight: 600, color: '#1e293b' }}>
                    <CheckCircle2 size={18} style={{ color: '#00f5d4', shrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <img
                src="/gutter-cleaning-hero.jpg"
                alt="Gutter Vacuum Coventry"
                style={{
                  width: '100%',
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(59, 7, 100, 0.15)',
                  border: '2px solid #e2e8f0',
                }}
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
          .details-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
