import React, { useState } from 'react';
import { Droplets, Shield, Sparkles, CheckCircle2, ArrowRight, Layers, Home, Building2, Wind, Eye } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'window-cleaning',
    title: 'WINDOW CLEANING',
    subtitle: 'Pure Water Reach & Wash Pole System',
    description: 'We use 100% deionised pure water technology fed through carbon-fibre poles (up to 40ft). This leaves your glass spot-free, streak-free, and crystal clear without harsh chemicals.',
    image: '/window-cleaning-hero.jpg',
    tag: 'Coventry Favourite',
    features: [
      'Pure 0 TDS deionised water system',
      'Window glass, frames, sills & doors included',
      'High reach poles (up to 4 stories without ladders)',
      '4-weekly or 8-weekly recurring schedules',
      'Text reminder sent the day before visit',
    ],
    priceTag: 'From £15 / visit',
  },
  {
    id: 'gutter-cleaning',
    title: 'GUTTER CLEANING',
    subtitle: 'High-Reach Vacuum & Downpipe Unblocking',
    description: 'Prevent costly structural water damage with our high-power gutter vacuum extraction. We clear built-up moss, leaves, silt, and unblock downpipes safely from ground level.',
    image: '/gutter-cleaning-hero.jpg',
    tag: 'Essential Maintenance',
    features: [
      'High-suction wet & dry gutter vacuum system',
      'Ground-operated inspection cameras',
      'Full clearance of leaves, moss, silt & debris',
      'Downpipe flow test and unblocking',
      'Prevents damp, foundation damage & fascia rot',
    ],
    priceTag: 'From £35 / clean',
  },
  {
    id: 'conservatory-cleaning',
    title: 'CONSERVATORY CLEANING',
    subtitle: 'Roof Glass & UPVC Frame Restoration',
    description: 'Transform dull, moss-covered conservatory roofs back to pristine brilliance. We strip away green algae, lichen, dirt, and restore full light penetration into your home.',
    image: '/hero-bg-services.jpg',
    tag: 'Full Transformation',
    features: [
      'Roof glass and polycarbonate panel deep wash',
      'UPVC finials, cresting, & decorative trim detailing',
      'Algae & moss biocide treatment',
      'Internal & external glass options',
      'Restores bright natural lighting',
    ],
    priceTag: 'From £45 / roof',
  },
  {
    id: 'fascia-cleaning',
    title: 'FASCIA & SOFFIT CLEANING',
    subtitle: 'UPVC Cladding Stain & Dirt Removal',
    description: 'Brighten your home’s exterior with specialized UPVC fascia and soffit deep washing. Removes black streaks, atmospheric grime, and mildew to boost curb appeal.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    tag: 'Curb Appeal Boost',
    features: [
      'UPVC restoration using eco detergent foam',
      'Soffits, fascia boards & bargeboards washed',
      'Removes black traffic film & algae stains',
      'Protective clear finish to resist future grime',
      'Adds value to domestic and commercial properties',
    ],
    priceTag: 'From £30 / service',
  },
  {
    id: 'office-cleaning',
    title: 'OFFICE CLEANING',
    subtitle: 'Commercial & Workplace Sanitization',
    description: 'Maintain a hygienic, healthy, and professional work environment. Tailored office cleaning packages for Coventry businesses, tech parks, shops, and corporate facilities.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    tag: 'Commercial Grade',
    features: [
      'Daily, weekly, or bi-weekly flexible shifts',
      'Desk, keyboard & surface sanitization',
      'Washroom deep cleaning & replenishment',
      'Kitchen, breakroom & floor maintenance',
      'Out-of-hours or weekend shift options',
    ],
    priceTag: 'Custom Commercial Quote',
  },
  {
    id: 'house-cleaning',
    title: 'HOUSE CLEANING',
    subtitle: 'Domestic Deep Clean & Tenancy Services',
    description: 'Comprehensive domestic home cleaning tailored to your lifestyle. From regular house cleans to end-of-tenancy deep cleans, using non-toxic, pet-safe products.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    tag: 'Residential Care',
    features: [
      'Kitchen, bathroom & living area deep scrubbing',
      'End of tenancy move-in / move-out cleans',
      '100% Eco-friendly non-toxic cleaning agents',
      'Dusting, vacuuming, mopping & surface polish',
      'Trusted, background-checked local technicians',
    ],
    priceTag: 'From £50 / clean',
  },
];

export default function ServicesSection({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="services" className="section-padding" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} /> Professional Services
          </div>
          <h2 style={{ fontSize: '2.8rem', color: '#0f172a', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Our Premium <span className="text-gradient-purple">Cleaning Solutions</span> in Coventry
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Kwabs Cleaning Services provides expert exterior and interior cleaning solutions designed for residential homes and commercial businesses across West Midlands.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '2.2rem',
        }} className="services-grid">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(59, 7, 100, 0.05)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              className="service-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(126, 34, 206, 0.15)';
                e.currentTarget.style.borderColor = '#c084fc';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 7, 100, 0.05)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              {/* Image Banner */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={srv.image}
                  alt={srv.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(0,0,0,0) 60%)',
                }} />

                {/* Badge Tag */}
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: '#00f5d4',
                  color: '#0f172a',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '999px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                }}>
                  {srv.tag}
                </span>

                {/* Title overlay */}
                <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.5rem', right: '1.5rem' }}>
                  <h3 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '0.02em', marginBottom: '0.1rem' }}>
                    {srv.title}
                  </h3>
                  <div style={{ color: '#67e8f9', fontSize: '0.85rem', fontWeight: 600 }}>
                    {srv.subtitle}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.5, marginBottom: '1.4rem' }}>
                  {srv.description}
                </p>

                {/* Feature Bullet Points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.8rem', flexGrow: 1 }}>
                  {srv.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#334155' }}>
                      <CheckCircle2 size={16} style={{ color: '#7e22ce', shrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Price & Button */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  paddingTop: '1.2rem',
                  borderTop: '1px solid #f1f5f9',
                }}>
                  <div style={{ fontWeight: 800, color: '#581c87', fontSize: '1.05rem' }}>
                    {srv.priceTag}
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="btn btn-purple"
                    style={{ padding: '0.55rem 1.2rem', fontSize: '0.88rem' }}
                  >
                    Book Service <ArrowRight size={15} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div style={{
          marginTop: '4rem',
          backgroundColor: '#faf5ff',
          borderRadius: '20px',
          border: '1px solid #c084fc',
          padding: '2rem',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <div style={{
              backgroundColor: '#7e22ce',
              color: '#ffffff',
              padding: '1rem',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
            }}>
              <Shield size={32} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.25rem', color: '#3b0764', marginBottom: '0.3rem' }}>
                100% Satisfaction & Streak-Free Guarantee
              </h4>
              <p style={{ color: '#6b21a8', fontSize: '0.95rem' }}>
                If you aren't completely happy with any clean, notify us within 24 hours and we will re-clean free of charge!
              </p>
            </div>
          </div>
          <button onClick={onOpenBooking} className="btn btn-cyan">
            Book Service Now
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
