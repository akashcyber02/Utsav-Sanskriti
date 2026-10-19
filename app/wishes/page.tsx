import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import GreetingGenerator from "@/components/GreetingGenerator";
import { generateFestivalMetadata } from "@/lib/seo";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = generateFestivalMetadata({
  title: "हिन्दू त्योहार शुभकामना संदेश 2026: परिवार, मित्रों व WhatsApp विशेज",
  description:
    "दिवाली, होली, दशहरा, करवा चौथ, रक्षाबंधन, जन्माष्टमी पर अपनों को भेजने के लिए भक्तिमय, भावुक, औपचारिक व सुंदर शुभकामना संदेश (Hindi, Hinglish & English).",
  path: "/wishes",
  keywords: ["त्योहार शुभकामना संदेश", "व्हाट्सएप विशेज 2026", "दिवाली विशेज", "करवा चौथ मैसेज", "दशहरा शायरी"],
});

export default function WishesHubPage() {
  const wishCategories = [
    {
      slug: "diwali",
      name: "दीपावली की शुभकामनाएँ (Diwali Wishes)",
      desc: "माँ लक्ष्मी की कृपा, सुख-शांति व पारिवारिक सौहार्द के पावन दीपोत्सव संदेश।",
      icon: "🪔",
    },
    {
      slug: "dussehra",
      name: "दशहरा व विजयादशमी शुभकामनाएँ",
      desc: "अधर्म पर धर्म की विजय और श्री राम के पराक्रम से भरे प्रेरक विजय संदेश।",
      icon: "🏹",
    },
    {
      slug: "karwa-chauth",
      name: "करवा चौथ शुभकामना संदेश",
      desc: "पति-पत्नी के अखंड प्रेम, समर्पण और सात जन्मों के अटूट बंधन के मधुर संदेश।",
      icon: "🌙",
    },
    {
      slug: "shardiya-navratri",
      name: "शारदीय नवरात्रि शुभकामनाएँ",
      desc: "माँ नवदुर्गा के नौ स्वरूपों के आशीर्वाद से परिपूर्ण भक्तिमय शुभकामनाएँ।",
      icon: "🌸",
    },
    {
      slug: "holi",
      name: "होली व धुलेंडी के रंगीन संदेश",
      desc: "आपसी मतभेद भुलाकर गुलाल लगाने और आनंद बिखेरने वाले उल्लासपूर्ण संदेश।",
      icon: "🎨",
    },
    {
      slug: "raksha-bandhan",
      name: "रक्षाबंधन शुभकामनाएँ (Rakhi Wishes)",
      desc: "भाई-बहन के बचपन के संस्मरण, निश्छल स्नेह और रक्षा सूत्र के भावुक संदेश।",
      icon: "🧵",
    },
    {
      slug: "janmashtami",
      name: "श्रीकृष्ण जन्माष्टमी की बधाई",
      desc: "नंदलाला के जन्मोत्सव, माखनचोर की लीलाओं और गीता के ज्ञान से जुड़े संदेश।",
      icon: "🦚",
    },
    {
      slug: "ganesh-chaturthi",
      name: "गणेश चतुर्थी व बप्पा आगमन विशेज",
      desc: "विघ्नहर्ता मंगलमूर्ति गणपति बप्पा के आशीर्वाद और रिद्धि-सिद्धि के संदेश।",
      icon: "🐘",
    },
    {
      slug: "mahashivratri",
      name: "महाशिवरात्रि हर हर महादेव संदेश",
      desc: "भोलेनाथ की असीम अनुकंपा, रुद्राक्ष और महाकाल के पावन भक्ति संदेश।",
      icon: "🔱",
    },
    {
      slug: "chhath-puja",
      name: "छठ महापर्व लोक आस्था शुभकामनाएँ",
      desc: "छठी मैया और भगवान भास्कर के आशीर्वाद से आलोकित पारंपरिक संदेश।",
      icon: "☀️",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ name: "शुभकामना संदेश", href: "/wishes" }]} />

      <div className="text-center max-w-3xl mx-auto mt-4 mb-12">
        <span className="text-xs font-bold text-festive-saffron uppercase tracking-wider px-3 py-1 rounded-full bg-festive-saffron/10 border border-festive-saffron/20">
          रिश्तों की मिठास
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-festive-brown mt-2">
          हर पर्व और हर रिश्ते के लिए हृदयस्पर्शी शुभकामनाएँ
        </h1>
        <p className="text-sm sm:text-base text-festive-brown/70 mt-2">
          परिवार, माता-पिता, मित्रों, जीवनसाथी और सहकर्मियों के लिए चुने गए प्रामाणिक व आत्मीय संदेश
        </p>
      </div>

      {/* Grid of Wish Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {wishCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/wishes/${cat.slug}`}
            className="p-6 rounded-2xl bg-white border border-festive-gold/30 hover:border-festive-gold shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h2 className="font-serif text-xl font-bold text-festive-brown group-hover:text-festive-maroon transition-colors mb-2">
                {cat.name}
              </h2>
              <p className="text-xs text-festive-brown/75 leading-relaxed">
                {cat.desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-festive-gold/20 flex items-center text-xs font-bold text-festive-maroon group-hover:text-festive-saffron transition-colors">
              <span>संदेश संग्रह देखें</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Interactive Card Maker embedded */}
      <div className="mb-12">
        <GreetingGenerator />
      </div>

      <AdSlot slotKey="footerBanner" />
    </div>
  );
}
