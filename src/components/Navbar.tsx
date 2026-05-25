"use client";

const imgNexcent = "https://www.figma.com/api/mcp/asset/0988ffea-0c5a-4a2c-9a47-a8dd03a298ee";
const iconParts: [string, string, string, string, string][] = [
  ["https://www.figma.com/api/mcp/asset/256c24a4-7f3a-4c16-a5ca-b0210cd3eabd", "51.29%", "42.2%", "0", "18.73%"],
  ["https://www.figma.com/api/mcp/asset/f13f10bd-d13d-4d3f-b447-0b9965e6cbae", "0", "0", "51.29%", "60.91%"],
  ["https://www.figma.com/api/mcp/asset/a555d175-99ad-4172-94b7-0ba5d01b54ba", "0", "65.7%", "56.91%", "0"],
  ["https://www.figma.com/api/mcp/asset/0d92be46-4e65-4078-8891-5240490c3572", "3.77%", "44.54%", "53.38%", "21.05%"],
  ["https://www.figma.com/api/mcp/asset/4f311ef2-59f6-4162-b876-32a23594232e", "55.98%", "22.9%", "0", "41.86%"],
  ["https://www.figma.com/api/mcp/asset/513c59c8-380b-4058-b682-f8b733eb3a38", "53.31%", "2.47%", "3.34%", "63.62%"],
];

export default function Navbar() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-[0px_4px_8px_rgba(171,190,209,0.4)]">
      <div className="flex items-center gap-16 px-36 py-4">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="relative shrink-0" style={{ width: 50, height: 34 }}>
            {iconParts.map(([src, top, right, bottom, left], i) => (
              <div key={i} className="absolute" style={{ top, right, bottom, left }}>
                <img alt="" className="absolute inset-0 block max-w-none w-full h-full" src={src} />
              </div>
            ))}
          </div>
          <img alt="Nexcent" className="h-7 w-auto" src={imgNexcent} />
        </a>
        <div className="flex flex-1 items-center justify-end gap-8">
          <nav className="flex items-center gap-6">
            {["Home", "Features", "Community", "Blog", "Pricing"].map((item) => (
              <a key={item} href="#" className="text-[#4d4d4d] text-base font-medium leading-6 hover:text-[#4caf4f] transition-colors whitespace-nowrap">
                {item}
              </a>
            ))}
          </nav>
          <a href="#" className="bg-[#4caf4f] hover:bg-[#43a046] text-white text-base font-medium px-8 py-3.5 rounded-[4px] whitespace-nowrap transition-colors shrink-0 flex items-center gap-2">
            Register Now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
