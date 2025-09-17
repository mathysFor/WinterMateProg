import "./globals.css";

export const metadata = {
  title: "Prépa Ski – WinterMate",
  description: "Programme d’avant-saison pour des cuisses prêtes cet hiver.",
};

import { PostHogProvider } from "./providers";

export default function RootLayout({ children }) {
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