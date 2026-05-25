const stats = [
  { value: "2,245", label: "Members" },
  { value: "46,328", label: "Website clients booked" },
  { value: "828,867", label: "Data points collected" },
  { value: "1,926,436", label: "Transactions analysed" },
];

export default function Stats() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-[36px] md:text-[40px] font-bold text-[#263238]">
                {s.value}
              </p>
              <p className="text-[#89939e] text-[15px] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
