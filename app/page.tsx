"use client";

import SmoothScroll from "@/components/SmoothScroll";
import GeometricBackground from "@/components/GeometricBackground";
import { Hero } from "@/components/Hero";
import { Section, Heading, Card } from "@/components/UI";
import { Timeline } from "@/components/Timeline";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import HomeAssistantSensors from "@/components/HomeAssistantSensors";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext"; // Importera hooken

export default function Home() {
  const { t, language, toggleLanguage } = useLanguage(); // Använd hooken

  return (
    <SmoothScroll>
      <main className="relative min-h-screen selection:bg-white selection:text-black">
        <GeometricBackground />
        
        {/* Navigation / Header */}
        <header className="fixed top-0 left-0 w-full p-6 md:p-12 z-50 mix-blend-difference text-white flex justify-between items-center pointer-events-none">
          <span className="font-display font-bold text-xl pointer-events-auto cursor-pointer">DJL</span>
          <div className="flex items-center gap-6 pointer-events-auto">
            <a href="mailto:dennis.johansson.lloyd@gmail.com" className="font-mono text-xs uppercase tracking-widest hover:underline hidden md:block">
              {t.nav.available}
            </a>
            {/* Språkknapp */}
            <button 
              onClick={toggleLanguage}
              className="font-mono text-xs uppercase tracking-widest border border-white/30 px-3 py-1 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              {language === 'en' ? 'SV' : 'EN'}
            </button>
          </div>
        </header>

        <Hero />

        <Section id="about" className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <Heading>{t.about.heading}</Heading>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-300">
              {t.about.text}
            </p>
            <p className="mt-8 text-zinc-500 font-mono text-sm leading-loose">
              {t.about.details.based}<br />
              {t.about.details.focus}<br />
              {t.about.details.experience}
            </p>
          </div>
          <div className="relative aspect-[4/5] w-full md:w-3/4 mx-auto overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
             <Image 
                src="/dennis.png" 
                alt="Dennis Johansson Lloyd" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
             />
             <div className="absolute inset-0 ring-1 ring-white/10" />
          </div>
        </Section>

        <Section id="experience">
          <Heading>{t.experience.heading}</Heading>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4 text-zinc-500 text-sm font-mono md:sticky md:top-32 h-fit">
              <p>{t.experience.intro}</p>
            </div>
            <div className="md:col-span-8">
              <Timeline />
            </div>
          </div>
        </Section>

        <Section id="showcase">
          <Heading>{t.showcase.heading}</Heading>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
             <a href="/DJL_EX.pdf" target="_blank" rel="noopener noreferrer" className="block">
               <Card title={t.showcase.thesis.title} subtitle={t.showcase.thesis.subtitle}>
                 <p className="mb-4 text-zinc-400">{t.showcase.thesis.desc}</p>
                 <span className="inline-block px-3 py-1 text-xs font-mono border border-zinc-700 rounded-full text-zinc-500 hover:text-white hover:border-white transition-colors">{t.showcase.thesis.button}</span>
               </Card>
             </a>
             <div className="block">
               <Card title={t.showcase.grades.title} subtitle={t.showcase.grades.subtitle}>
                 <p className="mb-4 text-zinc-400">{t.showcase.grades.desc}</p>
                 <span className="inline-block px-3 py-1 text-xs font-mono border border-zinc-700 rounded-full text-zinc-500">{t.showcase.grades.button}</span>
               </Card>
             </div>
          </div>
          <HomeAssistantSensors />
        </Section>

        <Section id="expertise">
          <Heading>{t.expertise.heading}</Heading>
          <Card title={t.expertise.core} className="mb-8">
            <Skills />
          </Card>
          <div className="grid md:grid-cols-2 gap-6">
            <Card title={t.expertise.ai.title} subtitle={t.expertise.ai.subtitle}>
              {t.expertise.ai.desc}
            </Card>
            <Card title={t.expertise.optimization.title} subtitle={t.expertise.optimization.subtitle}>
              {t.expertise.optimization.desc}
            </Card>
          </div>
        </Section>

        <Section id="contact" className="py-32 md:py-64">
           <Contact />
        </Section>

        <footer className="py-12 px-6 md:px-12 border-t border-zinc-900 text-center md:text-left flex flex-col md:flex-row justify-between items-end text-zinc-600 text-xs font-mono uppercase tracking-widest">
          <div>
            <p>© {new Date().getFullYear()} Dennis Johansson Lloyd</p>
            <p className="mt-2">{t.footer.engineered}</p>
          </div>
          <div className="mt-8 md:mt-0">
            <p>{t.footer.location}</p>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
