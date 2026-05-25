// Community section — replaces old Features
// Cards: Membership Organisations / National Associations / Clubs And Groups
// Icon container: 65×56px, leaf-shaped green bg + icon image on top

const imgIconMembership = "https://www.figma.com/api/mcp/asset/55541027-4128-46d8-943b-a4176539aabb";
const imgIconNational = "https://www.figma.com/api/mcp/asset/1f1eb0ee-88e8-4a4c-b276-c45b54b847a7";
const imgIconClubs = "https://www.figma.com/api/mcp/asset/25a98cca-b869-4a4e-8b8f-55f7cc8165a3";

const cards = [
  {
    title: "Membership Organisations",
    desc: "Our membership management software provides full automation of membership renewals and payments",
    icon: imgIconMembership,
    iconInset: null,
  },
  {
    title: "National Associations",
    desc: "Our membership management software provides full automation of membership renewals and payments",
    icon: imgIconNational,
    iconInset: { top: "18.75%", right: "13.38%", bottom: "18.31%", left: "12.5%" },
  },
  {
    title: "Clubs And Groups",
    desc: "Our membership management software provides full automation of membership renewals and payments",
    icon: imgIconClubs,
    iconInset: { top: "18.75%", right: "15.96%", bottom: "18.75%", left: "16.6%" },
  },
];

export default function Features() {
  return (
    <section className="bg-white py-16">
      <div className="px-36">
        <div className="text-center mb-12">
          <h2 className="text-[36px] font-semibold text-[#4d4d4d] leading-tight mb-2">
            Manage your entire community in a single system
          </h2>
          <p className="text-base text-[#717171]">Who is Nextcent suitable for?</p>
        </div>
        <div className="flex items-start justify-between gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white shadow-[0px_2px_2px_rgba(171,190,209,0.2)] flex flex-col gap-2 items-center px-8 py-6 rounded-[8px] flex-1"
            >
              <div className="relative shrink-0" style={{ width: 65, height: 56 }}>
                {/* Leaf-shaped green background */}
                <div
                  className="absolute bg-[#e8f5e9]"
                  style={{ top: 7, left: 15, width: 50, height: 49, borderRadius: "18px 5px 10px 5px" }}
                />
                {/* Icon image */}
                <div className="absolute" style={card.iconInset ?? { top: 0, right: 0, bottom: 0, left: 0 }}>
                  <img alt="" className="absolute inset-0 block max-w-none w-full h-full" src={card.icon} />
                </div>
              </div>
              <h3 className="text-[28px] font-bold text-[#4d4d4d] text-center leading-tight mt-4">{card.title}</h3>
              <p className="text-sm text-[#717171] text-center leading-5">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
