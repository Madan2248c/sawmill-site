'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );

    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.4s ease, box-shadow 0.4s ease',
        background: scrolled ? 'rgba(250,246,240,0.96)' : 'transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(44,26,14,0.08)' : 'none',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        padding: '0 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
        }}
      >
        {/* Logo wordmark */}
        <a
          href="#"
          style={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 1.1,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: '1.05rem',
              fontWeight: 700,
              color: scrolled ? '#2C1A0E' : '#FAF6F0',
              letterSpacing: '0.02em',
              transition: 'color 0.4s',
            }}
          >
            Sri Vijaya Sankara
          </span>
          <span
            style={{
              fontFamily: 'var(--font-lora), serif',
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: scrolled ? '#B18A56' : '#D1B186',
              transition: 'color 0.4s',
            }}
          >
            Saw Mill &amp; Co
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: '2.5rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-lora), serif',
                fontSize: '0.875rem',
                letterSpacing: '0.06em',
                color: scrolled ? '#2C1A0E' : '#FAF6F0',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#B18A56')}
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = scrolled ? '#2C1A0E' : '#FAF6F0')
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919440106929"
            style={{
              fontFamily: 'var(--font-lora), serif',
              fontSize: '0.8rem',
              padding: '0.5rem 1.25rem',
              border: '1.5px solid #B18A56',
              borderRadius: '2px',
              color: scrolled ? '#8D5A3A' : '#D1B186',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = '#8D5A3A';
              el.style.color = '#FAF6F0';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = 'transparent';
              el.style.color = scrolled ? '#8D5A3A' : '#D1B186';
            }}
          >
            Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: scrolled ? '#2C1A0E' : '#FAF6F0',
                borderRadius: '2px',
                transition: 'all 0.3s',
                transform:
                  menuOpen && i === 0
                    ? 'rotate(45deg) translate(5px, 5px)'
                    : menuOpen && i === 1
                      ? 'scaleX(0)'
                      : menuOpen && i === 2
                        ? 'rotate(-45deg) translate(5px, -5px)'
                        : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          maxHeight: menuOpen ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
          background: '#FAF6F0',
        }}
      >
        <div style={{ padding: '1rem 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-lora), serif',
                fontSize: '1rem',
                color: '#2C1A0E',
                textDecoration: 'none',
                padding: '0.75rem 1rem',
                borderBottom: '1px solid #E8D3B1',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919440106929"
            style={{
              fontFamily: 'var(--font-lora), serif',
              fontSize: '0.9rem',
              color: '#8D5A3A',
              textDecoration: 'none',
              padding: '0.75rem 1rem',
              fontWeight: 600,
            }}
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
