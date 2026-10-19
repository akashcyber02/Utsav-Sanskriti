import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateFestivalMetadata } from "@/lib/seo";
import { CALENDAR_VERIFICATION_DISCLAIMER } from "@/data/festivals";
import { ShieldAlert } from "lucide-react";

export const metadata: Metadata = generateFestivalMetadata({
  title: "अस्वीकरण (Disclaimer) — पंचांग एवं धार्मिक मुहूर्त",
  description: "UtsavSanskriti पर प्रस्तुत पंचांग, मुहूर्त एवं धार्मिक जानकारियों का आधिकारिक अस्वीकरण।",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <Breadcrumbs items={[{ name: "अस्वीकरण", href: "/disclaimer" }]} />

      <div className="mt-6 bg-white p-8 sm:p-12 rounded-3xl border border-festive-gold/40 shadow-sm space-y-6 text-xs sm:text-sm text-festive-brown/85 leading-relaxed">
        <div className="border-b border-festive-gold/20 pb-4">
          <h1 className="font-serif text-3xl font-extrabold text-festive-brown">
            पंचांग एवं धार्मिक अस्वीकरण (Disclaimer)
          </h1>
          <p className="text-xs text-festive-brown/60 mt-1">अंतिम अद्यतन: 2026</p>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <strong>मुख्य पंचांग सूचना:</strong> {CALENDAR_VERIFICATION_DISCLAIMER}
          </div>
        </div>

        <section className="space-y-2">
          <h2 className="font-serif text-base sm:text-lg font-bold text-festive-maroon">
            1. स्थानीय अक्षांश एवं पंचांग विविधता
          </h2>
          <p>
            सनातन धर्म में त्योहारों और व्रतों के निर्णय सूर्योदय, तिथि व्याप्ति और स्थानीय नक्षत्र गणना पर निर्भर करते हैं। यद्यपि हमारी संपादकीय टीम ने राष्ट्रीय पंचांग, दृक पंचांग, निर्णय सिंधु और काशी विश्वनाथ पंचांग की सहायता से वर्ष 2026 की सर्वाधिक मान्य तिथियाँ संकलित की हैं, परंतु आपके स्थानीय नगर के सूर्योदय, सूर्यास्त और चंद्रोदय के समय में कुछ मिनटों का स्वाभाविक अंतर हो सकता है।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base sm:text-lg font-bold text-festive-maroon">
            2. शास्त्रीय पूजा विधि एवं क्षेत्रीय परंपरा
          </h2>
          <p>
            हमारी वेबसाइट पर दी गई पूजा विधियां सामान्य और सर्वमान्य गृहस्थ पद्धति के अनुसार संकलित हैं। विभिन्न संप्रदायों (वैष्णव, स्मार्त, शैव, शाक्त) एवं राज्यों में कुल-परंपरा अनुसार विधियों में भिन्नता हो सकती है। पाठक अपनी कुल-परंपरा और स्थानीय पुरोहितों के परामर्श का भी यथोचित आदर करें।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base sm:text-lg font-bold text-festive-maroon">
            3. स्वास्थ्य एवं व्रत परामर्श
          </h2>
          <p>
            निर्जला अथवा कठोर उपवास के संदर्भ में गर्भवती महिलाओं, वृद्धों और अस्वस्थ व्यक्तियों को सदैव अपने चिकित्सक की सलाह को प्राथमिकता देनी चाहिए। सनातन धर्म जीवन रक्षा और स्वास्थ्य को सर्वोच्च धर्म मानता है।
          </p>
        </section>
      </div>
    </div>
  );
}
