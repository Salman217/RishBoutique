const PATTU_STYLES = [
  {
    body: 'from-[#6b1e2e] via-[#8b2840] to-[#4a1220]',
    border: 'border-gold/70',
    zari: 'bg-gradient-to-r from-transparent via-gold/80 to-transparent',
  },
  {
    body: 'from-[#1a4d3a] via-[#2d6b52] to-[#0f3328]',
    border: 'border-gold/60',
    zari: 'bg-gradient-to-r from-gold/40 via-gold to-gold/40',
  },
  {
    body: 'from-[#4a1220] via-[#7a2848] to-[#2a0a14]',
    border: 'border-gold/80',
    zari: 'bg-gradient-to-r from-transparent via-[#e8dcc4] to-transparent',
  },
]

export function PattuSareePanel({ variant = 0, className = '', label = 'Pattu', style }) {
  const s = PATTU_STYLES[variant % PATTU_STYLES.length]
  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-2xl ring-1 ring-ink/10 ${className}`}
      style={style}
      aria-hidden
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${s.body}`} />
      <div className={`absolute inset-y-0 left-0 w-[18%] border-r-2 ${s.border} bg-black/15`} />
      <div className={`absolute top-0 right-0 left-[18%] h-[12%] ${s.zari}`} />
      <div className="absolute top-[14%] right-3 bottom-[20%] left-[22%]">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="mb-1 h-[8%] rounded-sm bg-white/5"
            style={{ width: `${88 - i * 4}%`, marginLeft: `${i * 2}%` }}
          />
        ))}
      </div>
      <div className="absolute right-0 bottom-0 left-[18%] h-[22%] bg-gradient-to-t from-black/40 to-transparent" />
      <p className="absolute bottom-2 left-[24%] font-display text-[10px] tracking-widest text-gold uppercase md:text-xs">
        {label}
      </p>
    </div>
  )
}
