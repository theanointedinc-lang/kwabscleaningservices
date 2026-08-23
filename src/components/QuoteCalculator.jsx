import React, { useState } from 'react';
import { Calculator, MessageSquare, Sparkles, Check, Info, PhoneCall, Calendar } from 'lucide-react';

const SERVICES = [
  { id: 'window', name: 'Window Cleaning', basePrice: 20, icon: '🪟', note: 'Includes Frames, Sills & Doors' },
  { id: 'gutter', name: 'Gutter Clearance', basePrice: 35, icon: '🌧️', note: 'High-Reach Vacuum & Downpipes' },
  { id: 'conservatory', name: 'Conservatory Roof', basePrice: 45, icon: '🏡', note: 'Deep Glass & UPVC Restoral' },
  { id: 'fascia', name: 'Fascia & Soffit Wash', basePrice: 30, icon: '✨', note: 'UPVC Stain & Moss Removal' },
  { id: 'office', name: 'Commercial Office', basePrice: 50, icon: '🏢', note: 'Desks, Washrooms & Floors' },
  { id: 'house', name: 'House Deep Clean', basePrice: 60, icon: '🧹', note: 'Domestic & Tenancy Clean' },
];

const PROPERTY_TYPES = [
  { id: 'terraced', name: 'Terraced House', multiplier: 1.0 },
  { id: 'semi', name: 'Semi-Detached', multiplier: 1.25 },
  { id: 'detached', name: 'Detached House', multiplier: 1.55 },
  { id: 'flat', name: 'Flat / Apartment', multiplier: 0.85 },
  { id: 'commercial', name: 'Commercial / Office', multiplier: 1.8 },
];

const STORIES = [
  { id: '1', name: '1 Story (Bungalow)', multiplier: 0.9 },
  { id: '2', name: '2 Stories (Standard)', multiplier: 1.0 },
  { id: '3', name: '3+ Stories (High Reach)', multiplier: 1.35 },
];

const FREQUENCIES = [
  { id: '4weeks', name: 'Every 4 Weeks', discount: 0.85, label: 'Best Value (15% OFF)' },
  { id: '8weeks', name: 'Every 8 Weeks', discount: 0.92, label: '8-Weekly Schedule' },
  { id: 'oneoff', name: 'One-Off Deep Clean', discount: 1.0, label: 'Single Service' },
];

export default function QuoteCalculator({ onOpenBooking }) {
  const [selectedService, setSelectedService] = useState('window');
  const [selectedProp, setSelectedProp] = useState('semi');
  const [selectedStories, setSelectedStories] = useState('2');
  const [selectedFreq, setSelectedFreq] = useState('4weeks');
  const [postcode, setPostcode] = useState('');

  // Calculate estimated price
  const serviceObj = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];
  const propObj = PROPERTY_TYPES.find((p) => p.id === selectedProp) || PROPERTY_TYPES[0];
  const storyObj = STORIES.find((st) => st.id === selectedStories) || STORIES[0];
  const freqObj = FREQUENCIES.find((f) => f.id === selectedFreq) || FREQUENCIES[0];

  const calculatedMin = Math.round(serviceObj.basePrice * propObj.multiplier * storyObj.multiplier * freqObj.discount);
  const calculatedMax = Math.round(calculatedMin * 1.3);

  // Generate WhatsApp pre-filled message text
  const waMsg = encodeURIComponent(
    `Hello Kwabs Cleaning Services! I'd like a quote for:\n` +
    `• Service: ${serviceObj.name}\n` +
    `• Property: ${propObj.name} (${storyObj.name})\n` +
    `• Frequency: ${freqObj.name}\n` +
    `• Postcode: ${postcode || 'Coventry Area'}\n` +
    `• Estimated Price: £${calculatedMin} - £${calculatedMax}\n` +
    `Please contact me with availability.`
  );

  return (
    <section id="quote" className="section-padding" style={{
      backgroundColor: '#f8fafc',
      position: 'relative',
    }}>
      <div className="container">
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <div className="badge badge-purple" style={{ marginBottom: '0.8rem' }}>
            <Calculator size={14} /> Instant Estimator
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0f172a' }}>
            Calculate Your <span className="text-gradient-purple">Cleaning Estimate</span> in Seconds
          </h2>
          <p style={{ color: '#475569', fontSize: '1.08rem' }}>
            Select your service details below for an instant estimated price range. No hidden fees, no obligation.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 15px 40px rgba(59, 7, 100, 0.08)',
          border: '1px solid #e2e8f0',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
        }} className="calc-grid">
          
          {/* Left Inputs Side */}
          <div style={{ padding: '2.5rem' }}>
            
            {/* Step 1: Service Selection */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: '#1e293b', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                1. Select Service Type
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0.75rem' }}>
                {SERVICES.map((srv) => (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setSelectedService(srv.id)}
                    style={{
                      textAlign: 'left',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: selectedService === srv.id ? '2px solid #7e22ce' : '1px solid #cbd5e1',
                      backgroundColor: selectedService === srv.id ? '#faf5ff' : '#ffffff',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>{srv.icon}</span>
                      <span style={{ fontWeight: 700, fontSize: '0.95rem', color: selectedService === srv.id ? '#581c87' : '#1e293b' }}>
                        {srv.name}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>{srv.note}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Property Type */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: '#1e293b', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                2. Property Type
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.6rem' }}>
                {PROPERTY_TYPES.map((prop) => (
                  <button
                    key={prop.id}
                    type="button"
                    onClick={() => setSelectedProp(prop.id)}
                    style={{
                      padding: '0.7rem',
                      borderRadius: '10px',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      border: selectedProp === prop.id ? '2px solid #06b6d4' : '1px solid #cbd5e1',
                      backgroundColor: selectedProp === prop.id ? '#ecfeff' : '#ffffff',
                      color: selectedProp === prop.id ? '#0891b2' : '#334155',
                      textAlign: 'center',
                    }}
                  >
                    {prop.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Stories & Frequency */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="stories-freq-grid">
              <div>
                <label style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: '#1e293b', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  3. Height / Stories
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {STORIES.map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setSelectedStories(st.id)}
                      style={{
                        padding: '0.65rem 0.9rem',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        border: selectedStories === st.id ? '2px solid #7e22ce' : '1px solid #e2e8f0',
                        backgroundColor: selectedStories === st.id ? '#faf5ff' : '#ffffff',
                        color: selectedStories === st.id ? '#6b21a8' : '#475569',
                        textAlign: 'left',
                      }}
                    >
                      {st.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: '#1e293b', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  4. Frequency
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {FREQUENCIES.map((freq) => (
                    <button
                      key={freq.id}
                      type="button"
                      onClick={() => setSelectedFreq(freq.id)}
                      style={{
                        padding: '0.65rem 0.9rem',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        border: selectedFreq === freq.id ? '2px solid #06b6d4' : '1px solid #e2e8f0',
                        backgroundColor: selectedFreq === freq.id ? '#ecfeff' : '#ffffff',
                        color: selectedFreq === freq.id ? '#0891b2' : '#475569',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <span>{freq.name}</span>
                      {freq.discount < 1 && (
                        <span style={{ fontSize: '0.7rem', backgroundColor: '#00f5d4', color: '#0f172a', padding: '0.1rem 0.4rem', borderRadius: '4px', fontWeight: 800 }}>
                          SAVE
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Postcode Input */}
            <div style={{ marginTop: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', color: '#475569', marginBottom: '0.4rem' }}>
                Enter Your Coventry / West Midlands Postcode (Optional):
              </label>
              <input
                type="text"
                placeholder="e.g. CV1 2WT or CV3 4AB"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1.5px solid #cbd5e1',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
            </div>

          </div>

          {/* Right Result Side */}
          <div style={{
            background: 'linear-gradient(135deg, #3b0764 0%, #581c87 60%, #0f172a 100%)',
            color: '#ffffff',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between',
          }}>
            <div>
              <div style={{ display: 'inline-block', backgroundColor: 'rgba(6, 182, 212, 0.2)', color: '#67e8f9', padding: '0.3rem 0.8rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.2rem' }}>
                Estimated Price Range
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '3.4rem', fontWeight: 900, color: '#00f5d4', fontFamily: 'var(--font-heading)' }}>
                  £{calculatedMin} - £{calculatedMax}
                </span>
                <span style={{ display: 'block', fontSize: '0.88rem', color: '#cbd5e1', marginTop: '0.2rem' }}>
                  {freqObj.name} • {serviceObj.name}
                </span>
              </div>

              {/* Price inclusions list */}
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '1.2rem', marginBottom: '2rem', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.8rem', color: '#67e8f9' }}>
                  What's Included in this Estimate:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.86rem', color: '#f1f5f9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} style={{ color: '#00f5d4' }} /> {serviceObj.note}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} style={{ color: '#00f5d4' }} /> 100% Pure Water Streak-Free Finish
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} style={{ color: '#00f5d4' }} /> Text Reminder Day Before Visit
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} style={{ color: '#00f5d4' }} /> Payment via Cash or BACS Transfer
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a
                href={`https://wa.me/447741073919?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1rem',
                  padding: '0.9rem',
                }}
              >
                <MessageSquare size={18} /> Book This Quote on WhatsApp
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="btn btn-cyan"
                style={{ width: '100%', padding: '0.9rem' }}
              >
                <Calendar size={18} /> Request Formal Booking
              </button>

              <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                <a href="tel:07741073919" style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <PhoneCall size={13} style={{ color: '#00f5d4' }} /> Or call us directly: 07741 073919
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .calc-grid {
            grid-template-columns: 1fr !important;
          }
          .stories-freq-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
