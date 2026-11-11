export default function TruckIllustration() {
  return (
    <svg viewBox="0 0 480 440" className="h-auto w-full max-w-[500px]" aria-hidden="true">
      <ellipse cx="240" cy="418" rx="205" ry="12" fill="#000" opacity="0.4" />
      <rect x="72" y="330" width="72" height="88" rx="12" fill="#0e0e0f" />
      <rect x="336" y="330" width="72" height="88" rx="12" fill="#0e0e0f" />
      <rect x="50" y="30" width="380" height="300" rx="10" fill="#b8261a" />
      <g stroke="#a32117" strokeWidth="3">
        <line x1="100" y1="36" x2="100" y2="324" />
        <line x1="150" y1="36" x2="150" y2="324" />
        <line x1="330" y1="36" x2="330" y2="324" />
        <line x1="380" y1="36" x2="380" y2="324" />
      </g>
      <line x1="240" y1="30" x2="240" y2="330" stroke="#8e1d14" strokeWidth="5" />
      <rect x="76" y="64" width="328" height="140" rx="8" fill="#ffc400" stroke="#1b1b1d" strokeWidth="6" />
      <rect x="88" y="76" width="304" height="116" rx="4" fill="none" stroke="#1b1b1d" strokeWidth="2" strokeDasharray="6 6" />
      <text x="240" y="132" textAnchor="middle" fontFamily="Oswald Variable, Impact, sans-serif" fontWeight="700" fontSize="50" fill="#1b1b1d">BU DA GEÇER</text>
      <text x="240" y="178" textAnchor="middle" fontFamily="Oswald Variable, Impact, sans-serif" fontWeight="700" fontSize="40" fill="#b8261a">YAHU</text>
      <rect x="188" y="248" width="104" height="36" rx="3" fill="#fff" stroke="#1b1b1d" strokeWidth="2" />
      <text x="240" y="272" textAnchor="middle" fontFamily="Inter Variable, sans-serif" fontWeight="600" fontSize="15" fill="#1b1b1d">00 XX 000</text>
      <rect x="60" y="244" width="46" height="58" rx="6" fill="#ff6a2b" />
      <rect x="374" y="244" width="46" height="58" rx="6" fill="#ff6a2b" />
      <rect x="38" y="318" width="404" height="30" rx="6" fill="#2b2b2e" />
    </svg>
  );
}
