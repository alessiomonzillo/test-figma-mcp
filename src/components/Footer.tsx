"use client";

// Footer: top CTA band (bg-[#f5f7fa]) + dark footer (bg-[#263238])
// Scale factor applied from Figma thumbnail values (×1.437)

const imgNexcent = "https://www.figma.com/api/mcp/asset/8c404cf9-2510-4392-bd2f-25a42652b30f";
const iconParts: [string, string, string, string, string][] = [
  ["https://www.figma.com/api/mcp/asset/58115d72-5a56-4dfc-917a-dedaf4a4f963", "51.29%", "42.2%", "0", "18.73%"],
  ["https://www.figma.com/api/mcp/asset/8675174f-8c5f-4e20-a637-f1c05fb27b9b", "0", "0", "51.29%", "60.91%"],
  ["https://www.figma.com/api/mcp/asset/acd7773f-454f-4bfc-b104-8d3689cbfecb", "0", "65.7%", "56.91%", "0"],
  ["https://www.figma.com/api/mcp/asset/94e6cc33-77dd-4905-a6be-e39fcad04c9b", "3.77%", "44.54%", "53.38%", "21.05%"],
  ["https://www.figma.com/api/mcp/asset/906349ab-6e0a-40ad-8205-0fe65a77451e", "55.98%", "22.9%", "0", "41.86%"],
  ["https://www.figma.com/api/mcp/asset/5da5025f-ea2e-4fa0-9143-b367fb7a9f05", "53.31%", "2.47%", "3.34%", "63.62%"],
];
const socialIcons = [
  { bg: "https://www.figma.com/api/mcp/asset/472aeefc-d7c6-46ec-8f29-a3981acb0504", path: "https://www.figma.com/api/mcp/asset/6fedda30-3155-44a2-abcf-1dba4b814c9d", label: "Facebook" },
  { bg: "https://www.figma.com/api/mcp/asset/472aeefc-d7c6-46ec-8f29-a3981acb0504", path: "https://www.figma.com/api/mcp/asset/824ea3c5-7d6c-41dd-87f5-fce530fd6963", label: "Twitter" },
  { bg: "https://www.figma.com/api/mcp/asset/472aeefc-d7c6-46ec-8f29-a3981acb0504", path: "https://www.figma.com/api/mcp/asset/f46ecba8-7773-4eb6-a754-d31f37402c8a", label: "Instagram" },
  { bg: "https://www.figma.com/api/mcp/asset/472aeefc-d7c6-46ec-8f29-a3981acb0504", path: "https://www.figma.com/api/mcp/asset/d18397cc-5df6-4848-8989-3503fc8974b0", label: "LinkedIn" },
];
const imgSendIcon = "https://www.figma.com/api/mcp/asset/8f56127f-1037-41bd-a469-677c5e0909ea";

const footerLinks = {
  Company: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"],
  Support: ["Help center", "Terms of service", "Legal", "Privacy policy", "Status"],
};

export default function Footer() {
  return (
    <footer>
      {/* CTA Band */}
      <div className="bg-[#f5f7fa] flex flex-col items-center gap-8 py-12 px-36">
        <h2 className="text-[64px] font-semibold text-[#263238] text-center leading-[1.19] max-w-[888px]">
          Let Nextcent do the work so you don&apos;t have to!
        </h2>
        <a
          href="#"
          className="bg-[#4caf4f] hover:bg-[#43a046] text-white font-medium text-base px-8 py-3.5 rounded-[4px] transition-colors flex items-center gap-2"
        >
          Get a Demo
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Dark footer */}
      <div className="bg-[#263238] px-[165px] py-16 flex gap-24 items-start">
        {/* Company info */}
        <div className="flex flex-col gap-10 shrink-0">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="relative shrink-0" style={{ width: 43, height: 30 }}>
              {iconParts.map(([src, top, right, bottom, left], i) => (
                <div key={i} className="absolute" style={{ top, right, bottom, left }}>
                  <img alt="" className="absolute inset-0 block max-w-none w-full h-full" src={src} />
                </div>
              ))}
            </div>
            <img alt="Nexcent" className="h-6 w-auto" src={imgNexcent} />
          </a>
          {/* Copyright */}
          <div className="text-[#f5f7fa] text-sm leading-5">
            <p>Copyright © 2020 Landify UI Kit.</p>
            <p>All rights reserved</p>
          </div>
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialIcons.map(({ bg, path, label }) => (
              <a key={label} href="#" aria-label={label} className="relative w-8 h-8 shrink-0">
                <img alt="" className="absolute inset-0 block max-w-none w-full h-full" src={bg} />
                <div className="absolute inset-[23.33%]">
                  <img alt="" className="absolute inset-0 block max-w-none w-full h-full" src={path} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="flex gap-6 flex-1">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-6 flex-1">
              <h4 className="text-xl font-semibold text-white">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-[#f5f7fa] hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Stay up to date */}
          <div className="flex flex-col gap-6 flex-1">
            <h4 className="text-xl font-semibold text-white">Stay up to date</h4>
            <div className="relative bg-white/20 rounded-[8px] h-10 w-[255px]">
              <input
                type="email"
                placeholder="Your email address"
                className="absolute inset-0 bg-transparent text-sm text-[#d9dbe1] placeholder:text-[#d9dbe1] px-3 pr-10 focus:outline-none w-full"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5">
                <img alt="Send" className="block w-full h-full" src={imgSendIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
