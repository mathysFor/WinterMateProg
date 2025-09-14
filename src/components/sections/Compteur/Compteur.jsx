"use client"
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({ subsets: ["latin"], display: "swap" });

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
export const Compteur = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);
    const target = 34;
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    useEffect(() => {

               if (!inView) {
            setCount(0);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
        if (inView && count < target && intervalRef.current === null) {
            intervalRef.current = setInterval(() => {
                setCount(prev => {
                    if (prev < target) {
                        return prev + 1;
                    } else {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                        return prev;
                    }
                });
            }, 30);
        }
   
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };

      
    }, [inView, count]);

return (
  <div ref={ref} className="relative z-70 text-white lg:mt-20 lg:bg-white w-[90%] mt-4 lg:border-[#D9D9D9] lg:rounded-[12px] lg:border-1 mx-auto text-center py-4 text-lg">
    <p className={`text-black ${space.className} bg-white flex items-center lg:text-3xl text-md justify-center gap-2`}>
      <span className="font-bold lg:text-6xl text-3xl">{count}</span>
      <span className="hidden md:inline">skieurs ont déjà commencé. Et toi ?</span>
      <span className="inline md:hidden">skieurs ont déjà commencé.</span>
    </p>
  </div>
);
}