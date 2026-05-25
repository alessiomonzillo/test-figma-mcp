"use client";

import { motion } from "framer-motion";
import {
  LogoTheRealEstate,
  LogoSkyward,
  LogoUpbeat,
  LogoHemingway,
  LogoNomadic,
  LogoLeaf,
} from "./icons/PartnerLogos";

const logos = [
  { Component: LogoTheRealEstate, label: "The Real Estate" },
  { Component: LogoSkyward, label: "Skyward" },
  { Component: LogoUpbeat, label: "Upbeat" },
  { Component: LogoHemingway, label: "Hemingway" },
  { Component: LogoNomadic, label: "Nomadic" },
  { Component: LogoLeaf, label: "Leaf" },
];

export default function Clients() {
  return (
    <section className="py-14 bg-white border-y border-[#f5f7fa]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[#89939e] text-[13px] mb-10 uppercase tracking-widest font-semibold"
        >
          Trusted by photographers worldwide
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8">
          {logos.map(({ Component, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ scale: 1.08 }}
              className="cursor-default"
              title={label}
            >
              <Component className="transition-all duration-300 hover:[filter:brightness(0.6)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
