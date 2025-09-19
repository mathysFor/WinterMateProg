"use client";

import { useState, useMemo } from "react";
import { spaceGrotesk } from "@/lib/fonts";

/**
 * FAQ Section – WinterMate
 * - no external deps (pure React + Tailwind)
 * - respects WinterMate look: dark background, rounded cards, subtle borders,
 *   accent on #008CFF (primary).
 * - Smooth accordion with CSS transition (max-height) and aria attributes.
 */

const ACCENT = "#008CFF"; // WinterMate primary (used for icons/underline)

const defaultFaq = [
  {
    q: "C’est quoi les programmes de préparation physique WinterMate ?",
    a: "Des parcours d’entraînement clés en main (4 à 12 semaines) pensés pour le ski : mobilité, force, explosivité, cardio et prévention blessures. Chaque semaine, tu suis 3 à 5 séances guidées, avec vidéos et consignes claires.",
  },
  {
    q: "À qui s’adressent ces programmes ?",
    a: "À tous les niveaux : du skieur loisir au compétiteur. On te propose un test d’entrée puis des options ‘débutant / intermédiaire / avancé’ pour adapter charges et volumes.",
  },
  {
    q: "Quel matériel est nécessaire ?",
    a: "Une paire d’haltères ou kettlebell, un élastique de résistance et une box/step suffisent. Chaque exercice a une variante ‘sans matériel’ quand c’est possible.",
  },
  {
    q: "Combien de temps prennent les séances ?",
    a: "En moyenne 30 à 40 minutes.",
  },
  
   
  {
    q: "Ai‑je besoin d’iOS ou Android ?",
    a: "Les programmes fonctionnent sur les deux. Les vidéos sont légères et lisibles hors‑réseau après préchargement — pratique en station.",
  },
  {
    q: "Comment contacter un coach ?",
    a: "Depuis l’app (‘Aide’ > ‘Contacter un coach’) ou via Instagram/LinkedIn @WinterMate. Réponse rapide, surtout en période de pré‑saison.",
  },
];

function PlusIcon({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={`shrink-0 transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}
    >
      <path d="M8 0h2v18H8z" fill={ACCENT} />
      <path d="M18 8v2H0V8z" fill={ACCENT} />
    </svg>
  );
}

function Item({ q, a, index, open, onToggle }) {
  return (
    <div
      className="w-full rounded-2xl  bg-[#0E1116]/80 border border-white/10 overflow-hidden"
    >
      <button
        className="w-full flex items-center cursor-pointer justify-between gap-6 px-5 py-4 text-left"
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        onClick={onToggle}
      >
        <span className="text-base md:text-lg font-semibold text-white">{q}</span>
        <PlusIcon open={open} />
      </button>
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-hidden={!open}
        className={`px-5 transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] pb-5" : "max-h-0 pb-0"
        }`}
        style={{ overflow: "hidden" }}
      >
        <p className="text-white leading-relaxed text-sm md:text-base">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function Faq({ title = "FAQ", items }) {
  const data = useMemo(() => items?.length ? items : defaultFaq, [items]);
  const [openIndex, setOpenIndex] = useState(8);

  return (
    <section id="faq" className={` py-14 md:py-20 bg-[#008CFF] ${spaceGrotesk.className} `}>
      <div className="mx-auto w-[92%] relative  max-w-5xl">
        {/* Title */}
        <div className="mb-8 md:mb-12">
         <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
  <span className="bg-[#008CFF] px-3 inline-block">{title}</span>
  <span
    aria-hidden
    className="h-[3px] w-10 md:w-14 rounded-full"
    style={{ backgroundColor: "white", marginTop: "6px" }}
  />
</h2>
          <p className="mt-4 bg-[#008CFF] text-white max-w-2xl">
            Tes retours nous aident à construire des <strong>programmes de préparation physique</strong> vraiment adaptés aux skieurs. Voici les réponses aux questions les plus fréquentes avant de te lancer.
          </p>
        </div>

        {/* Contact short */}
        <div className="mb-6 flex items-center gap-3 text-white">
          <span className="font-semibold bg-[#008CFF]">Tu as d’autres questions ?</span>
          <a href="https://instagram.com/wintermate" target="_blank" rel="noreferrer" aria-label="Instagram WinterMate" className="hover:opacity-80">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke={ACCENT} strokeWidth="2"/>
              <circle cx="12" cy="12" r="4.5" stroke={ACCENT} strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.3" fill={ACCENT}/>
            </svg>
          </a>
          <a href="https://linkedin.com/company/wintermate" target="_blank" rel="noreferrer" aria-label="LinkedIn WinterMate" className="hover:opacity-80">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="3" stroke={ACCENT} strokeWidth="2"/>
              <path d="M7 10h3v7H7zM8.5 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM11.5 10H14v1.2c.5-.8 1.4-1.4 2.6-1.4 2 0 3.4 1.3 3.4 3.9V17h-3v-2.9c0-1.1-.4-1.8-1.4-1.8-1 0-1.6.7-1.6 1.8V17h-3v-7z" fill={ACCENT}/>
            </svg>
          </a>
        </div>

        {/* List */}
        <div className="grid gap-3 md:gap-4">
          {data.map((item, i) => (
            <Item
              key={i}
              index={i}
              q={item.q}
              a={item.a}

              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
