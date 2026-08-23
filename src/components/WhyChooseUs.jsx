import React from 'react';
import { Droplets, Bell, CreditCard, ShieldCheck, Sparkles, Award, Zap, ThumbsUp } from 'lucide-react';

const REASONS = [
  {
    icon: Droplets,
    title: '100% Deionised Pure Water',
    description: 'We purify tap water down to 0 PPM (parts per million) TDS. Water with zero impurities absorbs dirt naturally and dries 100% streak-free.',
  },
  {
    icon: Bell,
    title: 'Day-Before Text Reminders',
    description: 'We automatically text or WhatsApp you the day before every scheduled visit so you can unlock side gates and close windows.',
  },
  {
    icon: CreditCard,
    title: 'Cash or BACS Convenience',
    description: 'No complicated contracts or hassle. Pay easily via online BACS bank transfer, direct contactless, or traditional cash after completion.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Insured & Vetted Staff',
    description: 'Your home is protected by our £5,000,000 public liability insurance. All Kwabs technicians are fully trained, uniformed, and DBS checked.',
  },
  {
    icon: Zap,
    title: 'High Reach Poles (Up to 40ft)',
    description: 'Our carbon-fibre pole systems reach 3rd and 4th story windows and gutters safely from the ground without damaging tiles or landscaping.',
  },
  {
    icon: ThumbsUp,
    title: '100% Satisfaction Guarantee',
    description: 'If you ever feel a window sill or glass pane was missed, contact us within 24 hours and we will return to re-clean it free of charge.',
  },
];

export default function WhyChooseUs({ onOpenBooking }) {
  return (
    <section id="why-us" className="section-padding" style={{
      backgroundColor: '#faf5ff',
      position: 'relative',
    }}>
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-purple" style={{ marginBottom: '0.8rem' }}>
            <Award size={14} /> The Kwabs Advantage
          </div>
          <h2 style={{ fontSize: '2.6rem', color: '#3b0764', marginBottom: '1rem' }}>
            Why Coventry Homeowners & Businesses <span className="text-gradient-purple">Choose Kwabs</span>
          </h2>
          <p style={{ color: '#6b21a8', fontSize: '1.08rem' }}>
            We combine state-of-the-art pure water technology with reliable customer communication to deliver flawless results every single visit.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {REASONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '2.2rem',
                  borderRadius: '20px',
                  border: '1px solid #e9d5ff',
                  boxShadow: '0 10px 30px rgba(126, 34, 206, 0.06)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(126, 34, 206, 0.15)';
                  e.currentTarget.style.borderColor = '#c084fc';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(126, 34, 206, 0.06)';
                  e.currentTarget.style.borderColor = '#e9d5ff';
                }}
              >
                <div style={{
                  backgroundColor: '#f3e8ff',
                  color: '#7e22ce',
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  marginBottom: '1.4rem',
                }}>
                  <Icon size={28} />
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#1e0938', marginBottom: '0.6rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to action bar */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center',
          backgroundColor: '#3b0764',
          color: '#ffffff',
          borderRadius: '24px',
          padding: '3rem 2rem',
          boxShadow: '0 20px 40px rgba(59, 7, 100, 0.25)',
        }}>
          <h3 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '1rem' }}>
            Ready for a Brighter, Cleaner Property?
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto 2rem auto' }}>
            Join hundreds of satisfied customers across Coventry, Bedworth, Nuneaton, and Warwickshire. Get your free instant quote today!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenBooking} className="btn btn-cyan" style={{ padding: '1rem 2rem' }}>
              <Sparkles size={18} /> Request Free Quote
            </button>
            <a href="tel:07741073919" className="btn btn-outline-white" style={{ padding: '1rem 1.8rem' }}>
              Call 07741 073919
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
