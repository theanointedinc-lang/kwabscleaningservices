import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import Testimonials from '../components/Testimonials';
import GoogleServiceMap from '../components/GoogleServiceMap';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Droplets, Wind, Home, Building2, Layers } from 'lucide-react';

export default function HomePage({ onOpenBooking }) {
  const handleScrollToQuote = () => {
    window.location.href = '#/quote';
  };

  return (
    <>
      {/* Hero Banner with prominent "Crystal Clear Windows, Spotless Gutters & Pristine Homes" headline */}
      <Hero onOpenBooking={onOpenBooking} onScrollToQuote={handleScrollToQuote} />

      {/* Featured Services Overview Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            <div className="badge badge-cyan" style={{ marginBottom: '0.8rem' }}>
              <Sparkles size={14} /> Professional Services
            </div>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1rem' }}>
              Our Core <span className="text-gradient-purple">Cleaning Solutions</span> in Coventry
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.08rem' }}>
              Kwabs Cleaning Services provides complete exterior and interior property cleaning for homes and commercial premises.
            </p>
          </div>

          {/* 6 Core Services Preview Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.8rem',
            marginBottom: '3rem',
          }}>
            {[
              { title: 'WINDOW CLEANING', desc: '100% pure water reach & wash pole system. Glass, frames, sills & doors included.', price: 'From £15' },
              { title: 'GUTTER CLEANING', desc: 'High-reach vacuum clearance of moss, leaves, silt & downpipe unblocking.', price: 'From £35' },
              { title: 'CONSERVATORY CLEANING', desc: 'Roof glass & UPVC restoration, algae treatment & natural light recovery.', price: 'From £45' },
              { title: 'FASICA CLEANING', desc: 'UPVC fascia, soffit & cladding deep wash to remove black traffic grime.', price: 'From £30' },
              { title: 'OFFICE CLEANING', desc: 'Commercial workplace sanitization, desks, washrooms & flexible schedules.', price: 'Commercial' },
              { title: 'HOUSE CLEANING', desc: 'Domestic deep clean, tenancy cleaning & regular home care with eco products.', price: 'From £50' },
            ].map((srv, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#faf5ff',
                  border: '1px solid #e9d5ff',
                  borderRadius: '18px',
                  padding: '1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#3b0764', marginBottom: '0.6rem' }}>{srv.title}</h3>
                  <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '1.2rem' }}>{srv.desc}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f3e8ff', paddingTop: '1rem' }}>
                  <span style={{ fontWeight: 800, color: '#7e22ce' }}>{srv.price}</span>
                  <Link to="/services" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0891b2', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    View Full Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn btn-purple" style={{ padding: '0.9rem 2rem' }}>
              Explore All Services Page <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs onOpenBooking={onOpenBooking} />

      {/* Before & After Slider Preview */}
      <BeforeAfterSlider />

      {/* Reviews Preview */}
      <Testimonials />

      {/* Google Service Areas Map placed right above Footer */}
      <GoogleServiceMap onOpenBooking={onOpenBooking} />
    </>
  );
}
