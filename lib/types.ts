export type FestivalCategory =
  | "deity" // देवी-देवताओं के पर्व
  | "vrat" // व्रत और उपवास
  | "lights" // दीपों के त्योहार
  | "colors" // रंगों के त्योहार
  | "family" // पारिवारिक त्योहार
  | "harvest" // ऋतु एवं फसल उत्सव
  | "jayanti"; // प्रमुख धार्मिक जयंतियाँ

export interface PujaSamagriItem {
  name: string;
  quantity?: string;
  importance?: string;
}

export interface PujaStep {
  stepNumber: number;
  title: string;
  description: string;
  mantra?: string;
}

export interface FestivalFAQ {
  question: string;
  answer: string;
}

export interface FestivalDateInfo {
  year: number;
  date: string; // ISO date 'YYYY-MM-DD'
  displayDate: string; // e.g. "8 नवंबर 2026"
  dayOfWeek: string; // e.g. "रविवार"
  hinduMonth: string; // e.g. "कार्तिक"
  paksha: "शुक्ल" | "कृष्ण";
  tithi: string; // e.g. "अमावस्या"
  muhuratNote?: string;
  verificationStatus: "verified" | "tentative" | "regional_variation";
  sourceName: string;
  sourceUrl?: string;
  regionalNotes?: string;
}

export interface Festival {
  id: string;
  slug: string;
  nameHindi: string;
  nameEnglish: string;
  tagline: string;
  category: FestivalCategory;
  categoryLabel: string;
  dateInfo2026: FestivalDateInfo;
  deity: string;
  shortDescription: string;
  fullSignificance: string;
  historicalBackground: string;
  pujaVidhiSummary: string;
  pujaSteps: PujaStep[];
  pujaSamagri: PujaSamagriItem[];
  vratRules?: string[];
  katha?: string;
  regionalDifferences: string[];
  faqs: FestivalFAQ[];
  popularWishesSample: string[];
  colors: string[];
  featuredImage: string;
  bannerGradient: string;
  isMajor: boolean;
  relatedFestivalSlugs: string[];
}

export type RecipientCategory =
  | "family" // परिवार
  | "parents" // माता-पिता
  | "friends" // मित्र
  | "spouse" // जीवनसाथी
  | "colleagues" // सहकर्मी
  | "clients"; // ग्राहक/व्यापार

export type WishTone =
  | "devotional" // भक्तिमय
  | "emotional" // आत्मीय / भावुक
  | "short" // संक्षिप्त (1-2 lines)
  | "formal" // औपचारिक
  | "traditional"; // पारंपरिक

export interface WishItem {
  id: string;
  festivalSlug: string;
  festivalName: string;
  textHindi: string;
  textHinglish?: string;
  textEnglish?: string;
  recipient: RecipientCategory;
  recipientLabel: string;
  tone: WishTone;
  toneLabel: string;
  authorNote?: string;
}

export interface CategoryInfo {
  id: FestivalCategory;
  titleHindi: string;
  titleEnglish: string;
  description: string;
  iconName: string;
  accentColor: string;
  bgGradient: string;
}
