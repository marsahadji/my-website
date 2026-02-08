import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import TechBackground from "@/components/ui/TechBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Martial Ahadji | Architecte Logiciel & Data",
  description: "QG numérique de Martial Ahadji - Architecture, Data, IA et Souveraineté Numérique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${merriweather.variable} font-sans antialiased bg-background text-foreground min-h-screen relative`}
      >
        <TechBackground />
        {children}
      </body>
    </html>
  );
}
