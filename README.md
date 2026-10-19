# UtsavSanskriti (उत्सव संस्कृति)
> **हर पर्व की परंपरा, हर रिश्ते के लिए शुभकामनाएँ।**
> A Complete, Premium Hindi Hindu Festival Portal for 2026 & Beyond.

---

## 📌 Project Overview & Local Location on Mac

This project is built and located directly on your Mac at:
```bash
/Users/akashdhakad/.gemini/antigravity/scratch/utsavsanskriti
```

### 💻 Open in VS Code (अपने Mac के VS Code में कैसे खोलें)

To open the complete project directly in VS Code from your Terminal, run:
```bash
code /Users/akashdhakad/.gemini/antigravity/scratch/utsavsanskriti
```
Or open VS Code, click **File ➔ Open Folder...** and select `/Users/akashdhakad/.gemini/antigravity/scratch/utsavsanskriti`.

---

## 🚀 Quick Start (लोकल डेवलपमेंट सर्वर चलाएं)

1. Navigate to the project directory:
   ```bash
   cd /Users/akashdhakad/.gemini/antigravity/scratch/utsavsanskriti
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at:
   ```
   http://localhost:3000
   ```

4. Build for Production:
   ```bash
   npm run build
   npm run start
   ```

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router (Full Static Generation `SSG` for instant loading & top SEO)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Indian festive color palette:
  - Deep Maroon (`#701a1e`)
  - Sacred Saffron (`#ea580c`)
  - Antique Gold (`#d4af37`, `#f59e0b`)
  - Warm Ivory (`#fdfbf7`)
- **Typography**: Devanagari font system (`Noto Sans Devanagari`, `Rozha One`)
- **Icons**: Lucide Icons
- **Audio Synthesizer**: Pure Web Audio API (`lib/audio.ts`) for authentic Mandir Ghanti (brass bell) and Sacred Shankhnaad (zero external latency/broken links!)
- **Greeting Card Canvas Engine**: HTML5 Canvas with custom photo upload, festive borders, and instant high-res PNG download
- **Animations & Celebrations**: Canvas Confetti & custom CSS keyframes

---

## 🌟 Key Features Implemented

1. **2026 Full-Year Verified Festival Calendar**
   - 25+ major festivals from January to December (Diwali, Dussehra, Karwa Chauth, Holi, Maha Shivratri, Janmashtami, Ganesh Chaturthi, Raksha Bandhan, Chhath Puja, Makar Sankranti, Ram Navami, etc.)
   - Verified dates, tithis, muhurats, and regional variations according to national and Kashi panchangs.

2. **Personalized Photo Greeting Card Generator (`/greeting-maker`)**
   - User can upload their own photo, enter family/personal name, pick festival, recipient, language (Hindi, Hinglish, English), and tone.
   - Live Canvas preview, 1-click **Download PNG Image Card**, and 1-click **WhatsApp Share**.

3. **Interactive Digital Temple / Puja Room (`/digital-puja`)**
   - **मंदिर की पावन घंटी (Brass Bell)**: Web Audio multi-harmonic chime.
   - **दिव्य शंखनाद (Shankhnaad)**: Resonant conch sound.
   - **दीपक प्रज्वलन (Light the Diya)**: Flame animation & collective counter.
   - **पुष्प अर्पण (Flower Shower)**: Falling flower petals.
   - **आरती थाली (Aarti Movement)**: Orbiting camphor light.
   - **108 रुद्राक्ष/तुलसी माला जाप काउंटर**: Gayatri Mantra, Mahamrityunjaya Mantra with milestone celebration at 108.

4. **Digital Ravan Dahan (`/festivals/dussehra#ravan-dahan`)**
   - 10-headed Ravan caricature puppet.
   - Bhagwan Shri Ram's divine Kodanda bow & fiery arrow.
   - Click to shoot Agni Baan ➔ strikes Ravan with fireworks, sound fanfare, victory banner, and WhatsApp victory greeting.

5. **Special Maha-Landing Pages**
   - **दीपावली विशेषांक (`/festivals/diwali`)**: 5 days from Dhanteras to Bhai Dooj, Lakshmi-Ganesh puja guide, rangoli ideas, festive foods, safety advice.
   - **दशहरा व नवरात्रि विशेषांक (`/festivals/dussehra`)**: 9 forms of Durga, Shami pujan, Ramayana traditions, and Digital Ravan Dahan.
   - **करवा चौथ विशेषांक (`/festivals/karwa-chauth`)**: Sargi traditions, puja preparation, and Moonrise timings for major Indian cities.

6. **Search & Month/Category Filters**
   - Live search bar matching Hindi and English names.
   - Month filters (जनवरी से दिसंबर) & Category filters (देवी-देवता, व्रत, दीप, रंग, परिवार, फसल/ऋतु).

7. **AdSense Monetization Readiness**
   - Reusable `AdSlot` components (`homepageBanner`, `inContent`, `sidebar`, `footerBanner`).
   - Clean, compliant layout with `public/ads.txt` template.
   - Kept safely inactive until approved Publisher ID is added in `.env`.

8. **Trust, Legal & SEO**
   - About Us, Contact Us, Privacy Policy (GDPR/AdSense compliant), Terms & Conditions, Disclaimer, Editorial Policy.
   - Dynamic `sitemap.xml`, `robots.txt`, OpenGraph metadata, and Schema.org JSON-LD structured data.

---

## ⚙️ Environment Variables (`.env.local`)

Create a `.env.local` file in the root if you want to configure production domains or AdSense:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=https://utsavsanskriti.in

# Contact Email
NEXT_PUBLIC_CONTACT_EMAIL=contact@utsavsanskriti.in

# Google AdSense (Enable once approved)
NEXT_PUBLIC_ENABLE_ADS=false
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX
```

---

## 📈 Configuring Google AdSense After Approval

1. Obtain your approved Google AdSense publisher ID (`ca-pub-XXXXXXXXXXXXXXXX`).
2. Update `public/ads.txt` with your publisher ID:
   ```text
   google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
   ```
3. Set in your `.env.local`:
   ```env
   NEXT_PUBLIC_ENABLE_ADS=true
   NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX
   ```
4. Place the AdSense script tag inside `<head>` in `app/layout.tsx`.

---

## 🚢 Deployment

This Next.js application is 100% ready for deployment on:
- **Vercel** (Recommended): Connect git repo and deploy in 1 click.
- **Netlify / Cloudflare Pages / VPS**: Standard Next.js build (`npm run build`).

---
*(c) 2026 UtsavSanskriti. हर पर्व की परंपरा, हर रिश्ते के लिए शुभकामनाएँ।*
