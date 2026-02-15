import { motion } from "framer-motion";

const skills = [
  { name: "Energy Systems", level: "Expert" },
  { name: "SCADA / Automation", level: "Expert" },
  { name: "Telecommunications", level: "Senior" },
  { name: "React / Next.js", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Python / Data", level: "Learning" },
];

export const Skills = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    {skills.map((skill, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: i * 0.05 }}
        className="p-4 border border-zinc-800 rounded-md bg-zinc-900/50 backdrop-blur-sm hover:border-zinc-600 transition-colors"
      >
        <span className="text-zinc-500 font-mono text-xs uppercase block mb-1">{skill.level}</span>
        <h4 className="text-zinc-200 font-display text-lg">{skill.name}</h4>
      </motion.div>
    ))}
  </div>
);
