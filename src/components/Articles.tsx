// Community Updates section — blog cards with overlapping photo

const imgRight = "https://www.figma.com/api/mcp/asset/a69f4a40-6f76-4139-b152-91682066e1a2";

const blogCards = [
  {
    img: "https://www.figma.com/api/mcp/asset/3dfbca91-d0b0-4c73-8308-958c2b033a2c",
    title: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    img: "https://www.figma.com/api/mcp/asset/019bd171-ea8f-4c4f-96aa-47eafd0f2324",
    title: "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    img: "https://www.figma.com/api/mcp/asset/19369c26-4ecd-401a-a77d-0eb0f1523a59",
    title: "Revamping the Membership Model with Triathlon Australia",
  },
];

export default function Articles() {
  return (
    <section className="bg-white py-16">
      <div className="px-36">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[36px] font-semibold text-[#4d4d4d] leading-tight mb-2">
            Caring is the new marketing
          </h2>
          <p className="text-base text-[#717171] max-w-[628px] mx-auto leading-6">
            The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their membership income and lot&apos;s more.
          </p>
        </div>

        {/* Cards */}
        <div className="flex items-start justify-between gap-6">
          {blogCards.map((card) => (
            <div key={card.title} className="flex flex-col items-center" style={{ width: 368 }}>
              {/* Photo overlapping card by 96px */}
              <div
                className="relative rounded-[8px] shrink-0 z-10"
                style={{ width: 368, height: 286, marginBottom: -96 }}
              >
                <img
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
                  src={card.img}
                />
              </div>
              {/* Content card */}
              <div className="bg-[#f5f7fa] shadow-[0px_8px_8px_rgba(171,190,209,0.4)] flex flex-col gap-4 items-center p-4 rounded-[8px] w-full relative z-0 pt-28">
                <p className="text-xl font-semibold text-[#717171] text-center leading-tight w-full max-w-[285px]">
                  {card.title}
                </p>
                <a href="#" className="flex items-center gap-2 text-[#4caf4f] font-semibold text-xl">
                  Readmore
                  <div className="relative w-6 h-6" style={{ transform: "rotate(180deg) scaleY(-1)" }}>
                    <img alt="" className="absolute inset-0 block max-w-none w-full h-full" src={imgRight} />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
