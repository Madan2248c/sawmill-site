'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contacts = [
  {
    name: 'Boddu Jagadeesh',
    role: 'Manager',
    phone: '+919440106929',
    display: '94401 06929',
    whatsapp: 'https://wa.me/919440106929?text=Hi%2C+I+saw+your+website.+Can+I+get+more+information%3F',
  },
  {
    name: 'Boddu Tirupathi Rao',
    role: 'Proprietor',
    phone: '+919490462059',
    display: '94904 62059',
    whatsapp: 'https://wa.me/919490462059?text=Hi%2C+I+saw+your+website.+Can+I+get+more+information%3F',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9,
        scrollTrigger: { trigger: headRef.current, start: 'top 85%' },
      });

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.contact-card');
        gsap.fromTo(cards, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
        });
      }

      gsap.fromTo(infoRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: infoRef.current, start: 'top 82%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{ background: '#FAF6F0', padding: 'clamp(5rem, 10vw, 8rem) 2rem' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Heading */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '3.5rem', opacity: 0 }}>
          <p style={{
            fontFamily: 'var(--font-lora), serif',
            fontSize: '0.75rem', letterSpacing: '0.28em',
            textTransform: 'uppercase', color: '#B18A56', marginBottom: '1rem',
          }}>
            Get In Touch
          </p>
          <h2 style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700,
            color: '#2C1A0E', lineHeight: 1.2,
          }}>
            Contact Us
          </h2>
          <div style={{ width: '48px', height: '2px', background: '#B18A56', margin: '1.5rem auto 0' }} />
        </div>

        {/* Contact cards */}
        <div ref={cardsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {contacts.map((c) => (
            <div
              key={c.phone}
              className="contact-card"
              style={{
                background: '#fff',
                border: '1px solid #E8D3B1',
                borderRadius: '6px',
                padding: '2.5rem 2rem',
                opacity: 0,
                boxShadow: '0 2px 16px rgba(44,26,14,0.06)',
                textAlign: 'center',
              }}
            >
              {/* Avatar */}
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: '#F0E8DC', border: '2px solid #D1B186',
                margin: '0 auto 1.25rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#8D5A3A" strokeWidth="1.5" style={{ width: 28, height: 28 }}>
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: '1.2rem', fontWeight: 600, color: '#2C1A0E', marginBottom: '0.25rem',
              }}>
                {c.name}
              </h3>
              <p style={{
                fontFamily: 'var(--font-lora), serif',
                fontSize: '0.78rem', color: '#B18A56',
                letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem',
              }}>
                {c.role}
              </p>

              <p style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: '1.3rem', fontWeight: 700, color: '#8D5A3A', marginBottom: '1.5rem',
              }}>
                {c.display}
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                <a
                  href={`tel:${c.phone}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.65rem 1.25rem',
                    background: '#8D5A3A', color: '#FAF6F0',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-lora), serif', fontSize: '0.82rem',
                    borderRadius: '2px', transition: 'background 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#6B4229')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#8D5A3A')}
                >
                  <PhoneIcon /> Call
                </a>
                <a
                  href={c.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.65rem 1.25rem',
                    background: '#25D366', color: '#fff',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-lora), serif', fontSize: '0.82rem',
                    borderRadius: '2px', transition: 'background 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#1da851')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#25D366')}
                >
                  <WaIcon /> WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Info + Map */}
        <div
          ref={infoRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            opacity: 0,
          }}
        >
          {/* Address & links */}
          <div style={{ padding: '2.5rem', background: '#2C1A0E', borderRadius: '6px', color: '#FAF6F0' }}>
            <h3 style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: '1.3rem', fontWeight: 600, marginBottom: '1.5rem',
            }}>
              Find Us
            </h3>

            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#B18A56" strokeWidth="1.5" style={{ width: 20, height: 20, flexShrink: 0, marginTop: 2 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p style={{ fontFamily: 'var(--font-lora), serif', fontSize: '0.92rem', lineHeight: 1.7, color: 'rgba(250,246,240,0.8)' }}>
                  Durga Temple Street,<br />
                  Parvatipuram, Andhra Pradesh 535501
                </p>
                <p style={{ fontFamily: 'var(--font-lora), serif', fontSize: '0.78rem', color: '#B18A56', marginTop: '0.25rem' }}>
                  Plus Code: QCQJ+4F
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '2rem' }}>
              <a
                href="https://share.google/mYlvkh89Q8hhLTqmh"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  padding: '0.7rem 1.25rem',
                  background: 'rgba(177,138,86,0.15)',
                  border: '1px solid rgba(177,138,86,0.3)',
                  color: '#D1B186', textDecoration: 'none',
                  fontFamily: 'var(--font-lora), serif', fontSize: '0.85rem',
                  borderRadius: '2px', transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(177,138,86,0.25)';
                  e.currentTarget.style.color = '#FAF6F0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(177,138,86,0.15)';
                  e.currentTarget.style.color = '#D1B186';
                }}
              >
                <MapIcon /> View Google Business Profile
              </a>

              <a
                href="https://maps.google.com/?q=Sri+Vijaya+Sankara+Saw+Mill+Co+Parvatipuram+Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  padding: '0.7rem 1.25rem',
                  background: 'transparent',
                  border: '1px solid rgba(250,246,240,0.15)',
                  color: 'rgba(250,246,240,0.65)', textDecoration: 'none',
                  fontFamily: 'var(--font-lora), serif', fontSize: '0.85rem',
                  borderRadius: '2px', transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(250,246,240,0.4)';
                  e.currentTarget.style.color = '#FAF6F0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(250,246,240,0.15)';
                  e.currentTarget.style.color = 'rgba(250,246,240,0.65)';
                }}
              >
                <DirectionsIcon /> Get Directions
              </a>
            </div>

            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(250,246,240,0.1)' }}>
              <p style={{ fontFamily: 'var(--font-lora), serif', fontSize: '0.75rem', color: '#B18A56', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Business Hours
              </p>
              <p style={{ fontFamily: 'var(--font-lora), serif', fontSize: '0.875rem', color: 'rgba(250,246,240,0.7)' }}>
                Monday – Saturday: 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          {/* Google Maps iframe */}
          <div style={{ borderRadius: '6px', overflow: 'hidden', minHeight: '380px', border: '1px solid #E8D3B1' }}>
            <iframe
              title="Sri Vijaya Sankara Saw Mill location"
              src="https://maps.google.com/maps?q=Sri+Vijaya+Sankara+Saw+Mill+Parvatipuram+Andhra+Pradesh&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px', display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 .02h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function WaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
  );
}

function DirectionsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3,11 22,2 13,21 11,13" />
    </svg>
  );
}
