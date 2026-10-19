import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateFestivalMetadata } from "@/lib/seo";
import { ShieldCheck, Heart } from "lucide-react";

export const metadata: Metadata = generateFestivalMetadata({
  title: "हमारे बारे में (About Us) — उत्सव संस्कृति का उद्देश्य व दृष्टिकोण",
  description:
    "जानिए UtsavSanskriti का उद्देश्य, सनातन पर्व परंपराओं का संरक्षण, प्रामाणिक पंचांग गणना और सांस्कृतिक धरोहर के प्रति हमारी प्रतिबद्धता।",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <Breadcrumbs items={[{ name: "हमारे बारे में", href: "/about" }]} />

      <div className="mt-6 space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-festive-gold/40 shadow-sm">
        <div className="border-b border-festive-gold/20 pb-6 text-center sm:text-left">
          <span className="text-xs font-bold text-festive-maroon uppercase tracking-wider px-3 py-1 rounded-full bg-festive-maroon/10 border border-festive-maroon/20">
            हमारा ध्येय एवं संकल्प
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-festive-brown mt-3">
            UtsavSanskriti: सनातन पर्वों की पावन धरोहर
          </h1>
          <p className="text-sm text-festive-saffron font-semibold mt-1">
            हर पर्व की परंपरा, हर रिश्ते के लिए शुभकामनाएँ।
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-festive-brown/85 leading-relaxed">
          <p>
            <strong>उत्सव संस्कृति (UtsavSanskriti)</strong> एक स्वतंत्र, सांस्कृतिक और डिजिटल पहल है जिसका उद्देश्य भारत के सनातन त्योहारों, वैदिक परंपराओं, शास्त्रीय पूजा विधियों और तिथियों को आधुनिक व प्रमाणिक रूप में नई पीढ़ी तक पहुँचाना है।
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-5 rounded-2xl bg-festive-ivory-soft border border-festive-gold/30 space-y-2">
              <div className="flex items-center gap-2 text-festive-maroon font-bold">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>प्रामाणिक पंचांग सत्यापन</span>
              </div>
              <p className="text-xs text-festive-brown/75 leading-relaxed">
                हम किसी भी मनगढ़ंत तारीख या काल्पनिक मुहूर्त को प्रकाशित नहीं करते। प्रत्येक पर्व की तिथि राष्ट्रीय व क्षेत्रीय पंचांगों द्वारा जांची जाती है।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-festive-ivory-soft border border-festive-gold/30 space-y-2">
              <div className="flex items-center gap-2 text-festive-maroon font-bold">
                <Heart className="w-5 h-5 text-rose-600" />
                <span>आत्मीय रिश्ते व शुभकामनाएँ</span>
              </div>
              <p className="text-xs text-festive-brown/75 leading-relaxed">
                हमारा उद्देश्य केवल जानकारी देना नहीं बल्कि परिवारों, मित्रों और समाज को आपस में जोड़ने के लिए हृदयस्पर्शी शुभकामना संदेश और फोटो कार्ड उपलब्ध कराना है।
              </p>
            </div>
          </div>

          <h2 className="font-serif text-xl font-bold text-festive-brown pt-2">
            हम क्या प्रदान करते हैं?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm pl-2">
            <li>सम्पूर्ण वर्ष 2026 और आगामी वर्षों का प्रामाणिक पंचांग व व्रत कैलेंडर।</li>
            <li>सरल हिंदी में क्रमबद्ध पूजा विधि, आवश्यक सामग्री सूची और परंपरागत कथा।</li>
            <li>डिजिटल पूजा घर (मंदिर घंटी, शंखनाद, दीप प्रज्वलन व 108 माला जाप)।</li>
            <li>त्योहारों पर स्वयं की फोटो और नाम के साथ व्यक्तिगत शुभकामना कार्ड मेकर।</li>
            <li>अखंड भारत की प्रांतीय परंपराओं, खानपान और वैज्ञानिक रहस्यों का विस्तृत विश्लेषण।</li>
          </ul>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-900 leading-relaxed">
            <strong>संपादकीय पारदर्शिता:</strong> उत्सव संस्कृति एक गैर-व्यावसायिक आस्था-आधारित पोर्टल है जिसे सतत संचालन हेतु विज्ञापन समर्थित बनाया गया है। हम पाठकों के विश्वास और आस्था का सर्वोच्च सम्मान करते हैं।
          </div>
        </div>
      </div>
    </div>
  );
}
