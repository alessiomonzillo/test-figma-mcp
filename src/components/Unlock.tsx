// Unlock section: illustration (rafiki) on left, text + button on right
// Illustration container: 307×301px → 441×433px (×1.437)

const bgComplete = "https://www.figma.com/api/mcp/asset/700efc43-f5d1-4829-b9ec-58b437e688c8";
const bgSimple = "https://www.figma.com/api/mcp/asset/382424d1-57a4-48c2-8330-f9637b8f1044";
const shadow = "https://www.figma.com/api/mcp/asset/a7cf0ef5-2ed7-43a8-b846-833cc35fdbaa";
const screen = "https://www.figma.com/api/mcp/asset/c17bd88c-ec16-4097-9f30-b092f9e72422";

export default function Unlock() {
  return (
    <section className="bg-white py-16">
      <div className="flex items-center justify-between gap-16 px-36">
        {/* Illustration */}
        <div className="relative shrink-0" style={{ width: 441, height: 433 }}>
          {/* background-complete: top:12.01% right:0.11% bottom:12.01% left:0 */}
          <div className="absolute" style={{ top: "12.01%", right: "0.11%", bottom: "16.2%", left: 0 }}>
            <img alt="" className="absolute inset-0 block max-w-none w-full h-full" src={bgComplete} />
          </div>
          {/* background-simple: inset 17.38% 20.35% 36.58% 21.12% */}
          <div className="absolute" style={{ top: "17.38%", right: "20.35%", bottom: "36.58%", left: "21.12%" }}>
            <img alt="" className="absolute inset-0 block max-w-none w-full h-full" src={bgSimple} />
          </div>
          {/* shadow: inset 83.37% 11.32% 12.01% 11.21% */}
          <div className="absolute" style={{ top: "83.37%", right: "11.32%", bottom: "12.01%", left: "11.21%" }}>
            <img alt="" className="absolute inset-0 block max-w-none w-full h-full" src={shadow} />
          </div>
          {/* screen: inset 15.18% 34.34% 32.38% 37.88% */}
          <div className="absolute" style={{ top: "15.18%", right: "34.34%", bottom: "32.38%", left: "37.88%" }}>
            <img alt="" className="absolute inset-0 block max-w-none w-full h-full" src={screen} />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex flex-col gap-4">
            <h2 className="text-[36px] font-semibold text-[#4d4d4d] leading-tight">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="text-sm text-[#717171] leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
          </div>
          <a href="#" className="bg-[#4caf4f] hover:bg-[#43a046] text-white font-medium text-base px-8 py-3.5 rounded-[4px] transition-colors inline-block self-start">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
