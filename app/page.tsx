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

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen selection:bg-white selection:text-black">
        <GeometricBackground />
        
        {/* Navigation / Header */}
        <header className="fixed top-0 left-0 w-full p-6 md:p-12 z-50 mix-blend-difference text-white flex justify-between items-center pointer-events-none">
          <span className="font-display font-bold text-xl pointer-events-auto cursor-pointer">DJL</span>
          <a href="mailto:dennis.johansson.lloyd@gmail.com" className="font-mono text-xs uppercase tracking-widest hover:underline pointer-events-auto">Available for projects</a>
        </header>

        <Hero />

        <Section id="about" className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <Heading>About</Heading>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-300">
              I am an experienced operations technician transitioning into energy engineering. My background in critical infrastructure—from telecom networks to district heating—gives me a unique perspective on reliability and optimization.
            </p>
            <p className="mt-8 text-zinc-500 font-mono text-sm leading-loose">
              CURRENTLY BASED IN SWEDEN<br />
              FOCUS: SUSTAINABLE ENERGY & AI<br />
              EXPERIENCE: 15+ YEARS
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
          <Heading>Trajectory</Heading>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4 text-zinc-500 text-sm font-mono md:sticky md:top-32 h-fit">
              <p>A career built on precision, reliability, and continuous learning.</p>
              <p className="mt-4">From field technician to engineering strategist.</p>
            </div>
            <div className="md:col-span-8">
              <Timeline />
            </div>
          </div>
        </Section>

        <Section id="showcase">
          <Heading>Showcase</Heading>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
             <Card title="Examensarbete" subtitle="Upcoming">
               <p className="mb-4 text-zinc-400">Plats för ditt framtida examensarbete inom energiteknik och optimering.</p>
               <span className="inline-block px-3 py-1 text-xs font-mono border border-zinc-700 rounded-full text-zinc-500">2026</span>
             </Card>
             <Card title="Betyg & Intyg" subtitle="Academic Records">
               <p className="mb-4 text-zinc-400">Samlade betyg och certifikat från utbildningar och kurser.</p>
               <div className="flex gap-2">
                 <span className="inline-block px-3 py-1 text-xs font-mono border border-zinc-700 rounded-full text-zinc-500">PDF</span>
                 <span className="inline-block px-3 py-1 text-xs font-mono border border-zinc-700 rounded-full text-zinc-500">Docs</span>
               </div>
             </Card>
          </div>
          <HomeAssistantSensors />
        </Section>

        <Section id="expertise">
          <Heading>Expertise</Heading>
          <Card title="Core Competencies" className="mb-8">
            <Skills />
          </Card>
          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Industrial AI" subtitle="Vision">
              Leveraging machine learning for predictive maintenance in heavy industry. Bridging OT (Operational Technology) with IT.
            </Card>
            <Card title="System Optimization" subtitle="Methodology">
              Applying rigorous analysis to reduce waste and improve efficiency in thermodynamic and electrical systems.
            </Card>
          </div>
        </Section>

        <Section id="contact" className="py-32 md:py-64">
           <Contact />
        </Section>

        <footer className="py-12 px-6 md:px-12 border-t border-zinc-900 text-center md:text-left flex flex-col md:flex-row justify-between items-end text-zinc-600 text-xs font-mono uppercase tracking-widest">
          <div>
            <p>© {new Date().getFullYear()} Dennis Johansson Lloyd</p>
            <p className="mt-2">Engineered with Next.js & Tailwind</p>
          </div>
          <div className="mt-8 md:mt-0">
            <p>Skaraborg, Sweden</p>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
