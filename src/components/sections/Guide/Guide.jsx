"use client";
import Button from "@/components/ui/Button";
import { Space_Grotesk } from "next/font/google";
const space = Space_Grotesk({ subsets: ["latin"], display: "swap" });
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export const Guide = () => {
  return (
    <motion.section
      className="bg-[#D9D9D9]  py-10"
      variants={staggerContainer(0.18, 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.h2
        variants={fadeUp}
        className={`${space.className} font-bold text-2xl z-50 md:text-3xl relative bg-[#D9D9D9]  text-left ml-5  text-black underline underline-offset-4 decoration-[#008CFF]`}
      >
        Un programme clair et guidé, accessible partout
      </motion.h2>
      <motion.div
        className="lg:flex lg:flex-row-reverse lg:items-center  px-10 lg:justify-center"
        variants={staggerContainer(0.15, 0.1)}
      >
        <motion.div variants={fadeUp}>
          <Image
            src="/guide/mokup.png"
            width={800}
            height={400}
            alt="guide"
            className="mx-auto mt-10 z-50 relative md:mt-5 lg:mt0 lg:w-[600px] xl:w-[800px]"
          />
        </motion.div>
        <motion.p
          variants={fadeUp}
          className={`${space.className} lg:mt-20  text-center lg:text-justify w-[90%] mx-auto mt-5 bg-[#D9D9D9]  z-50 relative text-black`}
        >
          Tu accèdes <span className="font-bold">immédiatement</span> à un programme de 30 jours en ligne, avec 4 séances progressives par semaine. Chaque exercice est <span className="font-bold">expliqué pas à pas</span> et illustré par une <span className="font-bold">vidéo claire</span>, pour t’entraîner facilement depuis ton téléphone ou ton ordinateur, <span className="font-bold">sans aucun matériel requis</span>. L’interface a été pensée pour une <span className="font-bold">expérience utilisateur</span> fluide, <span className="font-bold">motivante</span> et  <span className="font-bold">agréable</span>, afin que tu prennes autant de <span className="font-bold">plaisir</span> à suivre le programme qu’à skier.
        </motion.p>
      </motion.div>
      <motion.div variants={fadeUp} className="flex justify-center">
        <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
          <Button
                      onClick={() => trackCTA("guide_section")}
          
          className="mt-10 z-50 rounded-[20px] relative md:mt-20">Je commence maintenant</Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
