"use client";

import React, { useState } from "react";
import { Sparkles, Share2, RotateCcw, Flame } from "lucide-react";
import { templeAudio } from "@/lib/audio";
import { trackEvent } from "@/lib/analytics";
import confetti from "canvas-confetti";

export default function DigitalRavanDahan() {
  const [arrowFlying, setArrowFlying] = useState(false);
  const [ravanBurned, setRavanBurned] = useState(false);
  const [dahanCount, setDahanCount] = useState(4829);

  const shootAgniBaan = () => {
    if (arrowFlying || ravanBurned) return;

    setArrowFlying(true);
    templeAudio.playArrowShoot();

    // Arrow takes ~650ms to hit Ravan
    setTimeout(() => {
      setArrowFlying(false);
      setRavanBurned(true);
      setDahanCount((c) => c + 1);

      // Trigger Victory celebration
      templeAudio.playVictoryFanfare();
      trackEvent("ravan_dahan_complete");

      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#ea580c", "#d97706", "#dc2626", "#fbbf24"],
      });
    }, 700);
  };

  const handleReset = () => {
    setRavanBurned(false);
    setArrowFlying(false);
  };

  const shareText = `🏹🚩 मैंने UtsavSanskriti पर डिजिटल रावण दहन कर अधर्म पर धर्म की विजय मनाई! आप भी अपने भीतर के काम, क्रोध, लोभ का दहन करें और अपनों को दशहरा की शुभकामनाएँ भेजें: https://utsavsanskriti.in/festivals/dussehra`;

  const handleShare = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, "_blank");
    trackEvent("whatsapp_share", { feature: "ravan_dahan" });
  };

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-stone-950 via-red-950/90 to-stone-950 text-amber-50 p-6 sm:p-10 shadow-2xl border-2 border-amber-600/50 overflow-hidden">
      {/* Decorative Header */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-900/60 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          घर बैठे डिजिटल उत्सव
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-amber-100 drop-shadow">
          डिजिटल रावण दहन: बुराई पर अच्छाई की विजय
        </h2>
        <p className="text-sm text-amber-200/80 max-w-xl mx-auto mt-2">
          भगवान श्री राम के पावन कोदंड धनुष पर स्पर्श करें और अपने भीतर के अहंकार, ईर्ष्या व बुराई रूपी दशानन का दहन करें।
        </p>
      </div>

      {/* Battlefield Stage */}
      <div className="relative min-h-[360px] sm:min-h-[420px] bg-gradient-to-t from-stone-900 via-stone-900/50 to-stone-950 rounded-2xl border border-amber-500/30 p-6 flex items-center justify-between overflow-hidden">
        {/* Left Side: Shri Ram's Bow & Quiver */}
        <div className="flex flex-col items-center z-10">
          <div className="text-center mb-2">
            <span className="text-xs font-bold text-amber-300 block">श्री राम कोदंड धनुष</span>
            <span className="text-[10px] text-amber-200/60">दिव्य अग्नि बाण</span>
          </div>

          <button
            onClick={shootAgniBaan}
            disabled={arrowFlying || ravanBurned}
            className={`relative p-4 rounded-2xl border-2 transition-all group ${
              ravanBurned
                ? "opacity-50 border-stone-700 bg-stone-900/50 cursor-not-allowed"
                : "border-amber-400/80 bg-gradient-to-b from-amber-500/20 to-red-900/40 hover:scale-105 active:scale-95 shadow-xl hover:border-amber-300"
            }`}
            title="बाण चलाने के लिए क्लिक करें"
          >
            {/* Bow Graphic */}
            <div className="w-16 h-28 sm:w-20 sm:h-36 flex items-center justify-center relative">
              <span className="text-5xl sm:text-6xl select-none group-hover:scale-110 transition-transform">
                🏹
              </span>
            </div>
            {!ravanBurned && (
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-extrabold bg-gradient-to-r from-amber-500 to-red-600 text-stone-950 px-2.5 py-0.5 rounded-full shadow animate-pulse">
                स्पर्श करें
              </span>
            )}
          </button>
        </div>

        {/* Flying Arrow Animation in Mid-Air */}
        {arrowFlying && (
          <div className="absolute left-24 sm:left-32 top-1/2 -translate-y-1/2 z-30 transition-all duration-700 ease-linear animate-[arrowFly_0.7s_linear_forwards] flex items-center">
            <div className="relative text-3xl sm:text-4xl text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,1)]">
              🔥➔
            </div>
          </div>
        )}

        {/* Center Proclamation when Burned */}
        {ravanBurned && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center text-3xl mb-3 shadow-lg">
              🚩
            </div>
            <h3 className="font-serif text-xl sm:text-3xl font-black text-amber-200 drop-shadow mb-2">
              जय श्री राम! सत्य की विजय हुई!
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/90 max-w-md mx-auto mb-5 leading-relaxed">
              दशानन रावण का अहंकार भस्म हुआ। ईश्वर आपके जीवन से समस्त क्लेश, भय और अंधकार को मिटाकर सुख-शांति प्रदान करें।
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleShare}
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-transform active:scale-95"
              >
                <Share2 className="w-4 h-4" />
                <span>WhatsApp पर विजय संदेश भेजें</span>
              </button>

              <button
                onClick={handleReset}
                className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-amber-200 font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>पुनः दहन करें</span>
              </button>
            </div>
          </div>
        )}

        {/* Right Side: 10-Headed Ravan Puppet */}
        <div className="flex flex-col items-center z-10 text-center">
          <span className="text-xs font-bold text-red-300 block mb-1">दशानन रावण</span>

          <div
            className={`relative flex flex-col items-center transition-all duration-700 ${
              ravanBurned
                ? "scale-90 opacity-20 filter grayscale blur-sm"
                : "animate-pulse-subtle"
            }`}
          >
            {/* Ten Heads Mockup */}
            <div className="flex items-center justify-center -space-x-1.5 sm:-space-x-2 mb-1">
              {Array.from({ length: 9 }).map((_, idx) => (
                <div
                  key={idx}
                  className="w-5 h-6 sm:w-7 sm:h-8 rounded bg-gradient-to-t from-red-800 to-amber-700 border border-amber-400/60 flex items-center justify-center text-[10px] text-amber-200 font-bold shadow"
                >
                  👹
                </div>
              ))}
            </div>

            {/* Central Main Head with Crown */}
            <div className="relative w-14 h-16 sm:w-18 sm:h-20 rounded-t-xl bg-gradient-to-t from-red-900 to-amber-600 border-2 border-amber-400 flex flex-col items-center justify-center shadow-xl">
              <span className="text-sm">👑</span>
              <span className="text-xl sm:text-2xl">👺</span>
            </div>

            {/* Torso & Arms */}
            <div className="w-16 h-24 sm:w-20 sm:h-28 bg-gradient-to-b from-red-900 via-amber-900 to-stone-900 rounded-b-xl border border-amber-500/50 flex flex-col items-center justify-between p-2 shadow-2xl">
              <span className="text-xs text-amber-300 font-serif font-black">अहंकार</span>
              <div className="flex gap-2 text-xs">
                <span>⚔️</span>
                <span>🛡️</span>
              </div>
            </div>

            {/* Burning Flames effect if destroyed */}
            {ravanBurned && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Flame className="w-24 h-24 text-orange-500 animate-flame" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Counter & Action Bottom Bar */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/70 border-t border-white/10 pt-4">
        <div>
          अब तक <strong>{dahanCount.toLocaleString("hi-IN")}</strong> श्रद्धालुओं ने UtsavSanskriti पर डिजिटल रावण दहन किया है।
        </div>
        <div className="text-[11px] text-amber-300/80">
          प्रतीक: अपने भीतर के 10 दुर्गुणों (काम, क्रोध, लोभ, मोह, मद, मत्सर, अहंकार, आलस्य, हिंसा, कपट) का त्याग।
        </div>
      </div>
    </div>
  );
}
