"use client";

import Button from "@/components/ui/Button";
import { Space_Grotesk } from "next/font/google";
import { RightSections } from "./Right_sections";
import { trackCTA } from "@/lib/track";
const space = Space_Grotesk({ subsets: ["latin"], display: "swap" });

/**
 * Hero section — mobile-first
 * - Big rounded image with soft shadow
 * - Title + paragraph
 * - Decorative dashed ski track (SVG) in the background
 *
 * Assets expected (place them in /public/hero):
 *   - /hero/right-mobile.webp  (≈800–1200px wide, <200KB)
 *   - /hero/right-desktop.webp (≈1400–1800px wide, <400KB)
 */
export default function Hero() {
  return (
    <section className="relative z-20 bg-transparent lg:mt-10 lg:pb-10 overflow-visible">
      {/* Decorative dashed path - left vertical sweep */}

      <div className="relative z-10 mx-auto md:flex md:flex-row-reverse max-w-7xl lg:w-[90%] lg:max-w-none px-4 sm:px-6 lg:px-8     mt-[20px]  lg:pb-16 ">
        {/* Image */}
        <RightSections />

        <div className=" md:w-1/2 lg:w-1.3/3 flex flex-col items-center lg:mt-10    md:items-start md:text-left md:justify-center    ">
          {/* Texts */}
          <h1
            className={`${space.className} text-4xl sm:text-5xl lg:text-6xl z-50 bg-white text-black mt-[30px] font-bold leading-[1.1] tracking-tight`}
          >
          Prépare tes cuisses pour l’hiver
          </h1>

          <p
            className={`mt-4 bg-white text-base sm:text-lg lg:text-xl z-50 text-justify max-w-[90%] mx-auto md:mx-0 text-black ${space.className}`}
          >
            30 jours d’exercices <span className="font-bold">simples</span> et
            efficaces, pensés par un pro pour t’aider à skier en{" "}
            <span className="font-bold">confiance</span>, et surtout{" "}
            <span className="font-bold">sans blessure</span>.
          </p>

          {/* CTA group */}

          <Button
            onClick={() => trackCTA("hero")}
            className={`relative bg-[#008CFF] z-40 mt-10 lg:mt-20 font-bold ${space.className} lg:h-[80px] mx-auto lg:text-[22px] lg:w-[72%] rounded-[20px] w-[90%] shadow-[0_10px_20px_#008CFF] h-[50px]`}
          >
            J’attaque mon programme
          </Button>
        </div>
      </div>

      {/* Decorative dashed path - bottom sweep */}
    </section>
  );
}
