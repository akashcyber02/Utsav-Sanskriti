import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="ब्रेडक्रम्ब नेविगेशन" className="py-3 px-4 text-xs sm:text-sm text-festive-brown/70">
      <ol className="flex items-center flex-wrap gap-1 sm:gap-2">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-festive-maroon transition-colors text-festive-brown/80"
          >
            <Home className="w-3.5 h-3.5 text-festive-saffron" />
            <span>होम</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1 sm:gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-festive-gold/60" />
              {isLast ? (
                <span className="font-medium text-festive-maroon" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-festive-maroon transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
