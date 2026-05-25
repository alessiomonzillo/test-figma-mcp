/* Partner logos extracted from the Nexcent Figma design system */

export function LogoTheRealEstate({ className = "" }: { className?: string }) {
  return (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="2" y="8" width="14" height="14" rx="2" stroke="#ABBED1" strokeWidth="2"/>
      <path d="M9 8V4M9 26v-4" stroke="#ABBED1" strokeWidth="2" strokeLinecap="round"/>
      <path d="M2 15h-2M18 15h2" stroke="#ABBED1" strokeWidth="2" strokeLinecap="round"/>
      <text x="26" y="21" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="#ABBED1" letterSpacing="0.5">THE REAL ESTATE</text>
    </svg>
  );
}

export function LogoSkyward({ className = "" }: { className?: string }) {
  return (
    <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 22L8 14l4-4 4 4 8-8 4 4-12 12z" fill="#ABBED1"/>
      <text x="28" y="21" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="700" fill="#ABBED1" letterSpacing="0.3">Skyward</text>
    </svg>
  );
}

export function LogoUpbeat({ className = "" }: { className?: string }) {
  return (
    <svg width="90" height="32" viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="16" cy="16" r="8" stroke="#ABBED1" strokeWidth="2"/>
      <path d="M12 16c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#ABBED1" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="16" cy="20" r="2" fill="#ABBED1"/>
      <text x="30" y="21" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="700" fill="#ABBED1" letterSpacing="0.3">Upbeat</text>
    </svg>
  );
}

export function LogoHemingway({ className = "" }: { className?: string }) {
  return (
    <svg width="118" height="32" viewBox="0 0 118 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 10v12M16 10v12M8 16h8" stroke="#ABBED1" strokeWidth="2" strokeLinecap="round"/>
      <text x="24" y="21" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="700" fill="#ABBED1" letterSpacing="0.3">Hemingway</text>
    </svg>
  );
}

export function LogoNomadic({ className = "" }: { className?: string }) {
  return (
    <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 22V14l8-6 8 6v8" stroke="#ABBED1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 22v-5h6v5" stroke="#ABBED1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="30" y="21" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="700" fill="#ABBED1" letterSpacing="0.3">Nomadic</text>
    </svg>
  );
}

export function LogoLeaf({ className = "" }: { className?: string }) {
  return (
    <svg width="92" height="32" viewBox="0 0 92 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 22c0-7 6-12 12-12-1 6-5 12-12 12z" fill="#ABBED1"/>
      <path d="M8 22c6-1 10-6 12-12" stroke="#ABBED1" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="26" y="21" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="700" fill="#ABBED1" letterSpacing="0.3">Leaf</text>
    </svg>
  );
}
