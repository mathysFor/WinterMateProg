import Image from "next/image";

export const RightSections = () => {
    

    return(

                <div className="relative isolate w-[80%] mx-auto">
                  {/* Ombres "nuages" derriere l'image */}
                  <div className="pointer-events-none absolute -bottom-12 -left-10  w-[250px] h-[190px] rounded-full bg-[#D9D9D9] blur-lg -z-10" />
                  <div className="pointer-events-none absolute -top-10 -right-10  w-[250px] h-[190px] rounded-full bg-[#D9D9D9] blur-lg -z-10" />
        
        
                  {/* Conteneur image arrondi */}
                  <div className="relative bg-black rounded-[250px] overflow-hidden">
                    <Image
                      src="/hero/skieur.jpg"
                      alt="Skieur en carving"
                      width={1000}
                      height={3025}
                      className="object-cover"
                    />
                    {/* Filtre blanc léger au-dessus de l'image */}
                    <div className="absolute inset-0 bg-white/30" />
                  </div>
                </div>
        

    )
}