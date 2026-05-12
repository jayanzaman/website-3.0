// Shared SVG symbol library — Bloch sphere variants and alpona rosette.
// Rendered once at the root so any page can <use href="#..."/> by id.
export default function SvgSymbols() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        {/* Base Bloch sphere (full state vector pointing to upper-right) */}
        <symbol id="sphere-base" viewBox="0 0 220 220">
          <g transform="translate(110,110)">
            <ellipse cx="0" cy="0" rx="100" ry="28" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.5" />
            <circle cx="0" cy="0" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="-100" x2="0" y2="100" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
            <line x1="-100" y1="0" x2="100" y2="0" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
            <line x1="-58" y1="58" x2="58" y2="-58" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
            <path d="M -100 0 A 100 28 0 0 0 100 0" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="0" cy="-100" r="2" fill="currentColor" />
            <circle cx="0" cy="100" r="2" fill="currentColor" />
            <line x1="0" y1="0" x2="62" y2="-72" stroke="#b65530" strokeWidth="1.6" />
            <circle cx="62" cy="-72" r="4" fill="#b65530" />
            <text x="6" y="-104" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="currentColor" opacity="0.6">|0⟩</text>
            <text x="6" y="115" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="currentColor" opacity="0.6">|1⟩</text>
          </g>
        </symbol>

        {/* Variant: superposition (vector at equator) */}
        <symbol id="sphere-super" viewBox="0 0 220 220">
          <g transform="translate(110,110)">
            <ellipse cx="0" cy="0" rx="100" ry="28" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.5" />
            <circle cx="0" cy="0" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="-100" x2="0" y2="100" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
            <path d="M -100 0 A 100 28 0 0 0 100 0" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <line x1="0" y1="0" x2="92" y2="-26" stroke="#b65530" strokeWidth="1.6" />
            <circle cx="92" cy="-26" r="4" fill="#b65530" />
            <circle cx="0" cy="-100" r="2" fill="currentColor" />
            <circle cx="0" cy="100" r="2" fill="currentColor" />
          </g>
        </symbol>

        {/* Variant: ground state pole */}
        <symbol id="sphere-ground" viewBox="0 0 220 220">
          <g transform="translate(110,110)">
            <ellipse cx="0" cy="0" rx="100" ry="28" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.5" />
            <circle cx="0" cy="0" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="-100" x2="0" y2="100" strokeWidth="1.6" stroke="#b65530" />
            <path d="M -100 0 A 100 28 0 0 0 100 0" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="0" cy="-100" r="4" fill="#b65530" />
            <circle cx="0" cy="100" r="2" fill="currentColor" />
          </g>
        </symbol>

        {/* Alpona rosette — large motif version */}
        <symbol id="alpona" viewBox="0 0 220 220">
          <g transform="translate(110,110)">
            <circle cx="0" cy="0" r="100" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1.5 4" opacity="0.5" />
            <circle cx="0" cy="0" r="86" fill="none" stroke="currentColor" strokeWidth="1" />
            <g fill="none" stroke="#b65530" strokeWidth="1.2">
              <ellipse cx="0" cy="-58" rx="14" ry="36" />
              <ellipse cx="0" cy="-58" rx="14" ry="36" transform="rotate(45)" />
              <ellipse cx="0" cy="-58" rx="14" ry="36" transform="rotate(90)" />
              <ellipse cx="0" cy="-58" rx="14" ry="36" transform="rotate(135)" />
              <ellipse cx="0" cy="-58" rx="14" ry="36" transform="rotate(180)" />
              <ellipse cx="0" cy="-58" rx="14" ry="36" transform="rotate(225)" />
              <ellipse cx="0" cy="-58" rx="14" ry="36" transform="rotate(270)" />
              <ellipse cx="0" cy="-58" rx="14" ry="36" transform="rotate(315)" />
            </g>
            <circle cx="0" cy="0" r="22" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="0" cy="0" r="10" fill="none" stroke="#b65530" strokeWidth="1" />
            <circle cx="0" cy="0" r="3" fill="#b65530" />
            <g fill="#b65530">
              <circle cx="0" cy="-86" r="2" />
              <circle cx="60.8" cy="-60.8" r="2" />
              <circle cx="86" cy="0" r="2" />
              <circle cx="60.8" cy="60.8" r="2" />
              <circle cx="0" cy="86" r="2" />
              <circle cx="-60.8" cy="60.8" r="2" />
              <circle cx="-86" cy="0" r="2" />
              <circle cx="-60.8" cy="-60.8" r="2" />
            </g>
          </g>
        </symbol>

        {/* Alpona rosette — compact logo mark on a terracotta disc */}
        <symbol id="hanko" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="#b65530" />
          <g fill="#f5ecdc" opacity="0.92">
            <ellipse cx="50" cy="22" rx="4.5" ry="14" />
            <ellipse cx="50" cy="22" rx="4.5" ry="14" transform="rotate(45 50 50)" />
            <ellipse cx="50" cy="22" rx="4.5" ry="14" transform="rotate(90 50 50)" />
            <ellipse cx="50" cy="22" rx="4.5" ry="14" transform="rotate(135 50 50)" />
            <ellipse cx="50" cy="22" rx="4.5" ry="14" transform="rotate(180 50 50)" />
            <ellipse cx="50" cy="22" rx="4.5" ry="14" transform="rotate(225 50 50)" />
            <ellipse cx="50" cy="22" rx="4.5" ry="14" transform="rotate(270 50 50)" />
            <ellipse cx="50" cy="22" rx="4.5" ry="14" transform="rotate(315 50 50)" />
          </g>
          <circle cx="50" cy="50" r="11" fill="#b65530" />
          <circle cx="50" cy="50" r="11" fill="none" stroke="#f5ecdc" strokeWidth="1.2" />
          <circle cx="50" cy="50" r="3" fill="#f5ecdc" />
        </symbol>
      </defs>
    </svg>
  );
}
