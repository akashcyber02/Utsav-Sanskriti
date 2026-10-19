"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Share2, Sparkles, CheckCircle2 } from "lucide-react";
import { Festival } from "@/lib/types";
import { createWhatsAppShareUrl } from "@/lib/festival-utils";
import { trackEvent } from "@/lib/analytics";

interface FestivalCardProps {
  festival: Festival;
  className?: string;
}

export default function FestivalCard({ festival, className = "" }: FestivalCardProps) {
  const shareUrl = createWhatsAppShareUrl({
    text: `*${festival.nameHindi} 2026*\nदिनांक: ${festival.dateInfo2026.displayDate} (${festival.dateInfo2026.dayOfWeek})\n${festival.tagline}`,
    url: `https://utsavsanskriti.in/festivals/${festival.slug}`,
  });

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    trackEvent("whatsapp_share", { festival: festival.slug });
    window.open(shareUrl, "_blank");
  };

  return (
    <div
      className={`group relative rounded-2xl bg-white border border-festive-gold/30 hover:border-festive-gold shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 ${className}`}
    >
      {/* Top Banner Accent */}
      <div className={`h-2.5 w-full bg-gradient-to-r ${festival.bannerGradient || "from-festive-maroon to-festive-saffron"}`} />

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Category & Verification Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-festive-ivory-soft text-festive-maroon border border-festive-gold/40">
            {festival.categoryLabel}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>2026 सत्यापित</span>
          </span>
        </div>

        {/* Festival Name */}
        <Link href={`/festivals/${festival.slug}`} className="block group-hover:text-festive-maroon transition-colors">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-festive-brown leading-snug">
            {festival.nameHindi}
          </h3>
          <p className="text-xs text-festive-brown/50 font-medium mt-0.5">
            {festival.nameEnglish}
          </p>
        </Link>

        {/* Date & Day Badge */}
        <div className="mt-3.5 p-3 rounded-xl bg-festive-ivory/80 border border-festive-gold/25 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-festive-maroon/10 text-festive-maroon flex items-center justify-center">
              <Calendar className="w-4 h-4 text-festive-maroon" />
            </div>
            <div>
              <span className="block text-xs sm:text-sm font-bold text-festive-brown">
                {festival.dateInfo2026.displayDate}
              </span>
              <span className="block text-[11px] text-festive-brown/65">
                {festival.dateInfo2026.dayOfWeek} • {festival.dateInfo2026.hinduMonth} {festival.dateInfo2026.paksha} पक्ष
              </span>
            </div>
          </div>
        </div>

        {/* Deity & One-line Significance */}
        <div className="mt-3 flex-1">
          <div className="flex items-center gap-1 text-xs text-festive-saffron font-medium mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>आराध्य: {festival.deity}</span>
          </div>
          <p className="text-xs text-festive-brown/75 line-clamp-2 leading-relaxed">
            {festival.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Footer: Read Details & WhatsApp Share */}
      <div className="px-5 py-3.5 bg-festive-ivory-soft/60 border-t border-festive-gold/20 flex items-center justify-between gap-3">
        <Link
          href={`/festivals/${festival.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-festive-maroon hover:text-festive-saffron transition-colors"
        >
          <span>पूजा विधि व महत्व</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>

        <button
          onClick={handleShareClick}
          className="p-2 rounded-lg bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-200 transition-colors shadow-xs"
          title="WhatsApp पर शेयर करें"
          aria-label={`${festival.nameHindi} WhatsApp पर शेयर करें`}
        >
          <Share2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
