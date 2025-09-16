import HowItWorksHeader from "../Why/how_it_works_header"
import { ReviewsList } from "./reviews_list"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const Reviews = ({ }) => {

    return(
        <div className={`bg-[#008CFF] ${spaceGrotesk.className} `}>
            <HowItWorksHeader divClassName={"pb-0 "} className={'text-[28px]'} title={"Les témoinagnes"} />

            <ReviewsList />
        </div>
    )
}