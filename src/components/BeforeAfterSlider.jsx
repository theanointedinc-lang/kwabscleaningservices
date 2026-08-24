import React, { useState } from 'react';
import { Sliders, Sparkles } from 'lucide-react';

const COMPARISONS = [
  {
    id: 'windows',
    title: 'Pure Water Window Cleaning',
    subtitle: 'Untidy Grimy Glass & Algae Stains vs 100% Pure Water Clarity',
    beforeImg: '/dirty-window-before.jpg',
    afterImg: '/clean-window-after.jpg',
    location: 'Stivichall, Coventry',
  },
  {
    id: 'gutters',
    title: 'Gutter High-Reach Clearance',
    subtitle: 'Dirty Clogged Moss & Leaf Silt vs Pristine Vacuumed Channel',
    beforeImg: '/dirty-gutter-before.jpg',
    afterImg: '/clean-gutter-after.jpg',
    location: 'Earlsdon, Coventry',
  },
  {
    id: 'conservatory',
    title: 'Conservatory Roof Restoral',
    subtitle: 'Untidy Heavy Moss & Green Build-Up vs Spotless Crystal Roof',
    beforeImg: '/dirty-conservatory-before.jpg',
    afterImg: '/clean-conservatory-after.jpg',
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
            Drag the slider to inspect the dirty & untidy before state versus our clean & spotless finish across Coventry & Warwickshire.
          </p>
        </div>

        {/* Tab Selection */}
        <div style={{
          display: 'flex',
          justify: 'center',
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
          minHeight: '320px',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}>
          
          {/* AFTER Image (Clean & Tidy - Bottom Layer) */}
          <img
            src={current.afterImg}
            alt="After Clean (Clean & Tidy)"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* BEFORE Image (Dirty & Untidy - Clipped Top Layer) */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
            WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
            zIndex: 10,
          }}>
            <img
              src={current.beforeImg}
              alt="Before Clean (Dirty & Untidy)"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {/* Divider Line */}
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              width: '3px',
              backgroundColor: '#00f5d4',
              boxShadow: '0 0 12px rgba(0, 245, 212, 0.8)',
            }} />
          </div>

          {/* Before Badge (Dirty & Untidy) */}
          <span style={{
            position: 'absolute',
            top: '1.2rem',
            left: '1.2rem',
            backgroundColor: 'rgba(220, 38, 38, 0.95)',
            color: '#ffffff',
            padding: '0.4rem 0.9rem',
            borderRadius: '8px',
            fontSize: '0.82rem',
            fontWeight: 900,
            letterSpacing: '0.06em',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            zIndex: 20,
          }}>
            BEFORE (DIRTY & UNTIDY)
          </span>

          {/* After Badge (Clean & Tidy) */}
          <span style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            backgroundColor: '#00f5d4',
            color: '#0f172a',
            padding: '0.4rem 0.9rem',
            borderRadius: '8px',
            fontSize: '0.82rem',
            fontWeight: 900,
            letterSpacing: '0.06em',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            zIndex: 20,
          }}>
            AFTER (CLEAN & TIDY)
          </span>

          {/* Slider Range Control Input for Dragging */}
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
              zIndex: 35,
              margin: 0,
            }}
            aria-label="Before and after comparison slider"
          />

          {/* Slider Drag Handle Knob */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: `${sliderPos}%`,
            transform: 'translate(-50%, -50%)',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: '#00f5d4',
            color: '#0f172a',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            boxShadow: '0 0 25px rgba(0, 245, 212, 0.9), 0 0 10px rgba(0,0,0,0.6)',
            pointerEvents: 'none',
            zIndex: 30,
          }}>
            <Sliders size={22} />
          </div>

          {/* Bottom Info Overlay */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '1.2rem 1.8rem',
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(0,0,0,0) 100%)',
            display: 'flex',
            justify: 'space-between',
            alignItems: 'flex-end',
            zIndex: 20,
          }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#ffffff' }}>{current.title}</div>
              <div style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>{current.subtitle}</div>
            </div>
            <div style={{ fontSize: '0.82rem', color: '#67e8f9', fontWeight: 700 }}>
              📍 {current.location}
            </div>
          </div>

        </div>

        {/* Drag Instruction */}
        <div style={{ textAlign: 'center', marginTop: '1.2rem', fontSize: '0.92rem', color: '#94a3b8' }}>
          💡 Drag left or right to inspect dirty before vs clean after
        </div>

      </div>
    </section>
  );
}
