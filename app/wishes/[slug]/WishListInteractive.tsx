"use client";

import React, { useState } from "react";
import { WishItem, RecipientCategory } from "@/lib/types";
import { Share2, Copy, Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface WishListInteractiveProps {
  wishes: WishItem[];
  festivalSlug: string;
  festivalName: string;
}

export default function WishListInteractive({
  wishes,
  festivalSlug,
  festivalName,
}: WishListInteractiveProps) {
  const [selectedRecipient, setSelectedRecipient] = useState<RecipientCategory | "all">("all");
  const [language, setLanguage] = useState<"hindi" | "hinglish" | "english">("hindi");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const recipients: Array<{ id: RecipientCategory | "all"; label: string }> = [
    { id: "all", label: "सभी संदेश" },
    { id: "family", label: "परिवार" },
    { id: "parents", label: "माता-पिता" },
    { id: "friends", label: "मित्र" },
    { id: "spouse", label: "जीवनसाथी" },
    { id: "colleagues", label: "सहकर्मी" },
  ];

  const filteredWishes = selectedRecipient === "all"
    ? wishes
    : wishes.filter((w) => w.recipient === selectedRecipient);

  const handleCopy = async (wish: WishItem) => {
    let textToCopy = wish.textHindi;
    if (language === "hinglish" && wish.textHinglish) textToCopy = wish.textHinglish;
    if (language === "english" && wish.textEnglish) textToCopy = wish.textEnglish;

    const fullMessage = `${textToCopy}\n\n(UtsavSanskriti.in/wishes/${festivalSlug})`;
    try {
      await navigator.clipboard.writeText(fullMessage);
      setCopiedId(wish.id);
      trackEvent("wish_copy", { festival: festivalSlug, wishId: wish.id });
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      // Fallback
    }
  };

  const handleShare = (wish: WishItem) => {
    let textToShare = wish.textHindi;
    if (language === "hinglish" && wish.textHinglish) textToShare = wish.textHinglish;
    if (language === "english" && wish.textEnglish) textToShare = wish.textEnglish;

    const fullMessage = `*${festivalName}*\n\n${textToShare}\n\nपूरी पूजा विधि व कैलेंडर देखें: https://utsavsanskriti.in/festivals/${festivalSlug}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(fullMessage)}`, "_blank");
    trackEvent("whatsapp_share", { feature: "wish_item", festival: festivalSlug });
  };

  return (
    <div className="space-y-6">
      {/* Filters Bar */}
      <div className="p-4 rounded-2xl bg-white border border-festive-gold/30 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Recipient Pills */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {recipients.map((rec) => (
            <button
              key={rec.id}
              onClick={() => setSelectedRecipient(rec.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedRecipient === rec.id
                  ? "bg-festive-maroon text-white font-bold"
                  : "bg-festive-ivory-soft hover:bg-festive-ivory text-festive-brown border border-festive-gold/30"
              }`}
            >
              {rec.label}
            </button>
          ))}
        </div>

        {/* Language Tabs */}
        <div className="flex items-center gap-1.5 self-end md:self-auto">
          {[
            { id: "hindi", label: "हिंदी" },
            { id: "hinglish", label: "Hinglish" },
            { id: "english", label: "English" },
          ].map((lang) => (
            <button
              key={lang.id}
              onClick={() => setLanguage(lang.id as typeof language)}
              className={`px-2.5 py-1 text-xs rounded-lg font-semibold transition-colors ${
                language === lang.id
                  ? "bg-festive-saffron text-white"
                  : "text-festive-brown/70 hover:text-festive-maroon"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredWishes.map((wish) => {
          let displayText = wish.textHindi;
          if (language === "hinglish" && wish.textHinglish) displayText = wish.textHinglish;
          if (language === "english" && wish.textEnglish) displayText = wish.textEnglish;

          return (
            <div
              key={wish.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-festive-gold/30 hover:border-festive-gold shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-festive-brown/60 mb-3">
                  <span className="font-bold text-festive-maroon px-2 py-0.5 rounded bg-festive-ivory-soft border border-festive-gold/25">
                    {wish.recipientLabel}
                  </span>
                  <span className="text-[11px] text-festive-saffron font-medium">
                    {wish.toneLabel}
                  </span>
                </div>

                <p className="font-serif text-sm sm:text-base text-festive-brown leading-relaxed mb-4">
                  {displayText}
                </p>
              </div>

              {/* Actions: Copy & WhatsApp Share */}
              <div className="pt-3 border-t border-festive-gold/20 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleCopy(wish)}
                  className="px-3 py-1.5 rounded-lg bg-festive-ivory-soft hover:bg-festive-ivory text-festive-brown text-xs font-semibold border border-festive-gold/30 flex items-center gap-1.5 transition-colors"
                >
                  {copiedId === wish.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">कॉपी हुआ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-festive-brown/70" />
                      <span>कॉपी करें</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleShare(wish)}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>WhatsApp शेयर</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
