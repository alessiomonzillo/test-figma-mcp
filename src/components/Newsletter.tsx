"use client";

export default function Newsletter() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[700px] mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#e8f5e9] mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              stroke="#4caf4f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 6l-10 7L2 6"
              stroke="#4caf4f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2 className="text-[32px] md:text-[38px] font-bold text-[#263238] leading-[1.25] mb-4">
          Get weekly insights for your photography business
        </h2>
        <p className="text-[#89939e] text-[17px] leading-relaxed mb-8">
          Join 2,000+ photographers receiving actionable strategies on website
          growth, client acquisition, and pricing every Tuesday.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3.5 border border-[#abbed1] rounded-md text-[15px] text-[#263238] placeholder:text-[#abbed1] focus:outline-none focus:border-[#4caf4f] focus:ring-1 focus:ring-[#4caf4f]"
          />
          <button
            type="submit"
            className="bg-[#4caf4f] hover:bg-[#43a046] text-white font-semibold px-7 py-3.5 rounded-md text-[15px] transition-colors duration-200 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-[#abbed1] text-[13px]">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
