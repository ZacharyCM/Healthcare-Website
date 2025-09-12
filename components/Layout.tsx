import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
}

export default function Layout({
  children,
  title = 'Excellary Health LLC',
  description = 'Compassionate psychiatric care tailored for you. Serving teens, adults, and all communities across DC, MD & VA with telehealth and in-person appointments.',
  keywords = 'mental health, psychiatric care, Washington DC, Maryland, Virginia, ADHD, anxiety, depression, telehealth, LGBTQIA+ therapist, nurse practitioner',
  ogImage = '/images/og-default.jpg'
}: LayoutProps) {
  const fullTitle = title === 'Excellary Health LLC' ? title : `${title} | Excellary Health LLC`

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Additional SEO */}
        <meta name="geo.region" content="US-DC" />
        <meta name="geo.placename" content="Washington, DC" />
        <meta name="geo.position" content="38.9072;-77.0369" />
        <meta name="ICBM" content="38.9072, -77.0369" />
        
        {/* Structured Data for Healthcare Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Excellary Health LLC",
              "description": description,
              "founder": {
                "@type": "Person",
                "name": "Orin Greene",
                "jobTitle": "AGNP-C, PMHNP-BC"
              },
              "address": {
                "@type": "PostalAddress",
                "addressRegion": ["DC", "MD", "VA"],
                "addressCountry": "US"
              },
              "areaServed": ["Washington, DC", "Maryland", "Virginia"],
              "medicalSpecialty": ["Psychiatry", "Mental Health", "Primary Care"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Mental Health Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Psychiatric Evaluation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Medication Management"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Supportive Psychotherapy"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Telepsychiatry"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
