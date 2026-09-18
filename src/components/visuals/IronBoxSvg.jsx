export function IronBoxSvg({ className = '', steam = false }) {
  return (
    <svg
      viewBox="0 0 120 100"
      className={className}
      aria-hidden
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {steam && (
        <g opacity="0.5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round">
          <path d="M52 8c-2-6 2-10 6-8M60 4c0-8 4-10 8-6M68 8c2-6 6-4 4 2" />
        </g>
      )}
      <path
        d="M18 42h84c4 0 8 4 8 8v28c0 6-5 10-10 10H20c-6 0-10-4-10-10V50c0-4 4-8 8-8z"
        fill="#2a2523"
      />
      <path d="M22 46h76v24H22V46z" fill="#1a1412" />
      <path
        d="M38 38h44c6 0 10 4 10 10v4H28v-4c0-6 4-10 10-10z"
        fill="#3d3835"
      />
      <ellipse cx="60" cy="58" rx="22" ry="10" fill="#6b1e2e" opacity="0.9" />
      <path d="M48 58h24" stroke="#c9a962" strokeWidth="2" strokeLinecap="round" />
      <rect x="94" y="52" width="8" height="16" rx="2" fill="#4a1220" />
      <path d="M102 60h14v4H102z" fill="#1a1412" />
      <circle cx="14" cy="58" r="5" fill="#c9a962" />
      <text x="60" y="72" textAnchor="middle" fill="#e8dcc4" fontSize="7" fontFamily="system-ui">
        RISH
      </text>
    </svg>
  )
}
