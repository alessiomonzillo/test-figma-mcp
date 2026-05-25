// Scale: Figma thumbnail 1002px → 1440px target (×1.437)
// Illustration: 272×283px → 391×407px

const assets = {
  shadowBR: "https://www.figma.com/api/mcp/asset/521857cf-3455-4a66-9827-37c2bfcee183",
  shadowBL: "https://www.figma.com/api/mcp/asset/7071f381-072e-42b3-9189-f6b671b7138f",
  shadowML: "https://www.figma.com/api/mcp/asset/c3a47727-2e8c-4966-a58e-a4407037c745",
  shadowDevice: "https://www.figma.com/api/mcp/asset/335351a3-5674-49bb-9a45-3f9229e7f15c",
  monitor: "https://www.figma.com/api/mcp/asset/8a304489-c811-4090-ae18-8092ec06fbc8",
  windowFlowchart: "https://www.figma.com/api/mcp/asset/cc332bc2-7964-4720-8c75-e2dd5dd78f28",
  flowchart: "https://www.figma.com/api/mcp/asset/ffdb742a-73c8-430c-a3bf-97e22b6e2998",
  windowCode: "https://www.figma.com/api/mcp/asset/8b80a90d-9bb5-4698-a5df-025142d9458c",
  code: "https://www.figma.com/api/mcp/asset/7b0023d4-7d5e-4289-a971-24d5f9ccf80a",
  shadowDot1: "https://www.figma.com/api/mcp/asset/53b06ea8-a76a-4064-8064-12a3066c8116",
  shadowDot2: "https://www.figma.com/api/mcp/asset/91be476a-8dc2-4c05-ac81-43fffa5a9edc",
  shadowDot3: "https://www.figma.com/api/mcp/asset/92e94a43-19d3-47e1-9634-69eef2379b8e",
  shadowDot4: "https://www.figma.com/api/mcp/asset/a7a3adb6-b6c2-421f-a1ca-99ad52fcf107",
  speechBubble: "https://www.figma.com/api/mcp/asset/22a34184-5912-4c10-8eff-e89841842d2f",
  charBottom: "https://www.figma.com/api/mcp/asset/97af0d00-7eca-4717-8e04-1b55465b2392",
  charTop: "https://www.figma.com/api/mcp/asset/66db3460-93d2-4824-85d9-e3e88444144c",
};

function L({ src, t, r, b, l }: { src: string; t: string; r: string; b: string; l: string }) {
  return (
    <div className="absolute" style={{ top: t, right: r, bottom: b, left: l }}>
      <img alt="" className="absolute inset-0 block max-w-none w-full h-full" src={src} />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-[#f5f7fa]">
      <div className="flex items-center justify-between gap-16 px-36 py-24">
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex flex-col gap-4">
            <h1 className="text-[64px] font-semibold leading-[1.19] text-[#4d4d4d]">
              Lessons and insights{" "}
              <span className="text-[#4caf4f]">from 8 years</span>
            </h1>
            <p className="text-base font-normal leading-6 text-[#717171]">
              Where to grow your business as a photographer: site or social media?
            </p>
          </div>
          <a href="#" className="bg-[#4caf4f] hover:bg-[#43a046] text-white font-medium text-base px-8 py-3.5 rounded-[4px] transition-colors inline-block self-start">
            Register
          </a>
        </div>

        <div className="relative shrink-0" style={{ width: 391, height: 407 }}>
          <L src={assets.shadowBR} t="81.05%" r="0" b="3.43%" l="72.02%" />
          <L src={assets.shadowBL} t="85.88%" r="48.32%" b="0" l="27.25%" />
          <L src={assets.shadowML} t="56.54%" r="50.14%" b="15.81%" l="0" />
          <L src={assets.shadowDevice} t="13.89%" r="47.81%" b="39.82%" l="9.61%" />
          <L src={assets.monitor} t="12.71%" r="50.15%" b="21.3%" l="0.2%" />
          <L src={assets.windowFlowchart} t="0" r="45.53%" b="40.83%" l="7.69%" />
          <L src={assets.flowchart} t="18.83%" r="62.6%" b="49.86%" l="12.84%" />
          <L src={assets.windowCode} t="5.83%" r="38.88%" b="50.11%" l="38.37%" />
          <L src={assets.code} t="14.71%" r="40.74%" b="53.26%" l="41.22%" />
          <L src={assets.shadowDot1} t="55.9%" r="86.99%" b="30.61%" l="4.96%" />
          <L src={assets.shadowDot2} t="38.81%" r="89.27%" b="54.87%" l="4.96%" />
          <L src={assets.shadowDot3} t="44.93%" r="89.27%" b="48.75%" l="4.96%" />
          <L src={assets.shadowDot4} t="51.05%" r="89.27%" b="42.62%" l="4.96%" />
          <L src={assets.speechBubble} t="16.73%" r="26.73%" b="74.43%" l="66%" />
          <L src={assets.charBottom} t="53.12%" r="5.99%" b="7.57%" l="75.5%" />
          <L src={assets.charTop} t="29.25%" r="3.42%" b="39.79%" l="64.41%" />
        </div>
      </div>
    </section>
  );
}
