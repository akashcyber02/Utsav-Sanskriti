import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import GreetingGenerator from "@/components/GreetingGenerator";
import AdSlot from "@/components/AdSlot";
import { generateFestivalMetadata } from "@/lib/seo";

export const metadata: Metadata = generateFestivalMetadata({
  title: "फोटो शुभकामना कार्ड मेकर: त्योहारों की व्यक्तिगत बधाई बनाएं व WhatsApp पर शेयर करें",
  description:
    "दिवाली, होली, दशहरा, करवा चौथ, रक्षाबंधन पर अपना नाम और फोटो जोड़कर सुंदर इमेज कार्ड (Canvas PNG) बनाएं और सीधे WhatsApp स्टेटस या चैट पर शेयर करें।",
  path: "/greeting-maker",
  keywords: ["फेस्टिवल कार्ड मेकर", "फोटो शुभकामना कार्ड", "दिवाली विशेज कार्ड", "व्हाट्सएप स्टेटस कार्ड", "हिन्दू त्योहार कार्ड"],
});

export default function GreetingMakerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ name: "फोटो शुभकामना कार्ड मेकर", href: "/greeting-maker" }]} />

      <div className="mt-4 mb-10">
        <GreetingGenerator />
      </div>

      <AdSlot slotKey="footerBanner" />
    </div>
  );
}
