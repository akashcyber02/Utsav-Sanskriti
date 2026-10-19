import React from "react";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import FestivalGrid from "@/components/FestivalGrid";
import GreetingGenerator from "@/components/GreetingGenerator";
import DigitalPujaRoom from "@/components/DigitalPujaRoom";
import AdSlot from "@/components/AdSlot";
import { getAllFestivals, getUpcomingHeroFestival } from "@/lib/festival-utils";
import { FESTIVAL_CATEGORIES } from "@/data/categories";
import { CULTURAL_ARTICLES } from "@/data/cultural-articles";
import {
  BookOpen,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  const allFestivals = getAllFestivals();
  const upcomingHero = getUpcomingHeroFestival("2026-10-18");

  // Popular Wish collections for Section E
  const popularWishCollections = [
    { name: "दिवाली की शुभकामनाएँ", slug: "diwali", icon: "🪔" },
    { name: "दशहरा की शुभकामनाएँ", slug: "dussehra", icon: "🏹" },
    { name: "नवरात्रि की शुभकामनाएँ", slug: "shardiya-navratri", icon: "🌸" },
    { name: "करवा चौथ की शुभकामनाएँ", slug: "karwa-chauth", icon: "🌙" },
    { name: "होली की शुभकामनाएँ", slug: "holi", icon: "🎨" },
    { name: "रक्षाबंधन की शुभकामनाएँ", slug: "raksha-bandhan", icon: "🧵" },
    { name: "जन्माष्टमी की शुभकामनाएँ", slug: "janmashtami", icon: "🦚" },
    { name: "गणेश चतुर्थी की शुभकामनाएँ", slug: "ganesh-chaturthi", icon: "🐘" },
  ];

  return (
    <div className="min-w-0">
      {/* Section A: Announcement Bar */}
      <AnnouncementBar
        message="सनातन संस्कृति एवं पंचांग 2026: आप सभी को आने वाले त्योहारों की हार्दिक शुभकामनाएँ।"
        linkText="संपूर्ण कैलेंडर देखें"
        linkHref="/calendar"
      />

      {/* Section B: Hero Section */}
      <Hero upcomingFestival={upcomingHero} />

      {/* Reserved Homepage Ad Slot (Section 14) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <AdSlot slotKey="homepageBanner" />
      </div>

      {/* Section C: Today's / Upcoming Festivals Grid with Filters */}
      <section id="festivals-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FestivalGrid
          initialFestivals={allFestivals}
          title="2026 हिन्दू त्योहार, व्रत एवं पंचांग तिथियाँ"
          subtitle="सम्पूर्ण वर्ष की सत्यापित तिथियाँ, शुभ मुहूर्त एवं शास्त्रीय पूजा विधि"
        />
      </section>

      {/* Special Feature: Digital Puja Room (Interactive Mandir) */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <DigitalPujaRoom />
      </section>

      {/* Section D: Festival Categories */}
      <section className="py-16 sm:py-20 bg-festive-ivory-soft border-y border-festive-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-festive-maroon uppercase tracking-wider px-3 py-1 rounded-full bg-festive-gold/20 border border-festive-gold/40">
              सांस्कृतिक वर्गीकरण
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-festive-brown mt-2">
              त्योहारों की श्रेणियाँ
            </h2>
            <p className="text-sm sm:text-base text-festive-brown/70 mt-1">
              अपनी रुचि अनुसार देवी-देवताओं के पर्व, उपवास व ऋतु उत्सव देखें
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {FESTIVAL_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/festivals?category=${cat.id}`}
                className="group relative p-6 rounded-2xl bg-white border border-festive-gold/30 hover:border-festive-maroon shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-festive-maroon to-festive-saffron text-amber-100 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-105 transition-transform shadow-md">
                    🪔
                  </div>
                  <h3 className="font-serif text-lg font-bold text-festive-brown group-hover:text-festive-maroon transition-colors">
                    {cat.titleHindi}
                  </h3>
                  <p className="text-xs text-festive-brown/50 mb-2">
                    {cat.titleEnglish}
                  </p>
                  <p className="text-xs text-festive-brown/75 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-festive-gold/20 flex items-center text-xs font-bold text-festive-maroon group-hover:text-festive-saffron transition-colors">
                  <span>पर्व सूची देखें</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section E: Popular Wishes Hub */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-festive-saffron uppercase tracking-wider px-3 py-1 rounded-full bg-festive-saffron/10 border border-festive-saffron/30">
            लोकप्रिय शुभकामनाएँ
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-festive-brown mt-2">
            अपनों को भेजें दिल से निकली शुभकामनाएँ
          </h2>
          <p className="text-sm sm:text-base text-festive-brown/70 mt-1">
            परिवार, दोस्तों और सहकर्मियों के लिए WhatsApp पर साझा करने योग्य संदेश
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {popularWishCollections.map((col) => (
            <Link
              key={col.slug}
              href={`/wishes/${col.slug}`}
              className="p-5 rounded-2xl bg-white border border-festive-gold/30 hover:border-festive-gold hover:shadow-md transition-all flex flex-col items-center text-center group"
            >
              <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {col.icon}
              </span>
              <span className="font-serif text-base font-bold text-festive-brown group-hover:text-festive-maroon transition-colors">
                {col.name}
              </span>
              <span className="text-xs text-festive-saffron mt-2 flex items-center gap-1">
                <span>संदेश देखें</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/wishes"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-festive-maroon text-white font-bold text-sm shadow hover:bg-festive-maroon-dark transition-colors"
          >
            <span>सभी शुभकामना संग्रह देखें</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Section G: Interactive Personalized Greeting Generator */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-festive-ivory via-festive-ivory-soft to-festive-ivory border-y border-festive-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GreetingGenerator />
        </div>
      </section>

      {/* Section F: Featured Puja Vidhi Guides */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-festive-maroon uppercase tracking-wider px-3 py-1 rounded-full bg-festive-maroon/10 border border-festive-maroon/30">
            शास्त्रसम्मत विधि
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-festive-brown mt-2">
            प्रामाणिक पूजा विधि एवं सामग्री
          </h2>
          <p className="text-sm sm:text-base text-festive-brown/70 mt-1">
            सरल हिंदी में समझें सामान्य तैयारी, आवश्यक सामग्री, मंत्र और परंपरागत कथा
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "दीपावली महालक्ष्मी-गणेश पूजा विधि",
              slug: "diwali",
              time: "15 मिनट पाठ",
              desc: "चौकी स्थापना, कलश पूजन, कमलगट्टा अर्पण, श्रीसूक्त व प्रदोष काल स्थिर लग्न मुहूर्त।",
            },
            {
              title: "करवा चौथ निर्जला व्रत एवं पूजन विधि",
              slug: "karwa-chauth",
              time: "10 मिनट पाठ",
              desc: "सरगी नियम, संध्या समय करवा फेरना, पौराणिक कथा व चंद्र दर्शन अर्घ्य विधि।",
            },
            {
              title: "विजयादशमी अपराजिता एवं शमी पूजन",
              slug: "dussehra",
              time: "8 मिनट पाठ",
              desc: "विजय मुहूर्त, शमी पत्र (सोना पत्ती) अर्पण, शस्त्र व साधन पूजन और रावण दहन का आध्यात्मिक रहस्य।",
            },
          ].map((guide, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-festive-gold/30 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-festive-saffron font-bold mb-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{guide.time}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-festive-brown mb-2">
                  {guide.title}
                </h3>
                <p className="text-xs text-festive-brown/75 leading-relaxed">
                  {guide.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-festive-gold/20 flex items-center justify-between">
                <Link
                  href={`/festivals/${guide.slug}#puja-vidhi`}
                  className="text-xs font-bold text-festive-maroon hover:underline flex items-center gap-1"
                >
                  <span>संपूर्ण विधि पढ़ें</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>सत्यापित</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/puja-vidhi"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-festive-ivory-soft hover:bg-festive-ivory text-festive-maroon font-bold text-sm border border-festive-gold/50 transition-colors"
          >
            <span>सभी पूजा मार्गदर्शिकाएँ देखें</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Section H: Cultural Knowledge & Articles */}
      <section className="py-16 sm:py-20 bg-festive-ivory-soft border-t border-festive-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-festive-saffron uppercase tracking-wider px-3 py-1 rounded-full bg-festive-saffron/10 border border-festive-saffron/30">
              सांस्कृतिक ज्ञान गंगा
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-festive-brown mt-2">
              सनातन परंपरा का वैज्ञानिक एवं आध्यात्मिक आधार
            </h2>
            <p className="text-sm sm:text-base text-festive-brown/70 mt-1">
              जानिए हमारे त्योहारों, दीपों, रंगोली और उपवास के पीछे छिपे वैज्ञानिक रहस्य
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CULTURAL_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="p-6 rounded-2xl bg-white border border-festive-gold/30 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-festive-brown/50 mb-3">
                    <span className="font-semibold text-festive-maroon">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-festive-brown mb-2 leading-snug">
                    {article.titleHindi}
                  </h3>
                  <p className="text-xs text-festive-brown/75 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-festive-gold/20">
                  <span className="text-xs font-semibold text-festive-saffron">
                    सांस्कृतिक धरोहर लेख
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Panchang Verification Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-festive-maroon via-festive-maroon-dark to-festive-maroon text-amber-50 border border-festive-gold/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-festive-gold font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>सत्यापित पंचांग एवं सांस्कृतिक प्रामाणिकता</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-amber-100">
              त्योहारों की शुद्ध गणना एवं क्षेत्रीय परंपराओं का आदर
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/80 max-w-2xl leading-relaxed">
              UtsavSanskriti पर दी गई सभी तिथियां राष्ट्रीय पंचांग, दृक पंचांग और निर्णय सिंधु के आधार पर जांची गई हैं। हम किसी भी मनगढ़ंत मुहूर्त का समर्थन नहीं करते।
            </p>
          </div>
          <Link
            href="/calendar"
            className="px-6 py-3 rounded-full bg-festive-gold hover:bg-festive-gold-light text-stone-950 font-bold text-xs sm:text-sm shadow whitespace-nowrap transition-colors"
          >
            2026 पंचांग कैलेंडर खोलें
          </Link>
        </div>
      </section>
    </div>
  );
}
