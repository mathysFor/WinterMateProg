
import Image from "next/image"
import { Space_Grotesk } from "next/font/google"
const space_grotesk = Space_Grotesk({ subsets: ['latin'], weight: '700'})

const Paiement = () => {
    return(
        <div className="justify-center  items-center flex flex-col ">
            <Image 
                src='/safe/Lock.png' 
                alt="lock"
                width={64} 
                height={64}
                sizes="(min-width: 1024px) 64px, (min-width: 768px) 56px, 48px"
                className="mb-4 md:mb-5 w-12 md:w-14 lg:w-16 h-auto"
            />
            <h3  className={`${space_grotesk.className} text-black relative bg-white  text-base md:text-lg lg:text-xl leading-snug text-center`}>Paiement 100% sécurisé</h3>
        </div>
    )
}

const Home = () => {
    return(
        <div className="justify-center items-center flex flex-col ">
            <Image 
                src='/safe/HomePage.png' 
                alt="home"
                width={64} 
                height={64}
                sizes="(min-width: 1024px) 64px, (min-width: 768px) 56px, 48px"
                className="mb-4 md:mb-5 w-12 md:w-14 lg:w-16 relative h-auto"
            />
            <h3 className={`${space_grotesk.className} text-black bg-white relative text-base md:text-lg lg:text-xl leading-snug text-center`}>Aucun matériel nécessaire, fais-le depuis ton salon</h3>
        </div>
    )
}

const Fast = () => {
    return(
        <div className="justify-center items-center flex flex-col ">
            <Image 
                src='/safe/Conflict.png' 
                alt="speed"
                width={64} 
                height={64}
                sizes="(min-width: 1024px) 64px, (min-width: 768px) 56px, 48px"
                className="mb-4 md:mb-5 w-12 md:w-14 lg:w-16 h-auto relative"
            />
            <h3 className={`${space_grotesk.className} text-black bg-white relative text-base md:text-lg lg:text-xl leading-snug text-center`}>Accès immédiat après l'achat</h3>
        </div>
    )
}

export const Safe = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 lg:gap-20 w-[90%] mx-auto py-10 md:py-16 lg:py-20">
            <div className="flex flex-col items-center text-center max-w-sm px-2">
                <Paiement />
            </div>

            {/* Divider */}
            <div className="w-20 md:w-[1px] h-[1px] md:h-24 lg:h-28 bg-[#008CFF]/70"></div>

            <div className="flex flex-col items-center text-center max-w-sm px-2">
                <Home />
            </div>

            {/* Divider */}
            <div className="w-20 md:w-[1px] h-[1px] md:h-24 lg:h-28 bg-[#008CFF]/70"></div>

            <div className="flex flex-col items-center text-center max-w-sm px-2">
                <Fast />
            </div>
        </div>
    )
}