const articles = [
  {
    tag: "Strategy",
    title: "Why your Instagram reach is declining and what to do about it",
    excerpt:
      "Social algorithms change. Your website doesn't. Here's why the top photographers are doubling down on owned media.",
    date: "March 14, 2025",
    readTime: "5 min read",
  },
  {
    tag: "SEO",
    title: "The 3-page website structure that books 80% of our members' clients",
    excerpt:
      "Home, About, Contact isn't enough. We break down the exact pages that convert visits into enquiries.",
    date: "February 28, 2025",
    readTime: "7 min read",
  },
  {
    tag: "Pricing",
    title: "How to raise your rates without losing clients — a photographer's guide",
    excerpt:
      "8 years of pricing data shows the photographers who grew fastest all did one counter-intuitive thing.",
    date: "February 10, 2025",
    readTime: "6 min read",
  },
];

export default function Articles() {
  return (
    <section className="py-20 bg-[#f5f7fa]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#4caf4f] font-semibold text-[14px] uppercase tracking-widest mb-2">
              Latest insights
            </p>
            <h2 className="text-[32px] font-bold text-[#263238]">
              From the blog
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex text-[#4caf4f] font-semibold text-[15px] hover:underline"
          >
            View all posts →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a) => (
            <article
              key={a.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              {/* Placeholder image */}
              <div className="h-[180px] bg-[#e8f5e9] flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#4caf4f] opacity-40" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="text-[#4caf4f] text-[12px] font-bold uppercase tracking-wider mb-3">
                  {a.tag}
                </span>
                <h3 className="text-[16px] font-bold text-[#263238] leading-snug mb-3 flex-1">
                  {a.title}
                </h3>
                <p className="text-[#89939e] text-[14px] leading-relaxed mb-4">
                  {a.excerpt}
                </p>
                <div className="flex items-center justify-between text-[12px] text-[#abbed1] border-t border-[#f5f7fa] pt-4 mt-auto">
                  <span>{a.date}</span>
                  <span>{a.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="text-[#4caf4f] font-semibold text-[15px] hover:underline"
          >
            View all posts →
          </a>
        </div>
      </div>
    </section>
  );
}
