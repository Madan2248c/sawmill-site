'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 36, height: 36 }}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 3H8l-2 4h12l-2-4z" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
    title: 'Timber Planks',
    description:
      'Premium quality timber planks in a range of sizes for construction, roofing, and structural work. Sourced from quality logs and precision-cut.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 36, height: 36 }}>
        <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
    title: 'Custom Cutting',
    description:
      'Logs and planks cut to your exact specifications. Our precision saw machinery handles any dimension — from thin veneers to heavy structural beams.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 36, height: 36 }}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    title: 'Furniture Wood',
    description:
      'Seasoned, kiln-dried wood ideal for furniture manufacturing. Smooth finish, minimal warping — trusted by carpenters and furniture makers.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 36, height: 36 }}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 10h.01M12 10h.01M17 10h.01" />
      </svg>
    ),
    title: 'Wholesale Supply',
    description:
      'Bulk timber for builders, contractors and timber traders across Parvathipuram, Vizianagaram, Visakhapatnam and into Odisha. Competitive pricing with GST invoicing.',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headRef.current,
            start: 'top 82%',
          },
        }
      );

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.service-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        background: '#2C1A0E',
        padding: 'clamp(5rem, 10vw, 8rem) 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Heading */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '4rem', opacity: 0 }}>
          <p
            style={{
              fontFamily: 'var(--font-lora), serif',
              fontSize: '0.75rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#B18A56',
              marginBottom: '1rem',
            }}
          >
            Timber &amp; Wood Supply
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#FAF6F0',
              lineHeight: 1.2,
            }}
          >
            Timber &amp; Wood Services
            <br />
            <span style={{ color: '#D1B186', fontStyle: 'italic', fontSize: '0.75em' }}>
              in Parvathipuram, Andhra Pradesh
            </span>
          </h2>
          <div
            style={{
              width: '48px',
              height: '2px',
              background: '#B18A56',
              margin: '1.5rem auto 0',
            }}
          />
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {services.map((svc) => (
            <div
              key={svc.title}
              className="service-card"
              style={{
                background: 'rgba(250,246,240,0.04)',
                border: '1px solid rgba(177,138,86,0.2)',
                borderRadius: '4px',
                padding: '2.5rem 2rem',
                opacity: 0,
                transition: 'background 0.3s, border-color 0.3s, transform 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = 'rgba(177,138,86,0.1)';
                el.style.borderColor = '#B18A56';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = 'rgba(250,246,240,0.04)';
                el.style.borderColor = 'rgba(177,138,86,0.2)';
                el.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ color: '#B18A56', marginBottom: '1.5rem' }}>{svc.icon}</div>
              <h3
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#FAF6F0',
                  marginBottom: '0.75rem',
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-lora), serif',
                  fontSize: '0.92rem',
                  color: 'rgba(250,246,240,0.65)',
                  lineHeight: 1.8,
                }}
              >
                {svc.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          style={{
            marginTop: '3.5rem',
            textAlign: 'center',
            padding: '2.5rem',
            border: '1px solid rgba(177,138,86,0.25)',
            borderRadius: '4px',
            background: 'rgba(250,246,240,0.03)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-lora), serif',
              fontSize: '1rem',
              color: 'rgba(250,246,240,0.7)',
              marginBottom: '1.5rem',
            }}
          >
            Planning a construction, renovation or furniture project in Andhra Pradesh? Get a same-day quote.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:+919440106929"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.75rem',
                background: '#8D5A3A',
                color: '#FAF6F0',
                textDecoration: 'none',
                fontFamily: 'var(--font-lora), serif',
                fontSize: '0.875rem',
                borderRadius: '2px',
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#6B4229')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#8D5A3A')}
            >
              Jagadeesh — 94401 06929
            </a>
            <a
              href="tel:+919490462059"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.75rem',
                background: 'transparent',
                color: '#D1B186',
                textDecoration: 'none',
                fontFamily: 'var(--font-lora), serif',
                fontSize: '0.875rem',
                borderRadius: '2px',
                border: '1.5px solid rgba(177,138,86,0.4)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#B18A56';
                e.currentTarget.style.color = '#FAF6F0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(177,138,86,0.4)';
                e.currentTarget.style.color = '#D1B186';
              }}
            >
              Tirupathi Rao — 94904 62059
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
