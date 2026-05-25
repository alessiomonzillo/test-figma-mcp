"use client";

import { motion } from "framer-motion";

const articles = [
  {
    tag: "Strategy",
    title: "Why your Instagram reach is declining and what to do about it",
    excerpt:
      "Social algorithms change. Your website doesn't. Here's why the top photographers are doubling down on owned media.",
    date: "March 14, 2025",
    readTime: "5 min read",
    accentColor: "#4caf4f",
  },
  {
    tag: "SEO",
    title: "The 3-page website structure that books 80% of our members' clients",
    excerpt:
      "Home, About, Contact isn't enough. We break down the exact pages that convert visits into enquiries.",
    date: "February 28, 2025",
    readTime: "7 min read",
    accentColor: "#2194f3",
  },
  {
    tag: "Pricing",
    title: "How to raise your rates without losing clients — a photographer's guide",
    excerpt:
      "8 years of pricing data shows the photographers who grew fastest all did one counter-intuitive thing.",
    date: "February 10, 2025",
    readTime: "6 min read",
    accentColor: "#43a046",
  },
];

function ArticleCard({
  article,
  index,
}: {
  article: (typeof articles)[0];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col cursor-pointer"
    >
      {/* Illustration header */}
      <div
        className="h-[180px] flex items-end p-5 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${article.accentColor}22 0%, ${article.accentColor}44 100%)` }}
      >
        <div
          className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-20"
          style={{ background: article.accentColor }}
        />
        <div
          className="absolute bottom-0 right-8 w-28 h-28 rounded-full opacity-10"
          style={{ background: article.accentColor }}
        />
        <span
          className="relative z-10 text-[12px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
          style={{ background: article.accentColor, color: "white" }}
        >
          {article.tag}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[16px] font-bold text-[#263238] leading-snug mb-3 flex-1">
          {article.title}
        </h3>
        <p className="text-[#89939e] text-[14px] leading-relaxed mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-[12px] text-[#abbed1] border-t border-[#f5f7fa] pt-4">
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Articles() {
  return (
    <section className="py-20 bg-[#f5f7fa]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-[#4caf4f] font-semibold text-[14px] uppercase tracking-widest mb-2">
              Latest insights
            </p>
            <h2 className="text-[32px] font-bold text-[#263238]">From the blog</h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex text-[#4caf4f] font-semibold text-[15px] hover:underline"
          >
            View all posts →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <ArticleCard key={a.title} article={a} index={i} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="#" className="text-[#4caf4f] font-semibold text-[15px] hover:underline">
            View all posts →
          </a>
        </div>
      </div>
    </section>
  );
}
