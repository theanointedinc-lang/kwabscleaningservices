import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

const FAQS = [
  {
    question: 'How does pure water window cleaning work and why is it superior?',
    answer: 'We purify ordinary tap water through a multi-stage deionisation filtration system that removes 100% of mineral salts and impurities (0 PPM TDS). Pure water acts as a natural solvent that lifts dirt away. When left to dry naturally, it leaves zero spots, streaks, or soap residue behind.',
  },
  {
    question: 'Do you clean window frames, sills, and doors as standard?',
    answer: 'Yes! Unlike traditional window cleaners who only wipe the glass pane, our pure water reach & wash pole system washes the window frames, sills, and front/back doors on every single visit at no extra charge.',
  },
  {
    question: 'How often should I have my windows cleaned?',
    answer: 'Most residential homeowners in Coventry choose our 4-weekly or 8-weekly regular cleaning schedules. Commercial offices and retail shops often select fortnightly or monthly cleans.',
  },
  {
    question: 'What happens if it rains on my scheduled cleaning day?',
    answer: 'Pure rainwater is relatively clean and does not dirty clean glass. However, if rain affects the quality of your clean, our 100% Satisfaction Guarantee covers you — simply contact us within 24 hours and we will re-clean your windows free of charge!',
  },
  {
    question: 'Do I need to be at home when you clean?',
    answer: 'No, as long as we have clear access around your property (such as an unlocked side gate). We text or WhatsApp you the day before every scheduled visit so you know we are coming.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept convenient online BACS bank transfers, direct contactless payments, or cash upon completion of the service.',
  },
  {
    question: 'How does high-reach gutter vacuuming work?',
    answer: 'We use industrial-grade wet & dry gutter vacuums attached to lightweight carbon fibre poles. We inspect your gutters using ground-operated camera monitors and clear all moss, leaves, silt, and downpipe blockages without requiring dangerous ladders on your roof tiles.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="section-padding" style={{
      backgroundColor: '#ffffff',
      position: 'relative',
    }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '0.8rem' }}>
            <HelpCircle size={14} /> Got Questions?
          </div>
          <h2 style={{ fontSize: '2.6rem', color: '#0f172a', marginBottom: '1rem' }}>
            Frequently Asked <span className="text-gradient-purple">Questions</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.08rem' }}>
            Everything you need to know about Kwabs Cleaning Services in Coventry & Warwickshire.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  borderRadius: '16px',
                  border: isOpen ? '1.5px solid #7e22ce' : '1px solid #e2e8f0',
                  backgroundColor: isOpen ? '#faf5ff' : '#ffffff',
                  boxShadow: isOpen ? '0 8px 25px rgba(126, 34, 206, 0.08)' : '0 2px 8px rgba(0,0,0,0.02)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '1.4rem 1.8rem',
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: '1.1rem', color: isOpen ? '#581c87' : '#1e293b' }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      color: isOpen ? '#7e22ce' : '#64748b',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      shrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.8rem 1.5rem 1.8rem',
                    color: '#475569',
                    fontSize: '0.98rem',
                    lineHeight: 1.6,
                    borderTop: '1px solid rgba(126, 34, 206, 0.1)',
                    paddingTop: '1rem',
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
