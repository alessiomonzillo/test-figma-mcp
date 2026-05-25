// Achievements section: heading left, 2×2 stats grid right

const imgIcon1 = "https://www.figma.com/api/mcp/asset/15264074-e341-4036-8707-ea856778dc1c";
const imgIcon2Group = "https://www.figma.com/api/mcp/asset/8bb75741-6dd9-4693-9739-606dbe67926b";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/e501069f-c889-4e7c-9b17-632207633514";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/93f8007f-e5d3-4b0f-8315-58796dcec7c7";

const stats = [
  { number: "2,245,341", label: "Members", icon: imgIcon1, iconInset: null },
  { number: "46,328", label: "Clubs", icon: imgIcon2Group, iconInset: { top: "18.75%", right: "15.96%", bottom: "18.75%", left: "16.6%" } },
  { number: "828,867", label: "Event Bookings", icon: imgIcon3, iconInset: null },
  { number: "1,926,436", label: "Payments", icon: imgIcon4, iconInset: null },
];

export default function Stats() {
  return (
    <section className="bg-[#f5f7fa] py-16">
      <div className="flex items-center justify-between px-36">
        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[36px] font-semibold leading-tight">
            <span className="text-[#4d4d4d]">Helping a local </span>
            <span className="text-[#4caf4f]">business reinvent itself</span>
          </h2>
          <p className="text-base text-[#18191f]">We reached here with our hard work and dedication</p>
        </div>

        {/* Stats grid 2×2 */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <div className="relative shrink-0 w-12 h-12">
                <div className="absolute" style={s.iconInset ?? { top: 0, right: 0, bottom: 0, left: 0 }}>
                  <img alt="" className="absolute inset-0 block max-w-none w-full h-full" src={s.icon} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[28px] font-bold text-[#4d4d4d] leading-tight">{s.number}</span>
                <span className="text-base text-[#717171]">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
