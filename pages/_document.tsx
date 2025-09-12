import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Excellary Health LLC" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Default OpenGraph image */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Excellary Health LLC" />
        <meta property="og:image" content="/images/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/og-default.jpg" />
      </Head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
