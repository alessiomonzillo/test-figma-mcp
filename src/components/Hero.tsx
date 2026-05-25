"use client";

import { motion } from "framer-motion";
import HeroIllustration from "./icons/HeroIllustration";

export default function Hero() {
  return (
    <section className="bg-[#f5f7fa] py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* Text content */}
        <div className="flex-1 max-w-[560px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#4caf4f] font-semibold text-[14px] uppercase tracking-widest mb-4"
          >
            8 years of insights
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[40px] md:text-[52px] font-bold text-[#263238] leading-[1.2] tracking-[-0.5px] mb-6"
          >
            Lessons and insights{" "}
            <span className="text-[#4caf4f]">from 8 years</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[18px] text-[#89939e] leading-[1.7] mb-8"
          >
            Where to grow your business as a photographer: site or social media?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#4caf4f] hover:bg-[#43a046] text-white font-semibold px-8 py-3.5 rounded-md text-[15px] transition-colors duration-200 text-center"
            >
              Get started
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="border border-[#4caf4f] text-[#4caf4f] hover:bg-[#e8f5e9] font-semibold px-8 py-3.5 rounded-md text-[15px] transition-colors duration-200 text-center"
            >
              Learn more
            </motion.a>
          </motion.div>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <HeroIllustration className="w-full max-w-[480px] h-auto" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
