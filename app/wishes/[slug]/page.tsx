import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import GreetingGenerator from "@/components/GreetingGenerator";
import AdSlot from "@/components/AdSlot";
import { WISHES_DATA } from "@/data/wishes";
import { getFestivalBySlug, getAllFestivals } from "@/lib/festival-utils";
import { generateFestivalMetadata } from "@/lib/seo";
import WishListInteractive from "./WishListInteractive";

interface WishesFestivalPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const festivals = getAllFestivals();
  return festivals.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: WishesFestivalPageProps): Promise<Metadata> {
  const festival = getFestivalBySlug(params.slug);
  const festName = festival ? festival.nameHindi : params.slug;

  return generateFestivalMetadata({
    title: `${festName} की शुभकामनाएँ: परिवार, मित्रों व WhatsApp स्टेटस के लिए बधाई संदेश`,
    description: `${festName} पर अपने प्रियजनों को भेजने के लिए सुंदर, भक्तिमय व आत्मीय शुभकामना संदेश। कॉपी करें व तुरंत WhatsApp पर साझा करें।`,
    path: `/wishes/${params.slug}`,
    keywords: [`${festName} की शुभकामनाएँ`, `${festName} विशेज`, `${festName} व्हाट्सएप स्टेटस`],
  });
}

export default function WishesFestivalPage({ params }: WishesFestivalPageProps) {
  const festival = getFestivalBySlug(params.slug);
  const wishes = WISHES_DATA.filter((w) => w.festivalSlug === params.slug);

  const festName = festival ? festival.nameHindi : "त्योहार";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { name: "शुभकामना संदेश", href: "/wishes" },
          { name: `${festName} शुभकामनाएँ`, href: `/wishes/${params.slug}` },
        ]}
      />

      <div className="text-center max-w-3xl mx-auto mt-4 mb-10">
        <span className="text-xs font-bold text-festive-maroon uppercase tracking-wider px-3 py-1 rounded-full bg-festive-maroon/10 border border-festive-maroon/20">
          विशेष शुभकामना संग्रह
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-festive-brown mt-2">
          {festName} की पावन शुभकामनाएँ
        </h1>
        <p className="text-sm sm:text-base text-festive-brown/70 mt-2">
          परिवार, माता-पिता, मित्रों और जीवनसाथी को WhatsApp पर भेजने के लिए मूल व भावपूर्ण संदेश
        </p>

        {festival && (
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-festive-maroon bg-festive-ivory-soft px-4 py-1.5 rounded-full border border-festive-gold/30">
            <span>पर्व तिथि: {festival.dateInfo2026.displayDate} ({festival.dateInfo2026.dayOfWeek})</span>
            <span>•</span>
            <Link href={`/festivals/${festival.slug}`} className="hover:underline text-festive-saffron">
              पूजा विधि देखें &rarr;
            </Link>
          </div>
        )}
      </div>

      {/* Interactive Wishes List with filters, copy & whatsapp share */}
      <div className="mb-14">
        <WishListInteractive
          wishes={wishes.length > 0 ? wishes : WISHES_DATA.slice(0, 4)}
          festivalSlug={params.slug}
          festivalName={festName}
        />
      </div>

      {/* Interactive Card Maker with photo upload */}
      <div className="mb-12">
        <GreetingGenerator defaultFestivalSlug={params.slug} />
      </div>

      <AdSlot slotKey="footerBanner" />
    </div>
  );
}
