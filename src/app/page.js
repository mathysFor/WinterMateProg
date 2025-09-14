import { inter, spaceGrotesk } from "@/lib/fonts";
import TopBar from "@/components/layout/TopBar";
import Hero from "@/components/sections/Hero/Hero";
import { Compteur } from "@/components/sections/Compteur/Compteur";
import { SkiTrack } from "@/components/ui/SkiTrack";
export default function Home() {
  return (
    <main className=" bg-white overflow-hidden">

      <TopBar />
      <SkiTrack className="pointer-events-none absolute inset-0 w-full h-full    z-10" />
      <Hero />
      <Compteur />
    </main>
  );
}
  