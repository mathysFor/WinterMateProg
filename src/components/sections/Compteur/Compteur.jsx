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
  <div ref={ref} className="relative z-0 text-white text-center py-4 text-lg">
    <p className={`text-black ${space.className} flex items-center lg:text-3xl justify-center gap-2`}>
      <span className="font-bold lg:text-6xl">{count}</span>
      <span>skieurs ont déjà commencé. Et toi ?</span>
    </p>
  </div>
);
}