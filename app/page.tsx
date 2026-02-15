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
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
             <a href="/DJL_EX.pdf" target="_blank" rel="noopener noreferrer" className="block h-full">
               <Card title={t.showcase.thesis.title} subtitle={t.showcase.thesis.subtitle} className="h-full hover:border-zinc-700 transition-colors">
                 <div className="flex flex-col justify-between h-full">
                   <p className="mb-6 text-zinc-400 font-light leading-relaxed">{t.showcase.thesis.desc}</p>
                   <div>
                     <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest border border-zinc-800 rounded-full text-zinc-500 hover:text-white hover:border-zinc-600 transition-all group-hover:bg-zinc-900">
                       <span className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-teal-500 transition-colors"></span>
                       {t.showcase.thesis.button}
                     </span>
                   </div>
                 </div>
               </Card>
             </a>
             <div className="block h-full">
               <Card title={t.showcase.grades.title} subtitle={t.showcase.grades.subtitle} className="h-full border-zinc-800/50 bg-zinc-900/20">
                 <div className="flex flex-col justify-between h-full">
                   <p className="mb-6 text-zinc-500 font-light leading-relaxed">{t.showcase.grades.desc}</p>
                   <div>
                     <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest border border-dashed border-zinc-800 rounded-full text-zinc-600 cursor-not-allowed">
                       <span className="w-2 h-2 rounded-full bg-zinc-800"></span>
                       {t.showcase.grades.button}
                     </span>
                   </div>
                 </div>
               </Card>
             </div>
          </div>

          <div className="pt-8 border-t border-zinc-900">
            <HomeAssistantSensors />
          </div>
        </Section>

        <Section id="expertise">
          <Heading>{t.expertise.heading}</Heading>
          
          <div className="mb-16">
            <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-4">
              {t.expertise.core}
              <span className="h-px bg-zinc-900 flex-grow"></span>
            </h3>
            <Skills />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card title={t.expertise.ai.title} subtitle={t.expertise.ai.subtitle} className="border-zinc-800 bg-zinc-900/20">
              <p className="text-zinc-400 font-light leading-relaxed">{t.expertise.ai.desc}</p>
            </Card>
            <Card title={t.expertise.optimization.title} subtitle={t.expertise.optimization.subtitle} className="border-zinc-800 bg-zinc-900/20">
               <p className="text-zinc-400 font-light leading-relaxed">{t.expertise.optimization.desc}</p>
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
