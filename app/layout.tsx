import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LanguageWrapper from "@/components/LanguageWrapper"; // Importera Wrapper

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  title: "Dennis Johansson Lloyd | Energy Engineer & Developer",
  description: "Specializing in Energy Systems, Automation, and Telecommunications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth bg-zinc-950 text-zinc-100 antialiased selection:bg-white/20 selection:text-white">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <LanguageWrapper>{children}</LanguageWrapper>
      </body>
    </html>
  );
}
