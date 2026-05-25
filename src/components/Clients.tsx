const clients = [
  "The Real Estate",
  "Skyward",
  "Upbeat",
  "Hemingway",
  "Nomadic",
  "Leaf Studio",
];

export default function Clients() {
  return (
    <section className="py-14 bg-white border-y border-[#f5f7fa]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[#89939e] text-[15px] mb-8 uppercase tracking-widest font-semibold">
          Trusted by photographers worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {clients.map((name) => (
            <span
              key={name}
              className="text-[#abbed1] text-[18px] font-bold tracking-tight hover:text-[#89939e] transition-colors cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
