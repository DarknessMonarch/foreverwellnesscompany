import { Toaster } from "sonner";
import "@/app/style/global.css";
import Script from "next/script";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CartDrawer from "@/app/components/CartDrawer";
import styles from "@/app/style/applayout.module.css";
import { Inter, Playfair_Display } from "next/font/google";
import { StoreInitializer } from "@/app/components/StoreInitializer";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const SITE_URL = "https://foreverwellnesscompany.com";
const BANNER_URL =
  "https://raw.githubusercontent.com/DarknessMonarch/foreverwellnesscompany/refs/heads/master/public/assets/banner.png";

export const viewport = {
  themeColor: "#00a86b",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "ForeverWellnessCompany - Premium Wellness & Health Products",
    template: "%s | ForeverWellnessCompany",
  },
  applicationName: "ForeverWellnessCompany",
  description:
    "Shop premium wellness and health products from ForeverWellnessCompany. Quality Aloe Vera, supplements, skincare, and wellness essentials. Fast delivery and best prices.",
  authors: [{ name: "ForeverWellnessCompany", url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "ForeverWellnessCompany",
    "Forever Living affiliate",
    "wellness products",
    "Aloe Vera",
    "health supplements",
    "skincare",
    "wellness essentials",
    "natural health",
    "Forever products",
    "nutrition",
    "vitamin supplements",
    "organic products",
    "wellness accessories",
    "beauty products",
    "health and wellness",
    "wellness lifestyle",
    "premium supplements",
    "personal care",
    "health products",
    "wellness store",
    "fitness accessories",
    "holistic health",
    "preventive health",
    "wellness solutions",
    "health essentials",
    "natural wellness",
    "health goals",
    "wellness journey",
    "Forever distributor",
  ],

  referrer: "origin-when-cross-origin",
  creator: "ForeverWellnessCompany",
  publisher: "ForeverWellnessCompany",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "ForeverWellnessCompany",
    title: "ForeverWellnessCompany - Premium Wellness & Health Products",
    description:
      "Shop premium wellness and health products. Quality Aloe Vera, supplements, skincare, and wellness essentials. Fast delivery and best prices.",
    images: [
      {
        url: BANNER_URL,
        width: 1200,
        height: 630,
        alt: "ForeverWellnessCompany - Premium Wellness & Health Products",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ForeverWellnessCompany - Premium Wellness & Health Products",
    description:
      "Shop premium wellness and health products. Quality Aloe Vera, supplements, skincare, and wellness essentials.",
    images: [BANNER_URL],
    creator: "@foreverwellnesscompany",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "",
    yandex: "",
  },

  alternates: {
    canonical: `${SITE_URL}`,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ForeverWellnessCompany",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.png`,
  description:
    "ForeverWellnessCompany - Official distributor of Forever Living premium wellness, Aloe Vera, and health products",
  sameAs: [
    "https://www.facebook.com/foreverwellnesscompany",
    "https://whatsapp.com/channel/foreverwellnesscompany",
    "https://instagram.com/foreverwellnesscompany",
    "https://www.tiktok.com/@foreverwellnesscompany",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@foreverwellnesscompany.com",
    contactType: "Customer Support",
    url: SITE_URL,
    telephone: "+254796620365",
    areaServed: "Worldwide",
    availableLanguage: "English",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "3000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Forever Living Products",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Aloe Vera & Beverages",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Aloe Vera Gel, Drinks & Juice",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Supplements & Nutrition",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Forever Vitamins, Supplements & Nutrition",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Skincare & Beauty",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Forever Skincare & Beauty Products",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Weight Management & Fitness",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Forever F.I.T & Weight Management",
            },
          },
        ],
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema - Global */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Paystack SDK for payment processing */}
        <Script
          id="paystack-js"
          strategy="lazyOnload"
          src="https://js.paystack.co/v1/inline.js"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${inter.className}`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Analytics */}
        <Script
          id="ga-tag"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-', {
                page_path: window.location.pathname,
                custom_map: {
                  'custom_parameter_1': 'wellness_category'
                }
              });
              
              gtag('config', 'G-', {
                'custom_map.category': 'wellness'
              });
            `,
          }}
        />

        <Toaster
          position="top-center"
          richColors={true}
          toastOptions={{
            style: {
              background: "#00a86b",
              color: "#ffffff",
              borderRadius: "15px",
              border: "1px solid #00a86b",
            },
          }}
        />
        <div className={styles.appLayout}>
          <Navbar />
          <CartDrawer />
          <StoreInitializer>{children}</StoreInitializer>
          <Footer />
        </div>
      </body>
    </html>
  );
}
