"use client";

import { useState, useEffect } from "react";
export const SkiTrack = ({
  className = "",
  startPct = 0.1,
  fixed = true,
  mode = "viewport",
  edgeFactor = 0.92,   // plus proche des bords = valeurs proches de 1
  jitter = 0.08,       // variation latérale/verticale max (0..0.2 conseillé)
  seed = 42,           // pour garder une trace stable entre renders
}) => {
  const [width, setWidth] = useState(100); // valeur par défaut
  const [docHeight, setDocHeight] = useState(1200); // hauteur dynamique du document
  const [canvasHeight, setCanvasHeight] = useState(1200); // hauteur réellement utilisée pour le SVG
  const segmentCount = 3;
  const startY = 0;

  // Helper pour récupérer une hauteur de document fiable (scroll/offset/client)
  const computeDocHeight = () => {
    if (typeof document === "undefined") return 1200;
    const b = document.body;
    const e = document.documentElement;
    return Math.max(
      b.scrollHeight,
      e.scrollHeight,
      b.offsetHeight,
      e.offsetHeight,
      b.clientHeight,
      e.clientHeight
    );
  };

  // RNG déterministe (Mulberry32) pour des variations stables
  const mulberry32 = (s) => {
    return function() {
      let t = (s += 0x6D2B79F5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };
  const rnd = mulberry32(seed);

  // Renvoie une valeur dans [-amp, +amp]
  const jitterSym = (amp) => (rnd() * 2 - 1) * amp;

  // Mise à jour dynamique de la largeur ET des hauteurs
  useEffect(() => {
    const updateDims = () => {
      const w = window.innerWidth;
      const dH = computeDocHeight();
      setWidth(w);
      setDocHeight(dH);
      setCanvasHeight(mode === "viewport" ? window.innerHeight : dH);
    };

    updateDims();
    const t = setTimeout(updateDims, 0);

    window.addEventListener("resize", updateDims);
    window.addEventListener("orientationchange", updateDims);

    const observer = new MutationObserver(() => updateDims());
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, characterData: true });

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", updateDims);
      window.removeEventListener("orientationchange", updateDims);
      observer.disconnect();
    };
  }, [mode]);

  const segmentHeight = canvasHeight / segmentCount;

  // Construction du path avec virages plus amples et variés
  const startX = width * startPct;
  let d = `M${startX} ${startY}`;

  for (let i = 0; i < segmentCount; i++) {
    const toRight = i % 2 === 0; // alterne droite/gauche

    // Cible proche des bords (edgeFactor), + jitter latéral
    const edgeX = toRight ? width * edgeFactor : width * (1 - edgeFactor);
    const endX = edgeX + width * jitterSym(jitter * 0.25);

    // Point de contrôle encore plus vers l’extérieur pour accentuer le carve
    const controlEdge = toRight ? width * (edgeFactor + 0.04) : width * (1 - (edgeFactor + 0.04));
    const controlX = Math.min(Math.max(controlEdge + width * jitterSym(jitter * 0.35), 0), width);

    // Variation verticale légère pour casser l’uniformité
    const y = startY + (i + 1) * segmentHeight + canvasHeight * jitterSym(jitter * 0.06);
    const cpY = y - (segmentHeight / 2) + canvasHeight * jitterSym(jitter * 0.05);

    if (i === 0) {
      d += ` C ${startX} ${startY + segmentHeight / 2}, ${controlX} ${cpY}, ${endX} ${y}`;
    } else {
      // On utilise S pour la douceur, avec notre cpX recalculé
      d += ` S ${controlX} ${cpY}, ${endX} ${y}`;
    }
  }

  const wrapperStyle = fixed
    ? { position: "fixed", top: 0, left: 0, width: "100%", height: mode === "viewport" ? "100vh" : canvasHeight, pointerEvents: "none", zIndex: 0 }
    : { position: "absolute", top: 0, left: 0, width: "100%", height: mode === "viewport" ? "100vh" : canvasHeight, pointerEvents: "none", zIndex: 0 };

  return (
    <div style={wrapperStyle} className={fixed ? "" : className}>
      <svg
        viewBox={`0 0 ${width} ${canvasHeight}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        className={`block ${!fixed ? className : ""}`}
        width="100%"
        height="100%"
        style={{ display: "block" }}
      >
        <path
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="36 26"
          vectorEffect="non-scaling-stroke"
          className="text-gray-300"
        />
      </svg>
    </div>
  );
}