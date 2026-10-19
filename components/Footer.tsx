import React from "react";
import Link from "next/link";
import { Share2, Shield, Calendar, Sparkles } from "lucide-react";
import { CALENDAR_VERIFICATION_DISCLAIMER } from "@/data/festivals";

export default function Footer() {

  return (
    <footer className="bg-gradient-to-b from-stone-900 via-stone-950 to-black text-amber-100/90 pt-16 pb-12 border-t-4 border-festive-gold/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Brand & Purpose (2 Cols on Desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-festive-maroon flex items-center justify-center text-festive-gold text-xl font-serif font-bold border border-festive-gold">
                ॐ
              </div>
              <span className="font-serif text-2xl font-black text-amber-100">
                Utsav<span className="text-festive-saffron">Sanskriti</span>
              </span>
            </div>
            <p className="text-sm text-amber-100/70 leading-relaxed">
              <strong>हर पर्व की परंपरा, हर रिश्ते के लिए शुभकामनाएँ।</strong> उत्सव संस्कृति भारत के सनातन त्योहारों, प्रामाणिक पंचांग तिथियों, वैदिक पूजा विधियों और हृदयस्पर्शी शुभकामनाओं का विश्वसनीय डिजिटल संकलन है।
            </p>
            <div className="p-3.5 rounded-xl bg-white/5 border border-festive-gold/20 text-xs text-amber-200/80 leading-normal">
              <span className="font-semibold text-festive-gold block mb-1">
                शुद्धता एवं प्रामाणिकता का संकल्प:
              </span>
              {CALENDAR_VERIFICATION_DISCLAIMER}
            </div>
          </div>

          {/* Quick Festival Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-festive-gold uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-festive-saffron" />
              <span>प्रमुख त्योहार 2026</span>
            </h4>
            <ul className="space-y-2 text-sm text-amber-100/70">
              <li>
                <Link href="/festivals/diwali" className="hover:text-festive-gold transition-colors">
                  दीपावली 2026 (लक्ष्मी पूजा)
                </Link>
              </li>
              <li>
                <Link href="/festivals/dussehra" className="hover:text-festive-gold transition-colors">
                  विजयादशमी / दशहरा
                </Link>
              </li>
              <li>
                <Link href="/festivals/karwa-chauth" className="hover:text-festive-gold transition-colors">
                  करवा चौथ व्रत
                </Link>
              </li>
              <li>
                <Link href="/festivals/holi" className="hover:text-festive-gold transition-colors">
                  होली 2026 व होलिका दहन
                </Link>
              </li>
              <li>
                <Link href="/festivals/mahashivratri" className="hover:text-festive-gold transition-colors">
                  महाशिवरात्रि
                </Link>
              </li>
              <li>
                <Link href="/festivals/janmashtami" className="hover:text-festive-gold transition-colors">
                  श्रीकृष्ण जन्माष्टमी
                </Link>
              </li>
            </ul>
          </div>

          {/* Special Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-festive-gold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-festive-saffron" />
              <span>इंटरैक्टिव सुविधाएँ</span>
            </h4>
            <ul className="space-y-2 text-sm text-amber-100/70">
              <li>
                <Link href="/greeting-maker" className="hover:text-festive-gold transition-colors flex items-center gap-1">
                  <span>फोटो शुभकामना कार्ड मेकर</span>
                  <span className="text-[10px] bg-festive-saffron px-1 rounded text-white font-bold">New</span>
                </Link>
              </li>
              <li>
                <Link href="/digital-puja" className="hover:text-festive-gold transition-colors">
                  डिजिटल पूजा घर (घंटी, शंख, दीप)
                </Link>
              </li>
              <li>
                <Link href="/festivals/dussehra#ravan-dahan" className="hover:text-festive-gold transition-colors">
                  डिजिटल रावण दहन (अग्नि बाण)
                </Link>
              </li>
              <li>
                <Link href="/puja-vidhi" className="hover:text-festive-gold transition-colors">
                  पूजा विधि एवं सामग्री सूची
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="hover:text-festive-gold transition-colors">
                  संपूर्ण 2026 व्रत व त्योहार
                </Link>
              </li>
              <li>
                <Link href="/wishes" className="hover:text-festive-gold transition-colors">
                  WhatsApp शुभकामना संदेश
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal, Trust & Policies */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-festive-gold uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-festive-saffron" />
              <span>नीति व पारदर्शिता</span>
            </h4>
            <ul className="space-y-2 text-sm text-amber-100/70">
              <li>
                <Link href="/about" className="hover:text-festive-gold transition-colors">
                  हमारे बारे में (About Us)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-festive-gold transition-colors">
                  संपर्क करें (Contact Us)
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-festive-gold transition-colors">
                  गोपनीयता नीति (Privacy Policy)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-festive-gold transition-colors">
                  नियम एवं शर्तें (Terms)
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-festive-gold transition-colors">
                  पंचांग अस्वीकरण (Disclaimer)
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy" className="hover:text-festive-gold transition-colors">
                  संपादकीय नीति (Editorial Policy)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Voluntary Sharing */}
        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/60">
          <p className="text-center sm:text-left">
            &copy; 2026 UtsavSanskriti. सर्वाधिकार सुरक्षित। भारतीय सनातन संस्कृति एवं पर्व धरोहर को समर्पित।
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://api.whatsapp.com/send?text=%E0%A4%B9%E0%A4%B0%20%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%B5%20%E0%A4%95%E0%A5%80%20%E0%A4%AA%E0%A4%B0%E0%A4%82%E0%A4%AA%E0%A4%B0%E0%A4%BE%2C%20%E0%A4%B9%E0%A4%B0%20%E0%A4%B0%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%20%E0%A4%B6%E0%A5%81%E0%A4%AD%E0%A4%95%E0%A4%BE%E0%A4%AE%E0%A4%A8%E0%A4%BE%E0%A4%8F%E0%A4%81%E0%A5%A4%20UtsavSanskriti%20%E0%A4%AA%E0%A4%B0%202026%20%E0%A4%95%E0%A5%87%20%E0%A4%B8%E0%A4%AD%E0%A5%80%20%E0%A4%A4%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%B9%E0%A4%BE%E0%A4%B0%20%E0%A4%B5%20%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE%20%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BF%20%E0%A4%A6%E0%A5%87%E0%A4%96%E0%A5%87%E0%A4%82%E0%A5%A4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>WhatsApp पर UtsavSanskriti शेयर करें</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
