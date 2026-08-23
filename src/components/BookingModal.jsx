import React, { useState } from 'react';
import { X, Sparkles, Phone, MessageSquare, CheckCircle2, Calendar, MapPin, User, Mail, Building } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: 'Window Cleaning',
    propertyType: 'Semi-Detached',
    frequency: 'Every 4 Weeks',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Kwabs Cleaning Services! I'd like to book a service:\n` +
      `• Name: ${formData.name || 'Not provided'}\n` +
      `• Phone: ${formData.phone || 'Not provided'}\n` +
      `• Email: ${formData.email || 'Not provided'}\n` +
      `• Address/Postcode: ${formData.address || 'Coventry'}\n` +
      `• Service: ${formData.service}\n` +
      `• Property: ${formData.propertyType}\n` +
      `• Frequency: ${formData.frequency}\n` +
      `• Notes: ${formData.notes || 'None'}`
    );
    window.open(`https://wa.me/447741073919?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '1.5rem',
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        maxWidth: '560px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
        border: '1.5px solid #c084fc',
        position: 'relative',
      }}>
        
        {/* Header */}
        <div style={{
          backgroundColor: '#3b0764',
          color: '#ffffff',
          padding: '1.8rem 2rem',
          borderTopLeftRadius: '22px',
          borderTopRightRadius: '22px',
          position: 'relative',
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.2rem',
              right: '1.2rem',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={20} />
          </button>

          <div className="badge badge-cyan" style={{ marginBottom: '0.6rem' }}>
            <Sparkles size={13} /> Quick Online Booking
          </div>
          <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.3rem' }}>
            Get Your Free Quote
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.88rem' }}>
            Fill out your details below for instant booking via WhatsApp or phone.
          </p>
        </div>

        {/* Content Body */}
        <div style={{ padding: '2rem' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{
                backgroundColor: '#ecfdf5',
                color: '#059669',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                margin: '0 auto 1.2rem auto',
              }}>
                <CheckCircle2 size={36} />
              </div>
              <h4 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '0.5rem' }}>
                Booking Request Prepared!
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Your request has been redirected to WhatsApp or our team. We will confirm your appointment shortly!
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn btn-purple"
                style={{ width: '100%' }}
              >
                Close Modal
              </button>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppBooking} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Smith"
                  value={formData.name}
                  onChange={handleChange}
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="modal-grid">
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="07700 900000"
                    value={formData.phone}
                    onChange={handleChange}
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

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                    Postcode / Area *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="e.g. CV3 4AB"
                    value={formData.address}
                    onChange={handleChange}
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

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.95rem',
                    outline: 'none',
                    backgroundColor: '#ffffff',
                  }}
                >
                  <option value="Window Cleaning">Window Cleaning (Pure Water Pole)</option>
                  <option value="Gutter Cleaning">Gutter Clearance (Vacuum)</option>
                  <option value="Conservatory Cleaning">Conservatory Roof Restoral</option>
                  <option value="Fascia Cleaning">Fascia & Soffit Washing</option>
                  <option value="Office Cleaning">Commercial Office Cleaning</option>
                  <option value="House Cleaning">House & Domestic Deep Clean</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  placeholder="Tell us about your property or preferred appointment dates..."
                  value={formData.notes}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.5rem' }}>
                <button
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: '#25D366',
                    color: '#ffffff',
                    padding: '0.9rem',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                  }}
                >
                  <MessageSquare size={19} /> Book Immediately via WhatsApp
                </button>

                <a
                  href="tel:07741073919"
                  className="btn btn-purple"
                  style={{ padding: '0.85rem', textAlign: 'center' }}
                >
                  <Phone size={18} /> Or Call Us: 07741 073919
                </a>
              </div>

            </form>
          )}
        </div>

      </div>

      <style>{`
        @media (max-width: 576px) {
          .modal-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
