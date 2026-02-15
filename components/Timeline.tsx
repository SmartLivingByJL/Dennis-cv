import { motion } from "framer-motion";

export const Timeline = () => {
  const experiences = [
    {
      year: "2024–2026",
      title: "Energiingenjör",
      company: "John Ericsson Institutet",
      desc: "Specialized vocational education in energy production, efficiency, and sustainable systems. Focus on grid optimization and industrial control."
    },
    {
      year: "2021–Present",
      title: "Drifttekniker",
      company: "Skövde Energi",
      desc: "Operation and monitoring of district heating networks, boilers, and turbines. Process optimization for energy security."
    },
    {
      year: "2018–2021",
      title: "Drifttekniker",
      company: "Lidköping Energi",
      desc: "Operational responsibility for energy production facilities. Maintenance and troubleshooting of critical infrastructure."
    },
    {
      year: "2015–2017",
      title: "Tekniker",
      company: "Ericsson LSS",
      desc: "Maintenance of Skanova/Telia networks. Critical infrastructure service for mobile masts and technical sites."
    },
  ];

  return (
    <div className="space-y-12 border-l border-zinc-800 ml-3 pl-8 relative">
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.1 }}
          className="relative group"
        >
          <span className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 border border-zinc-600 group-hover:bg-zinc-100 group-hover:border-white transition-colors duration-300" />
          <span className="text-zinc-500 font-mono text-sm mb-1 block">{exp.year}</span>
          <h3 className="text-xl font-display font-medium text-white group-hover:text-zinc-300 transition-colors">{exp.title}</h3>
          <p className="text-zinc-400 text-sm mb-2">{exp.company}</p>
          <p className="text-zinc-500 font-light leading-relaxed max-w-prose">{exp.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};
