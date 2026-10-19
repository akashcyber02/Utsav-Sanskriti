"use client";

import React, { useState, useMemo } from "react";
import FestivalCard from "@/components/FestivalCard";
import { Festival, FestivalCategory } from "@/lib/types";
import { FESTIVAL_CATEGORIES } from "@/data/categories";
import { HINDI_MONTHS } from "@/data/festivals";
import { Filter, Calendar, Search } from "lucide-react";

interface FestivalGridProps {
  initialFestivals: Festival[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
}

export default function FestivalGrid({
  initialFestivals,
  title = "वर्ष 2026 के प्रमुख हिन्दू पर्व एवं व्रत",
  subtitle = "सत्यापित तिथियाँ, पंचांग विवरण एवं पूजा विधि",
  showFilters = true,
}: FestivalGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<FestivalCategory | "all">("all");
  const [selectedMonth, setSelectedMonth] = useState<number | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return initialFestivals.filter((fest) => {
      // Category filter
      if (selectedCategory !== "all" && fest.category !== selectedCategory) {
        return false;
      }
      // Month filter
      if (selectedMonth !== "all") {
        const festMonth = new Date(fest.dateInfo2026.date).getMonth();
        if (festMonth !== selectedMonth) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const matchesName =
          fest.nameHindi.toLowerCase().includes(q) ||
          fest.nameEnglish.toLowerCase().includes(q) ||
          fest.tagline.toLowerCase().includes(q) ||
          fest.deity.toLowerCase().includes(q);
        if (!matchesName) return false;
      }
      return true;
    });
  }, [initialFestivals, selectedCategory, selectedMonth, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Title & Subtitle */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-festive-brown">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-festive-brown/70">
          {subtitle}
        </p>
      </div>

      {/* Filter Controls (if enabled) */}
      {showFilters && (
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-festive-gold/30 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-festive-brown/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="त्योहार या देवता का नाम खोजें..."
                className="w-full pl-10 pr-4 py-2 bg-festive-ivory border border-festive-gold/40 rounded-xl text-sm text-festive-brown placeholder-festive-brown/40 focus:outline-none focus:ring-2 focus:ring-festive-maroon/20"
              />
            </div>

            {/* Year Badge (Fixed 2026) */}
            <div className="flex items-center gap-2 self-end md:self-auto">
              <span className="text-xs font-bold text-festive-brown/70">वर्ष:</span>
              <span className="px-3 py-1.5 rounded-lg bg-festive-maroon text-amber-100 font-extrabold text-xs shadow-sm">
                2026 (सत्यापित)
              </span>
            </div>
          </div>

          {/* Month Filter Badges */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-festive-brown/80">
              <Calendar className="w-3.5 h-3.5 text-festive-saffron" />
              <span>महीना चुनें:</span>
            </div>
            <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1">
              <button
                onClick={() => setSelectedMonth("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedMonth === "all"
                    ? "bg-festive-saffron text-white font-bold"
                    : "bg-festive-ivory-soft hover:bg-festive-ivory text-festive-brown/80 border border-festive-gold/30"
                }`}
              >
                सभी माह
              </button>
              {HINDI_MONTHS.map((month, idx) => (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(idx)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                    selectedMonth === idx
                      ? "bg-festive-maroon text-white font-bold"
                      : "bg-festive-ivory-soft hover:bg-festive-ivory text-festive-brown/80 border border-festive-gold/30"
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Badges */}
          <div className="space-y-1.5 pt-1 border-t border-festive-gold/20">
            <div className="flex items-center gap-1.5 text-xs font-bold text-festive-brown/80">
              <Filter className="w-3.5 h-3.5 text-festive-saffron" />
              <span>पर्व श्रेणी:</span>
            </div>
            <div className="flex flex-wrap gap-1.5 overflow-x-auto">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-festive-maroon text-white font-bold"
                    : "bg-festive-ivory-soft hover:bg-festive-ivory text-festive-brown/80 border border-festive-gold/30"
                }`}
              >
                सभी श्रेणियां
              </button>
              {FESTIVAL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? "bg-festive-maroon text-white font-bold"
                      : "bg-festive-ivory-soft hover:bg-festive-ivory text-festive-brown/80 border border-festive-gold/30"
                  }`}
                >
                  {cat.titleHindi}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Grid of Cards */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((fest) => (
            <FestivalCard key={fest.id} festival={fest} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-white border border-dashed border-festive-gold/40">
          <p className="text-festive-brown/70 text-sm">
            चयनित फिल्टर या सर्च अनुसार कोई त्योहार नहीं मिला।
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedMonth("all");
              setSearchQuery("");
            }}
            className="mt-3 px-4 py-2 rounded-lg bg-festive-maroon text-white text-xs font-bold"
          >
            फिल्टर रीसेट करें
          </button>
        </div>
      )}
    </div>
  );
}
