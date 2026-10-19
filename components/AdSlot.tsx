"use client";

import React from "react";
import { ADS_CONFIG, isAdsActive } from "@/lib/ads-config";

interface AdSlotProps {
  slotKey: "homepageBanner" | "inContent" | "sidebar" | "footerBanner";
  className?: string;
}

export default function AdSlot({ slotKey, className = "" }: AdSlotProps) {
  const slot = ADS_CONFIG.slots[slotKey];
  const active = isAdsActive();

  // If ads are not yet activated by the site owner, display clean compliance placeholder or minimal reserve
  if (!active) {
    if (process.env.NODE_ENV === "development") {
      return (
        <div
          className={`my-4 p-3 rounded-lg border border-dashed border-festive-gold/40 bg-festive-ivory-soft text-center text-xs text-festive-brown/60 transition-all ${className}`}
          style={{ minHeight: slot ? slot.defaultHeight : "90px" }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-1">
            <span className="font-semibold text-festive-maroon/70">
              [सुरक्षित विज्ञापन स्थान: {slot?.name || "Ad Slot"}]
            </span>
            <span className="text-[11px] text-festive-brown/50">
              Google AdSense अनुमोदन उपरांत सक्रिय किया जाएगा। (वर्तमान में निष्क्रिय)
            </span>
          </div>
        </div>
      );
    }
    // In production without AdSense publisher ID, keep slot collapsed/hidden without layout shift
    return null;
  }

  // When officially activated with approved publisher ID
  return (
    <div className={`my-4 text-center overflow-hidden ${className}`}>
      <div className="text-[10px] uppercase tracking-wider text-festive-brown/50 mb-1">
        विज्ञापन (Sponsored)
      </div>
      <div
        className="w-full flex items-center justify-center bg-stone-50 border border-stone-200 rounded"
        style={{ minHeight: slot.defaultHeight }}
      >
        {/* Official Google AdSense Tag placeholder */}
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={ADS_CONFIG.publisherId}
          data-ad-slot={slot.id}
          data-ad-format={slot.format}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
