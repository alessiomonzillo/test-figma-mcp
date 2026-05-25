"use client";

import { motion } from "framer-motion";
import NexcentLogo from "./icons/NexcentLogo";

const footerLinks = {
  Company: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"],
  Support: ["Help center", "Terms of service", "Legal", "Privacy policy"],
};

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M12 2h-2a3 3 0 00-3 3v2H5v3h2v5h3V10h2l1-3H10V5a1 1 0 011-1h1V2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M14.5 2.5s-1 1-2.5 1.5C11.5 2.5 10 2 8.5 2c-2.5 0-4.5 2-4.5 4.5 0 .3 0 .6.1.9C2 7 .5 5.5.5 5.5s0 3.5 3.5 5c-.5.5-1.5.5-2 .5 1 1.5 3 2 4.5 2 3.5 0 6-2.5 6-6v-.5c.5-.5 1.5-1.5 2-2.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="11.5" cy="4.5" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5.5 7v4M5.5 5.5v.5M8 11V8.5A1.5 1.5 0 0111 8.5V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#263238] text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="#" aria-label="Nexcent home" className="inline-block mb-4">
              {/* White version of logo */}
              <svg width="130" height="26" viewBox="0 0 149 30" fill="none">
                <path d="M15 2C8.373 2 3 7.373 3 14c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12C27 7.373 21.627 2 15 2z" fill="#4CAF4F" />
                <path d="M15 7c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z" fill="white" fillOpacity="0.3" />
                <path d="M15 10.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5z" fill="white" />
                <path d="M37.9 21V9.4h2.04l6.36 8.52V9.4h2.04V21h-2.04l-6.36-8.52V21H37.9z" fill="white" />
                <path d="M51.42 21V9.4h8.88v1.8h-6.84v3.12h6.42v1.8h-6.42v3.12h7.02V21H51.42z" fill="white" />
                <path d="M72.18 21l-3.6-4.68L64.98 21h-2.4l4.8-5.88-4.56-5.72h2.4l3.36 4.44 3.36-4.44h2.4l-4.56 5.72L74.58 21h-2.4z" fill="white" />
                <path d="M83.7 21.24c-3.48 0-6-2.52-6-6s2.52-6 6-6c2.04 0 3.72.84 4.8 2.28l-1.56 1.08c-.72-1.02-1.92-1.56-3.24-1.56-2.28 0-3.96 1.68-3.96 4.2s1.68 4.2 3.96 4.2c1.32 0 2.52-.54 3.24-1.56l1.56 1.08c-1.08 1.44-2.76 2.28-4.8 2.28z" fill="white" />
                <path d="M90.54 21V9.4h2.04l6.36 8.52V9.4h2.04V21h-2.04l-6.36-8.52V21H90.54z" fill="white" />
                <path d="M104.06 21V9.4h8.88v1.8h-6.84v3.12h6.42v1.8h-6.42v3.12h7.02V21h-9.06z" fill="white" />
                <path d="M120.62 21.24c-3.36 0-5.76-2.52-5.76-6s2.4-6 5.76-6c1.8 0 3.24.6 4.2 1.68l-1.44 1.2c-.72-.78-1.68-1.08-2.76-1.08-2.16 0-3.72 1.68-3.72 4.2s1.56 4.2 3.72 4.2c1.08 0 2.04-.3 2.76-1.08l1.44 1.2c-.96 1.08-2.4 1.68-4.2 1.68z" fill="white" />
                <path d="M130.34 21v-9.8h-3.6V9.4h9.24v1.8h-3.6V21h-2.04z" fill="white" />
              </svg>
            </a>
            <p className="text-[#89939e] text-[14px] leading-relaxed mb-5 max-w-[220px]">
              8 years of lessons on growing a photography business. Site vs social, answered with data.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.12, backgroundColor: "#4caf4f" }}
                  className="w-9 h-9 rounded-full bg-[#4d4d4d] flex items-center justify-center text-[#89939e] hover:text-white transition-colors duration-200"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links], colIndex) => (
            <div key={title}>
              <h4 className="font-semibold text-[15px] mb-5 text-white">{title}</h4>
              <ul className="space-y-3">
                {links.map((l, i) => (
                  <motion.li
                    key={l}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: colIndex * 0.05 + i * 0.04, duration: 0.35 }}
                  >
                    <a href="#" className="text-[#89939e] text-[14px] hover:text-white transition-colors duration-200">
                      {l}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter mini */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5 text-white">Stay up to date</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 bg-[#4d4d4d] border border-transparent focus:border-[#4caf4f] px-3 py-2.5 rounded-md text-[13px] text-white placeholder:text-[#717171] focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#4caf4f] hover:bg-[#43a046] px-3 py-2.5 rounded-md transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#4d4d4d] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#717171] text-[13px]">© 2025 Nexcent. All rights reserved.</p>
          <div className="flex gap-6 text-[#717171] text-[13px]">
            {["Privacy Policy", "Terms of Use", "Sales and Refunds"].map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
