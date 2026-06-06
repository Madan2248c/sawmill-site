'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
      </svg>
    ),
    title: 'Quality Assured',
    body: 'Every plank and log is inspected before supply. We ensure consistent quality that builders and craftsmen can rely on.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    title: 'Fast Turnaround',
    body: 'Custom cuts and bulk orders handled the same day or next day. We respect your project timelines and keep jobs moving.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'GST Registered',
    body: 'Fully compliant and GST registered business. Get proper invoices for all your purchases.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Family Business',
    body: 'A family-run saw mill serving Parvathipuram for over 10 years — you deal directly with the owners, not a middleman.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Competitive Pricing',
    body: 'Fair wholesale and retail pricing for individuals, contractors, and traders alike.',
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          scrollTrigger: { trigger: headRef.current, start: 'top 85%' },
        }
      );

      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll('.why-item');
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
          }
        );
      }

      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.94 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: imgRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      style={{
        background: '#F0E8DC',
        padding: 'clamp(5rem, 10vw, 8rem) 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '3.5rem', opacity: 0 }}>
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
            Why Choose Us
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#2C1A0E',
              lineHeight: 1.2,
            }}
          >
            The Trusted Choice for Timber
            <br />
            <span style={{ color: '#8D5A3A', fontStyle: 'italic' }}>in Andhra Pradesh</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div
            ref={gridRef}
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}
          >
            <div className="contents">
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  className={`why-item col-span-6 sm:col-span-3 ${i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: '#FAF6F0',
                    borderRadius: '4px',
                    border: '1px solid #E8D3B1',
                    opacity: 0,
                    transition: 'box-shadow 0.3s, transform 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 6px 24px rgba(141,90,58,0.12)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ color: '#8D5A3A', flexShrink: 0, marginTop: '2px' }}>{r.icon}</div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-playfair), Georgia, serif',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#2C1A0E',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {r.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-lora), serif',
                        fontSize: '0.875rem',
                        color: '#5A3A24',
                        lineHeight: 1.75,
                      }}
                    >
                      {r.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured image */}
          <div
            ref={imgRef}
            style={{
              gridColumn: '1 / -1',
              borderRadius: '4px',
              overflow: 'hidden',
              height: '320px',
              position: 'relative',
              opacity: 0,
              marginTop: '1rem',
            }}
          >
            <Image
              src="/images/IMG_20260606_170736.jpg"
              alt="Sri Vijaya Sankara Saw Mill & Co timber yard in Parvathipuram, Andhra Pradesh"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
              sizes="100vw"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(44,26,14,0.7) 0%, transparent 60%)',
                display: 'flex',
                alignItems: 'center',
                padding: '3rem',
              }}
            >
              <blockquote>
                <p
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                    fontStyle: 'italic',
                    color: '#FAF6F0',
                    lineHeight: 1.5,
                    maxWidth: '480px',
                  }}
                >
                  &ldquo;Quality wood, honest dealing — that&apos;s how we&apos;ve built our name
                  in Parvathipuram.&rdquo;
                </p>
                <cite
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-lora), serif',
                    fontSize: '0.82rem',
                    color: '#D1B186',
                    letterSpacing: '0.1em',
                    marginTop: '1rem',
                  }}
                >
                  — Boddu Tirupathi Rao, Proprietor
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
