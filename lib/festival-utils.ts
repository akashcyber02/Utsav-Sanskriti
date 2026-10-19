import { FESTIVALS_DATA } from "@/data/festivals";
import { Festival, FestivalCategory } from "@/lib/types";

/**
 * Returns all festivals sorted chronologically by 2026 date
 */
export function getAllFestivals(): Festival[] {
  return [...FESTIVALS_DATA].sort((a, b) => {
    return new Date(a.dateInfo2026.date).getTime() - new Date(b.dateInfo2026.date).getTime();
  });
}

/**
 * Get single festival by slug
 */
export function getFestivalBySlug(slug: string): Festival | undefined {
  return FESTIVALS_DATA.find((f) => f.slug.toLowerCase() === slug.toLowerCase());
}

/**
 * Get featured / upcoming festival for Hero Section.
 * If current date is past all dates or before, pick the next chronologically upcoming,
 * or default to the verified upcoming major festival.
 */
export function getUpcomingHeroFestival(currentDateStr = "2026-10-18"): Festival {
  const all = getAllFestivals();
  const currentTs = new Date(currentDateStr).getTime();

  // Find the next upcoming festival
  const upcoming = all.find((f) => new Date(f.dateInfo2026.date).getTime() >= currentTs);
  if (upcoming) return upcoming;

  // Fallback to Diwali as the premier festival
  return getFestivalBySlug("diwali") || all[0];
}

/**
 * Filter festivals by query, category, and month
 */
export function filterFestivals({
  query,
  category,
  monthIndex, // 0 to 11
}: {
  query?: string;
  category?: FestivalCategory | "all";
  monthIndex?: number | "all";
}): Festival[] {
  let list = getAllFestivals();

  if (category && category !== "all") {
    list = list.filter((f) => f.category === category);
  }

  if (monthIndex !== undefined && monthIndex !== "all") {
    list = list.filter((f) => {
      const month = new Date(f.dateInfo2026.date).getMonth();
      return month === monthIndex;
    });
  }

  if (query && query.trim() !== "") {
    const q = query.trim().toLowerCase();
    list = list.filter((f) => {
      return (
        f.nameHindi.toLowerCase().includes(q) ||
        f.nameEnglish.toLowerCase().includes(q) ||
        f.tagline.toLowerCase().includes(q) ||
        f.deity.toLowerCase().includes(q) ||
        f.shortDescription.toLowerCase().includes(q)
      );
    });
  }

  return list;
}

/**
 * Generate official WhatsApp share link
 */
export function createWhatsAppShareUrl({
  text,
  url,
}: {
  text: string;
  url?: string;
}): string {
  const fullMessage = url ? `${text}\n\nपूरी पूजा विधि व जानकारी देखें: ${url}` : text;
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(fullMessage)}`;
}
