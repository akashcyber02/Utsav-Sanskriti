import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateFestivalMetadata } from "@/lib/seo";
import { CheckCircle2, RefreshCw } from "lucide-react";

export const metadata: Metadata = generateFestivalMetadata({
  title: "संपादकीय एवं सुधार नीति (Editorial & Correction Policy) — उत्सव संस्कृति",
  description: "UtsavSanskriti की संपादकीय नीति, तथ्य जांच प्रक्रिया और सुधार नीति।",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <Breadcrumbs items={[{ name: "संपादकीय नीति", href: "/editorial-policy" }]} />

      <div className="mt-6 bg-white p-8 sm:p-12 rounded-3xl border border-festive-gold/40 shadow-sm space-y-6 text-xs sm:text-sm text-festive-brown/85 leading-relaxed">
        <div className="border-b border-festive-gold/20 pb-4">
          <h1 className="font-serif text-3xl font-extrabold text-festive-brown">
            संपादकीय एवं सुधार नीति (Editorial & Correction Policy)
          </h1>
          <p className="text-xs text-festive-brown/60 mt-1">अंतिम अद्यतन: 2026</p>
        </div>

        <section className="space-y-2">
          <h2 className="font-serif text-base sm:text-lg font-bold text-festive-maroon flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>1. तथ्य सत्यापन एवं प्रामाणिक स्रोत</span>
          </h2>
          <p>
            UtsavSanskriti पर प्रकाशित होने वाले प्रत्येक पर्व की तिथि, नक्षत्र और मुहूर्त की जांच मान्यता प्राप्त धार्मिक पंचांगों (निर्णय सिंधु, धर्मसिंधु, दृक पंचांग और काशी विश्वनाथ पंचांग) से की जाती है। हम किसी भी मनगढ़ंत दावे या सनसनीखेज भविष्यवाणी का प्रकाशन नहीं करते।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base sm:text-lg font-bold text-festive-maroon flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-festive-saffron" />
            <span>2. संशोधन एवं सुधार नीति (Correction Policy)</span>
          </h2>
          <p>
            यदि हमारे किसी लेख, तिथि या मुहूर्त में अनजाने में कोई त्रुटि पाई जाती है, तो हम अपनी नैतिक जिम्मेदारी मानते हुए उसे अविलंब संशोधित करते हैं। पाठक किसी भी त्रुटि की सूचना हमारे <a href="/contact" className="text-festive-maroon font-bold underline">संपर्क पृष्ठ</a> पर भेज सकते हैं। सत्यापन के 24 से 48 घंटे के भीतर सुधार लागू कर दिया जाता है।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base sm:text-lg font-bold text-festive-maroon">
            3. मौलिकता एवं सांस्कृतिक आदर
          </h2>
          <p>
            हमारी सभी शुभकामनाएँ, पूजा विधियाँ और सांस्कृतिक लेख मूल रूप से अनुभवी लेखकों द्वारा सनातन परंपरा की गरिमा का ध्यान रखते हुए रचे गए हैं। हम कॉपीराइट कानूनों का पूर्णतः पालन करते हैं।
          </p>
        </section>
      </div>
    </div>
  );
}
