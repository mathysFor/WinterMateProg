'use client'
import Image from "next/image"
import { Space_Grotesk } from "next/font/google";
const space = Space_Grotesk({ subsets: ["latin"], display: "swap" });

import { useState, useEffect, createContext, useContext } from 'react'
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const FlipContext = createContext()

const cards = [
    {
        title: "Débutants",
        description: " Rien de mieux que d’arriver les premiers jours de ski avec un corps affûté. Et comme qui dit début dit souvent chutes, mieux vaut être préparé pour limiter les blessures.",
        icon: '/profil/week.png',
        subtitle : "“Je découvre les pistes”"
    },
    {
        title: "Intermédiaires",
        description: "Tu commences à enchaîner les pistes, mais les cuisses brûlent après quelques descentes. Avec ce programme, tu gagnes en endurance et tu profites plus longtemps.",      
        icon: '/profil/addicted.png',
        subtitle  :'“Je progresse”'
    },
    {
        title: "Avancés",
        description: "Tu skies régulièrement et tu veux passer un cap : plus de puissance, de stabilité et de confiance pour attaquer fort dès le premier jour.",
        icon: '/profil/regular.png',
        subtitle : '“Je maîtrise”'
    },  
    {
        title: "Experts",
        description: "Tu cherches à te rapprocher de l’entraînement des pros. Un corps prêt à encaisser, zéro blessure, et la caisse pour enchaîner les runs comme un rider engagé.",
        icon: '/profil/black.png'   ,
        subtitle : '“Je performe”'

    }
]

const Card = ({ title, description, icon, subtitle, index }) => {
  const { flippedIndex, setFlippedIndex, isHoverCapable } = useContext(FlipContext)
  const flipped = flippedIndex === index

  const open = () => setFlippedIndex(index)

  const toggle = () => {
    setFlippedIndex(flipped ? null : index)
  }
  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={isHoverCapable ? undefined : toggle}
      onKeyDown={onKey}
      onMouseEnter={isHoverCapable ? open : undefined}
      onMouseLeave={isHoverCapable ? () => setFlippedIndex(null) : undefined}
      className="relative w-[160px] h-[220px] md:w-[230px] md:h-[300px] xl:w-[260px] xl:h-[350px] rounded-[12px] shrink-0 cursor-pointer [perspective:1000px] will-change-transform"
      aria-pressed={flipped}
      variants={scaleIn}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute inset-0 transition-transform duration-500 will-change-transform [transform-style:preserve-3d]"
        style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 bg-white   rounded-[12px] flex flex-col items-center justify-start border border-[#008CFF] shadow-lg shadow-[#008CFF] [backface-visibility:hidden]">
          <Image src={icon} width={100} height={100} alt="icon" className="mx-auto pt-5  md:w-[140px] " />
          <p className={`${space.className} font-bold text-lg text-black md:text-2xl text-center`}>{title}</p>
          <p className={`${space.className} font-light text-black md:text-lg text-center text-[12px]`}>{subtitle}</p>
          <p className={`${space.className} font-bold text-black text-center md:text-xl text-sm md:mt-10 lg:mt-8  mt-5`}>Voir plus</p>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 bg-white rounded-[12px] p-3 flex flex-col items-center justify-center text-center border border-[#008CFF] shadow-lg shadow-[#008CFF] [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className={`${space.className} text-[12px]  md:text-lg leading-snug text-black`}>{description}</p>
          <span className={`${space.className} mt-3 text-xs md:hidden  md:text-lg text-[#008CFF] underline`}>Retour</span>
        </div>
      </div>
    </motion.div>
  )
}

export const Cards = () => {
  const [flippedIndex, setFlippedIndex] = useState(null)
  const [isHoverCapable, setIsHoverCapable] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
      const update = () => setIsHoverCapable(mq.matches)
      update()
      if (mq.addEventListener) mq.addEventListener('change', update)
      else mq.addListener(update)
      return () => {
        if (mq.removeEventListener) mq.removeEventListener('change', update)
        else mq.removeListener(update)
      }
    }
  }, [])

  return (
    <FlipContext.Provider value={{ flippedIndex, setFlippedIndex, isHoverCapable }}>
      <div style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} className="overflow-x-auto xl:mt-10 lg:flex">
        <motion.div
          className="flex gap-5 px-5 xl:w-[80%] xl:mx-auto pb-10 pt-10 w-max lg:w-full lg:justify-around"
          onMouseLeave={() => setFlippedIndex(null)}
          variants={staggerContainer(0.12, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              index={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              subtitle={card.subtitle}
            />
          ))}
        </motion.div>
      </div>
    </FlipContext.Provider>
  )
}