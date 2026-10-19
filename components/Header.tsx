"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Search,
  Calendar,
  Sparkles,
  BookOpen,
  HeartHandshake,
  Flame,
  Info,
  Layers,
} from "lucide-react";
import SearchBar from "@/components/SearchBar";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "होम", href: "/" },
    { name: "त्योहार कैलेंडर 2026", href: "/calendar", icon: Calendar },
    { name: "पूजा विधि", href: "/puja-vidhi", icon: BookOpen },
    { name: "शुभकामना संदेश", href: "/wishes", icon: HeartHandshake },
    { name: "कार्ड मेकर", href: "/greeting-maker", icon: Sparkles, badge: "नया" },
    { name: "डिजिटल पूजा घर", href: "/digital-puja", icon: Flame, badge: "लाइव" },
    { name: "त्योहार सूची", href: "/festivals", icon: Layers },
    { name: "हमारे बारे में", href: "/about", icon: Info },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-festive-gold/30 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-festive-maroon to-festive-maroon-dark flex items-center justify-center text-festive-gold shadow-md border-2 border-festive-gold/60 group-hover:scale-105 transition-transform">
              <span className="font-serif text-2xl font-bold">ॐ</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl font-black text-festive-maroon tracking-tight">
                  Utsav<span className="text-festive-saffron">Sanskriti</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-festive-gold/20 text-festive-maroon border border-festive-gold/40">
                  2026
                </span>
              </div>
              <p className="text-[11px] text-festive-brown/75 font-medium leading-tight hidden sm:block">
                हर पर्व की परंपरा, हर रिश्ते के लिए शुभकामनाएँ।
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? "text-festive-maroon font-bold bg-festive-gold/15"
                      : "text-festive-brown hover:text-festive-maroon hover:bg-festive-ivory"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[9px] font-bold px-1 py-0.2 rounded-full bg-festive-saffron text-white animate-pulse">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Search Trigger Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 rounded-full text-festive-brown hover:text-festive-maroon hover:bg-festive-ivory transition-colors border border-festive-gold/30"
              aria-label="खोजें"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Quick Greeting Maker CTA */}
            <Link
              href="/greeting-maker"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-festive-maroon to-festive-saffron text-white text-xs sm:text-sm font-semibold shadow-md hover:brightness-110 active:scale-95 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-festive-gold-light" />
              <span>कार्ड बनाएं</span>
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-festive-maroon hover:bg-festive-ivory focus:outline-none"
              aria-label="नेविगेशन मेन्यू"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Expandable Search Bar on desktop or mobile */}
        {isSearchOpen && (
          <div className="py-3 pb-4 border-t border-festive-gold/20 animate-fadeIn">
            <SearchBar onSelect={() => setIsSearchOpen(false)} />
          </div>
        )}
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-festive-gold/30 bg-white/98 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="mb-4">
            <SearchBar onSelect={() => setIsMobileMenuOpen(false)} />
          </div>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-festive-maroon text-white"
                      : "text-festive-brown hover:bg-festive-ivory hover:text-festive-maroon"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {Icon && <Icon className="w-4 h-4 text-festive-gold" />}
                    <span>{link.name}</span>
                  </div>
                  {link.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-festive-saffron text-white">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-festive-gold/20 flex flex-col gap-2 text-xs text-festive-brown/70">
            <p className="font-semibold text-festive-maroon">UtsavSanskriti 2026</p>
            <p>सत्यापित पंचांग व सांस्कृतिक धरोहर</p>
          </div>
        </div>
      )}
    </header>
  );
}
