"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500 font-mono text-sm tracking-widest uppercase"
        >
          Dennis Johansson Lloyd
        </motion.p>

        <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-white leading-[0.9]">
          <span className="block overflow-hidden"><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} className="block">{t.hero.keywords[0]}</motion.span></span>
          <span className="block overflow-hidden"><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} className="block text-zinc-500">{t.hero.keywords[1]}</motion.span></span>
          <span className="block overflow-hidden"><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }} className="block">{t.hero.keywords[2]}</motion.span></span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-xl mt-12 text-zinc-400 font-light text-lg leading-relaxed"
        >
          <p>
            {t.hero.intro}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
