"use client";

import React, { useState } from "react";
import { Bell, Flame, Sparkles, Volume2, RotateCcw, CheckCircle2 } from "lucide-react";
import { templeAudio } from "@/lib/audio";
import { trackEvent } from "@/lib/analytics";
import confetti from "canvas-confetti";

export default function DigitalPujaRoom() {
  const [isDiyaLit, setIsDiyaLit] = useState(false);
  const [diyaCount, setDiyaCount] = useState(1284);
  const [isBellRinging, setIsBellRinging] = useState(false);
  const [isShankhBlowing, setIsShankhBlowing] = useState(false);
  const [isAartiActive, setIsAartiActive] = useState(false);
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number }>>([]);
  const [japaCount, setJapaCount] = useState(0);
  const [selectedMantra, setSelectedMantra] = useState<"gayatri" | "mahamrityunjaya" | "shiva" | "krishna">("gayatri");

  const mantras = {
    gayatri: {
      title: "गायत्री महामंत्र",
      text: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥",
      meaning: "उस प्राणस्वरूप, दुःखनाशक, सुखस्वरूप, श्रेष्ठ, तेजस्वी, पापनाशक, देवस्वरूप परमात्मा को हम अपनी अन्तरात्मा में धारण करें, वह परमात्मा हमारी बुद्धि को सन्मार्ग में प्रेरित करे।",
    },
    mahamrityunjaya: {
      title: "महामृत्युंजय मंत्र",
      text: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥",
      meaning: "हम त्रिनेत्रधारी भगवान शिव की आराधना करते हैं जो सुगंधित हैं और हमारा पोषण करते हैं। जैसे पका हुआ खरबूजा बेल से मुक्त होता है, वैसे ही हम मृत्यु और जन्म के चक्र से मुक्त होकर अमृतत्व प्राप्त करें।",
    },
    shiva: {
      title: "पंचाक्षरी शिव मंत्र",
      text: "ॐ नमः शिवाय",
      meaning: "कल्याणकारी, शांत और शाश्वत देवाधिदेव महादेव को मेरा सादर प्रणाम।",
    },
    krishna: {
      title: "हरे कृष्ण महामंत्र",
      text: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे॥",
      meaning: "हे भगवान की आह्लादिनी शक्ति! हे सर्व-आकर्षक श्रीकृष्ण! मुझे अपनी निष्काम प्रेमाभक्ति में संलग्न कीजिए।",
    },
  };

  // Ring Temple Bell
  const handleRingBell = () => {
    setIsBellRinging(true);
    templeAudio.playTempleBell();
    trackEvent("digital_puja_bell");
    setTimeout(() => setIsBellRinging(false), 1200);
  };

  // Blow Sacred Shankh
  const handleBlowShankh = () => {
    setIsShankhBlowing(true);
    templeAudio.playShankh();
    trackEvent("digital_puja_shankh");
    setTimeout(() => setIsShankhBlowing(false), 3600);
  };

  // Light Diya
  const handleToggleDiya = () => {
    if (!isDiyaLit) {
      templeAudio.playDiyaChime();
      setIsDiyaLit(true);
      setDiyaCount((prev) => prev + 1);
      trackEvent("digital_puja_diya");
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#f59e0b", "#ea580c", "#d97706"],
      });
    } else {
      setIsDiyaLit(false);
    }
  };

  // Shower Fresh Flowers (पुष्प अर्पण)
  const handleShowerFlowers = () => {
    templeAudio.playDiyaChime();
    const newPetals = Array.from({ length: 14 }).map((_, i) => ({
      id: Date.now() + i,
      left: 10 + Math.random() * 80,
      delay: Math.random() * 0.4,
    }));
    setPetals(newPetals);
    setTimeout(() => setPetals([]), 2500);
  };

  // Aarti Movement Toggle
  const handleToggleAarti = () => {
    if (!isAartiActive) {
      templeAudio.playTempleBell();
      setIsAartiActive(true);
    } else {
      setIsAartiActive(false);
    }
  };

  // Japa Counter increment
  const handleCountJapa = () => {
    const next = japaCount + 1;
    setJapaCount(next);

    // Subtle audio feedback every bead
    if (next % 10 === 0) {
      templeAudio.playDiyaChime();
    }

    if (next === 108) {
      templeAudio.playVictoryFanfare();
      trackEvent("mala_counter_108", { mantra: selectedMantra });
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#d4af37", "#ea580c", "#701a1e"],
      });
    }
  };

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-festive-maroon-dark via-festive-maroon to-stone-950 text-amber-50 p-6 sm:p-10 shadow-2xl border-2 border-festive-gold/40 overflow-hidden">
      {/* Decorative Arch Motifs */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-festive-gold via-festive-gold-light to-festive-gold opacity-80" />
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-festive-gold/20 text-festive-gold border border-festive-gold/40 text-xs font-bold tracking-wider uppercase mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          घर बैठे ई-दर्शन एवं आराधना
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-amber-100 drop-shadow">
          डिजिटल पूजा घर एवं नित्य साधना
        </h2>
        <p className="text-sm text-amber-200/80 max-w-xl mx-auto mt-2">
          मंदिर की पावन घंटी बजाएं, दिव्य शंखनाद करें, दीप प्रज्वलित करें और 108 माला जाप द्वारा अपने दिन को मंगलमय बनाएं।
        </p>
      </div>

      {/* Main Altar / Puja Stage */}
      <div className="relative max-w-3xl mx-auto bg-stone-900/80 rounded-2xl p-6 sm:p-8 border border-festive-gold/30 shadow-inner backdrop-blur-sm mb-8">
        {/* Flower Petals Layer */}
        {petals.map((p) => (
          <div
            key={p.id}
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
            }}
            className="absolute top-0 text-xl select-none pointer-events-none animate-bounce"
          >
            🌸
          </div>
        ))}

        {/* Central Sacred Deity Display */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Hanging Mandir Bell */}
          <div className="mb-4">
            <button
              onClick={handleRingBell}
              className={`p-3 rounded-full bg-gradient-to-b from-amber-400 to-amber-600 text-stone-950 shadow-lg hover:scale-110 active:scale-95 transition-transform ${
                isBellRinging ? "animate-bell-swing" : ""
              }`}
              title="मंदिर की घंटी बजाएं"
              aria-label="मंदिर की घंटी बजाएं"
            >
              <Bell className="w-8 h-8 fill-amber-950 text-amber-950" />
            </button>
            <span className="block text-[11px] text-amber-200/70 mt-1">घंटी बजाएं (क्लिक करें)</span>
          </div>

          {/* Central Sanctum Icon (ॐ & Shubh Symbol) */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-amber-500/20 via-festive-maroon/60 to-black border-4 border-festive-gold flex items-center justify-center shadow-2xl mb-6">
            <span className="font-serif text-6xl sm:text-7xl font-bold text-festive-gold drop-shadow-lg select-none">
              ॐ
            </span>

            {/* Orbiting Aarti Thali */}
            {isAartiActive && (
              <div className="absolute inset-0 animate-spin-slow pointer-events-none">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 p-2 rounded-full bg-amber-500 text-xs shadow-lg diya-glow">
                  🪔
                </div>
              </div>
            )}
          </div>

          {/* The Sacred Diya */}
          <div className="flex flex-col items-center gap-2 mb-6">
            <button
              onClick={handleToggleDiya}
              className={`px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-md active:scale-95 ${
                isDiyaLit
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 diya-glow font-extrabold"
                  : "bg-white/10 text-amber-200 border border-festive-gold/40 hover:bg-white/15"
              }`}
            >
              <Flame className={`w-5 h-5 ${isDiyaLit ? "text-red-700 animate-flame" : "text-amber-400"}`} />
              <span>{isDiyaLit ? "दीपक प्रज्वलित है (क्लिक कर बुझाएं)" : "पवित्र दीपक जलाएँ"}</span>
            </button>
            <span className="text-xs text-amber-200/60">
              आज कुल <strong>{diyaCount.toLocaleString("hi-IN")}</strong> भक्तों ने दीप प्रज्वलित किया है।
            </span>
          </div>

          {/* Puja Quick Action Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
            <button
              onClick={handleRingBell}
              className="p-3 rounded-xl bg-white/5 border border-festive-gold/25 hover:bg-festive-gold/20 hover:border-festive-gold text-xs font-semibold text-amber-100 flex flex-col items-center gap-1.5 transition-colors"
            >
              <Bell className="w-5 h-5 text-festive-gold" />
              <span>मंदिर घंटी</span>
            </button>

            <button
              onClick={handleBlowShankh}
              className={`p-3 rounded-xl bg-white/5 border border-festive-gold/25 hover:bg-festive-gold/20 hover:border-festive-gold text-xs font-semibold text-amber-100 flex flex-col items-center gap-1.5 transition-colors ${
                isShankhBlowing ? "ring-2 ring-amber-400 bg-festive-gold/20" : ""
              }`}
            >
              <Volume2 className="w-5 h-5 text-festive-gold" />
              <span>{isShankhBlowing ? "शंखनाद हो रहा है..." : "दिव्य शंखनाद"}</span>
            </button>

            <button
              onClick={handleShowerFlowers}
              className="p-3 rounded-xl bg-white/5 border border-festive-gold/25 hover:bg-festive-gold/20 hover:border-festive-gold text-xs font-semibold text-amber-100 flex flex-col items-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span>पुष्प अर्पण (फूल)</span>
            </button>

            <button
              onClick={handleToggleAarti}
              className={`p-3 rounded-xl bg-white/5 border border-festive-gold/25 hover:bg-festive-gold/20 hover:border-festive-gold text-xs font-semibold text-amber-100 flex flex-col items-center gap-1.5 transition-colors ${
                isAartiActive ? "ring-2 ring-amber-400 bg-festive-gold/20" : ""
              }`}
            >
              <Flame className="w-5 h-5 text-orange-400" />
              <span>{isAartiActive ? "आरती रोकें" : "आरती घुमाएँ"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 108 Mala Japa Counter Section */}
      <div className="max-w-3xl mx-auto bg-stone-900/60 rounded-2xl p-6 border border-festive-gold/25">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
          <div>
            <h3 className="font-serif text-lg font-bold text-festive-gold flex items-center gap-2">
              <span>📿 108 रुद्राक्ष / तुलसी माला जाप काउंटर</span>
            </h3>
            <p className="text-xs text-amber-200/70">
              मंत्र चुनें और माला के मनके फेरने के लिए &ldquo;जाप करें&rdquo; पर स्पर्श करें।
            </p>
          </div>

          {/* Mantra Selector Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {(Object.keys(mantras) as Array<keyof typeof mantras>).map((k) => (
              <button
                key={k}
                onClick={() => setSelectedMantra(k)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                  selectedMantra === k
                    ? "bg-festive-gold text-stone-950 font-bold"
                    : "bg-white/5 text-amber-200 hover:bg-white/10"
                }`}
              >
                {mantras[k].title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Mantra Text & Meaning */}
        <div className="bg-black/30 p-4 rounded-xl border border-festive-gold/20 text-center mb-6">
          <p className="font-serif text-base sm:text-xl font-bold text-amber-200 leading-relaxed mb-2">
            {mantras[selectedMantra].text}
          </p>
          <p className="text-xs text-amber-100/70 italic max-w-xl mx-auto">
            अर्थ: {mantras[selectedMantra].meaning}
          </p>
        </div>

        {/* Japa Bead Interaction */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-20 h-20 rounded-full bg-festive-gold/20 border-2 border-festive-gold flex items-center justify-center">
              <span className="font-mono text-2xl font-black text-festive-gold">
                {japaCount}
              </span>
              <span className="absolute bottom-1 text-[9px] text-amber-200/70">/ 108</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-200 block">
                {japaCount >= 108 ? "🎉 1 माला पूर्ण हुई!" : `माला प्रगति (${Math.round((japaCount / 108) * 100)}%)`}
              </span>
              <div className="w-36 h-2 bg-white/10 rounded-full mt-1 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-festive-gold to-amber-500 rounded-full transition-all duration-200"
                  style={{ width: `${Math.min((japaCount / 108) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCountJapa}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-festive-gold to-amber-500 text-stone-950 font-bold text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>जाप करें (मनका फेरें)</span>
              <span className="text-base">📿</span>
            </button>
            <button
              onClick={() => setJapaCount(0)}
              className="p-3 rounded-full bg-white/10 text-amber-200 hover:text-white hover:bg-white/20 transition-colors"
              title="काउंटर रीसेट करें"
              aria-label="काउंटर रीसेट करें"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {japaCount >= 108 && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>
              शुभम्! आपकी 108 मनकों की पावन जप माला पूर्ण हो गई है। ईश्वर आपका कल्याण करें।
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
