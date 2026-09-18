import { scrollJourneyPhotos } from '../data/gallery'
import { IronBoxSvg } from './visuals/IronBoxSvg'
import { PlugSvg, WirePath } from './visuals/PlugWireSvg'
import { ScrollWorkPhoto } from './visuals/ScrollWorkPhoto'

export function MobileScrollStrip({ progress }) {
  const wireH = `${Math.min(100, progress * 120)}%`
  const end = Math.max(0, (progress - 0.75) / 0.25)
  const { railTop, railMid, finale } = scrollJourneyPhotos

  return (
    <div
      className="pointer-events-none fixed inset-y-0 right-0 z-30 w-[4.5rem] overflow-hidden lg:hidden"
      aria-hidden
    >
      <div className="absolute top-24 left-1/2 -translate-x-1/2">
        <PlugSvg className="h-10 w-8 opacity-90" />
      </div>
      <div className="absolute top-36 left-0 h-[calc(100%-9rem)] w-full">
        <WirePath className="h-full w-full" d="M50 0 C 45 200, 55 400, 50 600 S 48 900, 50 1000" />
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ height: wireH }}>
          <div className="absolute top-8 left-1/2 w-14 -translate-x-1/2">
            <IronBoxSvg className="w-full" steam={progress < 0.2} />
          </div>
        </div>
      </div>
      {railTop && (
        <ScrollWorkPhoto
          src={railTop}
          className="absolute top-[32%] right-0.5 h-20 w-14"
          style={{ transform: `translateY(${progress * 60}px) rotate(4deg)` }}
        />
      )}
      {railMid && (
        <ScrollWorkPhoto
          src={railMid}
          className="absolute top-[55%] right-0 h-24 w-16"
          style={{ transform: `translateY(${progress * 35}px) rotate(-3deg)` }}
        />
      )}
      <div
        className="absolute right-0.5 bottom-20 flex flex-col items-center gap-2"
        style={{ opacity: end }}
      >
        <IronBoxSvg className="w-12" steam />
        {finale && <ScrollWorkPhoto src={finale} className="h-20 w-14" />}
      </div>
    </div>
  )
}
