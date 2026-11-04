import { WHATSAPP_DEFAULT_MESSAGE, whatsappDmUrl } from '../data/contact'
import { ACTIVE_PROMOTION } from '../data/promotion'

function WhatsAppIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function RoyalOrnament({ className = '', flip = false }) {
  return (
    <svg
      className={`h-8 w-8 shrink-0 text-[#d4af37]/80 md:h-10 md:w-10 ${flip ? 'scale-x-[-1]' : ''} ${className}`}
      viewBox="0 0 40 40"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M20 2c-2 6-6 10-12 12 6 2 10 6 12 12 2-6 6-10 12-12-6-2-10-6-12-12zm0 24c-1.5 4-4 6-8 8 4 2 6 4 8 8 2-4 4-6 8-8-4-2-6.5-4-8-8z"
      />
    </svg>
  )
}

export function PromoTopBanner() {
  if (!ACTIVE_PROMOTION.active) return null

  const p = ACTIVE_PROMOTION

  return (
    <a
      href="#promo"
      className="promo-royal-banner group relative block overflow-hidden transition hover:brightness-110"
    >
      <div className="promo-royal-pattern absolute inset-0" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#f5e6b8] to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/90 to-transparent"
        aria-hidden
      />

      <div className="relative flex items-center justify-center gap-3 px-4 py-4 md:gap-6 md:px-8 md:py-5">
        <RoyalOrnament className="hidden opacity-70 sm:block" flip />

        <div className="min-w-0 flex-1 text-center">
          <p className="text-[10px] font-medium tracking-[0.28em] text-[#d4af37]/90 uppercase md:text-[11px]">
            Festive royal privilege
          </p>

          <div className="mt-2 flex flex-col items-center gap-2 md:mt-2.5 md:flex-row md:flex-wrap md:justify-center md:gap-x-4 md:gap-y-1">
            <span className="promo-royal-shimmer font-display text-lg font-semibold tracking-tight text-[#f5e6b8] md:text-xl">
              {p.name}
            </span>
            <span className="hidden h-4 w-px bg-[#d4af37]/40 md:block" aria-hidden />
            <span className="text-sm font-medium text-[#faf3e0]/95 md:text-[15px]">
              1 saree{' '}
              <span className="font-semibold tabular-nums text-[#f5e6b8]">₹{p.single.priceInr}</span>
            </span>
            <span className="hidden text-[#d4af37]/50 md:inline" aria-hidden>
              ·
            </span>
            <span className="text-sm font-medium text-[#faf3e0]/95 md:text-[15px]">
              5 sarees{' '}
              <span className="font-semibold tabular-nums text-[#f5e6b8]">₹{p.bundle.priceInr}</span>
            </span>
          </div>

          <p className="mt-2.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-[#e8dcc4]/85 md:mt-3 md:text-sm">
            <span>Valid {p.validDates}</span>
            <span className="text-[#d4af37]/40">|</span>
            <span className="inline-flex items-center rounded-full border border-[#d4af37]/45 bg-[#d4af37]/10 px-3 py-0.5 text-[11px] font-semibold tracking-wide text-[#f5e6b8] uppercase transition group-hover:border-[#f5e6b8]/60 group-hover:bg-[#d4af37]/20 md:text-xs">
              View Offers
            </span>
          </p>
        </div>

        <RoyalOrnament className="hidden opacity-70 sm:block" />
      </div>
    </a>
  )
}

export function DiwaliPromoSection() {
  if (!ACTIVE_PROMOTION.active) return null

  const p = ACTIVE_PROMOTION
  const wa = whatsappDmUrl(WHATSAPP_DEFAULT_MESSAGE)

  return (
    <section
      id="promo"
      className="relative overflow-hidden border-y-2 border-[#d4af37]/35 bg-gradient-to-br from-[#1a0a22] via-[#3d1530] to-[#120818] py-16 text-cream md:py-20"
    >
      <div className="promo-royal-pattern pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-[#d4af37]/15 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-[#6b1e2e]/40 blur-3xl" />
      </div>

      <div className="relative mx-auto mb-10 flex justify-center px-5 md:px-8">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]/70 md:w-20" />
          <p className="font-display text-sm tracking-[0.3em] text-[#d4af37] uppercase">Royal Diwali</p>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]/70 md:w-20" />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-12 md:px-8">
        <div className="order-2 md:order-1">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#d4af37] uppercase">{p.name}</p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-[#faf3e0] md:text-5xl">
            {p.tagline}
          </h2>
          <p className="mt-4 text-[#e8dcc4]/85">
            Professional saree ironing & finishing — neat, clean, pattu-safe. Book through WhatsApp
            and mention the Diwali pack you want.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#d4af37]/45 bg-black/25 p-6 shadow-inner backdrop-blur-sm">
              <p className="text-sm tracking-wider text-[#d4af37] uppercase">{p.single.label}</p>
              <p className="mt-1 font-display text-4xl font-bold text-[#f5e6b8]">
                ₹{p.single.priceInr}
                <span className="text-lg font-normal text-[#e8dcc4]/70"> only</span>
              </p>
            </div>
            <div className="rounded-2xl border-2 border-[#d4af37] bg-gradient-to-br from-[#d4af37]/20 to-transparent p-6 shadow-lg shadow-[#d4af37]/10">
              <p className="text-sm tracking-wider text-[#f5e6b8] uppercase">{p.bundle.label}</p>
              <p className="mt-1 font-display text-4xl font-bold text-[#faf3e0]">
                ₹{p.bundle.priceInr}
                <span className="text-lg font-normal text-[#e8dcc4]/70"> only</span>
              </p>
              <p className="mt-2 text-xs text-[#e8dcc4]/70">Best value for families & events</p>
            </div>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-black/30 px-4 py-2 text-sm text-[#e8dcc4]">
            <span aria-hidden>✦</span>
            Valid {p.validDates} — {p.validNote}
          </p>

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-xl transition hover:bg-[#20bd5a] sm:w-auto"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Claim offer on WhatsApp
          </a>
          <p className="mt-3 text-xs text-[#c9a962]/80">Don&apos;t miss this amazing offer!</p>
        </div>

        <div className="order-1 md:order-2">
          <div className="overflow-hidden rounded-2xl shadow-2xl ring-2 ring-[#d4af37]/60 ring-offset-4 ring-offset-[#1a0a22]">
            <img
              src={p.posterSrc}
              alt={p.posterAlt}
              className="w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
