import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, AlertCircle, ArrowRight, Compass } from 'lucide-react';

const LOCATIONS = [
  { name: 'Coventry (City Centre & All Districts)', codes: 'CV1, CV2, CV3, CV4, CV5, CV6, CV7, CV8', popular: true },
  { name: 'Bedworth', codes: 'CV12', popular: true },
  { name: 'Nuneaton', codes: 'CV10, CV11', popular: true },
  { name: 'Hinckley', codes: 'LE10', popular: true },
  { name: 'Kenilworth', codes: 'CV8', popular: false },
  { name: 'Royal Leamington Spa', codes: 'CV31, CV32', popular: false },
  { name: 'Rugby', codes: 'CV21, CV22', popular: false },
  { name: 'Solihull & East Birmingham', codes: 'B90, B91, B92', popular: false },
];

export default function CoverageMap({ onOpenBooking }) {
  const [searchInput, setSearchInput] = useState('');
  const [checkResult, setCheckResult] = useState(null);

  const handlePostcodeCheck = (e) => {
    e.preventDefault();
    const clean = searchInput.trim().toUpperCase();
    if (!clean) return;

    // Check prefix
    const prefix = clean.split(' ')[0];
    const match = LOCATIONS.find((loc) => loc.codes.includes(prefix) || loc.name.toUpperCase().includes(clean));

    if (match || clean.startsWith('CV') || clean.startsWith('LE10') || clean.startsWith('B9')) {
      setCheckResult({
        covered: true,
        message: `Great news! Kwabs Cleaning Services actively operates in ${clean}. We have regular cleaning routes in your area!`,
      });
    } else {
      setCheckResult({
        covered: false,
        message: `We might still serve ${clean}! Call us at 07741 073919 or request a custom schedule check.`,
      });
    }
  };

  return (
    <section id="coverage" className="section-padding" style={{
      backgroundColor: '#ffffff',
      position: 'relative',
    }}>
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '0.8rem' }}>
            <Compass size={14} /> Service Area & GEO Coverage
          </div>
          <h2 style={{ fontSize: '2.6rem', color: '#0f172a', marginBottom: '1rem' }}>
            Servicing <span className="text-gradient-purple">Coventry & Surrounding</span> Regions
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.08rem' }}>
            We operate regular 4-weekly and 8-weekly cleaning routes across Coventry, Warwickshire, and Leicestershire borders.
          </p>
        </div>

        {/* Postcode Checker Tool */}
        <div style={{
          maxWidth: '680px',
          margin: '0 auto 3.5rem auto',
          backgroundColor: '#faf5ff',
          borderRadius: '20px',
          padding: '2rem',
          border: '1.5px solid #c084fc',
          boxShadow: '0 10px 30px rgba(126, 34, 206, 0.08)',
        }}>
          <h3 style={{ fontSize: '1.25rem', color: '#3b0764', textAlign: 'center', marginBottom: '1rem' }}>
            Check Service Availability in Your Postcode
          </h3>

          <form onSubmit={handlePostcodeCheck} style={{ display: 'flex', gap: '0.6rem' }}>
            <div style={{ position: 'relative', flexGrow: 1 }}>
              <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Enter your UK postcode (e.g. CV3 4AB or CV12)"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.8rem',
                  borderRadius: '12px',
                  border: '1.5px solid #cbd5e1',
                  fontSize: '1rem',
                  outline: 'none',
                }}
              />
            </div>
            <button type="submit" className="btn btn-purple" style={{ padding: '0.85rem 1.4rem' }}>
              Check Availability
            </button>
          </form>

          {/* Result Alert */}
          {checkResult && (
            <div style={{
              marginTop: '1.2rem',
              padding: '1rem 1.2rem',
              borderRadius: '12px',
              backgroundColor: checkResult.covered ? '#ecfdf5' : '#fff1f2',
              border: checkResult.covered ? '1px solid #6ee7b7' : '1px solid #fca5a5',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.8rem',
            }}>
              {checkResult.covered ? (
                <CheckCircle2 size={22} style={{ color: '#059669', shrink: 0, marginTop: '2px' }} />
              ) : (
                <AlertCircle size={22} style={{ color: '#e11d48', shrink: 0, marginTop: '2px' }} />
              )}
              <div>
                <p style={{ color: checkResult.covered ? '#065f46' : '#9f1239', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                  {checkResult.message}
                </p>
                {checkResult.covered && (
                  <button onClick={onOpenBooking} className="btn btn-cyan" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem', marginTop: '0.4rem' }}>
                    Book Your Slot Now <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Coverage Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {LOCATIONS.map((loc, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                padding: '1.5rem',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
              }}
            >
              <div style={{
                backgroundColor: '#ecfeff',
                color: '#0891b2',
                padding: '0.7rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
              }}>
                <MapPin size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: '#1e293b', marginBottom: '0.2rem' }}>
                  {loc.name}
                </h4>
                <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
                  Postcodes: <span style={{ color: '#7e22ce', fontWeight: 700 }}>{loc.codes}</span>
                </div>
                {loc.popular && (
                  <span style={{ fontSize: '0.72rem', backgroundColor: '#00f5d4', color: '#0f172a', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 800, marginTop: '0.5rem', display: 'inline-block' }}>
                    DAILY ROUTES
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
