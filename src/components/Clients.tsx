const clientLogos = [
  "https://www.figma.com/api/mcp/asset/8775da3d-9339-4fd5-ac9b-961fce25090c",
  "https://www.figma.com/api/mcp/asset/688f5bde-20d6-4262-81a1-8cda884ed67d",
  "https://www.figma.com/api/mcp/asset/488e324c-a018-4a55-b9bc-e65d27e4834c",
  "https://www.figma.com/api/mcp/asset/5013c4e2-2b6e-4c8c-83a9-feb99e977391",
  "https://www.figma.com/api/mcp/asset/8c53c39c-d272-427d-a727-b0722fa88945",
  "https://www.figma.com/api/mcp/asset/7a205415-cffb-4bd1-bd14-08557b8ed604",
  "https://www.figma.com/api/mcp/asset/e2083399-b097-40be-8b9f-7f0783c4a0a8",
];

export default function Clients() {
  return (
    <section className="bg-white py-16">
      <div className="px-36">
        <div className="text-center mb-8">
          <h2 className="text-[36px] font-semibold text-[#4d4d4d] leading-tight mb-2">Our Clients</h2>
          <p className="text-base text-[#717171]">We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="flex items-center justify-between">
          {clientLogos.map((src, i) => (
            <div key={i} className="relative rounded-[8px] w-12 h-12 shrink-0">
              <img alt="" className="absolute inset-0 block max-w-none w-full h-full object-contain" src={src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
