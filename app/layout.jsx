
// import localFont from "next/font/local";
import { AR_One_Sans, Quando } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

// import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import { ReduxProvider } from '../store/ReduxProvider';
import { Toaster } from "@/components/ui/sonner"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper";
import ScrollToTop from "@/components/layout/ScrollToTop";



const arOneSans = AR_One_Sans({
  subsets: ['latin'],
  variable: '--font-arOneSans',
  display: 'swap',
})

const quando = Quando({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-quando',
  display: 'swap',
})


export const metadata = {
  robots: {
    template: '%s',
    default: 'noindex, nofollow'
  }, // Ensures pages are marked as noindex

  metadataBase: new URL('https://www.bunnx.com'),

  // alternates: {
  //   canonical: '/',
  // }, 

  openGraph: {
    url: '/',
    siteName: 'Bunnx',
    images: [
      {
        url: "https://www.bunnx.com/logo/bunnx-logo.png", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'ogImage',
      },
      {
        url: "https://www.bunnx.com/logo/bunnx-logo.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'ogImage1',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },

  verification: {
    google: 'Oia8GxMFtKnmzOWrmdBLvDlBwK43a5f1sc6IcFhHrR4',
  },

}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "BunnX",
  "alternateName": "Bunnx",
  "url": "https://www.bunnx.com/",
  image: "https://www.bunnx.com/logo/bunnx-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9971544661",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["en", "Hindi"]
  },
  "sameAs": [
    "https://www.facebook.com/Bunnx.official/",
    "https://www.instagram.com/bunn_x.official/",
    "https://www.linkedin.com/company/bunnx/"
  ]
}

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head> 


      <body className={` ${quando.variable} ${arOneSans.variable} antialiased`}>
        <GoogleTagManager gtmId="G-MWQ723WDF6" />

        {/* <SessionProvider> */}
        <ReduxProvider>
          <HeaderFooterWrapper>
            <ScrollToTop />

            {children}

            <Toaster />

          </HeaderFooterWrapper>
        </ReduxProvider>
        {/* </SessionProvider> */}


      </body>


      <GoogleAnalytics gaId="G-MWQ723WDF6" />

    </html>
  );
}


