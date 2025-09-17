

// Reusable motion variants for consistent animations across the site

"use client";
import { motion } from "framer-motion";
 
export const SectionReveal = ({ children, stagger = 0.2, delayChildren = 0.1 }) => {
  return (
    <motion.div
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div variants={fadeUp}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default SectionReveal;



export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slide = (dir = 1) => ({
  hidden: { opacity: 0, x: 20 * dir },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
});

export const staggerContainer = (stagger = 0.25, delayChildren = 0) => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren, when: "beforeChildren" }
  }
});
