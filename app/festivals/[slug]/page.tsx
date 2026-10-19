import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import GreetingGenerator from "@/components/GreetingGenerator";
import { Festival } from "@/lib/types";
import { getAllFestivals, getFestivalBySlug, createWhatsAppShareUrl } from "@/lib/festival-utils";
import { generateFestivalMetadata, generateJsonLdEvent, generateJsonLdBreadcrumbs, SITE_URL } from "@/lib/seo";
import {
  Calendar,
  Share2,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Clock,
  HelpCircle,
  ShieldCheck,
  ArrowRight,
  ListOrdered,
} from "lucide-react";

interface FestivalPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const festivals = getAllFestivals();
  return festivals.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: FestivalPageProps): Promise<Metadata> {
  const festival = getFestivalBySlug(params.slug);
  if (!festival) return { title: "त्योहार विवरण" };

  return generateFestivalMetadata({
    title: `${festival.nameHindi} 2026: तारीख, पूजा विधि, शुभ मुहूर्त व महत्व`,
    description: `${festival.nameHindi} (${festival.nameEnglish}) 2026 की प्रामाणिक तिथि: ${festival.dateInfo2026.displayDate}। जानिए संपूर्ण पूजा विधि, सामग्री, पौराणिक कथा, और अपनों को भेजें शुभकामना संदेश।`,
    path: `/festivals/${festival.slug}`,
    keywords: [
      festival.nameHindi,
      festival.nameEnglish,
      `${festival.nameHindi} 2026 कब है`,
      `${festival.nameHindi} पूजा विधि`,
      `${festival.nameHindi} मुहूर्त`,
    ],
  });
}

export default function FestivalDetailPage({ params }: FestivalPageProps) {
  const festival = getFestivalBySlug(params.slug);

  if (!festival) {
    notFound();
  }

  const related = festival.relatedFestivalSlugs
    .map((slug) => getFestivalBySlug(slug))
    .filter((f): f is Festival => Boolean(f));

  const shareText = `*${festival.nameHindi} 2026*\nदिनांक: ${festival.dateInfo2026.displayDate} (${festival.dateInfo2026.dayOfWeek})\n${festival.tagline}\n\nसम्पूर्ण पूजा विधि व महत्व देखें:`;
  const whatsappUrl = createWhatsAppShareUrl({
    text: shareText,
    url: `${SITE_URL}/festivals/${festival.slug}`,
  });

  // Schema.org Event JSON-LD
  const eventSchema = generateJsonLdEvent({
    name: festival.nameHindi,
    description: festival.shortDescription,
    startDate: festival.dateInfo2026.date,
    path: `/festivals/${festival.slug}`,
  });

  const breadcrumbSchema = generateJsonLdBreadcrumbs([
    { name: "त्योहार", path: "/festivals" },
    { name: festival.nameHindi, path: `/festivals/${festival.slug}` },
  ]);

  return (
    <article className="min-w-0 pb-16">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Large Festival Hero Banner */}
      <header className={`relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b ${festival.bannerGradient || "from-stone-900 via-festive-maroon to-stone-950"} text-white border-b-2 border-festive-gold/40`}>
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumbs on dark header */}
          <div className="mb-6 opacity-90">
            <Breadcrumbs
              items={[
                { name: "त्योहार", href: "/festivals" },
                { name: festival.nameHindi, href: `/festivals/${festival.slug}` },
              ]}
            />
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-festive-gold/20 text-festive-gold-light border border-festive-gold/40 text-xs font-bold uppercase">
                {festival.categoryLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>2026 तिथि सत्यापित</span>
              </span>
            </div>

            {/* 2 & 3. Festival Names */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-amber-50 drop-shadow-md">
              {festival.nameHindi} 2026
            </h1>
            <p className="text-sm sm:text-base text-amber-200/80 font-medium">
              {festival.nameEnglish} • {festival.tagline}
            </p>

            {/* 4 & 5. Date & Weekday Badge */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-black/40 border border-festive-gold/30 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-festive-maroon/80 text-festive-gold flex items-center justify-center font-bold text-xl border border-festive-gold/40">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase text-amber-300/80 font-bold tracking-wider block">
                    सत्यापित पर्व तिथि 2026
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-black text-amber-100">
                    {festival.dateInfo2026.displayDate} ({festival.dateInfo2026.dayOfWeek})
                  </span>
                  <span className="text-xs text-amber-200/70 block mt-0.5">
                    {festival.dateInfo2026.hinduMonth} मास • {festival.dateInfo2026.paksha} पक्ष • {festival.dateInfo2026.tithi}
                  </span>
                </div>
              </div>

              {/* Share CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <Share2 className="w-4 h-4" />
                <span>WhatsApp पर शेयर करें</span>
              </a>
            </div>

            {/* Muhurat Note if present */}
            {festival.dateInfo2026.muhuratNote && (
              <div className="p-3.5 rounded-xl bg-white/5 border border-festive-gold/25 text-xs text-amber-200/90 flex items-start gap-2">
                <Clock className="w-4 h-4 text-festive-gold flex-shrink-0 mt-0.5" />
                <span>
                  <strong>शुभ मुहूर्त विवरण:</strong> {festival.dateInfo2026.muhuratNote}
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Body (8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* 6. Short Introduction */}
            <section className="p-6 rounded-2xl bg-white border border-festive-gold/30 shadow-xs">
              <h2 className="text-xs font-bold uppercase tracking-wider text-festive-maroon mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-festive-saffron" />
                <span>पर्व परिचय</span>
              </h2>
              <p className="text-sm sm:text-base text-festive-brown leading-relaxed font-medium">
                {festival.shortDescription}
              </p>
              <div className="mt-3 text-xs text-festive-brown/70 flex items-center gap-2">
                <span className="font-bold text-festive-maroon">प्रमुख आराध्य:</span>
                <span>{festival.deity}</span>
              </div>
            </section>

            {/* In-content Ad Slot (Section 14) */}
            <AdSlot slotKey="inContent" />

            {/* 7. Religious & Cultural Significance */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-festive-brown border-l-4 border-festive-maroon pl-3">
                धार्मिक एवं सांस्कृतिक महत्व
              </h2>
              <p className="text-sm sm:text-base text-festive-brown/85 leading-relaxed text-justify">
                {festival.fullSignificance}
              </p>
            </section>

            {/* 8. Historical / Traditional Background */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-festive-brown border-l-4 border-festive-maroon pl-3">
                पौराणिक कथा एवं ऐतिहासिक पृष्ठभूमि
              </h2>
              <p className="text-sm sm:text-base text-festive-brown/85 leading-relaxed text-justify">
                {festival.historicalBackground}
              </p>
              {festival.katha && (
                <div className="p-5 rounded-2xl bg-festive-ivory-soft border border-festive-gold/40 mt-3 text-xs sm:text-sm text-festive-brown/90 leading-relaxed italic">
                  <span className="font-bold text-festive-maroon not-italic block mb-1">
                    परंपरागत व्रत कथा सार:
                  </span>
                  {festival.katha}
                </div>
              )}
            </section>

            {/* 9. Puja Vidhi (Step-by-Step with Mantras) */}
            <section id="puja-vidhi" className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-festive-brown border-l-4 border-festive-maroon pl-3 flex items-center gap-2">
                <ListOrdered className="w-6 h-6 text-festive-maroon" />
                <span>शास्त्रोक्त पूजा विधि (चरण-दर-चरण)</span>
              </h2>
              <p className="text-xs sm:text-sm text-festive-brown/75">
                {festival.pujaVidhiSummary}
              </p>

              <div className="space-y-4 mt-4">
                {festival.pujaSteps.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="p-5 rounded-2xl bg-white border border-festive-gold/30 shadow-xs space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-festive-maroon text-amber-100 flex items-center justify-center font-bold text-xs">
                        {step.stepNumber}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-festive-brown">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-festive-brown/80 leading-relaxed pl-10">
                      {step.description}
                    </p>
                    {step.mantra && (
                      <div className="ml-10 p-3 rounded-xl bg-festive-ivory border border-festive-gold/30 text-xs sm:text-sm font-serif font-bold text-festive-maroon leading-relaxed">
                        {step.mantra}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 10. Puja Samagri List */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-festive-brown border-l-4 border-festive-maroon pl-3 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-festive-maroon" />
                <span>आवश्यक पूजा सामग्री सूची</span>
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-festive-gold/30 bg-white">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-festive-ivory-soft border-b border-festive-gold/20 text-festive-maroon font-bold">
                    <tr>
                      <th className="p-3.5">सामग्री का नाम</th>
                      <th className="p-3.5">अनुमानित मात्रा</th>
                      <th className="p-3.5">धार्मिक महत्व / उपयोग</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-festive-gold/15">
                    {festival.pujaSamagri.map((item, idx) => (
                      <tr key={idx} className="hover:bg-festive-ivory-soft/50 transition-colors">
                        <td className="p-3.5 font-semibold text-festive-brown">
                          {item.name}
                        </td>
                        <td className="p-3.5 text-festive-brown/70">{item.quantity}</td>
                        <td className="p-3.5 text-festive-brown/80">{item.importance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 11. Vrat Rules (if available) */}
            {festival.vratRules && festival.vratRules.length > 0 && (
              <section className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
                <h3 className="font-serif text-lg font-bold text-festive-maroon flex items-center gap-2">
                  <span>उपवास एवं संयम के नियम</span>
                </h3>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-festive-brown/85">
                  {festival.vratRules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* 12. Regional Differences */}
            {festival.regionalDifferences && festival.regionalDifferences.length > 0 && (
              <section className="space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-festive-brown border-l-4 border-festive-maroon pl-3">
                  क्षेत्रीय परंपराएँ एवं विविधता
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {festival.regionalDifferences.map((diff, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-festive-gold/30 shadow-xs text-xs sm:text-sm text-festive-brown/85 leading-relaxed"
                    >
                      {diff}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 13. FAQs */}
            {festival.faqs && festival.faqs.length > 0 && (
              <section className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-festive-brown border-l-4 border-festive-maroon pl-3 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-festive-maroon" />
                  <span>सामान्य प्रश्न (FAQ)</span>
                </h2>
                <div className="space-y-3">
                  {festival.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-festive-gold/30 shadow-xs space-y-1.5"
                    >
                      <h3 className="font-serif font-bold text-sm sm:text-base text-festive-brown">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-festive-brown/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 14. Wishes for this Festival */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-festive-brown border-l-4 border-festive-maroon pl-3">
                  {festival.nameHindi} की शुभकामना संदेश
                </h2>
                <Link
                  href={`/wishes/${festival.slug}`}
                  className="text-xs font-bold text-festive-maroon hover:underline"
                >
                  सभी संदेश &rarr;
                </Link>
              </div>

              <div className="space-y-3">
                {festival.popularWishesSample.map((wish, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-festive-ivory-soft border border-festive-gold/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                  >
                    <p className="text-xs sm:text-sm text-festive-brown font-medium leading-relaxed">
                      {wish}
                    </p>
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                        `${wish}\n\n— उत्सव संस्कृति (https://utsavsanskriti.in/festivals/${festival.slug})`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors self-end sm:self-center"
                      title="WhatsApp पर भेजें"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Interactive Card Maker for this Festival */}
            <div className="mt-8">
              <GreetingGenerator defaultFestivalSlug={festival.slug} />
            </div>

            {/* 17. Sources and Last-Updated Information */}
            <footer className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs text-festive-brown/70 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-festive-brown">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>प्रामाणिक स्रोत एवं सत्यापन:</span>
              </div>
              <p>
                आधार: {festival.dateInfo2026.sourceName}। अंतिम सत्यापन: वर्ष 2026 पंचांग चक्र अनुसार।
              </p>
              {festival.dateInfo2026.regionalNotes && (
                <p className="text-[11px] text-festive-brown/60">
                  क्षेत्रीय टिप्पणी: {festival.dateInfo2026.regionalNotes}
                </p>
              )}
            </footer>
          </div>

          {/* Right Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick Summary Card */}
            <div className="p-5 rounded-2xl bg-white border border-festive-gold/40 shadow-sm space-y-4 sticky top-28">
              <h3 className="font-serif text-lg font-bold text-festive-maroon border-b border-festive-gold/20 pb-2">
                त्वरित पंचांग सार
              </h3>

              <div className="space-y-2.5 text-xs text-festive-brown">
                <div className="flex justify-between py-1 border-b border-festive-gold/10">
                  <span className="text-festive-brown/60">पर्व तिथि:</span>
                  <span className="font-bold">{festival.dateInfo2026.displayDate}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-festive-gold/10">
                  <span className="text-festive-brown/60">वार (दिन):</span>
                  <span className="font-bold">{festival.dateInfo2026.dayOfWeek}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-festive-gold/10">
                  <span className="text-festive-brown/60">हिन्दू मास:</span>
                  <span className="font-bold">{festival.dateInfo2026.hinduMonth}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-festive-gold/10">
                  <span className="text-festive-brown/60">पक्ष व तिथि:</span>
                  <span className="font-bold">{festival.dateInfo2026.paksha} पक्ष, {festival.dateInfo2026.tithi}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-festive-gold/10">
                  <span className="text-festive-brown/60">आराध्य:</span>
                  <span className="font-bold">{festival.deity}</span>
                </div>
              </div>

              {/* Quick Jump Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="#puja-vidhi"
                  className="w-full py-2.5 px-3 rounded-xl bg-festive-maroon text-white font-bold text-xs text-center shadow hover:bg-festive-maroon-dark transition-colors"
                >
                  पूजा विधि पढ़ें
                </a>
                <Link
                  href="/greeting-maker"
                  className="w-full py-2 px-3 rounded-xl bg-festive-ivory-soft hover:bg-festive-ivory text-festive-maroon font-semibold text-xs text-center border border-festive-gold/40 transition-colors"
                >
                  शुभकामना कार्ड बनाएं
                </Link>
              </div>

              {/* Sidebar Ad Slot (Section 14) */}
              <AdSlot slotKey="sidebar" />

              {/* 16. Related Festivals */}
              {related.length > 0 && (
                <div className="pt-4 border-t border-festive-gold/20">
                  <h4 className="font-serif text-sm font-bold text-festive-brown mb-3">
                    संबंधित त्योहार
                  </h4>
                  <div className="space-y-2">
                    {related.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/festivals/${rel.slug}`}
                        className="flex items-center justify-between p-2.5 rounded-lg hover:bg-festive-ivory transition-colors text-xs group"
                      >
                        <div>
                          <span className="font-semibold text-festive-brown group-hover:text-festive-maroon block">
                            {rel.nameHindi}
                          </span>
                          <span className="text-[11px] text-festive-brown/50">
                            {rel.dateInfo2026.displayDate}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-festive-gold group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
