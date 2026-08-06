import { motion, useReducedMotion } from 'framer-motion';

// Reusable scroll-triggered fade/rise, used across every section instead of
// hand-rolling the same whileInView config repeatedly. Falls back to a plain
// div — no motion at all — for anyone with prefers-reduced-motion set.
export default function Reveal({ children, delay = 0, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
