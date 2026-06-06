'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Curtain reveal
      tl.fromTo(overlayRef.current, { scaleY: 1 }, { scaleY: 0, duration: 1.2, ease: 'power4.inOut', transformOrigin: 'top' })
        .fromTo(taglineRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
        .fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.4')
        .fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.2');

      // Scroll indicator bounce
      gsap.to(scrollRef.current, {
        y: 8,
        duration: 1.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 2.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      style={{
        position: 'relative',
        height: '100dvh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background image */}
      <Image
        src="/hero_image.jpg"
        alt="Sri Vijaya Sankara Saw Mill — quality timber from the forest"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(20,10,4,0.78) 0%, rgba(44,26,14,0.55) 55%, rgba(10,20,10,0.35) 100%)',
          zIndex: 1,
        }}
      />

      {/* Curtain overlay for reveal animation */}
      <div
        ref={overlayRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: '#2C1A0E',
          zIndex: 3,
          transformOrigin: 'top',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: '1fr',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <div>
          <p
            ref={taglineRef}
            style={{
              fontFamily: 'var(--font-lora), serif',
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#D1B186',
              marginBottom: '1rem',
              opacity: 0,
            }}
          >
            Parvathipuram, Andhra Pradesh
          </p>

          <h1
            ref={titleRef}
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              fontWeight: 700,
              color: '#FAF6F0',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              opacity: 0,
            }}
          >
            Sri Vijaya Sankara
            <br />
            <span style={{ color: '#D1B186', fontStyle: 'italic' }}>Saw Mill &amp; Co</span>
          </h1>

          <p
            ref={subtitleRef}
            style={{
              fontFamily: 'var(--font-lora), serif',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: 'rgba(250,246,240,0.78)',
              lineHeight: 1.8,
              maxWidth: '480px',
              marginBottom: '2.5rem',
              opacity: 0,
            }}
          >
            Timber planks, custom-cut wood &amp; wholesale supply — trusted by
            builders, contractors and furniture makers across Parvathipuram,
            Vizianagaram, Visakhapatnam &amp; Odisha for over a decade.
          </p>

          <div
            ref={ctaRef}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', opacity: 0 }}
          >
            <a
              href="tel:+919440106929"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 2rem',
                background: '#8D5A3A',
                color: '#FAF6F0',
                textDecoration: 'none',
                fontFamily: 'var(--font-lora), serif',
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                borderRadius: '2px',
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#6B4229')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#8D5A3A')}
            >
              <PhoneIcon /> Call Us
            </a>
            <a
              href="https://wa.me/919440106929"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 2rem',
                background: 'transparent',
                color: '#FAF6F0',
                textDecoration: 'none',
                fontFamily: 'var(--font-lora), serif',
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                borderRadius: '2px',
                border: '1.5px solid rgba(250,246,240,0.4)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D1B186';
                e.currentTarget.style.color = '#D1B186';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(250,246,240,0.4)';
                e.currentTarget.style.color = '#FAF6F0';
              }}
            >
              <WhatsappIcon /> WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-lora), serif',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(250,246,240,0.5)',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, rgba(250,246,240,0.5), transparent)',
          }}
        />
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 .02h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
