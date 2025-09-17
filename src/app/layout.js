import "./globals.css";

export const metadata = {
  title: "Prépa Ski – WinterMate",
  description: "Programme d’avant-saison pour des cuisses prêtes cet hiver.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      {/* Inter par défaut sur body */}
      <body>
        {children}
      </body>
    </html>
  );
}