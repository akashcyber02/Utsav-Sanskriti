import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateFestivalMetadata } from "@/lib/seo";

export const metadata: Metadata = generateFestivalMetadata({
  title: "नियम एवं शर्तें (Terms and Conditions) — उत्सव संस्कृति",
  description: "UtsavSanskriti के उपयोग के नियम एवं शर्तें।",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <Breadcrumbs items={[{ name: "नियम एवं शर्तें", href: "/terms" }]} />

      <div className="mt-6 bg-white p-8 sm:p-12 rounded-3xl border border-festive-gold/40 shadow-sm space-y-6 text-xs sm:text-sm text-festive-brown/85 leading-relaxed">
        <div className="border-b border-festive-gold/20 pb-4">
          <h1 className="font-serif text-3xl font-extrabold text-festive-brown">
            नियम एवं शर्तें (Terms and Conditions)
          </h1>
          <p className="text-xs text-festive-brown/60 mt-1">अंतिम अद्यतन: 2026</p>
        </div>

        <section className="space-y-2">
          <h2 className="font-serif text-base sm:text-lg font-bold text-festive-maroon">
            1. स्वीकृति
          </h2>
          <p>
            UtsavSanskriti वेबसाइट का उपयोग करने पर आप इन नियमों एवं शर्तों का पूर्णतः पालन करने के लिए अपनी सहमति व्यक्त करते हैं।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base sm:text-lg font-bold text-festive-maroon">
            2. बौद्धिक संपदा एवं सामग्री का उपयोग
          </h2>
          <p>
            वेबसाइट पर प्रकाशित सभी मूल लेख, डिज़ाइन, कार्ड जनरेटर कोड और संकलित सामग्री UtsavSanskriti की बौद्धिक संपदा हैं। आप व्यक्तिगत, पारिवारिक और गैर-व्यावसायिक उपयोग हेतु शुभकामना संदेशों और कार्डों को निःशुल्क साझा कर सकते हैं। हमारी सामग्री का व्यावसायिक पुनरुत्पादन अथवा बिना अनुमति बड़े पैमाने पर स्क्रैपिंग वर्जित है।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base sm:text-lg font-bold text-festive-maroon">
            3. उपयोगकर्ता आचरण
          </h2>
          <p>
            वेबसाइट के किसी भी इंटरैक्टिव माध्यम (जैसे ग्रीटिंग कार्ड जनरेटर) पर किसी भी प्रकार की आपत्तिजनक, घृणास्पद, अशोभनीय या गैर-कानूनी सामग्री का उपयोग पूर्णतः प्रतिबंधित है।
          </p>
        </section>
      </div>
    </div>
  );
}
