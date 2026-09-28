import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Fades a section up into place the first time it scrolls into view. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={itemVariants}
      transition={{ duration: 0.8, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

/** Wraps a grid of RevealItem children so they fade up one after another. */
export function RevealGroup({ children, className, stagger = 0.09 }: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={itemVariants} transition={{ duration: 0.7, ease: EASE_OUT }}>
      {children}
    </motion.div>
  );
}
