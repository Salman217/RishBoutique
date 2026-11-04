import { useEffect, useState } from 'react'
import { workGallery } from '../data/gallery'

const SLIDE_MS = 3000

const slides = workGallery.map((item) => ({
  src: item.src,
  alt: item.caption,
}))

export function HeroWorkSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_MS)
    return () => window.clearInterval(id)
  }, [])

  if (slides.length === 0) return null

  return (
    <a
      href="#gallery"
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-ink/10"
    >
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          } ${i === index ? 'group-hover:scale-[1.03]' : ''}`}
          style={{ transitionProperty: 'opacity, transform' }}
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      <p className="absolute right-0 bottom-0 left-0 p-6 font-display text-2xl text-cream">
        Real finishes from our studio
      </p>
    </a>
  )
}
