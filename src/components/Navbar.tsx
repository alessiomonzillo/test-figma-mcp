"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NexcentLogo from "./icons/NexcentLogo";

const navLinks = ["Home", "About", "Features", "Community", "Blog"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "border-b border-[#abbed1]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" aria-label="Nexcent home">
          <NexcentLogo />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-[#263238] text-[15px]">
          {navLinks.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
            >
              <a
                href="#"
                className="relative group py-1 font-medium hover:text-[#4caf4f] transition-colors duration-200"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4caf4f] transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-[#263238] text-[15px] font-semibold hover:text-[#4caf4f] transition-colors"
          >
            Login
          </a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#4caf4f] hover:bg-[#43a046] text-white text-[15px] font-semibold px-5 py-2.5 rounded-md transition-colors duration-200"
          >
            Sign up
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#263238] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#263238] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#263238] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden border-t border-[#f5f7fa] bg-white px-6 pb-4"
        >
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((item) => (
              <li key={item}>
                <a href="#" className="text-[#263238] font-medium hover:text-[#4caf4f]">
                  {item}
                </a>
              </li>
            ))}
            <li className="flex gap-3 pt-2">
              <a href="#" className="text-[#4caf4f] font-semibold">Login</a>
              <a href="#" className="bg-[#4caf4f] text-white font-semibold px-4 py-2 rounded-md text-sm">Sign up</a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
