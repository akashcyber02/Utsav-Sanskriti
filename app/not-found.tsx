import React from "react";
import Link from "next/link";
import { Home, Calendar } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-festive-gold/40 shadow-xl">
        <div className="w-20 h-20 mx-auto rounded-full bg-festive-maroon/10 text-festive-maroon flex items-center justify-center font-serif text-4xl font-black border-2 border-festive-gold/50">
          ॐ
        </div>

        <div>
          <span className="text-4xl font-extrabold text-festive-saffron font-mono block mb-1">
            404
          </span>
          <h1 className="font-serif text-2xl font-bold text-festive-brown">
            पृष्ठ नहीं मिला (Page Not Found)
          </h1>
          <p className="text-xs sm:text-sm text-festive-brown/70 mt-2 leading-relaxed">
            क्षमा करें, जिस पृष्ठ को आप खोज रहे हैं वह स्थानांतरित कर दिया गया है अथवा उपलब्ध नहीं है। कृपया नीचे दिए गए मुख्य विकल्पों से आगे बढ़ें।
          </p>
        </div>

        <div className="flex flex-col gap-2.5 pt-2">
          <Link
            href="/"
            className="w-full py-2.5 px-4 rounded-xl bg-festive-maroon text-white font-bold text-sm shadow hover:bg-festive-maroon-dark transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>होमपेज पर जाएँ</span>
          </Link>

          <Link
            href="/calendar"
            className="w-full py-2 px-4 rounded-xl bg-festive-ivory-soft hover:bg-festive-ivory text-festive-maroon font-semibold text-xs border border-festive-gold/40 transition-colors flex items-center justify-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>2026 त्योहार कैलेंडर देखें</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
