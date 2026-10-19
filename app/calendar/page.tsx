import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FestivalGrid from "@/components/FestivalGrid";
import AdSlot from "@/components/AdSlot";
import { getAllFestivals } from "@/lib/festival-utils";
import { generateFestivalMetadata } from "@/lib/seo";
import { CheckCircle2 } from "lucide-react";
import { CALENDAR_VERIFICATION_DISCLAIMER } from "@/data/festivals";

export const metadata: Metadata = generateFestivalMetadata({
  title: "हिन्दू कैलेंडर 2026: सभी त्योहार, व्रत, एकादशी, पूर्णिमा व पंचांग तिथियाँ",
  description:
    "वर्ष 2026 का सम्पूर्ण हिन्दू पंचांग एवं व्रत कैलेंडर। जनवरी से दिसंबर तक के सभी सनातन पर्व, शुभ मुहूर्त, तिथि एवं व्रत कथा विवरण।",
  path: "/calendar",
  keywords: ["हिन्दू कैलेंडर 2026", "2026 त्योहार लिस्ट", "एकादशी 2026", "पूर्णिमा 2026", "पंचांग 2026"],
});

export default function CalendarHubPage() {
  const allFestivals = getAllFestivals();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ name: "त्योहार कैलेंडर 2026", href: "/calendar" }]} />

      <div className="text-center max-w-3xl mx-auto mt-4 mb-10">
        <span className="text-xs font-bold text-festive-maroon uppercase tracking-wider px-3 py-1 rounded-full bg-festive-maroon/10 border border-festive-maroon/20">
          सत्यापित पंचांग 2026
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-festive-brown mt-2">
          सम्पूर्ण हिन्दू त्योहार एवं व्रत कैलेंडर 2026
        </h1>
        <p className="text-sm sm:text-base text-festive-brown/70 mt-2">
          माह-दर-माह पंचांग अनुसार जांची गई प्रामाणिक तिथियाँ, वार एवं धार्मिक महत्व
        </p>

        {/* Verification disclaimer banner */}
        <div className="mt-4 p-3.5 rounded-2xl bg-amber-50 border border-amber-300 text-xs text-amber-900 text-left flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <span>{CALENDAR_VERIFICATION_DISCLAIMER}</span>
        </div>
      </div>

      <div className="mb-14">
        <FestivalGrid
          initialFestivals={allFestivals}
          title="माह अनुसार 2026 व्रत व पर्व सूची"
          subtitle="महीना चुनें और उस माह के सभी त्योहारों की जानकारी देखें"
          showFilters={true}
        />
      </div>

      <AdSlot slotKey="footerBanner" />
    </div>
  );
}
