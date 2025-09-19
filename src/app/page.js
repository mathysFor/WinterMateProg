
"use client";
import TopBar from "@/components/layout/TopBar";
import Hero from "@/components/sections/Hero/Hero";
import { Compteur } from "@/components/sections/Compteur/Compteur";
import { SkiTrack } from "@/components/ui/SkiTrack";
import { Why } from "@/components/sections/Why/Why";
import { Who } from "@/components/sections/Who/Who";
import { Reviews } from "@/components/sections/Reviews/Reviews";
import { Guide } from "@/components/sections/Guide/Guide";
import { Safe } from "@/components/sections/Safe/Safe";
import Button from "@/components/ui/Button";
import Footer from "@/components/sections/Footer/Footer";
import SectionReveal from "@/lib/motion";
import Faq from "@/components/sections/Faq/Faq";
import {  trackCTA } from "@/lib/track";

export default function Home() {
  return (
    <main className=" bg-white overflow-x-hidden overflow-y-visible">
      <SkiTrack mode="document" fixed={false} className=" -z-[9999]" />
      <TopBar />
      <Hero />
      <Compteur />
      <Why />
      <Who />
      <Reviews />
      <Guide />
      <Safe />
      <Faq />
      {/* CTA final */}
      <SectionReveal>
        <div className="w-full py- md:py-16 lg:py-20 bg-white justify-center items-center flex">
          <Button
          onClick={()=>trackCTA('footer')}
            className={
              "mx-auto relative p-5 mt-10 font-bold z-20 transform transition ease-out duration-200 hover:-translate-y-0.5 active:translate-y-0"
            }
          >
            Prêt à attaquer la saison en pleine forme ?
          </Button>
        </div>
      </SectionReveal>
      {/* <FAQ /> */}

      <Footer />
    </main>
  );
}
