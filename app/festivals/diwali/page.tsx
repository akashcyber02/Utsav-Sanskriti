import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import GreetingGenerator from "@/components/GreetingGenerator";
import AdSlot from "@/components/AdSlot";
import { generateFestivalMetadata } from "@/lib/seo";
import {
  Sparkles,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = generateFestivalMetadata({
  title: "दीपावली 2026: लक्ष्मी पूजा मुहूर्त, 5 दिवसीय दीपोत्सव, विधि व शुभकामनाएँ",
  description:
    "दीपावली 2026 (8 नवंबर): धनतेरस से भाई दूज तक 5 दिनों का महापर्व। लक्ष्मी-गणेश पूजा शुभ मुहूर्त, चौघड़िया, रंगोली विचार, और फोटो शुभकामना कार्ड।",
  path: "/festivals/diwali",
  keywords: ["दीपावली 2026", "दिवाली लक्ष्मी पूजा 2026 मुहूर्त", "धनतेरस", "गोवर्धन पूजा", "भाई दूज", "दिवाली शुभकामनाएँ"],
});

export default function DiwaliSpecialPage() {

  const fiveDays = [
    {
      day: "दिन 1: धनतेरस",
      date: "6 नवंबर 2026 (शुक्रवार)",
      desc: "आरोग्य के देवता भगवान धन्वंतरि और कुबेर देव का पूजन, नवीन बर्तनों/स्वर्ण की खरीदारी और यम दीपदान।",
      slug: "dhanteras",
    },
    {
      day: "दिन 2: नरक चतुर्दशी / छोटी दिवाली",
      date: "7 नवंबर 2026 (शनिवार)",
      desc: "श्रीकृष्ण द्वारा नरकासुर वध की स्मृति, उबटन स्नान, यम तर्पण और घर के मुख्य द्वार पर 14 दीये प्रज्वलित करना।",
      slug: "chhoti-diwali",
    },
    {
      day: "दिन 3: दीपावली (महालक्ष्मी पूजा)",
      date: "8 नवंबर 2026 (रविवार)",
      desc: "दीपोत्सव का मुख्य दिन। प्रदोष काल में स्थिर वृषभ लग्न में माँ लक्ष्मी व भगवान गणेश का महापूजन।",
      slug: "diwali",
    },
    {
      day: "दिन 4: गोवर्धन पूजा / अन्नकूट",
      date: "9 नवंबर 2026 (सोमवार)",
      desc: "प्रकृति और गोवंश का सम्मान, गाय के गोबर से गोवर्धन पर्वत निर्माण और 56 भोग अन्नकूट का अर्पण।",
      slug: "govardhan-puja",
    },
    {
      day: "दिन 5: भाई दूज (यम द्वितीया)",
      date: "10 नवंबर 2026 (मंगलवार)",
      desc: "बहन के घर भाई का भोजन, यमुना-यमराज स्मृति, मंगल तिलक और भाई की दीर्घायु की प्रार्थना।",
      slug: "bhai-dooj",
    },
  ];

  return (
    <div className="min-w-0 pb-16">
      {/* Grand Festive Hero Banner */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-950 via-amber-950 to-festive-maroon-dark text-white border-b-2 border-festive-gold">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 opacity-80">
            <Breadcrumbs
              items={[
                { name: "त्योहार", href: "/festivals" },
                { name: "दीपावली 2026 महा-विशेषांक", href: "/festivals/diwali" },
              ]}
            />
          </div>

          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-festive-gold/20 text-festive-gold border border-festive-gold/40 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              पंच-दिवसीय महापर्व विशेषांक 2026
            </span>

            <h1 className="font-serif text-3xl sm:text-6xl font-extrabold text-amber-50 drop-shadow-lg leading-tight">
              दीपों की रोशनी से <br className="hidden sm:inline" />
              <span className="text-gold-gradient">जगमगाए आपका जीवन</span>
            </h1>

            <p className="text-base sm:text-xl text-amber-100/90 max-w-2xl mx-auto leading-relaxed font-normal">
              माँ लक्ष्मी और भगवान गणेश की कृपा से आपके जीवन में सुख, शांति, समृद्धि और खुशियाँ बनी रहें।
            </p>

            {/* Verified Muhurat Card */}
            <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-black/50 border border-festive-gold/40 backdrop-blur-md max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div>
                <span className="text-xs uppercase text-festive-gold font-bold tracking-wider block">
                  दीपावली लक्ष्मी पूजन 2026
                </span>
                <span className="font-serif text-2xl font-black text-amber-100 block">
                  8 नवंबर 2026 (रविवार)
                </span>
                <span className="text-xs text-amber-200/80 block mt-1">
                  प्रदोष काल मुहूर्त: शाम 05:42 से रात 08:16 तक (स्थिर वृषभ लग्न)
                </span>
              </div>
              <a
                href="#puja-vidhi"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-festive-gold to-amber-500 text-stone-950 font-bold text-xs sm:text-sm whitespace-nowrap shadow-md hover:brightness-110 transition-all"
              >
                पूजा विधि देखें &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-14">
        {/* Ad Slot */}
        <AdSlot slotKey="homepageBanner" />

        {/* 5 Days of Diwali Celebration */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-festive-brown">
              पंच दिवसीय दीपोत्सव: धनतेरस से भाई दूज तक
            </h2>
            <p className="text-xs sm:text-sm text-festive-brown/70 mt-1">
              दीपावली केवल एक दिन का पर्व नहीं बल्कि पाँच पावन दिनों की दिव्य श्रृंखला है
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fiveDays.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-festive-gold/30 hover:border-festive-gold shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-festive-saffron block mb-1">
                    {item.date}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-festive-brown mb-2">
                    {item.day}
                  </h3>
                  <p className="text-xs text-festive-brown/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-festive-gold/15">
                  <Link
                    href={`/festivals/${item.slug}`}
                    className="text-xs font-bold text-festive-maroon hover:underline flex items-center gap-1"
                  >
                    <span>विस्तृत जानकारी</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lakshmi Ganesh Puja Guide */}
        <section id="puja-vidhi" className="p-8 rounded-3xl bg-white border border-festive-gold/40 shadow-sm space-y-6">
          <div className="border-b border-festive-gold/20 pb-4">
            <span className="text-xs font-bold text-festive-maroon uppercase tracking-wider block">
              मुख्य पर्व आराधना
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-festive-brown mt-1">
              दीपावली लक्ष्मी-गणेश पूजन विधि एवं मंत्र
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-festive-brown/85 leading-relaxed">
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-base text-festive-maroon">
                1. चौकी स्थापना एवं पवित्रता
              </h3>
              <p>
                उत्तर-पूर्व (ईशान) दिशा में लकड़ी की चौकी पर लाल या पीला रेशमी वस्त्र बिछाएं। नवधान्य (चावल, गेहूं) का अष्टदल कमल बनाकर उस पर माँ लक्ष्मी को गणेश जी के दाहिनी ओर स्थापित करें।
              </p>
              <h3 className="font-serif font-bold text-base text-festive-maroon">
                2. कलश एवं दीप प्रज्वलन
              </h3>
              <p>
                तांबे के कलश में गंगाजल, सिक्का, सुपारी, आम के पत्ते और ऊपर नारियल रखें। सबसे पहले अखंड ज्योति और चार बत्तियों वाला चौमुखी दीपक प्रज्वलित करें।
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif font-bold text-base text-festive-maroon">
                3. महालक्ष्मी महामंत्र
              </h3>
              <div className="p-4 rounded-xl bg-festive-ivory border border-festive-gold/30 font-serif font-bold text-festive-maroon text-sm">
                ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद श्रीं ह्रीं श्रीं ॐ महालक्ष्म्यै नमः॥
              </div>
              <h3 className="font-serif font-bold text-base text-festive-maroon">
                4. भोग एवं महाआरती
              </h3>
              <p>
                कमल गट्टे, पीली कौड़ियां, खीर, बताशे और सिंघाड़े का भोग लगाकर सपरिवार लक्ष्मी चालीसा और &ldquo;ॐ जय लक्ष्मी माता&rdquo; की आरती करें।
              </p>
            </div>
          </div>
        </section>

        {/* Rangoli, Decoration & Festive Foods */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-festive-ivory-soft border border-festive-gold/30 space-y-3">
            <h3 className="font-serif text-xl font-bold text-festive-maroon flex items-center gap-2">
              <span>🌸 पारंपरिक रंगोली एवं घर की सजावट</span>
            </h3>
            <p className="text-xs sm:text-sm text-festive-brown/80 leading-relaxed">
              मुख्य द्वार पर चावल के आटे, हल्दी और कुमकुम से रंगोली बनाना माँ लक्ष्मी के स्वागत का सनातन प्रतीक है। आम के पत्तों और गेंदे के फूलों का तोरण घर में सकारात्मक ऊर्जा का संचार करता है।
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-festive-ivory-soft border border-festive-gold/30 space-y-3">
            <h3 className="font-serif text-xl font-bold text-festive-maroon flex items-center gap-2">
              <span>🍯 दीवाली का पारंपरिक खानपान</span>
            </h3>
            <p className="text-xs sm:text-sm text-festive-brown/80 leading-relaxed">
              दिवाली पर घर-घर में बेसन के लड्डू, काजू कतली, मट्ठी, शकरपारे, और खीर बनाई जाती है। लक्ष्मी पूजन में शुद्ध देसी घी में बने पकवानों और बताशों का भोग अनिवार्य माना गया है।
            </p>
          </div>
        </section>

        {/* Festive Safety Notice */}
        <section className="p-6 rounded-2xl bg-amber-50 border border-amber-300 flex items-start gap-3 text-xs sm:text-sm text-amber-900 leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold mb-1">दीपावली सुरक्षा परामर्श:</strong>
            मिट्टी के दीयों को पर्दों या ज्वलनशील वस्तुओं से दूर रखें। ग्रीन पटाखों का ही सीमित उपयोग करें अथवा प्रदूषण रहित दीप जलाकर प्रकृति की रक्षा करें। बच्चों को आतिशबाजी सदैव बड़ों की देखरेख में करने दें।
          </div>
        </section>

        {/* Personalized Diwali Card Maker */}
        <section className="space-y-4">
          <div className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-festive-brown">
              अपनों को भेजें दिवाली की व्यक्तिगत फोटो शुभकामना
            </h2>
          </div>
          <GreetingGenerator defaultFestivalSlug="diwali" />
        </section>
      </div>
    </div>
  );
}
