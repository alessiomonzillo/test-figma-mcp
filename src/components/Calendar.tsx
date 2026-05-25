// Calendar section: text + button left, illustration (pana) right
// Illustration container: 307×301px → 441×433px
// Assets positioned using scaled offsets from Figma (×1.437)

const bgComplete = "https://www.figma.com/api/mcp/asset/3092fe61-0163-4f0a-b1b7-2ff6bc100a45";
const bgSimple = "https://www.figma.com/api/mcp/asset/8ce555f5-1e23-43ea-b9db-b54f4305247e";
const floor = "https://www.figma.com/api/mcp/asset/032086a9-3cc4-46ed-8707-8d4ebabbf944";
const plant = "https://www.figma.com/api/mcp/asset/b566d3ee-9e5b-4df4-b434-a34298ed4045";
const padlock = "https://www.figma.com/api/mcp/asset/f0b6497d-c0a0-45e9-9f84-73631775797f";
const speechBubble = "https://www.figma.com/api/mcp/asset/a9f479ac-19c9-4905-9d13-a32e587e54b0";
const character = "https://www.figma.com/api/mcp/asset/e8f97874-596a-444c-b7ca-c4c1486843fb";

export default function Calendar() {
  return (
    <section className="bg-white py-16">
      <div className="flex items-center justify-between gap-16 px-36">
        {/* Text */}
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex flex-col gap-4">
            <h2 className="text-[36px] font-semibold text-[#4d4d4d] leading-tight">
              How to design your site footer like we did
            </h2>
            <p className="text-sm text-[#717171] leading-5">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa.
            </p>
          </div>
          <a href="#" className="bg-[#4caf4f] hover:bg-[#43a046] text-white font-medium text-base px-8 py-3.5 rounded-[4px] transition-colors inline-block self-start">
            Learn More
          </a>
        </div>

        {/* Illustration — 441×433px, elements absolutely positioned with scaled px offsets */}
        <div className="relative shrink-0" style={{ width: 441, height: 433 }}>
          {/* bgComplete: 441×381px at (0,0) */}
          <img alt="" className="absolute block" style={{ top: 0, left: 0, width: 441, height: 381 }} src={bgComplete} />
          {/* bgSimple: 320×299px at (48,88) */}
          <img alt="" className="absolute block" style={{ top: 88, left: 48, width: 320, height: 299 }} src={bgSimple} />
          {/* plant: 86×148px at (288,197) */}
          <img alt="" className="absolute block" style={{ top: 197, left: 288, width: 86, height: 148 }} src={plant} />
          {/* padlock: 86×103px at (283,5) */}
          <img alt="" className="absolute block" style={{ top: 5, left: 283, width: 86, height: 103 }} src={padlock} />
          {/* speechBubble: 53×61px at (59,139) */}
          <img alt="" className="absolute block" style={{ top: 139, left: 59, width: 53, height: 61 }} src={speechBubble} />
          {/* character: 148×288px at (86,145) */}
          <img alt="" className="absolute block" style={{ top: 145, left: 86, width: 148, height: 288 }} src={character} />
          {/* floor line at bottom */}
          <img alt="" className="absolute block" style={{ top: 433, left: 56, width: 321, height: 1 }} src={floor} />
        </div>
      </div>
    </section>
  );
}
