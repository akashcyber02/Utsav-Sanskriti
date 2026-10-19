import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateFestivalMetadata } from "@/lib/seo";

export const metadata: Metadata = generateFestivalMetadata({
  title: "गोपनीयता नीति (Privacy Policy) — उत्सव संस्कृति",
  description: "UtsavSanskriti की गोपनीयता नीति। जानिए हम कुकीज़, विज्ञापनों और डेटा सुरक्षा का प्रबंधन कैसे करते हैं।",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <Breadcrumbs items={[{ name: "गोपनीयता नीति", href: "/privacy-policy" }]} />

      <div className="mt-6 bg-white p-8 sm:p-12 rounded-3xl border border-festive-gold/40 shadow-sm space-y-6 text-xs sm:text-sm text-festive-brown/85 leading-relaxed">
        <div className="border-b border-festive-gold/20 pb-4">
          <h1 className="font-serif text-3xl font-extrabold text-festive-brown">
            गोपनीयता नीति (Privacy Policy)
          </h1>
          <p className="text-xs text-festive-brown/60 mt-1">
            अंतिम अद्यतन: 18 अक्टूबर 2026
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="font-serif text-base sm:text-lg font-bold text-festive-maroon">
            1. परिचय एवं उद्देश्य
          </h2>
          <p>
            उत्सव संस्कृति (UtsavSanskriti) हमारे आगंतुकों की गोपनीयता का पूर्ण सम्मान करती है। यह नीति स्पष्ट करती है कि हमारी वेबसाइट पर आने पर किस प्रकार की तकनीकी जानकारी एकत्र की जा सकती है और उसका उपयोग कैसे होता है।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base sm:text-lg font-bold text-festive-maroon">
            2. व्यक्तिगत जानकारी का संग्रह
          </h2>
          <p>
            हम अपने सामान्य पाठकों से बिना किसी पंजीकरण (Sign-up) के सामग्री उपलब्ध कराते हैं। जब आप हमारे संपर्क फॉर्म का उपयोग करते हैं, तभी आपका नाम और ईमेल पता केवल पत्राचार हेतु प्राप्त होता है। हम किसी भी व्यक्तिगत जानकारी को किसी तीसरे पक्ष को बेचते या किराए पर नहीं देते।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base sm:text-lg font-bold text-festive-maroon">
            3. फोटो शुभकामना कार्ड जनरेटर एवं प्राइवेसी
          </h2>
          <p>
            जब आप हमारे कार्ड जनरेटर में अपनी फोटो अपलोड करते हैं, तो वह प्रक्रिया पूरी तरह आपके अपने ब्राउज़र (Client-side HTML5 Canvas) में निष्पादित होती है। आपकी फोटो हमारे किसी सर्वर पर अपलोड या संग्रहीत नहीं की जाती।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base sm:text-lg font-bold text-festive-maroon">
            4. विज्ञापन एवं कुकीज़ (Google AdSense एवं तृतीय-पक्ष)
          </h2>
          <p>
            हमारी वेबसाइट को वित्तीय रूप से संचालित रखने के लिए Google AdSense जैसे स्वीकृत विज्ञापन प्रदाताओं का उपयोग किया जा सकता है। Google सहित तृतीय-पक्ष विक्रेता उपयोगकर्ताओं द्वारा पूर्व में हमारी अथवा अन्य वेबसाइटों के भ्रमण के आधार पर विज्ञापन प्रदर्शित करने के लिए कुकीज़ (जैसे DoubleClick कुकी) का उपयोग कर सकते हैं।
          </p>
          <p>
            उपयोगकर्ता Google की विज्ञापन सेटिंग्स में जाकर व्यक्तिगत विज्ञापनों से बाहर निकल (Opt-out) सकते हैं।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base sm:text-lg font-bold text-festive-maroon">
            5. डेटा एनालिटिक्स
          </h2>
          <p>
            हम वेबसाइट के प्रदर्शन, सर्वाधिक पढ़े जाने वाले त्योहारों और सर्वर गति को सुधारने के लिए अनाम (Anonymous) समग्र डेटा (जैसे देखे गए पेज, ब्राउज़र प्रकार) का विश्लेषण करते हैं, जिससे किसी विशिष्ट व्यक्ति की पहचान नहीं होती।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base sm:text-lg font-bold text-festive-maroon">
            6. नीति में संशोधन एवं संपर्क
          </h2>
          <p>
            यदि इस गोपनीयता नीति में कोई परिवर्तन होता है, तो उसे इसी पृष्ठ पर अद्यतन किया जाएगा। किसी भी प्रश्न हेतु आप हमसे <a href="/contact" className="text-festive-maroon font-bold underline">संपर्क पृष्ठ</a> के माध्यम से जुड़ सकते हैं।
          </p>
        </section>
      </div>
    </div>
  );
}
