import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import { getAllFestivals } from "@/lib/festival-utils";
import { generateFestivalMetadata } from "@/lib/seo";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = generateFestivalMetadata({
  title: "सम्पूर्ण हिन्दू पूजा विधि, सामग्री सूची एवं शास्त्रीय मंत्र 2026",
  description:
    "दिवाली, करवा चौथ, नवरात्रि, रुद्राभिषेक, गणेश चतुर्थी, सत्यनारायण कथा और सभी प्रमुख पर्वों की सरल व शास्त्रसम्मत पूजा विधि एवं सामग्री।",
  path: "/puja-vidhi",
  keywords: ["पूजा विधि 2026", "लक्ष्मी पूजा विधि", "करवा चौथ पूजा विधि", "गणेश पूजा विधि", "पूजा सामग्री सूची"],
});

export default function PujaVidhiHubPage() {
  const festivals = getAllFestivals();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ name: "पूजा विधि", href: "/puja-vidhi" }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mt-4 mb-12">
        <span className="text-xs font-bold text-festive-maroon uppercase tracking-wider px-3 py-1 rounded-full bg-festive-maroon/10 border border-festive-maroon/20">
          शास्त्रसम्मत मार्गदर्शन
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-festive-brown mt-2">
          सम्पूर्ण हिन्दू पूजा विधि एवं आवश्यक सामग्री
        </h1>
        <p className="text-sm sm:text-base text-festive-brown/70 mt-2">
          जानिए पूजा की सामान्य तैयारी, शुद्धि, कलश स्थापना, षोडशोपचार पूजन, पारंपरिक मंत्र और व्रत कथा
        </p>
      </div>

      {/* General Puja Preparation Guide (Section 4 Section F) */}
      <section className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-festive-gold/40 shadow-sm space-y-4">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-festive-maroon flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-festive-saffron" />
          <span>पूजा की सामान्य शास्त्रीय तैयारी (नित्य एवं नैमित्तिक नियम)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-festive-brown/85 leading-relaxed pt-2">
          <div className="p-4 rounded-xl bg-festive-ivory-soft border border-festive-gold/25 space-y-1.5">
            <h3 className="font-serif font-bold text-festive-brown text-base">
              1. शारीरिक एवं मानसिक शुद्धि
            </h3>
            <p>
              सूर्योदय पूर्व स्नान कर स्वच्छ धुले वस्त्र (सफेद, पीला या लाल) पहनें। मन में क्रोध, ईर्ष्या और कटुता का त्याग कर शुद्ध चित्त से पूजा गृह में प्रवेश करें।
            </p>
          </div>

          <div className="p-4 rounded-xl bg-festive-ivory-soft border border-festive-gold/25 space-y-1.5">
            <h3 className="font-serif font-bold text-festive-brown text-base">
              2. दिशा एवं आसन व्यवस्था
            </h3>
            <p>
              पूजा करते समय भक्त का मुख पूर्व या उत्तर दिशा की ओर होना चाहिए। कुशा अथवा ऊन के आसन पर बैठकर ही पूजा करें, सीधे भूमि पर न बैठें।
            </p>
          </div>

          <div className="p-4 rounded-xl bg-festive-ivory-soft border border-festive-gold/25 space-y-1.5">
            <h3 className="font-serif font-bold text-festive-brown text-base">
              3. पंचदेव पूजन एवं क्रम
            </h3>
            <p>
              किसी भी विशिष्ट पूजा से पूर्व सर्वप्रथम विघ्नहर्ता गणेश जी, फिर शिवजी, विष्णु जी, सूर्य देव और माँ दुर्गा (पंचदेव) का स्मरण व नमन अवश्य करें।
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Festival Puja Guides */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-festive-brown">
          प्रमुख त्योहारों की चरणबद्ध पूजा विधि
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {festivals.map((fest) => (
            <div
              key={fest.slug}
              className="p-6 rounded-2xl bg-white border border-festive-gold/30 hover:border-festive-gold shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-festive-brown/60 mb-2">
                  <span className="font-bold text-festive-maroon">{fest.categoryLabel}</span>
                  <span>{fest.dateInfo2026.displayDate}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-festive-brown mb-2">
                  {fest.nameHindi} पूजा विधि
                </h3>
                <p className="text-xs text-festive-brown/75 leading-relaxed line-clamp-3">
                  {fest.pujaVidhiSummary}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-festive-gold/20 flex items-center justify-between">
                <Link
                  href={`/festivals/${fest.slug}#puja-vidhi`}
                  className="text-xs font-bold text-festive-maroon hover:underline flex items-center gap-1"
                >
                  <span>विधि व सामग्री पढ़ें</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>सत्यापित</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdSlot slotKey="footerBanner" />
    </div>
  );
}
