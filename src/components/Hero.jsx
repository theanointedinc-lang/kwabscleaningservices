import React from 'react';
import { ShieldCheck, Star, Sparkles, Phone, CheckCircle2, ArrowRight, Droplets, Home, Building2 } from 'lucide-react';

export default function Hero({ onOpenBooking, onScrollToQuote }) {
  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '92vh',
      paddingTop: '10rem',
      paddingBottom: '5rem',
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.55) 0%, rgba(30, 9, 56, 0.45) 50%, rgba(15, 23, 42, 0.7) 100%), url("/hero-bg-home.jpg") center/cover no-repeat',
      color: '#ffffff',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Background Decorative Lighting Gradients */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '550px',
        height: '550px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.35) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column Content */}
          <div>
            {/* Top Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid rgba(6, 182, 212, 0.35)',
              padding: '0.45rem 1.1rem',
              borderRadius: '999px',
              color: '#00f5d4',
              fontWeight: 700,
              fontSize: '0.88rem',
              marginBottom: '1.5rem',
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)',
            }}>
              <Star size={16} fill="#00f5d4" />
              <span>Coventry's #1 Rated Cleaning Specialists</span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: '3.6rem',
              lineHeight: 1.1,
              fontWeight: 900,
              letterSpacing: '-0.03em',
              marginBottom: '1.4rem',
              color: '#ffffff',
            }} className="hero-title">
              <span style={{ color: '#ffffff' }}>Crystal Clear Windows</span>, <span className="text-gradient">Spotless Gutters</span> & <span style={{ color: '#ffffff' }}>Pristine Homes</span>
            </h1>

            {/* Subheading */}
            <p style={{
              fontSize: '1.18rem',
              color: '#cbd5e1',
              lineHeight: 1.6,
              marginBottom: '2.2rem',
              maxWidth: '640px',
            }}>
              Kwabs Cleaning Services delivers premium residential & commercial exterior and interior cleaning across 
              <strong style={{ color: '#ffffff' }}> Coventry, Bedworth, Nuneaton, Hinckley & Warwickshire</strong>. Pure water tech, high-reach gutter vacuuming, and 100% satisfaction guaranteed.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.8rem' }}>
              <button onClick={onScrollToQuote} className="btn btn-cyan" style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>
                <Sparkles size={20} /> Instant Online Quote
              </button>
              <a href="tel:07741073919" className="btn btn-outline-white" style={{ padding: '1rem 1.8rem', fontSize: '1.05rem' }}>
                <Phone size={19} style={{ color: '#00f5d4' }} /> Call 07741 073919
              </a>
            </div>

            {/* Feature Pills */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              paddingTop: '1.8rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={20} style={{ color: '#00f5d4', shrink: 0 }} />
                <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#f1f5f9' }}>Pure Water Technology</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={20} style={{ color: '#00f5d4', shrink: 0 }} />
                <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#f1f5f9' }}>Frames & Sills Cleaned</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={20} style={{ color: '#00f5d4', shrink: 0 }} />
                <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#f1f5f9' }}>Fully Insured Specialists</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={20} style={{ color: '#00f5d4', shrink: 0 }} />
                <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#f1f5f9' }}>4 or 8-Week Regular Plans</span>
              </div>
            </div>
          </div>

          {/* Right Column Floating Highlight Card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              backgroundColor: 'rgba(30, 15, 60, 0.75)',
              backdropFilter: 'blur(16px)',
              borderRadius: '24px',
              border: '1.5px solid rgba(6, 182, 212, 0.3)',
              padding: '2.2rem',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(6, 182, 212, 0.25)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.4rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff' }}>Our Core Services</h3>
                <span style={{ backgroundColor: 'rgba(6, 182, 212, 0.2)', color: '#67e8f9', padding: '0.25rem 0.7rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>
                  Coventry & Warwickshire
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {[
                  { name: 'Window Cleaning', tag: 'Pure Water Pole System', icon: Droplets, highlight: 'Frames & Doors Included' },
                  { name: 'Gutter Clearance', tag: 'High-Reach Vacuum', highlight: 'Downpipe Flushing' },
                  { name: 'Conservatory Roof', tag: 'Algae & Moss Restoral', highlight: '100% Glass Clarity' },
                  { name: 'Fascia & Soffit', tag: 'UPVC Deep Wash', highlight: 'Stain Clearance' },
                  { name: 'Office Cleaning', tag: 'Commercial Premises', highlight: 'Flexible Schedules' },
                  { name: 'House Cleaning', tag: 'Domestic & Tenancy', highlight: 'Eco-Friendly Products' },
                ].map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'space-between',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '0.75rem 1rem',
                    borderRadius: '14px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(6, 182, 212, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#ffffff' }}>{item.name}</div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item.tag}</div>
                    </div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#00f5d4', backgroundColor: 'rgba(0, 245, 212, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>
                      {item.highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card Footer Call */}
              <div style={{ marginTop: '1.6rem', paddingTop: '1.2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
                <p style={{ fontSize: '0.88rem', color: '#cbd5e1', marginBottom: '0.8rem' }}>
                  ⚡ Free, No-Obligation Quotes within 60 Seconds
                </p>
                <button 
                  onClick={onOpenBooking}
                  className="btn btn-cyan"
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  Book Your Service Now <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-title {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
