export default function Hero() {
  return (
    <section className="bg-[#f5f7fa] py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text content */}
        <div className="flex-1 max-w-[560px]">
          <h1 className="text-[40px] md:text-[52px] font-bold text-[#263238] leading-[1.2] tracking-[-0.5px] mb-6">
            Lessons and insights{" "}
            <span className="text-[#4caf4f]">from 8 years</span>
          </h1>
          <p className="text-[18px] text-[#89939e] leading-[1.7] mb-8">
            Where to grow your business as a photographer: site or social media?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="bg-[#4caf4f] hover:bg-[#43a046] text-white font-semibold px-8 py-3.5 rounded-md text-[15px] transition-colors duration-200 text-center"
            >
              Get started
            </a>
            <a
              href="#"
              className="border border-[#4caf4f] text-[#4caf4f] hover:bg-[#e8f5e9] font-semibold px-8 py-3.5 rounded-md text-[15px] transition-colors duration-200 text-center"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[420px] h-[380px]">
            {/* Main circle background */}
            <div className="absolute inset-0 bg-[#e8f5e9] rounded-full scale-75 opacity-60" />

            {/* Mockup card */}
            <div className="relative z-10 bg-white rounded-2xl shadow-lg p-6 mx-auto max-w-[320px] mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#4caf4f] flex items-center justify-center text-white font-bold text-sm">
                  P
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#263238]">
                    Photography Studio
                  </p>
                  <p className="text-[11px] text-[#89939e]">8+ years online</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-[#e8f5e9] rounded-full w-full" />
                <div className="h-2 bg-[#e8f5e9] rounded-full w-3/4" />
              </div>
              <div className="mt-4 flex gap-2">
                <div className="flex-1 bg-[#f5f7fa] rounded-lg p-3 text-center">
                  <p className="text-[20px] font-bold text-[#4caf4f]">2.4k</p>
                  <p className="text-[11px] text-[#89939e]">Followers</p>
                </div>
                <div className="flex-1 bg-[#f5f7fa] rounded-lg p-3 text-center">
                  <p className="text-[20px] font-bold text-[#263238]">18k</p>
                  <p className="text-[11px] text-[#89939e]">Site visits</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-6 right-4 bg-white rounded-xl shadow-md px-4 py-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4caf4f]" />
              <span className="text-[12px] font-semibold text-[#263238]">
                +128% growth
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
