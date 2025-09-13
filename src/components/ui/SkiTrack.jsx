import { useState, useEffect } from "react";
export const SkiTrack = ({ className = "", startPct = 0.1 }) => {
      const [width, setWidth] = useState(100); // valeur par défaut
  const height = 800;
  const segmentCount = 1;
  const segmentHeight = height / segmentCount;
  const startY = 0;

  // Mise à jour dynamique de la largeur
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // init
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Construction du path
  const startX = width * startPct;
  let d = `M${startX} ${startY}`;
  for (let i = 0; i < segmentCount; i++) {
    const isEven = i % 2 === 0;
    const controlX = isEven ? width * 0.85 : width * 0.15;
    const endX = isEven ? width * 0.7 : width * 0.3;
    const y = startY + (i + 1) * segmentHeight;

    if (i === 0) {
      d += ` C ${startX} ${startY + segmentHeight / 2}, ${controlX} ${
        y - segmentHeight / 2
      }, ${endX} ${y}`;
    } else {
      d += ` S ${controlX} ${y - segmentHeight / 2}, ${endX} ${y}`;
    }
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      width="100%"
      height="100%"
    >
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="30 24"
        vectorEffect="non-scaling-stroke"
        className="text-gray-300"
      />
    </svg>
  );
}