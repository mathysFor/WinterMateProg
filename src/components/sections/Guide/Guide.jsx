import Button from "@/components/ui/Button";
import { Space_Grotesk } from "next/font/google";
const space = Space_Grotesk({ subsets: ["latin"], display: "swap" });
import Image from "next/image";

export const Guide = () => {
  return (
    <section className="bg-[#D9D9D9]  py-10">
      <h2
        className={`${space.className} font-bold text-2xl z-50 md:text-3xl relative bg-[#D9D9D9]  text-left ml-5  text-black underline underline-offset-4 decoration-[#008CFF]`}
      >
        Un programme clair et guidé, accessible partout
      </h2>
      <div className="lg:flex lg:flex-row-reverse lg:items-center  px-10 lg:justify-center">
      <Image
        src="/guide/mokup.png"
        width={800}
        height={400}
        alt="guide"
        className="mx-auto mt-10 z-50 relative md:mt-5 lg:mt0 lg:w-[600px] xl:w-[800px]"
      />
      <p className={`${space.className} lg:mt-20  text-center lg:text-justify w-[90%] mx-auto mt-5 bg-[#D9D9D9]  z-50 relative text-black`}>
Tu accèdes <span className="font-bold">immédiatement</span> à un programme de 30 jours en ligne, avec 4 séances progressives par semaine. Chaque exercice est <span className="font-bold">expliqué pas à pas</span> et illustré par une <span className="font-bold">vidéo claire</span>, pour t’entraîner facilement depuis ton téléphone ou ton ordinateur, <span className="font-bold">sans aucun matériel requis</span>. L’interface a été pensée pour une <span className="font-bold">expérience utilisateur</span> fluide, <span className="font-bold">motivante</span> et  <span className="font-bold">agréable</span>, afin que tu prennes autant de <span className="font-bold">plaisir</span> à suivre le programme qu’à skier.
      </p>

      </div>
      <div className="flex justify-center">
        <Button className="mt-10 z-50 rounded-[20px] relative md:mt-20">Je commence maintenant</Button>
      </div>
    </section>
  );
};
