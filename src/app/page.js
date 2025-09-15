import TopBar from "@/components/layout/TopBar";
import Hero from "@/components/sections/Hero/Hero";
import { Compteur } from "@/components/sections/Compteur/Compteur";
import { SkiTrack } from "@/components/ui/SkiTrack";
import { Why } from "@/components/sections/Why/Why";
import { Who } from "@/components/sections/Who/Who";
export default function Home() {
  return (
    <main className=" bg-white overflow-hidden">

      <TopBar />
      <SkiTrack className="pointer-events-none absolute inset-0 w-full h-full    z-100" />
      <Hero />
      <Compteur />
      <Why />
      <Who />
    </main>
  );
}
  