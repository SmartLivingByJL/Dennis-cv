import { motion } from "framer-motion";

export const Contact = () => (
  <div className="flex flex-col gap-8 max-w-xl mx-auto items-center text-center">
    <p className="text-zinc-400 font-light text-xl">
      Let's optimize the future together.
    </p>
    <div className="flex gap-6 justify-center">
      {[
        { name: "Email", href: "mailto:dennis.johansson.lloyd@gmail.com" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/dennis-johansson-lloyd-b8054b8a/" },
        { name: "GitHub", href: "https://github.com/" }
      ].map((link, i) => (
        <a 
          key={i} 
          href={link.href} 
          className="text-white hover:text-zinc-400 font-display text-lg underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-all"
        >
          {link.name}
        </a>
      ))}
    </div>
  </div>
);
