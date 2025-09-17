import { spaceGrotesk } from "@/lib/fonts"
import Button from "../ui/Button"

export const NavDesktop = () => {


    return(

                <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600 flex-nowrap">
                  <a href="#programme" className={`hover:text-gray-900 ${spaceGrotesk.className} font-light whitespace-nowrap`}>
                    Programme
                  </a>
                  <a href="#pour-qui" className={`hover:text-gray-900 ${spaceGrotesk.className} font-light whitespace-nowrap`}>
                    Pour qui ?
                  </a>
                  <Button className={`px-4 py-2 bg-[#008CFF] whitespace-nowrap ${spaceGrotesk.className}`}> Accéder au programme</Button>
                </nav>
        

    )

}