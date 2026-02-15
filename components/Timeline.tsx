import { motion } from "framer-motion";

export const Timeline = () => {
  const education = [
    {
      year: "2024–2026",
      title: "Energiingenjör",
      company: "John Ericsson Institutet",
      desc: "Specialized vocational education in energy production, efficiency, and sustainable systems. Focus on grid optimization and industrial control."
    },
  ];

  const work = [
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
        <h3 className="text-lg font-mono uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-800 pb-2 inline-block">Work Experience</h3>
        <div className="border-l border-zinc-800 ml-3 pl-8 relative">
          {work.map((exp, i) => (
            <TimelineItem key={i} item={exp} index={i} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-mono uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-800 pb-2 inline-block">Education</h3>
        <div className="border-l border-zinc-800 ml-3 pl-8 relative">
          {education.map((edu, i) => (
            <TimelineItem key={i} item={edu} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
