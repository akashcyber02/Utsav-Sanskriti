import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import DigitalPujaRoom from "@/components/DigitalPujaRoom";
import AdSlot from "@/components/AdSlot";
import { generateFestivalMetadata } from "@/lib/seo";

export const metadata: Metadata = generateFestivalMetadata({
  title: "डिजिटल पूजा घर: मंदिर घंटी, शंखनाद, दीप प्रज्वलन व 108 माला जप",
  description:
    "घर बैठे मंदिर की पावन घंटी बजाएं, दिव्य शंखनाद करें, दीप प्रज्वलित करें, पुष्प अर्पण करें और 108 रुद्राक्ष माला जाप द्वारा नित्य आराधना करें।",
  path: "/digital-puja",
  keywords: ["डिजिटल पूजा घर", "मंदिर घंटी ऑनलाइन", "शंखनाद ऑडियो", "दीप जलाएं ऑनलाइन", "108 माला जाप काउंटर", "गायत्री मंत्र जप"],
});

export default function DigitalPujaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ name: "डिजिटल पूजा घर", href: "/digital-puja" }]} />

      <div className="mt-4 mb-10">
        <DigitalPujaRoom />
      </div>

      <AdSlot slotKey="footerBanner" />
    </div>
  );
}
