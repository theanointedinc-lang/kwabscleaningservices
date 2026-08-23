import React from 'react';
import { Star, Quote, CheckCircle2, User } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Sarah Jenkins',
    location: 'Earlsdon, Coventry',
    service: 'Window & Gutter Cleaning',
    rating: 5,
    date: 'Verified Review',
    comment: 'Kwabs Cleaning has been maintaining our 4-bedroom detached home for over 8 months now. The pure water pole system leaves the windows sparkling clean with zero water marks. They always text the day before visit which is brilliant so I remember to open the side gate!',
  },
  {
    name: 'David MacIntyre',
    location: 'Finham, Coventry',
    service: 'Conservatory Roof Cleaning',
    rating: 5,
    date: 'Verified Review',
    comment: 'Our conservatory roof was covered in heavy green moss and lichen that we couldn’t reach. Kwabs arrived on time, used specialized treatments and high-reach poles, and turned it brand new again! Exceptional work and very professional.',
  },
  {
    name: 'Marcus & Elena Vance',
    location: 'Kenilworth, Warwickshire',
    service: 'Fascia & Soffit Cleaning',
    rating: 5,
    date: 'Verified Review',
    comment: 'Transformed the curb appeal of our property completely. The white UPVC fascias were dark and stained from road film, but now look brand new. Very reasonable pricing and easy online BACS payment.',
  },
  {
    name: 'Coventry Business Hub (Office Manager)',
    location: 'Coventry City Centre',
    service: 'Commercial Office Cleaning',
    rating: 5,
    date: 'Verified Review',
    comment: 'Reliable out-of-hours commercial office cleaning. Desks, meeting rooms, and washrooms are kept spotless for our staff every single week. Highly recommend Kwabs for any commercial workspace in West Midlands.',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding" style={{
      backgroundColor: '#f8fafc',
      position: 'relative',
    }}>
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <div className="badge badge-purple" style={{ marginBottom: '0.8rem' }}>
            <Star size={14} fill="#7e22ce" /> Customer Feedback
          </div>
          <h2 style={{ fontSize: '2.6rem', color: '#0f172a', marginBottom: '1rem' }}>
            What Our <span className="text-gradient-purple">Coventry Clients</span> Say
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.08rem' }}>
            Read real reviews from homeowners and business managers who trust Kwabs Cleaning Services for their property maintenance.
          </p>
        </div>

        {/* Rating Overview Pill */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          gap: '1.5rem',
          backgroundColor: '#ffffff',
          borderRadius: '999px',
          padding: '0.8rem 2rem',
          maxWidth: '500px',
          margin: '0 auto 3rem auto',
          boxShadow: '0 4px 20px rgba(59, 7, 100, 0.06)',
          border: '1px solid #e2e8f0',
        }}>
          <div style={{ display: 'flex', gap: '0.2rem' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>
          <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#1e293b' }}>
            5.0 / 5.0 Rating
          </span>
          <span style={{ fontSize: '0.88rem', color: '#64748b' }}>
            (100+ Happy Clients)
          </span>
        </div>

        {/* Review Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                padding: '2.2rem',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                {/* Quote Icon watermark */}
                <Quote size={40} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.08, color: '#7e22ce' }} />

                {/* Stars */}
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={17} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                {/* Comment */}
                <p style={{ color: '#334155', fontSize: '0.96rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{rev.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{
                  backgroundColor: '#faf5ff',
                  color: '#7e22ce',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  fontWeight: 800,
                  fontSize: '1rem',
                  border: '1px solid #c084fc',
                }}>
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.98rem' }}>{rev.name}</div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span>📍 {rev.location}</span> • <span style={{ color: '#0891b2', fontWeight: 600 }}>{rev.service}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
