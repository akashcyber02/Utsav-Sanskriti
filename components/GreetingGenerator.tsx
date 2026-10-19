"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Sparkles,
  Download,
  Share2,
  Copy,
  Check,
  Upload,
  RefreshCw,
  Image as ImageIcon,
} from "lucide-react";
import { WISHES_DATA } from "@/data/wishes";
import { FESTIVALS_DATA } from "@/data/festivals";
import { RecipientCategory, WishTone } from "@/lib/types";
import { trackEvent } from "@/lib/analytics";

interface GreetingGeneratorProps {
  defaultFestivalSlug?: string;
  className?: string;
}

export default function GreetingGenerator({
  defaultFestivalSlug = "diwali",
  className = "",
}: GreetingGeneratorProps) {
  // State
  const [selectedFestivalSlug, setSelectedFestivalSlug] = useState(defaultFestivalSlug);
  const [selectedRecipient, setSelectedRecipient] = useState<RecipientCategory>("family");
  const [selectedLanguage, setSelectedLanguage] = useState<"hindi" | "hinglish" | "english">("hindi");
  const [selectedTone, setSelectedTone] = useState<WishTone>("devotional");
  const [senderName, setSenderName] = useState("समस्त परिवार");
  const [customWishText, setCustomWishText] = useState("");
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [cardTheme, setCardTheme] = useState<"maroon" | "saffron" | "royalGold">("maroon");

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Recipient options
  const recipients: Array<{ id: RecipientCategory; label: string }> = [
    { id: "family", label: "परिवार" },
    { id: "parents", label: "माता-पिता" },
    { id: "friends", label: "मित्र" },
    { id: "spouse", label: "जीवनसाथी" },
    { id: "colleagues", label: "सहकर्मी" },
    { id: "clients", label: "ग्राहक / व्यापार" },
  ];

  // Tone options
  const tones: Array<{ id: WishTone; label: string }> = [
    { id: "devotional", label: "भक्तिमय" },
    { id: "emotional", label: "आत्मीय" },
    { id: "short", label: "संक्षिप्त" },
    { id: "formal", label: "औपचारिक" },
    { id: "traditional", label: "पारंपरिक" },
  ];

  // Find matching template or fallback
  const getInitialWish = useCallback(() => {
    const matched = WISHES_DATA.find(
      (w) =>
        w.festivalSlug === selectedFestivalSlug &&
        w.recipient === selectedRecipient &&
        w.tone === selectedTone
    ) || WISHES_DATA.find((w) => w.festivalSlug === selectedFestivalSlug) || WISHES_DATA[0];

    if (selectedLanguage === "hinglish" && matched.textHinglish) {
      return matched.textHinglish;
    }
    if (selectedLanguage === "english" && matched.textEnglish) {
      return matched.textEnglish;
    }
    return matched.textHindi;
  }, [selectedFestivalSlug, selectedRecipient, selectedTone, selectedLanguage]);

  useEffect(() => {
    setCustomWishText(getInitialWish());
  }, [getInitialWish]);

  // Handle Photo Upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserPhoto(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Render Canvas Greeting Card
  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // High resolution canvas (1080 x 1080 Instagram / WhatsApp Square)
    const width = 1080;
    const height = 1080;
    canvas.width = width;
    canvas.height = height;

    // 1. Draw Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    if (cardTheme === "maroon") {
      bgGrad.addColorStop(0, "#4a0e12");
      bgGrad.addColorStop(0.5, "#701a1e");
      bgGrad.addColorStop(1, "#260406");
    } else if (cardTheme === "saffron") {
      bgGrad.addColorStop(0, "#9a3412");
      bgGrad.addColorStop(0.5, "#c2410c");
      bgGrad.addColorStop(1, "#431407");
    } else {
      bgGrad.addColorStop(0, "#78350f");
      bgGrad.addColorStop(0.5, "#b45309");
      bgGrad.addColorStop(1, "#291e0a");
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Draw Decorative Borders
    ctx.strokeStyle = "#d4af37";
    ctx.lineWidth = 14;
    ctx.strokeRect(36, 36, width - 72, height - 72);

    ctx.strokeStyle = "#f3e5ab";
    ctx.lineWidth = 3;
    ctx.strokeRect(54, 54, width - 108, height - 108);

    // Corner decorative corner ornaments
    const drawCorner = (x: number, y: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = "#d4af37";
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };
    drawCorner(54, 54);
    drawCorner(width - 54, 54);
    drawCorner(54, height - 54);
    drawCorner(width - 54, height - 54);

    // 3. Header Symbol & Brand
    ctx.fillStyle = "#f59e0b";
    ctx.font = "bold 64px serif";
    ctx.textAlign = "center";
    ctx.fillText("ॐ", width / 2, 130);

    ctx.fillStyle = "#fef3c7";
    ctx.font = "bold 26px 'Noto Sans Devanagari', sans-serif";
    ctx.letterSpacing = "2px";
    ctx.fillText("॥ शुभ उत्सव एवं मंगलकामना ॥", width / 2, 180);

    // 4. Festival Name
    const currentFest = FESTIVALS_DATA.find((f) => f.slug === selectedFestivalSlug);
    const festName = currentFest ? currentFest.nameHindi : "पावन पर्व";

    ctx.fillStyle = "#fbbf24";
    ctx.font = "bold 58px 'Noto Sans Devanagari', sans-serif";
    ctx.fillText(festName, width / 2, 260);

    // Separator Line
    ctx.strokeStyle = "rgba(212, 175, 55, 0.6)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 180, 290);
    ctx.lineTo(width / 2 + 180, 290);
    ctx.stroke();

    // 5. User Wish Text (Wrapped cleanly)
    ctx.fillStyle = "#ffffff";
    ctx.font = "500 34px 'Noto Sans Devanagari', sans-serif";
    ctx.textAlign = "center";

    const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
      const words = text.split(" ");
      let line = "";
      let currentY = y;

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line.trim(), x, currentY);
          line = words[n] + " ";
          currentY += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line.trim(), x, currentY);
      return currentY;
    };

    wrapText(customWishText, width / 2, 360, 880, 52);

    // 6. Draw User Photo or Auspicious Emblem at Bottom Left/Center
    const drawFooterSection = () => {
      const footerY = 820;

      if (userPhoto) {
        // Draw user photo in circular gold frame
        const img = new Image();
        img.src = userPhoto;
        img.onload = () => {
          ctx.save();
          const photoX = 220;
          const photoY = footerY + 20;
          const photoRadius = 80;

          // Outer Gold Glow Frame
          ctx.beginPath();
          ctx.arc(photoX, photoY, photoRadius + 6, 0, Math.PI * 2);
          ctx.fillStyle = "#d4af37";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(photoX, photoY, photoRadius, 0, Math.PI * 2);
          ctx.clip();

          // Draw image centered in circle
          const aspect = img.width / img.height;
          let drawW = photoRadius * 2;
          let drawH = photoRadius * 2;
          if (aspect > 1) {
            drawW = drawH * aspect;
          } else {
            drawH = drawW / aspect;
          }
          ctx.drawImage(img, photoX - drawW / 2, photoY - drawH / 2, drawW, drawH);
          ctx.restore();

          // Draw Sender Text next to photo
          ctx.textAlign = "left";
          ctx.fillStyle = "#fbbf24";
          ctx.font = "bold 26px 'Noto Sans Devanagari', sans-serif";
          ctx.fillText("शुभकामना प्रेषक:", 330, footerY + 5);

          ctx.fillStyle = "#ffffff";
          ctx.font = "bold 38px 'Noto Sans Devanagari', sans-serif";
          ctx.fillText(senderName || "समस्त परिवार", 330, footerY + 50);

          ctx.fillStyle = "rgba(254, 243, 199, 0.7)";
          ctx.font = "20px sans-serif";
          ctx.fillText("UtsavSanskriti.in", 330, footerY + 85);
        };
      } else {
        // Without user photo: Centered elegant sender signature
        ctx.textAlign = "center";
        ctx.fillStyle = "#fbbf24";
        ctx.font = "bold 28px 'Noto Sans Devanagari', sans-serif";
        ctx.fillText("— शुभकामना प्रेषक —", width / 2, footerY - 10);

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 44px 'Noto Sans Devanagari', sans-serif";
        ctx.fillText(senderName || "समस्त परिवार", width / 2, footerY + 45);

        ctx.fillStyle = "rgba(254, 243, 199, 0.7)";
        ctx.font = "20px sans-serif";
        ctx.fillText("UtsavSanskriti.in | हर पर्व की परंपरा", width / 2, footerY + 95);
      }
    };

    drawFooterSection();
  }, [cardTheme, selectedFestivalSlug, customWishText, senderName, userPhoto]);

  useEffect(() => {
    renderCanvas();
  }, [renderCanvas]);

  // Download Canvas PNG
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `utsavsanskriti-${selectedFestivalSlug}-card.png`;
    link.href = dataUrl;
    link.click();

    trackEvent("card_download", {
      festival: selectedFestivalSlug,
      hasPhoto: Boolean(userPhoto),
    });
  };

  // Copy text to clipboard
  const handleCopyText = async () => {
    const fullText = `${customWishText}\n\n— शुभकामना प्रेषक: ${senderName}\n(UtsavSanskriti.in/festivals/${selectedFestivalSlug})`;

    try {
      await navigator.clipboard.writeText(fullText);
      setIsCopied(true);
      trackEvent("wish_copy", { festival: selectedFestivalSlug });
      setTimeout(() => setIsCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  // WhatsApp share
  const handleWhatsAppShare = () => {
    const fullText = `*${FESTIVALS_DATA.find((f) => f.slug === selectedFestivalSlug)?.nameHindi || "शुभकामना"}*\n\n${customWishText}\n\n— *प्रेषक:* ${senderName}\n\nपूरी पूजा विधि व त्योहार कैलेंडर देखें: https://utsavsanskriti.in/festivals/${selectedFestivalSlug}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`, "_blank");
    trackEvent("whatsapp_share", { feature: "greeting_card" });
  };

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-festive-gold/40 ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-festive-maroon/10 text-festive-maroon border border-festive-maroon/20 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-festive-saffron" />
          व्यक्तिगत फोटो शुभकामना कार्ड
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-festive-maroon">
          बनाएं और भेजें अपनी फोटो वाला फेस्टिव कार्ड
        </h2>
        <p className="text-sm text-festive-brown/75 max-w-xl mx-auto mt-2">
          त्योहार चुनें, अपना या परिवार का नाम व फोटो जोड़ें, और 1-क्लिक में डाउनलोड कर WhatsApp स्टेटस पर शेयर करें।
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Controls (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Festival Selection */}
          <div>
            <label className="block text-xs font-bold text-festive-brown uppercase tracking-wider mb-2">
              1. त्योहार चुनें
            </label>
            <select
              value={selectedFestivalSlug}
              onChange={(e) => setSelectedFestivalSlug(e.target.value)}
              className="w-full px-4 py-2.5 bg-festive-ivory border border-festive-gold/50 rounded-xl text-festive-brown text-sm font-medium focus:ring-2 focus:ring-festive-maroon/30 focus:outline-none"
            >
              {FESTIVALS_DATA.map((fest) => (
                <option key={fest.slug} value={fest.slug}>
                  {fest.nameHindi} ({fest.dateInfo2026.displayDate})
                </option>
              ))}
            </select>
          </div>

          {/* Recipient Selection */}
          <div>
            <label className="block text-xs font-bold text-festive-brown uppercase tracking-wider mb-2">
              2. किसके लिए भेजना चाहते हैं? (Recipient)
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {recipients.map((rec) => (
                <button
                  key={rec.id}
                  onClick={() => setSelectedRecipient(rec.id)}
                  className={`py-2 px-2 text-xs rounded-lg font-medium transition-colors text-center ${
                    selectedRecipient === rec.id
                      ? "bg-festive-maroon text-white font-bold shadow-sm"
                      : "bg-festive-ivory-soft text-festive-brown hover:bg-festive-ivory border border-festive-gold/30"
                  }`}
                >
                  {rec.label}
                </button>
              ))}
            </div>
          </div>

          {/* Language & Tone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-festive-brown uppercase tracking-wider mb-2">
                3. भाषा (Language)
              </label>
              <div className="flex gap-2">
                {[
                  { id: "hindi", label: "हिंदी" },
                  { id: "hinglish", label: "Hinglish" },
                  { id: "english", label: "English" },
                ].map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => setSelectedLanguage(lang.id as typeof selectedLanguage)}
                    className={`flex-1 py-2 text-xs rounded-lg font-medium transition-colors ${
                      selectedLanguage === lang.id
                        ? "bg-festive-saffron text-white font-bold"
                        : "bg-festive-ivory-soft text-festive-brown border border-festive-gold/30"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-festive-brown uppercase tracking-wider mb-2">
                4. शैली / भाव (Tone)
              </label>
              <select
                value={selectedTone}
                onChange={(e) => setSelectedTone(e.target.value as WishTone)}
                className="w-full px-3 py-2 bg-festive-ivory border border-festive-gold/50 rounded-lg text-festive-brown text-xs font-medium focus:outline-none"
              >
                {tones.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Editable Wish Text */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-festive-brown uppercase tracking-wider">
                5. शुभकामना संदेश (आप संपादित कर सकते हैं)
              </label>
              <button
                onClick={() => setCustomWishText(getInitialWish())}
                className="text-[11px] text-festive-maroon flex items-center gap-1 hover:underline"
              >
                <RefreshCw className="w-3 h-3" />
                <span>रीसेट टेम्पलेट</span>
              </button>
            </div>
            <textarea
              rows={4}
              value={customWishText}
              onChange={(e) => setCustomWishText(e.target.value)}
              className="w-full p-3 bg-festive-ivory border border-festive-gold/50 rounded-xl text-festive-brown text-sm leading-relaxed focus:ring-2 focus:ring-festive-maroon/30 focus:outline-none"
            />
          </div>

          {/* Sender Name & User Photo Upload */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-festive-ivory-soft border border-festive-gold/40">
            <div>
              <label className="block text-xs font-bold text-festive-maroon mb-1">
                6. प्रेषक का नाम (आपका / परिवार का नाम)
              </label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="उदा. राहुल शर्मा एवं समस्त परिवार"
                className="w-full px-3 py-2 bg-white border border-festive-gold/50 rounded-lg text-festive-brown text-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-festive-maroon mb-1">
                7. अपनी या परिवार की फोटो (ऐच्छिक)
              </label>
              <div className="flex items-center gap-2">
                <label className="cursor-pointer flex-1 px-3 py-2 bg-white border border-dashed border-festive-gold rounded-lg text-xs font-medium text-festive-brown/80 hover:bg-festive-ivory flex items-center justify-center gap-1.5 transition-colors">
                  <Upload className="w-3.5 h-3.5 text-festive-saffron" />
                  <span>{userPhoto ? "फोटो बदलें" : "फोटो अपलोड करें"}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
                {userPhoto && (
                  <button
                    onClick={() => setUserPhoto(null)}
                    className="text-xs text-red-600 hover:underline px-2"
                  >
                    हटाएं
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Theme Color Selector */}
          <div>
            <label className="block text-xs font-bold text-festive-brown uppercase tracking-wider mb-2">
              8. कार्ड का रंग / थीम
            </label>
            <div className="flex gap-3">
              {[
                { id: "maroon", label: "रॉयल मैरून", color: "bg-[#701a1e]" },
                { id: "saffron", label: "पावन केसरी", color: "bg-[#ea580c]" },
                { id: "royalGold", label: "एंटीक गोल्ड", color: "bg-[#b45309]" },
              ].map((th) => (
                <button
                  key={th.id}
                  onClick={() => setCardTheme(th.id as typeof cardTheme)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    cardTheme === th.id
                      ? "border-festive-maroon ring-2 ring-festive-maroon/20"
                      : "border-stone-200 hover:border-festive-gold"
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full ${th.color}`} />
                  <span>{th.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Preview & Action Buttons (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-festive-maroon uppercase tracking-wider flex items-center gap-1">
              <ImageIcon className="w-3.5 h-3.5" />
              लाइव कार्ड प्रीव्यू
            </span>
            <span className="text-[11px] text-festive-brown/60">1080 x 1080 HD</span>
          </div>

          {/* HTML5 Canvas Preview */}
          <div className="w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-festive-gold/60 bg-stone-900 mb-5 relative group">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain"
              aria-label="शुभकामना कार्ड प्रीव्यू"
            />
          </div>

          {/* Action CTAs */}
          <div className="w-full max-w-sm space-y-2.5">
            <button
              onClick={handleDownload}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-festive-maroon to-festive-saffron hover:brightness-110 active:scale-98 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>इमेज कार्ड डाउनलोड करें (PNG)</span>
            </button>

            <button
              onClick={handleWhatsAppShare}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-bold text-sm shadow flex items-center justify-center gap-2 transition-all"
            >
              <Share2 className="w-4 h-4" />
              <span>WhatsApp पर शेयर करें</span>
            </button>

            <button
              onClick={handleCopyText}
              className="w-full py-2 px-4 rounded-xl bg-festive-ivory-soft hover:bg-festive-ivory text-festive-brown text-xs font-medium border border-festive-gold/40 flex items-center justify-center gap-1.5 transition-colors"
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">कॉपी कर लिया गया!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-festive-brown/70" />
                  <span>केवल विश टेक्स्ट कॉपी करें</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
