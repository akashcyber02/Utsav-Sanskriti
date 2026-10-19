"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, Calendar, Sparkles } from "lucide-react";
import { filterFestivals } from "@/lib/festival-utils";
import { Festival } from "@/lib/types";
import { trackEvent } from "@/lib/analytics";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSelect?: () => void;
}

export default function SearchBar({
  placeholder = "त्योहार, पूजा विधि, व्रत खोजें (जैसे: दिवाली, होली, करवा चौथ)...",
  className = "",
  onSelect,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Festival[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length > 0) {
      const matched = filterFestivals({ query: query.trim() });
      setResults(matched.slice(0, 6));
      setIsOpen(true);
      trackEvent("search_query", { query: query.trim() });
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 w-4 h-4 text-festive-brown/50 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim().length > 0 && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2.5 text-sm bg-festive-ivory border border-festive-gold/40 rounded-full text-festive-brown placeholder-festive-brown/40 shadow-inner focus:outline-none focus:ring-2 focus:ring-festive-maroon/30 focus:border-festive-maroon transition-all"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3.5 text-festive-brown/40 hover:text-festive-brown"
            aria-label="सर्च क्लियर करें"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Live Dropdown Results */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-festive-gold/30 z-50 overflow-hidden divide-y divide-festive-gold/15">
          <div className="px-4 py-2 bg-festive-ivory text-xs font-semibold text-festive-maroon flex items-center justify-between">
            <span>मिले परिणाम ({results.length})</span>
            <span className="text-[11px] text-festive-brown/60">वर्ष 2026 पंचांग</span>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {results.map((fest) => (
              <Link
                key={fest.id}
                href={`/festivals/${fest.slug}`}
                onClick={() => {
                  setIsOpen(false);
                  if (onSelect) onSelect();
                }}
                className="flex items-start gap-3 p-3 hover:bg-festive-ivory-soft transition-colors text-left group"
              >
                <div className="w-8 h-8 rounded-full bg-festive-maroon/10 text-festive-maroon flex items-center justify-center flex-shrink-0 group-hover:bg-festive-maroon group-hover:text-amber-100 transition-colors">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-festive-brown text-sm group-hover:text-festive-maroon transition-colors">
                      {fest.nameHindi}
                    </span>
                    <span className="text-xs text-festive-brown/50">
                      ({fest.nameEnglish})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-festive-saffron mt-0.5">
                    <Calendar className="w-3 h-3" />
                    <span>{fest.dateInfo2026.displayDate} ({fest.dateInfo2026.dayOfWeek})</span>
                  </div>
                  <p className="text-xs text-festive-brown/70 line-clamp-1 mt-0.5">
                    {fest.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="p-2.5 bg-festive-ivory-soft text-center">
            <Link
              href="/festivals"
              onClick={() => setIsOpen(false)}
              className="text-xs font-medium text-festive-maroon hover:underline"
            >
              सभी 2026 त्योहार व व्रत देखें &rarr;
            </Link>
          </div>
        </div>
      )}

      {isOpen && query.trim().length > 0 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-festive-gold/30 z-50 p-4 text-center text-sm text-festive-brown/70">
          कोई त्योहार नहीं मिला। कृपया वर्तनी (Spelling) जांचें अथवा त्योहार कैलेंडर देखें।
        </div>
      )}
    </div>
  );
}
