// Advertisement & Monetization Configuration
// Designed for Google AdSense compliance and sustainable revenue

export interface AdSlotConfig {
  id: string;
  name: string;
  description: string;
  format: "auto" | "rectangle" | "horizontal" | "responsive";
  defaultHeight: string;
}

export const ADS_CONFIG = {
  // Enabled switch: active for approved account
  isEnabled: process.env.NEXT_PUBLIC_ENABLE_ADS !== "false",
  publisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "ca-pub-2739831795527448",
  testMode: process.env.NODE_ENV !== "production",
  slots: {
    homepageBanner: {
      id: "utsav-home-top",
      name: "होमपेज मुख्य विज्ञापन स्लॉट",
      description: "शीर्ष बैनर - कंटेंट के बीच में स्पष्ट विज्ञापनों के लिए",
      format: "horizontal",
      defaultHeight: "90px",
    },
    inContent: {
      id: "utsav-in-content",
      name: "लेख एवं पूजा विधि इन-कंटेंट स्लॉट",
      description: "त्योहार विवरण व पूजा विधि के मुख्य टेक्स्ट के मध्य",
      format: "rectangle",
      defaultHeight: "250px",
    },
    sidebar: {
      id: "utsav-sidebar",
      name: "डेस्कटॉप साइडबार स्लॉट",
      description: "डेस्कटॉप स्क्रीन पर साइडबार में प्रदर्शित",
      format: "rectangle",
      defaultHeight: "600px",
    },
    footerBanner: {
      id: "utsav-footer-banner",
      name: "फुटर क्षेत्र विज्ञापन स्लॉट",
      description: "पेज के निचले हिस्से में गैर-बाधक विज्ञापन",
      format: "horizontal",
      defaultHeight: "90px",
    },
  } as Record<string, AdSlotConfig>,
};

/**
 * Helper to check if ads should render
 */
export function isAdsActive(): boolean {
  return ADS_CONFIG.isEnabled && Boolean(ADS_CONFIG.publisherId);
}
