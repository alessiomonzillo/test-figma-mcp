"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="#e8f5e9" />
        <path d="M14 7v14M7 14h14" stroke="#4caf4f" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Website vs Social",
    description: "We compare real-world results: organic reach, client acquisition, and revenue — website wins in long-term ROI.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="#e8f5e9" />
        <circle cx="14" cy="14" r="6" stroke="#4caf4f" strokeWidth="2.5" />
        <circle cx="14" cy="14" r="2" fill="#4caf4f" />
      </svg>
    ),
    title: "8-Year Data Insights",
    description: "Aggregated from hundreds of photography businesses, our data shows clear patterns on what actually drives bookings.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="#e8f5e9" />
        <path d="M8 18l4-6 4 4 4-8" stroke="#4caf4f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Growth Playbook",
    description: "Step-by-step strategies used by top photographers to build authority, attract dream clients, and scale sustainably.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="#e8f5e9" />
        <path d="M9 14h10M9 10h10M9 18h6" stroke="#4caf4f" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Content Strategy",
    description: "Learn how to create content that converts — from portfolio pages to SEO blog posts that rank and bring enquiries.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="#e8f5e9" />
        <circle cx="11" cy="13" r="3" stroke="#4caf4f" strokeWidth="2.5" />
        <circle cx="19" cy="13" r="3" stroke="#4caf4f" strokeWidth="2.5" />
        <path d="M14 13h2" stroke="#4caf4f" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Community Access",
    description: "Join thousands of photographers sharing lessons, wins, and strategies across niches — weddings, portraits, commercial.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="#e8f5e9" />
        <rect x="8" y="10" width="12" height="9" rx="2" stroke="#4caf4f" strokeWidth="2.5" />
        <path d="M11 10V9a3 3 0 016 0v1" stroke="#4caf4f" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Exclusive Courses",
    description: "In-depth modules on building a brand, pricing strategy, and converting enquiries — for every stage of your journey.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-[#f5f7fa]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#4caf4f] font-semibold text-[14px] uppercase tracking-widest mb-3">
            What we offer
          </p>
          <h2 className="text-[36px] font-bold text-[#263238] leading-[1.25]">
            Everything you need to grow
          </h2>
          <p className="mt-4 text-[#89939e] text-[17px] max-w-[520px] mx-auto leading-relaxed">
            Built for photographers at every stage — from first website to full-time studio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(38,50,56,0.10)" }}
              className="bg-white rounded-xl p-7 shadow-sm transition-shadow duration-200"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-[17px] font-bold text-[#263238] mb-2">{f.title}</h3>
              <p className="text-[#89939e] text-[15px] leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
