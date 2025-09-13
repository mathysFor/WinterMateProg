"use client";

import Button from "@/components/ui/Button";
import { Space_Grotesk } from "next/font/google";
import { RightSections } from "./Right_sections";
import { SkiTrack } from "@/components/ui/SkiTrack";
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
    <section className="relative bg-white overflow-hidden">
      {/* Decorative dashed path - left vertical sweep */}
<SkiTrack className="pointer-events-none absolute inset-0 w-full h-full  md:opacity-20 z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-[20px] pt-6 pb-16 ">
        {/* Image */}
        <RightSections />

        <div>


        {/* Texts */}
        <h1
          className={`${space.className} bg-white text-4xl z-50  text-black  mt-[64px] sm:text-5xl font-bold leading-[1.1] tracking-tight`}
        >
          Prépare tes cuisses pour l’hiver
        </h1>

        <p
          className={`mt-4   bg-white  text-base sm:text-lg z-50 text-justify max-w-[90%] mx-auto text-black ${space.className}`}
        >
          30 jours d’exercices <span className="font-bold">simples</span> et
          efficaces, pensés par un pro pour t’aider à skier en{" "}
          <span className="font-bold">confiance</span>, et surtout{" "}
          <span className="font-bold">sans blessure</span>.
        </p>

        {/* CTA group */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button
            href="#acheter"
            className={`bg-[#008CFF] z-40 font-bold ${space.className} rounded-[20px] shadow-[0_10px_20px_#008CFF] h-[50px]`}
          >
            J’attaque mon programme
          </Button>
        </div>
        </div>

      </div>

      {/* Decorative dashed path - bottom sweep */}
    </section>
  );
}
