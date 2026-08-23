import React, { useState } from 'react';
import { Eye, Sliders, Sparkles } from 'lucide-react';

const COMPARISONS = [
  {
    id: 'windows',
    title: 'Pure Water Window Cleaning',
    subtitle: 'Grime & Hard Water Mineral Stains vs 100% Pure Water Clarity',
    beforeImg: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1000&q=80',
    afterImg: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=80',
    location: 'Stivichall, Coventry',
  },
  {
    id: 'gutters',
    title: 'Gutter High-Reach Clearance',
    subtitle: 'Blocked Moss & Organic Silt vs Completely Vacuumed Channel',
    beforeImg: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1000&q=80',
    afterImg: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
    location: 'Earlsdon, Coventry',
  },
  {
    id: 'conservatory',
    title: 'Conservatory Roof Restoral',
    subtitle: 'Heavy Green Algae Build-Up vs Spotless Sparkling Glass',
    beforeImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    afterImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    location: 'Kenilworth, Warwickshire',
  },
];

export default function BeforeAfterSlider() {
  const [activeItem, setActiveItem] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const current = COMPARISONS[activeItem];

  const handleSliderChange = (e) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section id="gallery" className="section-padding" style={{
      backgroundColor: '#0f172a',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} /> Real Results
          </div>
          <h2 style={{ fontSize: '2.6rem', color: '#ffffff', marginBottom: '1rem' }}>
            Interactive <span className="text-gradient">Before & After</span> Results
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.08rem' }}>
            Drag the slider to see how Kwabs Cleaning Services transforms properties across Coventry & Warwickshire.
          </p>
        </div>

        {/* Tab Selection */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.8rem',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
        }}>
          {COMPARISONS.map((comp, idx) => (
            <button
              key={comp.id}
              onClick={() => {
                setActiveItem(idx);
                setSliderPos(50);
              }}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: '999px',
                fontSize: '0.92rem',
                fontWeight: 700,
                backgroundColor: activeItem === idx ? '#06b6d4' : 'rgba(255, 255, 255, 0.08)',
                color: activeItem === idx ? '#0f172a' : '#cbd5e1',
                border: activeItem === idx ? 'none' : '1px solid rgba(255, 255, 255, 0.15)',
                transition: 'all 0.2s ease',
              }}
            >
              {comp.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Container */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), 0 0 35px rgba(6, 182, 212, 0.2)',
          border: '1.5px solid rgba(255, 255, 255, 0.15)',
          aspectRatio: '16/9',
          minHeight: '380px',
        }}>
          
          {/* AFTER Image (Full Background) */}
          <img
            src={current.afterImg}
            alt="After Clean"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* BEFORE Image (Clipped Left Side) */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${sliderPos}%`,
            height: '100%',
            overflow: 'hidden',
            borderRight: '3px solid #00f5d4',
            boxShadow: '4px 0 15px rgba(0,0,0,0.5)',
          }}>
            <img
              src={current.beforeImg}
              alt="Before Clean"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                maxWidth: 'none',
                height: '100%',
                objectFit: 'cover',
                filter: 'sepia(0.3) contrast(1.1) brightness(0.85)',
              }}
            />

            {/* Before Badge */}
            <span style={{
              position: 'absolute',
              top: '1.2rem',
              left: '1.2rem',
              backgroundColor: 'rgba(239, 68, 68, 0.9)',
              color: '#ffffff',
              padding: '0.35rem 0.85rem',
              borderRadius: '6px',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.05em',
            }}>
              BEFORE
            </span>
          </div>

          {/* After Badge */}
          <span style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            backgroundColor: '#00f5d4',
            color: '#0f172a',
            padding: '0.35rem 0.85rem',
            borderRadius: '6px',
            fontSize: '0.82rem',
            fontWeight: 900,
            letterSpacing: '0.05em',
          }}>
            AFTER (KWABS CLEAN)
          </span>

          {/* Slider Range Control Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={handleSliderChange}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: 'ew-resize',
              zIndex: 30,
            }}
          />

          {/* Slider Drag Handle Knob */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: `${sliderPos}%`,
            transform: 'translate(-50%, -50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: '#00f5d4',
            color: '#0f172a',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            boxShadow: '0 0 20px rgba(0, 245, 212, 0.8), 0 0 10px rgba(0,0,0,0.5)',
            pointerEvents: 'none',
            zIndex: 25,
          }}>
            <Sliders size={20} />
          </div>

          {/* Bottom Info Overlay */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '1.2rem 1.8rem',
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(0,0,0,0) 100%)',
            display: 'flex',
            justify: 'space-between',
            alignItems: 'flex-end',
            zIndex: 10,
          }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#ffffff' }}>{current.title}</div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8' }}>{current.subtitle}</div>
            </div>
            <div style={{ fontSize: '0.82rem', color: '#67e8f9', fontWeight: 700 }}>
              📍 {current.location}
            </div>
          </div>

        </div>

        {/* Drag Instruction */}
        <div style={{ textAlign: 'center', marginTop: '1.2rem', fontSize: '0.9rem', color: '#94a3b8' }}>
          💡 Drag left or right to inspect the transformation
        </div>

      </div>
    </section>
  );
}
