"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { spaceGrotesk } from "@/lib/fonts";
import { BurgerMobile } from "../ui/Menu";
import Button from "../ui/Button";
import { MenuMobile } from "./Menu_Mobile";
import { NavDesktop } from "./Nav_Desktop";
export default function TopBar() {
  const [open, setOpen] = useState(false);


  // Fermer le menu quand on change de hash
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white
      border-b border-black/10 `}
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo.svg"
            alt="WinterMate logo"
            width={40}
            height={40}
            priority
          />
          <span className={`${spaceGrotesk.className} text-sm text-black font-light`}>WinterMate</span>
        </Link>

        {/* Nav desktop */}

        <NavDesktop />

        {/* Burger mobile */}

        <BurgerMobile open={open} setOpen={setOpen} />
   
      </div>

      {/* Menu mobile */}
     
     <MenuMobile  open={open} />

    </header>
  );
}
