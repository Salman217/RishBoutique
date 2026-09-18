import { useEffect, useState } from 'react'
import { MobileScrollStrip } from './components/MobileScrollStrip'
import { ScrollVisualLayer } from './components/ScrollVisualLayer'
import { WorkGallery } from './components/WorkGallery'
import { scrollJourneyPhotos } from './data/gallery'
import { useScrollProgress } from './hooks/useScrollProgress'

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Intake & fabric read',
    desc: 'We note brand, weave, and zari type—cotton body, pattu border, or full silk blend—so heat and pressure match the saree.',
    detail: 'No one-size-fits-all settings.',
  },
  {
    num: '02',
    title: 'Dust-free preparation',
    desc: 'Light brushing and alignment on a clean padded surface. Pleats and pallu are mapped before a single press.',
    detail: 'Workspace sanitised between every piece.',
  },
  {
    num: '03',
    title: 'Controlled steam',
    desc: 'Gentle steam relaxes creases without soaking fibres. Borders and embroidery stay untouched until the body is set.',
    detail: 'Pattu-safe moisture levels.',
  },
  {
    num: '04',
    title: 'Precision pressing',
    desc: 'Low, even heat with protective cloth layers. Branded cotton gets a crisp finish; pattu gets a soft, natural fall—never flat or shiny.',
    detail: 'Neat lines, zero scorch marks.',
  },
  {
    num: '05',
    title: 'Pallu & border finish',
    desc: 'Pallu length, border symmetry, and tassel alignment checked by hand. Every fold is intentional.',
    detail: 'Ready to drape straight from the cover.',
  },
  {
    num: '06',
    title: 'Final inspection & wrap',
    desc: 'Under light, we scan for missed creases, then fold in breathable tissue and a boutique-grade cover.',
    detail: 'Your saree leaves neat, clean, and event-ready.',
  },
]

const SERVICES = [
  {
    title: 'Branded cotton sarees',
    body: 'Crisp pleats and a polished drape that respect label care instructions and colour fastness.',
  },
  {
    title: 'Pattu & silk blends',
    body: 'Temperature-controlled finishing that protects zari, keeps lustre natural, and avoids crush marks.',
  },
  {
    title: 'Designer & heavy work',
    body: 'Extra care around sequins, stone work, and layered borders—pressed around embellishments, not through them.',
  },
  {
    title: 'Pre-event refresh',
    body: 'Wedding, pooja, or office wear—turnaround focused on looking flawless when it matters.',
  },
  {
    title: 'Wardrobe batches',
    body: 'Multiple sarees logged and finished in order, with consistent quality across your collection.',
  },
  {
    title: 'Pickup & delivery',
    body: 'Optional door service so your silks travel flat, covered, and handled only by our team.',
  },
]

const FAQ = [
  {
    q: 'Do you iron all types of sarees?',
    a: 'We specialise in branded cotton, pattu, and silk blends. Share photos or the brand label if you are unsure—we will confirm before we start.',
  },
  {
    q: 'Will ironing damage my pattu or zari?',
    a: 'We use pattu-safe heat, steam guards, and pressing cloths. Borders and zari are finished separately from the body.',
  },
  {
    q: 'How long does one saree take?',
    a: 'Most single pieces are ready within a few hours depending on fabric and queue. Rush slots are available for events.',
  },
  {
    q: 'How should I prepare my saree?',
    a: 'Bring it clean and dry if possible. We can advise on minor touch-ups; heavy stains may need cleaning before press.',
  },
  {
    q: 'How do I book?',
    a: 'Message or call us with fabric type and when you need it. We confirm price and pickup time before work begins.',
  },
]

const TRUST_ITEMS = [
  'Branded cotton specialists',
  'Pattu-safe heat protocol',
  'Hand-finished pallu alignment',
  'Tissue wrap & boutique cover',
  'Same-day options available',
  'Transparent per-saree pricing',
]

function Header({ menuOpen, setMenuOpen }) {
  const links = [
    { href: '#process', label: 'Our process' },
    { href: '#gallery', label: 'Our work' },
    { href: '#services', label: 'Services' },
    { href: '#why', label: 'Why us' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink/5 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#" className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          Rish <span className="text-maroon">Boutique</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-muted transition hover:text-maroon"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-maroon px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-maroon-deep"
          >
            Book ironing
          </a>
        </nav>
        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`h-0.5 w-6 bg-ink transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-ink transition ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-ink transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>
      {menuOpen && (
        <nav className="border-t border-ink/5 bg-cream px-5 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-lg font-medium text-ink"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-gradient saree-pattern relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div className="animate-fade-up">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-maroon">
            Premium saree finishing
          </p>
          <h1 className="font-display text-5xl leading-[1.05] font-semibold text-ink md:text-7xl">
            Every
            <br />
            pleat
            <br />
            <span className="italic text-maroon">perfect.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
            Branded cotton and pattu sarees, ironed with boutique care—neat, clean, and ready to wear.
            One dedicated team from intake to final fold.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-maroon px-7 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-maroon/20 transition hover:bg-maroon-deep"
            >
              Book your saree
            </a>
            <a
              href="#process"
              className="inline-flex rounded-full border border-ink/15 bg-white/60 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-maroon/30"
            >
              See our process
            </a>
          </div>
        </div>
        <div className="relative hidden md:block">
          <a
            href="#gallery"
            className="group relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-ink/10"
          >
            <img
              src={scrollJourneyPhotos.hero}
              alt="Rish Boutique finished pattu saree — neat pleats and zari border"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p className="absolute right-0 bottom-0 left-0 p-6 font-display text-2xl text-cream">
              Real finishes from our studio
            </p>
          </a>
          <div className="absolute -bottom-6 -left-6 rounded-xl border border-gold/30 bg-white px-5 py-4 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wider text-maroon">Our promise</p>
            <p className="font-display text-xl text-ink">No shine. No scorch. Just crisp.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { value: '6', label: 'Step finishing process' },
    { value: '100%', label: 'Hand-checked before wrap' },
    { value: 'Pattu', label: 'Safe heat protocol' },
    { value: 'Same day', label: 'Rush slots when you need them' },
  ]
  return (
    <section className="border-y border-ink/5 bg-ink py-14 text-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <p className="font-display text-4xl font-semibold text-gold md:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm text-cream/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Marquee() {
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS]
  return (
    <div className="overflow-hidden border-b border-ink/5 bg-cream-dark py-4">
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-12 text-sm font-medium text-ink-muted">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  )
}

function Process() {
  const [active, setActive] = useState(0)

  return (
    <section id="process" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon">How we work</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
            Precision at
            <br />
            every fold
          </h2>
          <p className="mt-4 text-ink-muted">
            Inspired by boutique standards—not bulk laundry. Six clear stages so you know exactly
            how your branded cotton and pattu sarees are handled.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-2">
            {PROCESS_STEPS.map((step, i) => (
              <button
                key={step.num}
                type="button"
                onClick={() => setActive(i)}
                className={`flex items-start gap-4 rounded-xl border px-5 py-4 text-left transition ${
                  active === i
                    ? 'border-maroon/30 bg-white shadow-md'
                    : 'border-transparent bg-transparent hover:bg-white/80'
                }`}
              >
                <span
                  className={`font-display text-2xl font-semibold ${
                    active === i ? 'text-maroon' : 'text-ink/25'
                  }`}
                >
                  {step.num}
                </span>
                <span className="pt-1">
                  <span className="block font-semibold text-ink">{step.title}</span>
                  {active === i && (
                    <span className="mt-1 block text-sm text-maroon">{step.detail}</span>
                  )}
                </span>
              </button>
            ))}
          </div>

          <div className="relative rounded-2xl border border-ink/8 bg-white p-8 shadow-xl md:p-10">
            <div className="process-line absolute top-8 bottom-8 left-8 w-0.5 rounded-full opacity-40 md:left-10" />
            <div className="relative pl-8 md:pl-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                Step {PROCESS_STEPS[active].num}
              </span>
              <h3 className="mt-2 font-display text-3xl font-semibold text-ink">
                {PROCESS_STEPS[active].title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                {PROCESS_STEPS[active].desc}
              </p>
              <p className="mt-6 inline-flex rounded-full bg-maroon/10 px-4 py-2 text-sm font-medium text-maroon">
                {PROCESS_STEPS[active].detail}
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-ink/5 pt-8">
              {['Inspect', 'Press', 'Wrap'].map((label, i) => (
                <div
                  key={label}
                  className={`rounded-lg py-3 text-center text-xs font-semibold uppercase tracking-wider ${
                    i <= active % 3
                      ? 'bg-maroon text-cream'
                      : 'bg-cream-dark text-ink-muted'
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="bg-ink py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">What we finish</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Everything your saree
              <br />
              needs—under one roof
            </h2>
          </div>
          <p className="max-w-md text-cream/70">
            From daily cotton drapes to wedding pattu—one team, one standard: neat, clean, and
            respectful of your brand and fabric.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-cream/10 bg-white/5 p-7 transition hover:border-gold/40 hover:bg-white/10"
            >
              <div className="mb-4 h-0.5 w-10 bg-gold transition group-hover:w-16" />
              <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/75">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const points = [
    {
      title: 'One point of contact',
      body: 'No handoffs. The same team receives, presses, and wraps your saree.',
    },
    {
      title: 'Fabric-first method',
      body: 'Cotton, pattu, and blends each follow a written heat and steam protocol.',
    },
    {
      title: 'Neat & clean guarantee',
      body: 'If a crease is missed, we rework it before your saree leaves the studio.',
    },
    {
      title: 'Transparent pricing',
      body: 'Clear per-piece rates—no hidden “express” fees after pickup.',
    },
  ]
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon">Why Rish Boutique</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
              Finishing that works
              <br />
              as hard as you do
            </h2>
            <p className="mt-4 text-ink-muted">
              Your saree is not “just laundry.” It is how you show up. We treat branded and pattu
              pieces with the same care we would want for our own wardrobe.
            </p>
          </div>
          <ul className="space-y-6">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4 border-b border-ink/5 pb-6">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-maroon/10 font-display text-sm font-bold text-maroon">
                  ✓
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    {
      text: 'My Kanchipuram pattu came back with the border perfectly straight—no crush on the zari. Exactly the neat finish I wanted.',
      name: 'Priya M.',
      role: 'Regular client',
    },
    {
      text: 'They understood my branded cotton sarees need a crisp office look without shine. First time I did not re-press at home.',
      name: 'Anitha R.',
      role: 'Corporate wear',
    },
    {
      text: 'Six sarees for a family wedding, all labelled and wrapped separately. Clean, professional, and on time.',
      name: 'Lakshmi K.',
      role: 'Event batch',
    },
  ]
  return (
    <section className="border-y border-ink/5 bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-maroon">
          Trusted finish
        </p>
        <h2 className="mt-3 text-center font-display text-4xl font-semibold text-ink md:text-5xl">
          Loved by saree wearers
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q.name}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm"
            >
              <p className="flex-1 text-sm leading-relaxed text-ink-muted">&ldquo;{q.text}&rdquo;</p>
              <footer className="mt-6 border-t border-ink/5 pt-6">
                <p className="font-semibold text-ink">{q.name}</p>
                <p className="text-xs text-ink-muted">{q.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h2 className="text-center font-display text-4xl font-semibold text-ink">Questions</h2>
        <p className="mt-3 text-center text-ink-muted">Straightforward answers before you book.</p>
        <ul className="mt-12 space-y-3">
          {FAQ.map((item, i) => (
            <li key={item.q} className="overflow-hidden rounded-xl border border-ink/8 bg-white">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-ink"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {item.q}
                <span className="text-2xl font-light text-maroon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <p className="border-t border-ink/5 px-6 pb-5 pt-2 text-sm leading-relaxed text-ink-muted">
                  {item.a}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-maroon-deep py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Ready for a crisp drape?</p>
        <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">
          One studio.
          <br />
          Every pleat cared for.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-cream/80">
          Share your fabric type—branded cotton, pattu, or blend—and when you need it back. We
          confirm timing and price before we start.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+917639814949"
            className="inline-flex min-w-[200px] justify-center rounded-full bg-cream px-8 py-4 text-sm font-semibold text-maroon-deep transition hover:bg-white"
          >
            Call to book
          </a>
          <a
            href="https://wa.me/917639814949"
            className="inline-flex min-w-[200px] justify-center rounded-full border border-cream/30 px-8 py-4 text-sm font-semibold text-cream transition hover:bg-cream/10"
          >
            WhatsApp us
          </a>
        </div>
        <p className="mt-8 text-sm text-cream/50">
          WhatsApp &amp; call: +91 76398 14949
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-cream py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <p className="font-display text-xl font-semibold text-ink">
          Rish <span className="text-maroon">Boutique</span>
        </p>
        <p className="text-center text-sm text-ink-muted">
          Premium ironing & finishing · Branded cotton · Pattu sarees
        </p>
        <p className="text-xs text-ink-muted">© {new Date().getFullYear()} Rish Boutique</p>
      </div>
    </footer>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollProgress = useScrollProgress()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ScrollVisualLayer progress={scrollProgress} />
      <MobileScrollStrip progress={scrollProgress} />
      <main className="scroll-journey-main">
        <Hero />
        <Stats />
        <Marquee />
        <Process />
        <WorkGallery />
        <Services />
        <WhyUs />
        <Testimonials />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
