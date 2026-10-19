import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateFestivalMetadata } from "@/lib/seo";
import { Mail, Send } from "lucide-react";

export const metadata: Metadata = generateFestivalMetadata({
  title: "संपर्क करें (Contact Us) — उत्सव संस्कृति",
  description:
    "UtsavSanskriti टीम से संपर्क करें। अपने सुझाव, पंचांग संशोधन व प्रतिक्रिया साझा करने हेतु संदेश भेजें।",
  path: "/contact",
});

export default function ContactPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@utsavsanskriti.in";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <Breadcrumbs items={[{ name: "संपर्क करें", href: "/contact" }]} />

      <div className="mt-6 bg-white p-8 sm:p-12 rounded-3xl border border-festive-gold/40 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold text-festive-maroon uppercase tracking-wider px-3 py-1 rounded-full bg-festive-maroon/10 border border-festive-maroon/20">
            सहायता एवं प्रतिक्रिया
          </span>
          <h1 className="font-serif text-3xl font-extrabold text-festive-brown mt-2">
            हमसे संपर्क करें (Contact Us)
          </h1>
          <p className="text-xs sm:text-sm text-festive-brown/70 mt-1">
            त्योहारों की तिथि, सुझाव या संपादकीय संशोधन हेतु हम आपके विचारों का स्वागत करते हैं।
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-festive-ivory-soft border border-festive-gold/30 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-festive-maroon/10 text-festive-maroon flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-festive-brown/60 block">आधिकारिक ईमेल:</span>
            <a
              href={`mailto:${contactEmail}`}
              className="text-sm font-bold text-festive-maroon hover:underline"
            >
              {contactEmail}
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-festive-brown mb-1">
                आपका नाम
              </label>
              <input
                type="text"
                placeholder="उदा. राहुल शर्मा"
                className="w-full px-3.5 py-2.5 bg-festive-ivory border border-festive-gold/40 rounded-xl text-sm text-festive-brown focus:outline-none focus:ring-2 focus:ring-festive-maroon/20"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-festive-brown mb-1">
                ईमेल पता
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 bg-festive-ivory border border-festive-gold/40 rounded-xl text-sm text-festive-brown focus:outline-none focus:ring-2 focus:ring-festive-maroon/20"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-festive-brown mb-1">
              विषय (Subject)
            </label>
            <input
              type="text"
              placeholder="पंचांग सुझाव, पते या सामान्य प्रश्न"
              className="w-full px-3.5 py-2.5 bg-festive-ivory border border-festive-gold/40 rounded-xl text-sm text-festive-brown focus:outline-none focus:ring-2 focus:ring-festive-maroon/20"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-festive-brown mb-1">
              संदेश (Message)
            </label>
            <textarea
              rows={4}
              placeholder="अपना संदेश यहाँ लिखें..."
              className="w-full p-3.5 bg-festive-ivory border border-festive-gold/40 rounded-xl text-sm text-festive-brown focus:outline-none focus:ring-2 focus:ring-festive-maroon/20"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-festive-maroon to-festive-saffron text-white font-bold text-sm shadow hover:brightness-110 transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>संदेश भेजें</span>
          </button>
        </form>
      </div>
    </div>
  );
}
