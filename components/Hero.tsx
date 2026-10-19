"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Calendar, ArrowRight, HeartHandshake, Clock, ShieldCheck } from "lucide-react";
import { Festival } from "@/lib/types";

interface HeroProps {
  upcomingFestival: Festival;
}

export default function Hero({ upcomingFestival }: HeroProps) {
  // Verified Countdown timer for upcoming festival
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isUpcoming: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isUpcoming: false });

  useEffect(() => {
    const calculateTime = () => {
      const targetTime = new Date(`${upcomingFestival.dateInfo2026.date}T00:00:00`).getTime();
      const now = new Date().getTime();
      const diff = targetTime - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds, isUpcoming: true });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isUpcoming: false });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [upcomingFestival.dateInfo2026.date]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-festive-maroon-dark to-stone-950 text-white py-14 sm:py-20 lg:py-24 border-b-2 border-festive-gold/40">
      {/* Background Indian Festive Decorative Ornaments & Glows */}
      <div className="absolute inset-0 bg-festive-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-festive-saffron/20 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Sacred Shubh Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-festive-gold/40 text-festive-gold-light text-xs font-semibold shadow-inner">
              <span className="text-sm">🪔</span>
              <span>हर पर्व की परंपरा, हर रिश्ते के लिए शुभकामनाएँ</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-amber-50 leading-[1.18] drop-shadow-md">
              सनातन संस्कृति के रंग, <br className="hidden sm:inline" />
              <span className="text-gold-gradient">हर त्योहार के संग</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-amber-100/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              जानिए अपने त्योहारों का धार्मिक महत्व, प्रमाणित पूजा विधि, व्रत कथा, मुहूर्त और अपनों को भेजिए दिल से निकली व्यक्तिगत शुभकामनाएँ।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/festivals"
                className="px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-festive-saffron to-festive-gold text-stone-950 font-extrabold text-sm sm:text-base shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>त्योहार देखें</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/greeting-maker"
                className="px-6 sm:px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-amber-100 font-bold text-sm sm:text-base border border-festive-gold/50 shadow-md backdrop-blur-md active:scale-95 transition-all flex items-center gap-2"
              >
                <HeartHandshake className="w-4 h-4 text-festive-gold" />
                <span>शुभकामनाएँ भेजें</span>
              </Link>
            </div>

            {/* Trust and Feature Bullets */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-amber-200/70">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-festive-gold" />
                <span>100% प्रामाणिक पंचांग 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-festive-gold" />
                <span>फोटो कार्ड व WhatsApp शेयर</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-base">🪔</span>
                <span>डिजिटल पूजा घर</span>
              </div>
            </div>
          </div>

          {/* Right Upcoming Festival Feature Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-3xl bg-gradient-to-b from-stone-900/90 via-festive-maroon/70 to-stone-950 p-6 sm:p-7 border-2 border-festive-gold/50 shadow-2xl backdrop-blur-md text-amber-50 relative group">
              {/* Card Corner Ornament */}
              <div className="absolute top-3 right-3 text-2xl select-none">🪔</div>

              <div className="flex items-center gap-2 text-xs font-bold text-festive-gold uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5 text-festive-saffron" />
                <span>आगामी पावन पर्व 2026</span>
              </div>

              {/* Festival Name */}
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-100">
                {upcomingFestival.nameHindi}
              </h2>
              <p className="text-xs text-amber-200/60 mt-0.5">
                {upcomingFestival.nameEnglish} • {upcomingFestival.dateInfo2026.hinduMonth} मास
              </p>

              {/* Verified Date Badge */}
              <div className="my-4 p-3 rounded-2xl bg-black/40 border border-festive-gold/30 flex items-center justify-between">
                <div>
                  <span className="block text-sm sm:text-base font-extrabold text-festive-gold-light">
                    {upcomingFestival.dateInfo2026.displayDate}
                  </span>
                  <span className="block text-xs text-amber-200/70">
                    {upcomingFestival.dateInfo2026.dayOfWeek} • {upcomingFestival.dateInfo2026.tithi}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 block">सत्यापित</span>
                  <span className="text-[11px] text-amber-200/60">पंचांग अनुसार</span>
                </div>
              </div>

              {/* Verified Countdown Timer (only when event is verified upcoming) */}
              {timeLeft.isUpcoming ? (
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold mb-2">
                    <Clock className="w-3.5 h-3.5 text-festive-gold" />
                    <span>शुभ आगमन में शेष समय:</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="p-2 rounded-xl bg-white/5 border border-festive-gold/20">
                      <span className="block font-mono text-xl sm:text-2xl font-black text-festive-gold">
                        {timeLeft.days}
                      </span>
                      <span className="text-[10px] text-amber-200/60">दिन</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 border border-festive-gold/20">
                      <span className="block font-mono text-xl sm:text-2xl font-black text-festive-gold">
                        {timeLeft.hours}
                      </span>
                      <span className="text-[10px] text-amber-200/60">घंटे</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 border border-festive-gold/20">
                      <span className="block font-mono text-xl sm:text-2xl font-black text-festive-gold">
                        {timeLeft.minutes}
                      </span>
                      <span className="text-[10px] text-amber-200/60">मिनट</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 border border-festive-gold/20">
                      <span className="block font-mono text-xl sm:text-2xl font-black text-festive-gold">
                        {timeLeft.seconds}
                      </span>
                      <span className="text-[10px] text-amber-200/60">सेकंड</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-4 text-xs text-amber-200/70 p-2 rounded-lg bg-white/5">
                  यह पर्व वर्ष 2026 पंचांग में सत्यापित रूप से दर्ज है।
                </div>
              )}

              {/* Short Description */}
              <p className="text-xs text-amber-100/80 leading-relaxed line-clamp-2 mb-5">
                {upcomingFestival.shortDescription}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <Link
                  href={`/festivals/${upcomingFestival.slug}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-festive-maroon to-festive-saffron hover:brightness-110 active:scale-95 text-white font-bold text-xs sm:text-sm text-center shadow-lg transition-all"
                >
                  पूजा विधि व पूर्ण विवरण देखें &rarr;
                </Link>
                <Link
                  href={`/greeting-maker?festival=${upcomingFestival.slug}`}
                  className="py-3 px-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-festive-gold border border-festive-gold/40 text-xs font-semibold transition-colors"
                  title="शुभकामना कार्ड बनाएं"
                >
                  <Sparkles className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
