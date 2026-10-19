import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateJsonLdWebsite, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — हर पर्व की परंपरा, हर रिश्ते के लिए शुभकामनाएँ`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "सनातन संस्कृति के सम्पूर्ण हिन्दू त्योहार 2026, प्रामाणिक पंचांग तिथियाँ, पूजा विधि, शुभ मुहूर्त, व्रत कथा, और WhatsApp पर साझा करने योग्य फोटो शुभकामना कार्ड।",
  keywords: [
    "हिन्दू त्योहार 2026",
    "दिवाली 2026",
    "दशहरा 2026",
    "करवा चौथ 2026",
    "होली 2026",
    "पंचांग 2026",
    "पूजा विधि",
    "शुभकामना संदेश",
    "डिजिटल पूजा घर",
    "डिजिटल रावण दहन",
  ],
  authors: [{ name: "UtsavSanskriti Editorial Team" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — हिन्दू त्योहार, पूजा विधि एवं शुभकामनाएँ 2026`,
    description: SITE_TAGLINE,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_TAGLINE,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = generateJsonLdWebsite();

  return (
    <html lang="hi" className="scroll-smooth">
      <head>
        {/* Google AdSense Official Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2739831795527448"
          crossOrigin="anonymous"
        />
        <meta name="google-adsense-account" content="ca-pub-2739831795527448" />
        {/* Schema.org WebSite structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-festive-ivory text-festive-brown antialiased selection:bg-festive-maroon selection:text-amber-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
