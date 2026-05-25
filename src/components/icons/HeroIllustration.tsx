export default function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      width="480"
      height="420"
      viewBox="0 0 480 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="260" cy="210" r="180" fill="#E8F5E9" />

      {/* Browser / website mockup */}
      <rect x="80" y="60" width="280" height="200" rx="12" fill="white" filter="url(#shadow1)" />
      <rect x="80" y="60" width="280" height="36" rx="12" fill="#F5F7FA" />
      <rect x="80" y="84" width="280" height="12" fill="#F5F7FA" />
      {/* Browser dots */}
      <circle cx="102" cy="78" r="5" fill="#E53835" />
      <circle cx="118" cy="78" r="5" fill="#FBC02D" />
      <circle cx="134" cy="78" r="5" fill="#4CAF4F" />
      {/* URL bar */}
      <rect x="148" y="72" width="160" height="12" rx="6" fill="#ABBED1" fillOpacity="0.4" />

      {/* Page content inside browser */}
      <rect x="96" y="108" width="120" height="10" rx="4" fill="#263238" fillOpacity="0.15" />
      <rect x="96" y="126" width="200" height="6" rx="3" fill="#89939E" fillOpacity="0.3" />
      <rect x="96" y="140" width="160" height="6" rx="3" fill="#89939E" fillOpacity="0.2" />
      {/* Green CTA button */}
      <rect x="96" y="158" width="80" height="24" rx="6" fill="#4CAF4F" />
      <rect x="184" y="158" width="64" height="24" rx="6" fill="#E8F5E9" />

      {/* Chart bars inside browser */}
      <rect x="200" y="108" width="20" height="60" rx="3" fill="#E8F5E9" />
      <rect x="228" y="120" width="20" height="48" rx="3" fill="#66BB69" />
      <rect x="256" y="100" width="20" height="68" rx="3" fill="#4CAF4F" />
      <rect x="284" y="112" width="20" height="56" rx="3" fill="#43A046" />
      <rect x="312" y="90" width="20" height="78" rx="3" fill="#388E3B" />

      {/* Stats card — bottom left */}
      <rect x="60" y="220" width="160" height="80" rx="12" fill="white" filter="url(#shadow2)" />
      <circle cx="82" cy="248" r="14" fill="#E8F5E9" />
      <path d="M76 248l4 4 8-8" stroke="#4CAF4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="102" y="238" width="80" height="8" rx="4" fill="#263238" fillOpacity="0.15" />
      <rect x="102" y="252" width="56" height="6" rx="3" fill="#4CAF4F" fillOpacity="0.5" />
      <rect x="68" y="272" width="136" height="6" rx="3" fill="#89939E" fillOpacity="0.2" />
      <rect x="68" y="284" width="96" height="6" rx="3" fill="#89939E" fillOpacity="0.15" />

      {/* Notification badge — top right */}
      <rect x="310" y="40" width="130" height="56" rx="12" fill="white" filter="url(#shadow2)" />
      <circle cx="330" cy="68" r="14" fill="#E8F5E9" />
      <path d="M326 68l2 2 6-6" stroke="#4CAF4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="350" y="58" width="72" height="8" rx="4" fill="#263238" fillOpacity="0.15" />
      <rect x="350" y="72" width="52" height="6" rx="3" fill="#4CAF4F" fillOpacity="0.5" />

      {/* Growth badge — bottom right */}
      <rect x="310" y="280" width="130" height="60" rx="12" fill="#263238" />
      <text x="326" y="308" fontFamily="Inter,sans-serif" fontSize="22" fontWeight="700" fill="#4CAF4F">+128%</text>
      <text x="326" y="326" fontFamily="Inter,sans-serif" fontSize="11" fill="#89939E">Site traffic growth</text>

      {/* Small dots decoration */}
      <circle cx="430" cy="140" r="5" fill="#4CAF4F" fillOpacity="0.4" />
      <circle cx="450" cy="160" r="3" fill="#4CAF4F" fillOpacity="0.3" />
      <circle cx="440" cy="180" r="4" fill="#4CAF4F" fillOpacity="0.2" />
      <circle cx="60" cy="160" r="4" fill="#4CAF4F" fillOpacity="0.3" />
      <circle cx="40" cy="185" r="3" fill="#4CAF4F" fillOpacity="0.2" />

      <defs>
        <filter id="shadow1" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="#263238" floodOpacity="0.08" />
        </filter>
        <filter id="shadow2" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#263238" floodOpacity="0.1" />
        </filter>
      </defs>
    </svg>
  );
}
