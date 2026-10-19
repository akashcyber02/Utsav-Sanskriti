import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import GreetingGenerator from "@/components/GreetingGenerator";
import AdSlot from "@/components/AdSlot";
import { generateFestivalMetadata } from "@/lib/seo";
import { Moon, Info } from "lucide-react";

export const metadata: Metadata = generateFestivalMetadata({
  title: "करवा चौथ 2026: तिथि, सरगी नियम, चंद्रोदय समय (Moonrise) व पूजा विधि",
  description:
    "करवा चौथ 2026 (29 अक्टूबर): अखंड सौभाग्य का निर्जला व्रत। सरगी का समय, पूजा मुहूर्त, प्रमुख शहरों में चांद निकलने का अनुमानित समय, व्रत कथा व शुभकामनाएँ।",
  path: "/festivals/karwa-chauth",
  keywords: [
    "करवा चौथ 2026",
    "करवा चौथ 2026 में चांद कब निकलेगा",
    "सरगी का समय",
    "करवा चौथ पूजा विधि",
    "करवा चौथ कथा",
    "करवा चौथ विशेज",
  ],
});

export default function KarwaChauthSpecialPage() {

  const cityMoonriseEstimated2026 = [
    { city: "नई दिल्ली (NCR)", time: "08:14 PM", note: "उत्तर भारत मानक समय" },
    { city: "जयपुर (राजस्थान)", time: "08:24 PM", note: "स्थानीय क्षितिज अनुसार" },
    { city: "लखनऊ (उत्तर प्रदेश)", time: "08:03 PM", note: "पूर्वी क्षेत्र में कुछ पूर्व" },
    { city: "वाराणसी (काशी)", time: "07:58 PM", note: "गंगा तट क्षितिज" },
    { city: "मुंबई (महाराष्ट्र)", time: "08:52 PM", note: "पश्चिमी तटीय समय" },
    { city: "पटना (बिहार)", time: "07:49 PM", note: "पूर्वांचल में सबसे पहले" },
    { city: "बेंगलुरु (कर्नाटक)", time: "08:46 PM", note: "दक्षिण भारत" },
    { city: "चंडीगढ़ (पंजाब/हरियाणा)", time: "08:12 PM", note: "उत्तरी क्षेत्र" },
  ];

  return (
    <div className="min-w-0 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-950 via-rose-950 to-stone-950 text-white border-b-2 border-festive-gold">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 opacity-80">
            <Breadcrumbs
              items={[
                { name: "त्योहार", href: "/festivals" },
                { name: "करवा चौथ विशेषांक 2026", href: "/festivals/karwa-chauth" },
              ]}
            />
          </div>

          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-900/60 text-amber-200 border border-rose-500/40 text-xs font-bold uppercase tracking-wider">
              <Moon className="w-3.5 h-3.5 text-amber-300" />
              अखंड सौभाग्य एवं समर्पण का पावन पर्व
            </span>

            <h1 className="font-serif text-3xl sm:text-6xl font-extrabold text-amber-50 drop-shadow-lg leading-tight">
              करवा चौथ 2026: <br className="hidden sm:inline" />
              <span className="text-gold-gradient">अखंड सुहाग व प्रेम का पावन व्रत</span>
            </h1>

            <p className="text-base sm:text-xl text-amber-100/90 max-w-2xl mx-auto leading-relaxed font-normal">
              सुहागिन महिलाओं द्वारा पति की दीर्घायु, उत्तम स्वास्थ्य और दांपत्य सुख की मंगलकामना का निर्जला अनुष्ठान।
            </p>

            {/* Verified Date Card */}
            <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-black/50 border border-festive-gold/40 backdrop-blur-md max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div>
                <span className="text-xs uppercase text-festive-gold font-bold tracking-wider block">
                  करवा चौथ व्रत तिथि 2026
                </span>
                <span className="font-serif text-2xl font-black text-amber-100 block">
                  29 अक्टूबर 2026 (गुरुवार)
                </span>
                <span className="text-xs text-amber-200/80 block mt-1">
                  पूजा मुहूर्त: शाम 05:44 से 07:02 तक • चंद्रोदय: लगभग रात्रि 08:14 बजे से
                </span>
              </div>
              <a
                href="#moonrise"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-600 to-amber-500 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-md hover:brightness-110 transition-all"
              >
                चांद का समय देखें &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-14">
        {/* Ad Slot */}
        <AdSlot slotKey="homepageBanner" />

        {/* Sargi & Traditional Customs */}
        <section className="p-8 rounded-3xl bg-white border border-festive-gold/40 shadow-sm space-y-6">
          <div className="border-b border-festive-gold/20 pb-4">
            <span className="text-xs font-bold text-festive-maroon uppercase tracking-wider block">
              परंपरा एवं नियम
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-festive-brown mt-1">
              सरगी का समय, नियम और पारंपरिक रीति-रिवाज
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-festive-brown/85 leading-relaxed">
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-base text-festive-maroon">
                1. सरगी ग्रहण करने का समय
              </h3>
              <p>
                करवा चौथ के दिन सूर्योदय से पूर्व ब्रह्म मुहूर्त (प्रातः 04:00 से 05:00 बजे के मध्य) सास अपनी बहू को सरगी भेंट करती है। सरगी में सूखे मेवे (बादाम, काजू, किशमिश), ताजे फल, मिष्ठान, मट्ठी और सेवई खाई जाती है जो दिनभर ऊर्जा बनाए रखती है।
              </p>
              <h3 className="font-serif font-bold text-base text-festive-maroon">
                2. निर्जला व्रत का संकल्प
              </h3>
              <p>
                सरगी खाने और आचमन करने के उपरांत सूर्योदय से लेकर रात्रि में चंद्रमा को अर्घ्य देने तक अन्न और जल का पूर्ण त्याग किया जाता है।
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif font-bold text-base text-festive-maroon">
                3. सायंकालीन कथा एवं करवा फेरना
              </h3>
              <p>
                शाम को सोलह श्रृंगार कर सुहागिन महिलाएं एकत्र होती हैं। करवा माता का चित्र सजाकर मिट्टी के करवे में गेहूं या जल भरकर 7 बार करवा परस्पर फेरा जाता है और पौराणिक कथा सुनी जाती है।
              </p>
              <h3 className="font-serif font-bold text-base text-festive-maroon">
                4. चंद्र दर्शन एवं पारण
              </h3>
              <p>
                रात्रि में छलनी में जलता हुआ दीया रखकर पहले चंद्रमा के दर्शन किए जाते हैं, फिर उसी छलनी से पतिदेव का मुख देखकर जल अर्घ्य दिया जाता है और पति के हाथों जल पीकर व्रत पूर्ण होता है।
              </p>
            </div>
          </div>
        </section>

        {/* Moonrise Timings by City with Verification Disclaimer */}
        <section id="moonrise" className="space-y-6 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-festive-saffron uppercase tracking-wider px-3 py-1 rounded-full bg-festive-saffron/10 border border-festive-saffron/30">
              पंचांग गणना
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-festive-brown mt-2">
              प्रमुख नगरों में चंद्रोदय का अनुमानित समय (Moonrise 2026)
            </h2>
            <p className="text-xs sm:text-sm text-festive-brown/70 mt-1">
              29 अक्टूबर 2026 को अक्षांश-देशांतर अनुसार पंचांग द्वारा अनुमानित समय
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cityMoonriseEstimated2026.map((c, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-festive-gold/30 shadow-xs text-center flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif font-bold text-base text-festive-brown">
                    {c.city}
                  </h3>
                  <span className="block font-mono text-xl font-black text-festive-maroon my-2">
                    {c.time}
                  </span>
                </div>
                <span className="text-[11px] text-festive-brown/60 block">
                  {c.note}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-900 leading-relaxed flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>सत्यापन अस्वीकरण:</strong> प्रस्तुत चंद्रोदय समय खगोलीय पंचांग गणना पर आधारित अनुमानित समय है। स्थानीय बादलों, वायुमंडलीय अपवर्तन और अक्षांशीय स्थिति के कारण वास्तविक दृश्यता में 5 से 10 मिनट का अंतर हो सकता है।
            </span>
          </div>
        </section>

        {/* Vrat Katha */}
        <section className="p-8 rounded-3xl bg-festive-ivory-soft border border-festive-gold/30 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-festive-maroon">
            करवा चौथ की पौराणिक व्रत कथा
          </h2>
          <p className="text-xs sm:text-sm text-festive-brown/85 leading-relaxed text-justify">
            पौराणिक कथा के अनुसार, वीरावती नाम की एक पतिव्रता कन्या ने अपने मायके में करवा चौथ का व्रत रखा। भूख-प्यास से व्याकुल बहन की दशा देखकर उसके भाइयों ने पीपल के पेड़ पर दीपक जलाकर छलनी की ओट में कृत्रिम चंद्रमा का आभास करा दिया और बहन को अर्घ्य दिलवा दिया। जैसे ही वीरावती ने भोजन किया, उसके पति के प्राण संकट में पड़ गए। वीरावती ने पूरे वर्ष भक्तिभाव से माता पार्वती की तपस्या की और पुनः विधिपूर्वक करवा चौथ का निर्जला व्रत रखकर यमराज से अपने पति के प्राण वापस प्राप्त किए।
          </p>
        </section>

        {/* Personalized Card Maker */}
        <section className="space-y-4">
          <div className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-festive-brown">
              जीवनसाथी के लिए करवा चौथ का फोटो कार्ड बनाएं
            </h2>
          </div>
          <GreetingGenerator defaultFestivalSlug="karwa-chauth" />
        </section>
      </div>
    </div>
  );
}
