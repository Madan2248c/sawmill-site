'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const photos = [
  { src: '/images/IMG_20260606_170731.jpg', alt: 'Timber logs stored at Sri Vijaya Sankara Saw Mill yard, Parvathipuram Andhra Pradesh', aspectRatio: '4/3' },
  { src: '/images/IMG_20260606_170814.jpg', alt: 'Skilled craftsman handling timber planks at the saw mill in Parvathipuram', aspectRatio: '3/4' },
  { src: '/images/IMG_20260606_170818.jpg', alt: 'Saw mill cutting tracks and timber processing facility, Parvathipuram Andhra Pradesh', aspectRatio: '3/4' },
  { src: '/images/IMG_20260606_170852.jpg', alt: 'Industrial saw mill machinery for precision wood cutting in Parvathipuram', aspectRatio: '3/4' },
  { src: '/images/IMG_20260606_170859.jpg', alt: 'Log storage yard under shed at Sri Vijaya Sankara Saw Mill, Parvathipuram', aspectRatio: '3/4' },
  { src: '/images/IMG_20260606_170902.jpg', alt: 'Stacked quality timber planks and logs ready for supply in Parvathipuram', aspectRatio: '3/4' },
  { src: '/images/IMG_20260606_170913.jpg', alt: 'Open timber yard at Sri Vijaya Sankara Saw Mill with Parvathipuram city backdrop', aspectRatio: '3/4' },
  { src: '/images/IMG_20260606_170929.jpg', alt: 'Wide view of Sri Vijaya Sankara Saw Mill & Co premises, Andhra Pradesh', aspectRatio: '4/5' },
  { src: '/images/IMG_20260606_170931.jpg', alt: 'Large timber log at Sri Vijaya Sankara Saw Mill — wholesale timber suppliers Parvathipuram', aspectRatio: '3/4' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fade in
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
            start: 'top 85%',
          },
        }
      );

      // Horizontal scroll
      const track = trackRef.current;
      const wrapper = wrapperRef.current;
      if (!track || !wrapper) return;

      const totalScrollWidth = track.scrollWidth - wrapper.clientWidth;

      gsap.to(track, {
        x: -totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: () => `+=${totalScrollWidth + 300}`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      style={{ background: '#FAF6F0' }}
    >
      {/* Static heading above pinned area */}
      <div
        ref={headRef}
        style={{
          textAlign: 'center',
          padding: 'clamp(4rem, 8vw, 6rem) 2rem 2rem',
          opacity: 0,
        }}
      >
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
          A Glimpse Inside
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
          Our Mill &amp; Yard
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-lora), serif',
            fontSize: '0.875rem',
            color: '#B18A56',
            marginTop: '0.75rem',
            letterSpacing: '0.05em',
          }}
        >
          Scroll to explore →
        </p>
      </div>

      {/* Pinned horizontal scroll container */}
      <div
        ref={wrapperRef}
        style={{
          overflow: 'hidden',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          ref={trackRef}
          className="gallery-track"
          style={{ padding: '0 2rem' }}
        >
          {photos.map((photo) => (
            <div
              key={photo.src}
              style={{
                flexShrink: 0,
                width: photo.aspectRatio === '4/3' ? '480px' : '300px',
                height: '420px',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(44,26,14,0.12)',
                position: 'relative',
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                sizes="(max-width: 768px) 80vw, 360px"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
