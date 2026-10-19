import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import DigitalRavanDahan from "@/components/DigitalRavanDahan";
import GreetingGenerator from "@/components/GreetingGenerator";
import AdSlot from "@/components/AdSlot";
import { generateFestivalMetadata } from "@/lib/seo";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = generateFestivalMetadata({
  title: "दशहरा व विजयादशमी 2026: रावण दहन, नौ दुर्गा स्वरूप, पूजा विधि व शुभकामनाएँ",
  description:
    "विजयादशमी 2026 (21 अक्टूबर): अधर्म पर धर्म की विजय। ऑनलाइन डिजिटल रावण दहन, माँ दुर्गा के 9 स्वरूप, शमी पूजन, रामलीला परंपरा और शेयर करें शुभकामना संदेश।",
  path: "/festivals/dussehra",
  keywords: [
    "दशहरा 2026",
    "विजयादशमी 2026",
    "डिजिटल रावण दहन",
    "शमी पूजन",
    "नवदुर्गा",
    "कन्या पूजन",
    "दशहरा शुभकामनाएँ",
  ],
});

export default function DussehraSpecialPage() {

  const nineForms = [
    { name: "1. शैलपुत्री", day: "प्रतिपदा", blessing: "स्थिरता, शक्ति और प्रकृति प्रेम" },
    { name: "2. ब्रह्मचारिणी", day: "द्वितीया", blessing: "तप, संयम और वैराग्य" },
    { name: "3. चंद्रघंटा", day: "तृतीया", blessing: "साहस, शांति और सौम्यता" },
    { name: "4. कुष्मांडा", day: "चतुर्थी", blessing: "सृष्टि ऊर्जा और आरोग्य" },
    { name: "5. स्कंदमाता", day: "पंचमी", blessing: "मातृस्नेह और ज्ञान" },
    { name: "6. कात्यायनी", day: "षष्ठी", blessing: "असुर मर्दन और निर्भयता" },
    { name: "7. कालरात्रि", day: "सप्तमी", blessing: "शत्रु नाश और अज्ञान निवारण" },
    { name: "8. महागौरी", day: "अष्टमी", blessing: "पवित्रता, शांति और सुहाग" },
    { name: "9. सिद्धिदात्री", day: "नवमी", blessing: "सर्व सिद्धियों की प्राप्ति" },
  ];

  return (
    <div className="min-w-0 pb-16">
      {/* Grand Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-950 via-red-950 to-stone-950 text-white border-b-2 border-festive-gold">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 opacity-80">
            <Breadcrumbs
              items={[
                { name: "त्योहार", href: "/festivals" },
                { name: "विजयादशमी व दशहरा 2026", href: "/festivals/dussehra" },
              ]}
            />
          </div>

          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-900/60 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              सत्य, धर्म और पराक्रम का महापर्व
            </span>

            <h1 className="font-serif text-3xl sm:text-6xl font-extrabold text-amber-50 drop-shadow-lg leading-tight">
              अधर्म पर धर्म की विजय: <br className="hidden sm:inline" />
              <span className="text-gold-gradient">विजयादशमी / दशहरा 2026</span>
            </h1>

            <p className="text-base sm:text-xl text-amber-100/90 max-w-2xl mx-auto leading-relaxed font-normal">
              भगवान श्री राम द्वारा लंकापति रावण का वध और माँ भगवती द्वारा महिषासुर मर्दन की पावन स्मृति।
            </p>

            {/* Verified Date Card */}
            <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-black/50 border border-festive-gold/40 backdrop-blur-md max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div>
                <span className="text-xs uppercase text-festive-gold font-bold tracking-wider block">
                  दशहरा पर्व तिथि 2026
                </span>
                <span className="font-serif text-2xl font-black text-amber-100 block">
                  21 अक्टूबर 2026 (बुधवार)
                </span>
                <span className="text-xs text-amber-200/80 block mt-1">
                  विजय मुहूर्त: दोपहर 01:58 से 02:44 तक (अपराजिता व शस्त्र पूजन)
                </span>
              </div>
              <a
                href="#ravan-dahan"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-festive-saffron to-amber-500 text-stone-950 font-bold text-xs sm:text-sm whitespace-nowrap shadow-md hover:brightness-110 transition-all"
              >
                डिजिटल रावण दहन करें &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-14">
        {/* Ad Slot */}
        <AdSlot slotKey="homepageBanner" />

        {/* Section: Interactive Digital Ravan Dahan */}
        <section id="ravan-dahan" className="scroll-mt-24">
          <DigitalRavanDahan />
        </section>

        {/* Nine Forms of Maa Durga (Navratri to Dussehra) */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-festive-maroon uppercase tracking-wider px-3 py-1 rounded-full bg-festive-maroon/10 border border-festive-maroon/20">
              शक्ति साधना
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-festive-brown mt-2">
              माँ दुर्गा के नौ दिव्य स्वरूप एवं आशीर्वाद
            </h2>
            <p className="text-xs sm:text-sm text-festive-brown/70 mt-1">
              नवरात्रि के नौ दिनों में माँ भगवती के नौ स्वरूपों की उपासना और कन्या पूजन
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nineForms.map((form, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-festive-gold/30 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center text-xs text-festive-maroon font-bold mb-1">
                    <span>{form.day}</span>
                    <span>शक्ति</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-festive-brown mb-1">
                    {form.name}
                  </h3>
                  <p className="text-xs text-festive-brown/75 leading-relaxed">
                    वरदान: {form.blessing}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shami Pujan & Aparajita Worship */}
        <section className="p-8 rounded-3xl bg-white border border-festive-gold/40 shadow-sm space-y-4">
          <div className="border-b border-festive-gold/20 pb-4">
            <h2 className="font-serif text-2xl font-bold text-festive-brown">
              दशहरे पर शमी पूजन एवं सोना पत्ती बांटने की परंपरा
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-festive-brown/85 leading-relaxed space-y-3">
            <p>
              विजयादशमी के दिन शमी वृक्ष (खेजड़ी) का पूजन अत्यंत पुण्यकारी माना गया है। महाभारत काल में पांडवों ने अज्ञातवास के समय अपने दिव्य अस्त्र-शस्त्र शमी वृक्ष के कोटर में ही छिपाकर रखे थे। जब एक वर्ष बाद पांडव लौटे, तो उनके अस्त्र सुरक्षित थे।
            </p>
            <p>
              भगवान राम ने भी लंका प्रस्थान से पूर्व शमी वृक्ष की स्तुति की थी। इसलिए दशहरे के दिन शमी के पत्तों को &ldquo;सोना&rdquo; मानकर एक-दूसरे को आदरपूर्वक भेंट किया जाता है और बड़ों के चरण स्पर्श कर आशीर्वाद लिया जाता है।
            </p>
            <div className="p-4 rounded-xl bg-festive-ivory border border-festive-gold/30 font-serif font-bold text-festive-maroon text-sm">
              शमी शमयते पापम् शमी लोहितकण्टका। धारिण्यर्जुनबाणानां रामस्य प्रियवादिनी॥
            </div>
          </div>
        </section>

        {/* Dussehra Personalized Greeting Generator */}
        <section className="space-y-4">
          <div className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-festive-brown">
              विजयादशमी की शुभकामना फोटो कार्ड बनाएं
            </h2>
          </div>
          <GreetingGenerator defaultFestivalSlug="dussehra" />
        </section>
      </div>
    </div>
  );
}
