import { Metadata } from "next";

export const SITE_NAME = "UtsavSanskriti";
export const SITE_TAGLINE = "हर पर्व की परंपरा, हर रिश्ते के लिए शुभकामनाएँ।";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://utsavsanskriti.in";

export function generateFestivalMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "हिन्दू त्योहार 2026",
      "सनातन संस्कृति",
      "पूजा विधि",
      "शुभकामना संदेश",
      "व्रत कथा",
      "पंचांग 2026",
      ...keywords,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "hi_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function generateJsonLdWebsite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: "उत्सव संस्कृति",
    url: SITE_URL,
    description: SITE_TAGLINE,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/festivals?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateJsonLdEvent({
  name,
  description,
  startDate,
  endDate,
  path,
}: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Festival",
    name: `${name} 2026`,
    description,
    startDate,
    endDate: endDate || startDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "सम्पूर्ण भारत एवं विश्वभर में",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
    },
    url: `${SITE_URL}${path}`,
  };
}

export function generateJsonLdBreadcrumbs(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
