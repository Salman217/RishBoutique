export function PlugSvg({ className = '' }) {
  return (
    <svg viewBox="0 0 48 64" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="28" width="32" height="28" rx="4" fill="#2a2523" />
      <rect x="14" y="36" width="6" height="14" rx="1" fill="#c9a962" />
      <rect x="28" y="36" width="6" height="14" rx="1" fill="#c9a962" />
      <path d="M24 8v20" stroke="#1a1412" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 0v8" stroke="#6b1e2e" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export function WirePath({ className = '', d }) {
  return (
    <svg
      className={className}
      preserveAspectRatio="none"
      viewBox="0 0 100 1000"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={d}
        fill="none"
        stroke="#1a1412"
        strokeWidth="2.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={d}
        fill="none"
        stroke="#6b1e2e"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="4 8"
        opacity="0.35"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
