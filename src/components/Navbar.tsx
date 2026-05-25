export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-[#abbed1]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-[#4caf4f] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="5" fill="white" />
            </svg>
          </span>
          <span className="font-bold text-[#263238] text-lg tracking-tight">
            Nexcent
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-[#263238] text-[15px]">
          {["Home", "About", "Features", "Community", "Blog"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="hover:text-[#4caf4f] transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-[#263238] text-[15px] font-semibold hover:text-[#4caf4f] transition-colors"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-[#4caf4f] hover:bg-[#43a046] text-white text-[15px] font-semibold px-5 py-2.5 rounded-md transition-colors duration-200"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
