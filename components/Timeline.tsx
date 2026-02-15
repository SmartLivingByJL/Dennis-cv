"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const Timeline = () => {
  const { t } = useLanguage();
  
  const education = t.experience.timeline.edu;
  const work = t.experience.timeline.jobs;

  const TimelineItem = ({ item, index }: { item: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="relative group mb-12 last:mb-0"
    >
      <span className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 border border-zinc-600 group-hover:bg-zinc-100 group-hover:border-white transition-colors duration-300 z-10" />
      <span className="text-zinc-500 font-mono text-sm mb-1 block">{item.year}</span>
      <h3 className="text-xl font-display font-medium text-white group-hover:text-zinc-300 transition-colors">{item.title}</h3>
      <p className="text-zinc-400 text-sm mb-2">{item.company}</p>
      <p className="text-zinc-500 font-light leading-relaxed max-w-prose">{item.desc}</p>
    </motion.div>
  );

  return (
    <div className="space-y-16">
      <div>
        <h3 className="text-lg font-mono uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-800 pb-2 inline-block">{t.experience.timeline.work}</h3>
        <div className="border-l border-zinc-800 ml-3 pl-8 relative">
          {work.map((exp: any, i: number) => (
            <TimelineItem key={i} item={exp} index={i} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-mono uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-800 pb-2 inline-block">{t.experience.timeline.education}</h3>
        <div className="border-l border-zinc-800 ml-3 pl-8 relative">
          {education.map((edu: any, i: number) => (
            <TimelineItem key={i} item={edu} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
