import { motion } from "framer-motion";

export const StaggeredText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <span className={`inline-block overflow-hidden ${className}`}>
    <motion.span
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block"
    >
      {text}
    </motion.span>
  </span>
);
