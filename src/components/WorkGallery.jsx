import { useCallback, useEffect, useMemo, useState } from 'react'
import { GALLERY_TAGS, workGallery } from '../data/gallery'

function GalleryTile({ item, className = '', onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className={`group relative overflow-hidden rounded-2xl bg-ink/5 text-left ring-1 ring-ink/10 transition hover:ring-maroon/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon ${className}`}
    >
      <img
        src={item.src}
        alt={item.caption}
        className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent opacity-80 transition group-hover:opacity-95" />
      <div className="absolute right-0 bottom-0 left-0 p-4 md:p-5">
        <span className="mb-2 inline-block rounded-full bg-gold/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink">
          {item.tag}
        </span>
        <p className="font-display text-lg leading-snug text-cream md:text-xl">{item.caption}</p>
        <p className="mt-2 text-xs text-cream/60 opacity-0 transition group-hover:opacity-100">
          Tap to enlarge
        </p>
      </div>
    </button>
  )
}

function Lightbox({ item, index, items, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Work photo preview"
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute top-4 right-4 rounded-full bg-cream/10 px-3 py-2 text-sm text-cream hover:bg-cream/20"
        onClick={onClose}
      >
        Close
      </button>
      {items.length > 1 && (
        <>
          <button
            type="button"
            className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-cream/10 px-3 py-4 text-cream hover:bg-cream/20 md:left-6"
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-cream/10 px-3 py-4 text-cream hover:bg-cream/20 md:right-6"
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </>
      )}
      <div
        className="flex max-h-[90vh] max-w-4xl flex-col overflow-hidden rounded-2xl bg-cream shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={item.src} alt={item.caption} className="max-h-[70vh] w-full object-contain bg-ink/5" />
        <div className="border-t border-ink/10 px-5 py-4 md:px-6 md:py-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-maroon">{item.tag}</p>
          <p className="mt-1 font-display text-xl text-ink md:text-2xl">{item.caption}</p>
          <p className="mt-2 text-xs text-ink-muted">
            {index + 1} of {items.length}
          </p>
        </div>
      </div>
    </div>
  )
}

export function WorkGallery() {
  const [filter, setFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = useMemo(() => {
    if (filter === 'All') return workGallery
    return workGallery.filter((i) => i.tag === filter)
  }, [filter])

  const featured = filtered.find((i) => i.featured) ?? filtered[0]
  const rest = filtered.filter((i) => i !== featured)

  const openAt = useCallback(
    (item) => {
      const idx = filtered.findIndex((i) => i.src === item.src && i.caption === item.caption)
      setLightboxIndex(idx >= 0 ? idx : 0)
    },
    [filtered],
  )

  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))
  }, [filtered.length])
  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length))
  }, [filtered.length])

  const lightboxItem = lightboxIndex !== null ? filtered[lightboxIndex] : null

  if (workGallery.length === 0) {
    return null
  }

  return (
    <section id="gallery" className="relative border-y border-ink/5 bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon">Our work</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
              Neat finishes
              <br />
              our customers trust
            </h2>
            <p className="mt-4 text-ink-muted">
              Real ironing and wrapping from Rish Boutique—pattu borders, cotton pleats, and
              bridal-ready presentation. Tap any photo to view larger.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {GALLERY_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setFilter(tag)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                  filter === tag
                    ? 'bg-maroon text-cream'
                    : 'bg-white text-ink-muted ring-1 ring-ink/10 hover:ring-maroon/30'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-12 text-center text-ink-muted">No photos in this category yet.</p>
        ) : (
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {featured && (
              <GalleryTile
                item={featured}
                onOpen={openAt}
                className="col-span-2 row-span-2 min-h-[280px] md:min-h-[420px]"
              />
            )}
            {rest.slice(0, 4).map((item) => (
              <GalleryTile
                key={`${item.src}-${item.caption}`}
                item={item}
                onOpen={openAt}
                className="min-h-[140px] md:min-h-[200px]"
              />
            ))}
          </div>
        )}

        {rest.length > 4 && (
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
            {rest.slice(4).map((item) => (
              <GalleryTile
                key={`${item.src}-${item.caption}-extra`}
                item={item}
                onOpen={openAt}
                className="min-h-[160px] md:min-h-[200px]"
              />
            ))}
          </div>
        )}

        <p className="mt-10 text-center text-sm text-ink-muted">
          Recent finishes — tap any photo for full size
        </p>
      </div>

      {lightboxItem && (
        <Lightbox
          item={lightboxItem}
          index={lightboxIndex}
          items={filtered}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
