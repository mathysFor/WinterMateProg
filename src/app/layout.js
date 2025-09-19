import "./globals.css";

export const metadata = {
  title: "Prépa Ski – WinterMate",
  description: "Programme d’avant-saison pour des cuisses prêtes cet hiver.",
};
import { useEffect } from "react";

import { PostHogProvider } from "./providers";
import { trackScrollDepth } from "@/lib/track";
export default function RootLayout({ children }) {

    useEffect(() => {
    const cleanup = trackScrollDepth();
    return () => {
      if (cleanup) cleanup(); // clean up listener quand on quitte la page
    };
  }, []);
  
  return (
    <html lang="fr">
      {/* Inter par défaut sur body */}
      <body>
             <PostHogProvider>
        {children}
             </PostHogProvider>
      </body>
    </html>
  );
}