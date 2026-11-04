import { BRAND } from '../data/brand'

export function BrandLogo({ className = '', compact = false }) {
  if (compact) {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <MonogramBadge size="sm" />
        <span className="font-display text-lg font-semibold text-ink">
          {BRAND.fullName}
        </span>
      </span>
    )
  }

  return (
    <a
      href="#"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label={BRAND.fullName}
    >
      <MonogramBadge size="md" />
      <span className="flex flex-col items-start">
        <span className="font-display text-[1.35rem] leading-none font-bold tracking-tight md:text-[1.55rem]">
          <span className="bg-gradient-to-r from-maroon-deep via-maroon to-maroon-deep bg-clip-text text-transparent">
            SR
          </span>
          <span className="ml-1.5 font-semibold text-ink">Saree</span>
          <span className="ml-1 bg-gradient-to-r from-[#b8860b] via-gold to-[#b8860b] bg-clip-text font-bold italic text-transparent">
            Dresser
          </span>
        </span>
        <span className="mt-1 hidden text-[9px] font-medium tracking-[0.32em] text-ink-muted uppercase sm:block md:text-[10px]">
          {BRAND.tagline}
        </span>
      </span>
    </a>
  )
}

function MonogramBadge({ size = 'md' }) {
  const dim =
    size === 'sm'
      ? 'h-10 w-10 rounded-md'
      : 'h-12 w-12 rounded-lg md:h-[3.35rem] md:w-[3.35rem]'

  return (
    <span
      className={`relative flex shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-[#1f0a28] via-[#2d1538] to-[#1a1412] shadow-lg ring-2 ring-gold/55 ring-offset-2 ring-offset-cream transition group-hover:ring-gold ${dim}`}
    >
      <img
        src={BRAND.logoMark}
        alt=""
        className="h-[92%] w-[92%] object-contain object-center"
        width={56}
        height={56}
        decoding="async"
      />
      <span
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-t from-black/25 via-transparent to-white/10"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-gold/25"
        aria-hidden
      />
    </span>
  )
}
