import React from 'react';
import FaqSection from '../components/FaqSection';
import GoogleServiceMap from '../components/GoogleServiceMap';
import { HelpCircle, Sparkles, Phone } from 'lucide-react';

export default function FaqPage({ onOpenBooking }) {
  return (
    <div style={{ paddingTop: '7rem', backgroundColor: '#ffffff' }}>
      
      {/* FAQ Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #1e0938 0%, #3b0764 50%, #581c87 100%)',
        color: '#ffffff',
        padding: '4.5rem 0',
      }}>
        <div className="container">
          <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            <HelpCircle size={14} /> Knowledgebase & Guidance
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '1.2rem', lineHeight: 1.15, color: '#ffffff' }}>
            <span style={{ color: '#ffffff' }}>Frequently Asked</span> <span className="text-gradient">Questions</span>
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.6, marginBottom: '2rem' }}>
            Find answers to common questions about our pure water window cleaning, high-reach gutter vacuuming, conservatory restoral, payment options, and service guarantees.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenBooking} className="btn btn-cyan" style={{ padding: '0.9rem 1.8rem' }}>
              <Sparkles size={18} /> Ask a Question / Get Quote
            </button>
            <a href="tel:07741073919" className="btn btn-outline-white" style={{ padding: '0.9rem 1.6rem' }}>
              <Phone size={18} style={{ color: '#00f5d4' }} /> Call 07741 073919
            </a>
          </div>
        </div>
      </section>

      {/* Accordion List */}
      <FaqSection />

      {/* Google Service Areas Map placed right above Footer */}
      <GoogleServiceMap onOpenBooking={onOpenBooking} />
    </div>
  );
}
