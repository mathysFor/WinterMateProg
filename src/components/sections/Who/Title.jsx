
import { Space_Grotesk } from "next/font/google";
const space = Space_Grotesk({ subsets: ["latin"], display: "swap" });


const Title = ({  }) => {
  
    return (
      <div className=" text-center pt-10 relative     w-[100vw]">
        <h2 className={`${space.className} text-[22px] md:text-[28px] z-50 lg:text-[32px] bg-white font-bold text-black`}>Pour qui est fait ce programme ?</h2>
      </div>
    );
  };
  
  export default Title;