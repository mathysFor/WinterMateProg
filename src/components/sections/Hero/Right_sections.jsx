import Image from "next/image";
import { Shadow } from "./Shadow";
import hero from '../../../../public/hero/skieur.avif'

export const RightSections = () => {
  return (
    <div className="  relative isolate w-[95%]  md:w-[50%]  md:h-[400px]    md:flex md:items-center mx-auto">
      {/* Ombres "nuages" derriere l'image */}
      <Shadow />
      {/* Conteneur image arrondi */}
      <div className="relative bg-black h-[300px] w-full lg:w-[698px] lg:h-[600px] lg:mx-auto lg:my-auto rounded-[100px] overflow-hidden">
        <Image
          src={hero}
          alt="Skieur en carving"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          style={{ objectFit: "cover" }} // seulement sur LCP
        />
        {/* Filtre blanc léger au-dessus de l'image */}
        <div className="absolute inset-0 bg-white/30" />
      </div>
    </div>
  );
};
