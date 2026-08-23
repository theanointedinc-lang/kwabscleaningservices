import React from 'react';
import { Droplets, CheckCircle2, ShieldCheck, Sparkles, Phone, ArrowRight, Star } from 'lucide-react';
import QuoteCalculator from '../components/QuoteCalculator';
import GoogleServiceMap from '../components/GoogleServiceMap';

export default function WindowCleaningPage({ onOpenBooking }) {
  return (
    <div style={{ paddingTop: '7rem', backgroundColor: '#ffffff' }}>
      
      {/* Service Page Banner */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.55) 0%, rgba(30, 9, 56, 0.45) 50%, rgba(15, 23, 42, 0.7) 100%), url("/window-cleaning-hero.jpg") center/cover no-repeat',
        color: '#ffffff',
        padding: '5rem 0',
        position: 'relative',
      }}>
        <div className="container">
          <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            <Droplets size={14} /> 100% Pure Water Reach & Wash
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '1.2rem', lineHeight: 1.15, color: '#ffffff' }}>
            <span style={{ color: '#ffffff' }}>Professional</span> <span className="text-gradient">Window Cleaning</span> <span style={{ color: '#ffffff' }}>in Coventry</span>
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.6, marginBottom: '2rem' }}>
            Kwabs Cleaning Services provides streak-free, spot-free pure water window cleaning across Coventry, Bedworth, Nuneaton & Warwickshire. We wash window glass, frames, sills, and doors on every visit!
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenBooking} className="btn btn-cyan" style={{ padding: '0.9rem 1.8rem' }}>
              <Sparkles size={18} /> Book Window Cleaning
            </button>
            <a href="tel:07741073919" className="btn btn-outline-white" style={{ padding: '0.9rem 1.6rem' }}>
              <Phone size={18} style={{ color: '#00f5d4' }} /> 07741 073919
            </a>
          </div>
        </div>
      </section>

      {/* Service Details & Benefits */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }} className="details-grid">
            <div>
              <h2 style={{ fontSize: '2.4rem', color: '#0f172a', marginBottom: '1.2rem' }}>
                Why Our <span className="text-gradient-purple">Pure Water System</span> Beats Traditional Cleaning
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Traditional window cleaning relies on soapy water and squeegees that leave chemical residue behind, attracting dust and dirt faster.
              </p>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.8rem' }}>
                Our 0 TDS (Parts Per Million) deionised pure water acts as a natural magnet for dirt. It absorbs all grime from your glass, frames, and sills, drying completely clear without spots or streaks.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  '100% Deionised Pure Water (0 PPM TDS)',
                  'Frames, Sills & Front/Back Doors Included Free',
                  'High Reach Carbon Fibre Poles up to 4 Stories (40ft)',
                  'No Scaffolding or Ladders Leaning Against Your Walls',
                  '4-Weekly & 8-Weekly Flexible Recurring Plans',
                  'Day-Before SMS / WhatsApp Reminders',
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
                src="/window-cleaning-hero.jpg"
                alt="Window Cleaning Coventry"
                style={{
                  width: '100%',
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(59, 7, 100, 0.15)',
                  border: '2px solid #e2e8f0',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                color: '#ffffff',
                padding: '0.8rem 1.4rem',
                borderRadius: '14px',
                border: '1px solid rgba(6, 182, 212, 0.4)',
              }}>
                <div style={{ fontWeight: 800, color: '#00f5d4', fontSize: '1.1rem' }}>Streak-Free Guarantee</div>
                <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>Free re-clean within 24 hours if unsatisfied</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Estimator */}
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
