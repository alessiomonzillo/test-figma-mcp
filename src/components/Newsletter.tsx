"use client";

// Customers / Testimonial section

const imgPerson = "https://www.figma.com/api/mcp/asset/1803083f-610a-4549-a1b9-3b1812721e5b";
const imgRight = "https://www.figma.com/api/mcp/asset/e6209ed9-5bb6-4800-ad7d-97dc1718c8ab";

const logos = [
  { src: "https://www.figma.com/api/mcp/asset/aaee334b-b67b-46e6-88d4-cd5b7743bf66", bg: "#e8f5e9" },
  { src: "https://www.figma.com/api/mcp/asset/29b51f39-2c80-4e98-9b0a-0e18b8669248", bg: "#f5f7fa" },
  { src: "https://www.figma.com/api/mcp/asset/b6463686-a0dd-4a68-aa8e-7d71b1fdf254", bg: "#f5f7fa" },
  { src: "https://www.figma.com/api/mcp/asset/bedff44f-b80a-4003-97da-97827d72f35d", bg: "#f5f7fa" },
  { src: "https://www.figma.com/api/mcp/asset/f8d9c854-c893-4c28-93e6-c5927f5bfaf9", bg: "#f5f7fa" },
  { src: "https://www.figma.com/api/mcp/asset/0e57a258-8101-445f-b804-077b7f117844", bg: "#f5f7fa" },
];

export default function Newsletter() {
  return (
    <section className="bg-[#f5f7fa] py-8">
      <div className="flex items-center gap-16 px-36">
        {/* Person photo */}
        <div
          className="relative shrink-0 rounded-[8px] shadow-[0px_8px_16px_rgba(171,190,209,0.4)]"
          style={{ width: 326, height: 326 }}
        >
          <img
            alt="Tim Smith"
            className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
            src={imgPerson}
          />
        </div>

        {/* Quote + info */}
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4">
            <p className="text-base font-medium text-[#717171] leading-6">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales.
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold text-[#4caf4f]">Tim Smith</span>
              <span className="text-base text-[#89939e]">British Dragon Boat Racing Association</span>
            </div>
          </div>

          {/* Logos + link */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="relative rounded-[8px] w-12 h-12 shrink-0"
                  style={{ backgroundColor: logo.bg }}
                >
                  <img alt="" className="absolute inset-0 block max-w-none w-full h-full object-contain" src={logo.src} />
                </div>
              ))}
            </div>
            <a href="#" className="flex items-center gap-2 text-[#4caf4f] font-semibold text-xl">
              Meet all customers
              <div className="relative w-6 h-6" style={{ transform: "rotate(180deg) scaleY(-1)" }}>
                <img alt="" className="absolute inset-0 block max-w-none w-full h-full" src={imgRight} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
