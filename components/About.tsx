'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        img1Ref.current,
        { opacity: 0, scale: 0.92, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img1Ref.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        img2Ref.current,
        { opacity: 0, scale: 0.92, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.1,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img1Ref.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        background: '#FAF6F0',
        padding: 'clamp(5rem, 10vw, 8rem) 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* Text */}
        <div ref={textRef} style={{ opacity: 0 }}>
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
            Who We Are
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#2C1A0E',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}
          >
            Rooted in Craft,
            <br />
            <span style={{ color: '#8D5A3A', fontStyle: 'italic' }}>Trusted in Timber</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-lora), serif',
              fontSize: '1rem',
              color: '#5A3A24',
              lineHeight: 1.9,
              marginBottom: '1.25rem',
            }}
          >
            For over a decade, Sri Vijaya Sankara Saw Mill &amp; Co has been Parvathipuram&apos;s
            trusted source for quality timber. Located on Durga Temple Street, Parvatipuram,
            we supply premium timber planks, custom-cut wood, furniture-grade seasoned wood and
            wholesale timber to builders, contractors, and craftsmen across Vizianagaram,
            Visakhapatnam, Andhra Pradesh and into Odisha.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-lora), serif',
              fontSize: '1rem',
              color: '#5A3A24',
              lineHeight: 1.9,
              marginBottom: '2rem',
            }}
          >
            Our saw mill handles logs of every size with precision cutting machinery — delivering
            timber to your exact dimensions, whether for house construction, commercial builds,
            furniture manufacturing or industrial use. Every order comes with a proper GST invoice.
          </p>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '2.5rem' }}>
            {[
              { value: '10+', label: 'Years of Service' },
              { value: '500+', label: 'Happy Customers' },
              { value: '4', label: 'Districts Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: '#8D5A3A',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-lora), serif',
                    fontSize: '0.75rem',
                    color: '#B18A56',
                    marginTop: '0.25rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Images */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto auto',
            gap: '1rem',
          }}
        >
          <div
            ref={img1Ref}
            style={{
              gridColumn: '1 / 3',
              borderRadius: '4px',
              overflow: 'hidden',
              aspectRatio: '16/10',
              opacity: 0,
            }}
          >
            <Image
              src="/images/IMG_20260606_170818.jpg"
              alt="Sri Vijaya Sankara Saw Mill interior with timber cutting machinery, Parvathipuram Andhra Pradesh"
              width={700}
              height={440}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div
            ref={img2Ref}
            style={{
              borderRadius: '4px',
              overflow: 'hidden',
              aspectRatio: '3/4',
              opacity: 0,
            }}
          >
            <Image
              src="/images/IMG_20260606_170814.jpg"
              alt="Timber worker handling wood planks at Sri Vijaya Sankara Saw Mill, Parvathipuram"
              width={340}
              height={450}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div
            style={{
              borderRadius: '4px',
              overflow: 'hidden',
              aspectRatio: '3/4',
            }}
          >
            <Image
              src="/images/IMG_20260606_170803.jpg"
              alt="Sri Vijaya Sankara Saw Mill & Co storefront on Durga Temple Street, Parvathipuram"
              width={340}
              height={450}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
