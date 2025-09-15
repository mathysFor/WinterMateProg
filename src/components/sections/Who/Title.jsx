
import { Space_Grotesk } from "next/font/google";
const space = Space_Grotesk({ subsets: ["latin"], display: "swap" });


const Title = ({  }) => {
  
    return (
      <div className=" text-center pt-10    w-[100vw]">
        <h2 className={`${space.className} text-[22px] md:text-[28px] lg:text-[32px] font-bold text-black`}>Pour qui est fait ce programme ?</h2>
      </div>
    );
  };
  
  export default Title;