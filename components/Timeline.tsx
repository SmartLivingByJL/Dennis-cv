import { motion } from "framer-motion";

export const Timeline = () => {
  const education = [
    {
      year: "2024–2026",
      title: "Energiingenjör",
      company: "John Ericsson Institutet",
      desc: "Specialized vocational education in energy production, efficiency, and sustainable systems. Focus on grid optimization and industrial control."
    },
    {
      year: "2016–2018",
      title: "Energitekniker",
      company: "Högskolan i Dalarna",
      desc: "Professional education in energy engineering and sustainable systems. Focus on renewable production, electrical installation (BB1), and industrial management with an emphasis on energy efficiency and technical leadership."
    },
    {
      year: "2000–2004",
      title: "Teknikprogrammet",
      company: "Kavelbrogymnasiet",
      desc: "Specialized education in network communications and software development. Focus on infrastructure optimization, connectivity, and industrial programming"
    },
  ];

  const work = [
    {
      year: "2021–Present",
      title: "Operations Technician",
      company: "Skövde Energi",
      desc: "Operation and monitoring of district heating networks, boilers, and turbines. Process optimization for energy security."
    },
    {
      year: "2018–2021",
      title: "Operations Technician",
      company: "Lidköping Energi",
      desc: "Operational responsibility for energy production facilities. Maintenance and troubleshooting of critical infrastructure."
    },
    {
      year: "2015–2017",
      title: "Technician",
      company: "Ericsson LSS",
      desc: "Installation and maintenance of Skanova/Telia networks. Technical service and supervision of mobile masts and infrastructure."
    },
    {
      year: "2014–2015",
      title: "Service/Radio Engineer",
      company: "Eltel Networks",
      desc: "Field service for mobile networks and Rakel infrastructure. Participation in national projects with on-call emergency response."
    },
    {
      year: "2013–2014",
      title: "Field Engineer",
      company: "3GNS Telecom",
      desc: "National projects involving upgrades and reconstruction of mobile sites across Sweden."
    },
    {
      year: "2010–2012",
      title: "Operations Engineer",
      company: "Eltel Networks",
      desc: "Network monitoring for Rakel and the Swedish Maritime Administration. Shift-based operational oversight."
    },
    {
      year: "2006–2010",
      title: "IP/LAN Technician",
      company: "Eltel Networks",
      desc: "Installation and service within Telia's network, including technical support and emergency standby."
    },
    {
      year: "2004–2006",
      title: "Network Technician",
      company: "Relacom / Flextronics",
      desc: "Installation and maintenance of distribution network equipment within Telia's infrastructure."
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
