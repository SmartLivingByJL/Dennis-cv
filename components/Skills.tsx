"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const Skills = () => {
  const { t } = useLanguage();
  const skills = t.expertise.list;

  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill: any, i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.05 }}
          className="group relative px-4 py-2 border border-zinc-800 bg-zinc-900/40 rounded-full hover:bg-zinc-800/80 hover:border-zinc-700 transition-all cursor-default"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-teal-500 transition-colors duration-500" />
            <span className="text-zinc-300 font-display text-sm group-hover:text-white transition-colors">{skill.name}</span>
            <span className="text-zinc-600 text-[10px] font-mono uppercase tracking-wider pl-2 border-l border-zinc-800">{skill.level}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
