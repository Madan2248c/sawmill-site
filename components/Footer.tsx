'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#1A0D05', color: '#FAF6F0', padding: '3rem 2rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(250,246,240,0.08)',
          }}
        >
          {/* Brand */}
          <div>
            <p style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>
              Sri Vijaya Sankara
            </p>
            <p style={{ fontFamily: 'var(--font-lora), serif', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B18A56', marginBottom: '1rem' }}>
              Saw Mill &amp; Co
            </p>
            <p style={{ fontFamily: 'var(--font-lora), serif', fontSize: '0.875rem', color: 'rgba(250,246,240,0.55)', lineHeight: 1.75 }}>
              Quality timber suppliers in Parvathipuram,
              Andhra Pradesh since over a decade.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p style={{ fontFamily: 'var(--font-lora), serif', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B18A56', marginBottom: '1.25rem' }}>
              Quick Links
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: 'var(--font-lora), serif',
                    fontSize: '0.875rem',
                    color: 'rgba(250,246,240,0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#D1B186')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(250,246,240,0.6)')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'var(--font-lora), serif', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B18A56', marginBottom: '1.25rem' }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-lora), serif', fontSize: '0.78rem', color: 'rgba(250,246,240,0.45)', marginBottom: '0.15rem' }}>Jagadeesh</p>
                <a href="tel:+919440106929" style={{ fontFamily: 'var(--font-lora), serif', fontSize: '0.9rem', color: 'rgba(250,246,240,0.75)', textDecoration: 'none' }}>
                  +91 94401 06929
                </a>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-lora), serif', fontSize: '0.78rem', color: 'rgba(250,246,240,0.45)', marginBottom: '0.15rem' }}>Tirupathi Rao</p>
                <a href="tel:+919490462059" style={{ fontFamily: 'var(--font-lora), serif', fontSize: '0.9rem', color: 'rgba(250,246,240,0.75)', textDecoration: 'none' }}>
                  +91 94904 62059
                </a>
              </div>
            </div>
          </div>

          {/* Address + Google Business */}
          <div>
            <p style={{ fontFamily: 'var(--font-lora), serif', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B18A56', marginBottom: '1.25rem' }}>
              Location
            </p>
            <p style={{ fontFamily: 'var(--font-lora), serif', fontSize: '0.875rem', color: 'rgba(250,246,240,0.6)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Durga Temple Street,<br />
              Parvatipuram, Andhra Pradesh 535501
            </p>
            <a
              href="https://share.google/mYlvkh89Q8hhLTqmh"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontFamily: 'var(--font-lora), serif', fontSize: '0.8rem',
                color: '#B18A56', textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#D1B186')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#B18A56')}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Google Business Profile
            </a>
          </div>
        </div>

        <div
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p style={{ fontFamily: 'var(--font-lora), serif', fontSize: '0.78rem', color: 'rgba(250,246,240,0.35)' }}>
            © {year} Sri Vijaya Sankara Saw Mill &amp; Co. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-lora), serif', fontSize: '0.75rem', color: 'rgba(250,246,240,0.25)' }}>
            GSTIN: 37ABLPB6785F1ZE
          </p>
        </div>
      </div>
    </footer>
  );
}
