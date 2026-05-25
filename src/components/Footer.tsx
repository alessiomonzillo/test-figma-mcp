const footerLinks = {
  Company: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"],
  Support: ["Help center", "Terms of service", "Legal", "Privacy policy"],
  "Stay up to date": [],
};

export default function Footer() {
  return (
    <footer className="bg-[#263238] text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-[#4caf4f] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="5" fill="white" />
                </svg>
              </span>
              <span className="font-bold text-white text-lg tracking-tight">
                Nexcent
              </span>
            </div>
            <p className="text-[#89939e] text-[14px] leading-relaxed mb-5 max-w-[220px]">
              8 years of lessons on growing a photography business. Site vs
              social, answered with data.
            </p>
            <div className="flex gap-3">
              {["fb", "tw", "ig", "li"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#4d4d4d] hover:bg-[#4caf4f] flex items-center justify-center text-[11px] font-bold uppercase transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-[15px] mb-5 text-white">
                {title}
              </h4>
              {title === "Stay up to date" ? (
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 min-w-0 bg-[#4d4d4d] border border-transparent focus:border-[#4caf4f] px-3 py-2 rounded-md text-[13px] text-white placeholder:text-[#717171] focus:outline-none"
                  />
                  <button className="bg-[#4caf4f] hover:bg-[#43a046] px-3 py-2 rounded-md transition-colors">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <ul className="space-y-3">
                  {links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[#89939e] text-[14px] hover:text-white transition-colors duration-200"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-[#4d4d4d] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#717171] text-[13px]">
            © 2025 Nexcent. All rights reserved.
          </p>
          <div className="flex gap-6 text-[#717171] text-[13px]">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sales and Refunds
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
