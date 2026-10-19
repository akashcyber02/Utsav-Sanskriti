import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FestivalGrid from "@/components/FestivalGrid";
import AdSlot from "@/components/AdSlot";
import { getAllFestivals } from "@/lib/festival-utils";
import { generateFestivalMetadata } from "@/lib/seo";

export const metadata: Metadata = generateFestivalMetadata({
  title: "सम्पूर्ण हिन्दू त्योहार एवं व्रत कैलेंडर 2026",
  description:
    "वर्ष 2026 के सभी 12 महीनों के प्रमुख हिन्दू त्योहार, व्रत, एकादशी, पूर्णिमा, अमावस्या की प्रामाणिक तिथियाँ एवं विस्तृत विवरण।",
  path: "/festivals",
});

export default function FestivalsPage() {
  const allFestivals = getAllFestivals();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ name: "त्योहार सूची 2026", href: "/festivals" }]} />

      <div className="mt-4 mb-8">
        <FestivalGrid
          initialFestivals={allFestivals}
          title="सम्पूर्ण 2026 हिन्दू त्योहार, व्रत एवं जयंती सूची"
          subtitle="पंचांग अनुसार जांची गई प्रामाणिक तिथियाँ, पूजा विधि एवं धार्मिक महत्व"
          showFilters={true}
        />
      </div>

      <AdSlot slotKey="footerBanner" />
    </div>
  );
}
