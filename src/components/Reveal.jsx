import { motion } from "framer-motion";

/**
 * Wraps children in a consistent fade-up entrance animation that
 * plays once when scrolled into view. Used throughout instead of
 * repeating the same framer-motion boilerplate in every section.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  as = "div",
}) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
