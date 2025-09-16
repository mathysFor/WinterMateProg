import TopBar from "@/components/layout/TopBar";
import Hero from "@/components/sections/Hero/Hero";
import { Compteur } from "@/components/sections/Compteur/Compteur";
import { SkiTrack } from "@/components/ui/SkiTrack";
import { Why } from "@/components/sections/Why/Why";
import { Who } from "@/components/sections/Who/Who";
import { Reviews } from "@/components/sections/Reviews/Reviews";
import { Guide } from "@/components/sections/Guide/Guide";
export default function Home() {
  return (
    <main className=" bg-white overflow-x-hidden overflow-y-visible">

      <SkiTrack mode="document" fixed={false} className=" -z-[9999]" />
      <TopBar />
      <Hero />
      <Compteur />
      <Why />
      <Who />
      <Reviews/>
      <Guide/>
    </main>
  );
}