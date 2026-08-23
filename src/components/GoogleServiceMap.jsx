import React from 'react';
import { MapPin, Navigation, Phone, MessageSquare, Compass, CheckCircle } from 'lucide-react';

const SERVICE_REGIONS = [
  { name: 'Coventry (All Districts)', area: 'CV1, CV2, CV3, CV4, CV5, CV6, CV7, CV8', focus: 'Daily Service Routes' },
  { name: 'Bedworth', area: 'CV12', focus: 'Regular 4 & 8-Weekly' },
  { name: 'Nuneaton', area: 'CV10, CV11', focus: 'Residential & Commercial' },
  { name: 'Hinckley', area: 'LE10', focus: 'Full Coverage' },
  { name: 'Kenilworth', area: 'CV8', focus: 'Weekly Visits' },
  { name: 'Royal Leamington Spa', area: 'CV31, CV32', focus: 'Exterior & Domestic' },
  { name: 'Rugby', area: 'CV21, CV22', focus: 'Scheduled Routes' },
  { name: 'Solihull & East Bham', area: 'B90, B91', focus: 'Commercial & Domestic' },
];

export default function GoogleServiceMap({ onOpenBooking }) {
  // Coventry Google Map Embed query URL
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155554.4093863486!2d-1.6375005886675542!3d52.41434316972049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b135069273c5%3A0x6b4478ae9a9f2430!2sCoventry%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk";

  return (
    <section style={{
      backgroundColor: '#f8fafc',
      paddingTop: '4rem',
      paddingBottom: '4rem',
      borderTop: '1px solid #e2e8f0',
      position: 'relative',
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.8rem auto' }}>
          <div className="badge badge-purple" style={{ marginBottom: '0.8rem' }}>
            <Compass size={14} /> Service Area Map
          </div>
          <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '0.8rem' }}>
            Kwabs Cleaning <span className="text-gradient-purple">Coventry Service Map</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.08rem' }}>
            We cover Coventry, Bedworth, Nuneaton, Hinckley, Kenilworth, Royal Leamington Spa, Rugby, and surrounding Warwickshire communities.
          </p>
        </div>

        {/* Map + Region Grid */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 15px 40px rgba(59, 7, 100, 0.08)',
          border: '1px solid #e2e8f0',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
        }} className="google-map-grid">
          
          {/* Left Side: Interactive Embedded Google Map */}
          <div style={{ position: 'relative', minHeight: '420px', backgroundColor: '#e2e8f0' }}>
            <iframe
              title="Kwabs Cleaning Services Coventry Location & Service Area Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Map Overlay Badge */}
            <div style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
              padding: '0.6rem 1.2rem',
              borderRadius: '12px',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.85rem',
              fontWeight: 700,
            }}>
              <MapPin size={16} style={{ color: '#00f5d4' }} /> Primary HQ: Coventry, UK
            </div>
          </div>

          {/* Right Side: Service Coverage Breakdown */}
          <div style={{
            padding: '2.2rem',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between',
            backgroundColor: '#faf5ff',
          }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', color: '#3b0764', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Navigation size={20} style={{ color: '#7e22ce' }} /> Service Coverage Zones
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.7rem', maxHeight: '310px', overflowY: 'auto', paddingRight: '0.3rem' }}>
                {SERVICE_REGIONS.map((reg, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e9d5ff',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#1e0938' }}>{reg.name}</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Postcodes: {reg.area}</div>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0891b2', backgroundColor: '#ecfeff', padding: '0.2rem 0.5rem', borderRadius: '6px' }}>
                      {reg.focus}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1.2rem', borderTop: '1px solid #e9d5ff', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <button onClick={onOpenBooking} className="btn btn-cyan" style={{ flexGrow: 1, padding: '0.75rem 1rem', fontSize: '0.9rem' }}>
                Check Your Location
              </button>
              <a href="tel:07741073919" className="btn btn-purple" style={{ padding: '0.75rem 1.2rem', fontSize: '0.9rem' }}>
                <Phone size={16} /> 07741 073919
              </a>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .google-map-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
