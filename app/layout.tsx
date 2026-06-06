import type { Metadata } from 'next';
import { Playfair_Display, Lora } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const SITE_URL = 'https://srivijayasankarasawmill.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Sri Vijaya Sankara Saw Mill & Co | Timber Suppliers in Parvathipuram, Andhra Pradesh',
    template: '%s | Sri Vijaya Sankara Saw Mill & Co',
  },
  description:
    'Sri Vijaya Sankara Saw Mill & Co — trusted timber & wood suppliers in Parvathipuram, Andhra Pradesh. Quality timber planks, custom cutting, furniture wood & wholesale supply to Vizianagaram, Visakhapatnam & across Andhra Pradesh. Call 94401 06929.',

  keywords: [
    'saw mill Parvathipuram',
    'timber suppliers Parvathipuram',
    'wood suppliers Parvathipuram',
    'timber dealers Parvathipuram',
    'saw mill Parvatipuram',
    'timber Vizianagaram',
    'timber Visakhapatnam',
    'saw mill Andhra Pradesh',
    'wood planks Andhra Pradesh',
    'timber planks supplier',
    'custom wood cutting Parvathipuram',
    'furniture wood supplier Andhra Pradesh',
    'wholesale timber Andhra Pradesh',
    'Sri Vijaya Sankara Saw Mill',
    'wood dealer near me Parvathipuram',
    'lumber yard Parvathipuram',
    'timber suppliers Odisha',
    'wood supply Odisha border',
  ],

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Sri Vijaya Sankara Saw Mill & Co',
    title: 'Sri Vijaya Sankara Saw Mill & Co | Parvathipuram, Andhra Pradesh',
    description:
      'Quality timber planks, custom cutting & wholesale wood supply in Parvathipuram, Andhra Pradesh. Serving Vizianagaram, Visakhapatnam & across AP.',
    images: [
      {
        url: '/hero_image.png',
        width: 1200,
        height: 630,
        alt: 'Sri Vijaya Sankara Saw Mill & Co — Timber Suppliers in Parvathipuram',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sri Vijaya Sankara Saw Mill & Co | Parvathipuram',
    description:
      'Quality timber planks, custom cutting & wholesale wood supply in Parvathipuram, Andhra Pradesh.',
    images: ['/hero_image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },

  alternates: {
    canonical: SITE_URL,
  },

  category: 'business',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': `${SITE_URL}/#business`,
  name: 'Sri Vijaya Sankara Saw Mill & Co',
  url: SITE_URL,
  description:
    'Trusted timber and wood suppliers in Parvathipuram, Andhra Pradesh. We supply quality timber planks, custom-cut wood, furniture-grade seasoned wood, and wholesale timber to builders, contractors, and furniture makers across Vizianagaram, Visakhapatnam, and Andhra Pradesh.',
  image: [
    `${SITE_URL}/hero_image.png`,
    `${SITE_URL}/images/IMG_20260606_170818.jpg`,
    `${SITE_URL}/images/IMG_20260606_170814.jpg`,
  ],

  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Durga Temple Street',
    addressLocality: 'Parvatipuram',
    addressRegion: 'Andhra Pradesh',
    postalCode: '535501',
    addressCountry: 'IN',
  },

  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.78330,
    longitude: 83.43330,
  },

  telephone: ['+919440106929', '+919490462059'],

  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+919440106929',
      contactType: 'sales',
      name: 'Boddu Jagadeesh',
      areaServed: 'IN',
      availableLanguage: ['Telugu', 'Hindi', 'English'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+919490462059',
      contactType: 'sales',
      name: 'Boddu Tirupathi Rao',
      areaServed: 'IN',
      availableLanguage: ['Telugu', 'Hindi', 'English'],
    },
  ],

  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],

  areaServed: [
    { '@type': 'City', 'name': 'Parvatipuram' },
    { '@type': 'City', 'name': 'Vizianagaram' },
    { '@type': 'City', 'name': 'Visakhapatnam' },
    { '@type': 'City', 'name': 'Bobbili' },
    { '@type': 'City', 'name': 'Salur' },
    { '@type': 'State', 'name': 'Andhra Pradesh' },
    { '@type': 'State', 'name': 'Odisha' },
  ],

  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Timber & Wood Products',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Timber Planks Supply', description: 'Premium quality timber planks in various sizes for construction, roofing, and structural work.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Custom Wood Cutting', description: 'Precision cutting of logs and planks to customer specifications.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Furniture Grade Wood', description: 'Seasoned, kiln-dried wood ideal for furniture manufacturing.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Wholesale Timber Supply', description: 'Bulk timber supply for builders, contractors, and timber traders.' },
      },
    ],
  },

  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Bank Transfer',
  priceRange: '₹₹',

  sameAs: [
    'https://share.google/mYlvkh89Q8hhLTqmh',
  ],

  identifier: {
    '@type': 'PropertyValue',
    name: 'GSTIN',
    value: '37ABLPB6785F1ZE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${lora.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        style={{ fontFamily: 'var(--font-lora), Georgia, serif' }}
        className="min-h-screen antialiased"
      >
        {children}
      </body>
    </html>
  );
}
