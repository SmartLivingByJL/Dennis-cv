import { motion } from "framer-motion";

export const Section = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`min-h-[50vh] py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

export const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={`text-3xl md:text-5xl font-display font-light tracking-tight mb-12 text-zinc-100/90 ${className}`}
  >
    {children}
  </h2>
);

export const Card = ({
  children,
  className,
  title,
  subtitle,
}: {
  children?: React.ReactNode;
  className?: string;
  title: string;
  subtitle?: string;
}) => (
  <div
    className={`group relative p-6 md:p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 rounded-lg overflow-hidden ${className}`}
  >
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    <h3 className="text-xl font-display font-medium text-white mb-1">{title}</h3>
    {subtitle && <p className="text-zinc-500 text-sm font-mono mb-4">{subtitle}</p>}
    <div className="text-zinc-400 leading-relaxed font-light">{children}</div>
  </div>
);
