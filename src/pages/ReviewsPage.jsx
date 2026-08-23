import React from 'react';
import Testimonials from '../components/Testimonials';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import GoogleServiceMap from '../components/GoogleServiceMap';
import { Star, Sparkles, Phone } from 'lucide-react';

export default function ReviewsPage({ onOpenBooking }) {
  return (
    <div style={{ paddingTop: '7rem', backgroundColor: '#ffffff' }}>
      
      {/* Reviews Banner */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(20, 5, 40, 0.88) 0%, rgba(59, 7, 100, 0.85) 50%, rgba(15, 23, 42, 0.94) 100%), url("/hero-bg-services.jpg") center/cover no-repeat',
        color: '#ffffff',
        padding: '5rem 0',
      }}>
        <div className="container">
          <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            <Star size={14} fill="#00f5d4" /> Verified Customer Feedback
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '1.2rem', lineHeight: 1.15, color: '#ffffff' }}>
            <span style={{ color: '#ffffff' }}>Customer</span> <span className="text-gradient">Reviews & Transformations</span>
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.6, marginBottom: '2rem' }}>
            See why Kwabs Cleaning Services is Coventry's #1 rated cleaning provider. Real 5-star testimonials and interactive before & after proof.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenBooking} className="btn btn-cyan" style={{ padding: '0.9rem 1.8rem' }}>
              <Sparkles size={18} /> Book Your Clean
            </button>
            <a href="tel:07741073919" className="btn btn-outline-white" style={{ padding: '0.9rem 1.6rem' }}>
              <Phone size={18} style={{ color: '#00f5d4' }} /> Call 07741 073919
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Interactive Before & After Slider */}
      <BeforeAfterSlider />

      {/* Google Service Areas Map placed right above Footer */}
      <GoogleServiceMap onOpenBooking={onOpenBooking} />
    </div>
  );
}
