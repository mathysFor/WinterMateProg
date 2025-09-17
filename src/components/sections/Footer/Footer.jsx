import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ['latin']})
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={`${space_grotesk.className} bg-white relative border-t align-middle flex border-black/10 mt-10 text-black`}>
      <div className="max-w-6xl mx-auto px-6 py-10  align-middle flex flex-col gap-8 items-center text-center md:items-start md:text-left">
        {/* Brand */}
        <div className="flex flex-col align-middle items-center md:items-start">
          <Image
            src="/Logo.svg"
            alt="WinterMate logo"
            width={90}
            height={90}
            priority
            className="mb-3"
          />
          <p className="text-sm">
            Prépa ski simple & efficace.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row flex-wrap gap-4 text-sm justify-center text-center md:justify-start md:text-left">
          <Link href="#programme" className="hover:underline">Programme</Link>
          <Link href="#temoignages" className="hover:underline">Témoignages</Link>
          <Link href="#faq" className="hover:underline">FAQ</Link>
          <Link href="/privacy" className="hover:underline">Politique de confidentialité</Link>
          <Link href="/mentions" className="hover:underline">Mentions légales</Link>
          <Link href="/cgv" className="hover:underline">CGV / CGU</Link>
        </nav>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#008CFF]"></div>

        {/* Social icons */}
        <div className="flex justify-center md:justify-start gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            <Image src="/icons/tiktok.svg" alt="TikTok" width={20} height={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400 text-center">
          ©{year} WinterMate. Tous droits réservés.
          <div className="mt-1">wintermate.app</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;