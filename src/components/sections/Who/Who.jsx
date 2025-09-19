"use client";
import { Cards } from "./cards";
import Title from "./Title";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";


export const Who = () => {
  return (
    <motion.section
      className="bg-white pb-10"
      variants={staggerContainer(0.15, 0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div variants={fadeUp}>
        <Title />
      </motion.div>
      <Cards />
    </motion.section>
  );
};
