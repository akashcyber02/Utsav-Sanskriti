"use client";

import React, { useState } from "react";
import { Sparkles, X } from "lucide-react";

interface AnnouncementBarProps {
  message?: string;
  linkText?: string;
  linkHref?: string;
}

export default function AnnouncementBar({
  message = "सनातन परंपरा और उत्सव संस्कृति: आप सभी को आने वाले पावन त्योहारों की हार्दिक शुभकामनाएँ।",
  linkText = "2026 कैलेंडर देखें",
  linkHref = "/calendar",
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-festive-maroon-dark via-festive-maroon to-festive-saffron text-amber-100 text-xs sm:text-sm py-2 px-4 shadow-sm border-b border-festive-gold/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center justify-center gap-2 flex-1 text-center font-medium">
          <Sparkles className="w-4 h-4 text-festive-gold animate-pulse hidden sm:inline" />
          <span>{message}</span>
          {linkHref && (
            <a
              href={linkHref}
              className="ml-2 inline-block font-semibold text-festive-gold-light hover:text-white underline underline-offset-2 transition-colors"
            >
              {linkText} &rarr;
            </a>
          )}
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-amber-200/70 hover:text-white p-1 rounded transition-colors focus:outline-none"
          aria-label="सूचना बंद करें"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
