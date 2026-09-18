import { scrollJourneyPhotos } from '../data/gallery'
import { IronBoxSvg } from './visuals/IronBoxSvg'
import { PlugSvg, WirePath } from './visuals/PlugWireSvg'
import { ScrollWorkPhoto } from './visuals/ScrollWorkPhoto'

function lerp(a, b, t) {
  return a + (b - a) * t
}

function clamp01(v) {
  return Math.min(1, Math.max(0, v))
}

export function ScrollVisualLayer({ progress }) {
  const topIronOpacity = clamp01(1 - progress * 2.2)
  const topIronY = lerp(0, 80, progress)
  const plugOpacity = clamp01(1 - progress * 1.8)

  const wireReveal = clamp01(progress * 1.4)
  const wireHeight = `${wireReveal * 100}%`

  const saree1Y = lerp(-40, 120, clamp01((progress - 0.08) / 0.35))
  const saree2Y = lerp(-60, 280, clamp01((progress - 0.22) / 0.4))
  const saree3Y = lerp(-50, 440, clamp01((progress - 0.38) / 0.42))

  const endStart = 0.78
  const endProgress = clamp01((progress - endStart) / (1 - endStart))
  const bottomIronOpacity = endProgress
  const bottomIronY = lerp(120, 0, endProgress)
  const finaleSareeScale = lerp(0.85, 1, endProgress)
  const finaleSareeOpacity = endProgress

  const leftWire =
    'M42 0 C 38 120, 48 240, 40 380 S 52 620, 44 760 S 36 900, 42 1000'
  const rightWire =
    'M58 0 C 62 140, 52 280, 58 420 S 48 660, 56 820 S 62 960, 58 1000'

  const { railTop, railMid, railLow, finale } = scrollJourneyPhotos

  return (
    <div
      className="scroll-visual-layer pointer-events-none fixed inset-0 z-30 hidden overflow-hidden lg:block"
      aria-hidden
    >
      <div className="absolute top-0 left-[4%] flex h-full w-[14%] max-w-[120px] flex-col items-center">
        <div
          className="relative z-40 transition-opacity duration-300"
          style={{ opacity: plugOpacity, transform: `translateY(${topIronY * 0.3}px)` }}
        >
          <PlugSvg className="h-14 w-10 drop-shadow-md" />
        </div>
        <div
          className="relative w-full flex-1 overflow-hidden"
          style={{ height: wireHeight, maxHeight: '100%' }}
        >
          <WirePath className="absolute inset-0 h-full w-full" d={leftWire} />
        </div>
        <div
          className="absolute top-[72px] z-50 w-[100px] transition-opacity duration-300"
          style={{
            opacity: topIronOpacity,
            transform: `translateY(${topIronY}px) rotate(-6deg)`,
          }}
        >
          <IronBoxSvg className="w-full drop-shadow-xl" steam={progress < 0.12} />
        </div>
      </div>

      <div className="absolute top-0 right-[3%] h-full w-[16%] max-w-[150px]">
        <div className="absolute inset-0 overflow-hidden opacity-90">
          <WirePath className="absolute inset-0 h-full w-full" d={rightWire} />
        </div>

        {railTop && (
          <ScrollWorkPhoto
            src={railTop}
            className="absolute right-0 z-40 h-44 w-28 md:h-52 md:w-32"
            style={{
              top: `${saree1Y}px`,
              opacity: clamp01(1 - progress * 0.12),
              transform: 'rotate(4deg)',
            }}
          />
        )}
        {railMid && (
          <ScrollWorkPhoto
            src={railMid}
            className="absolute right-2 z-50 h-48 w-28 md:h-56 md:w-32"
            style={{
              top: `${saree2Y}px`,
              opacity: 0.98,
              transform: 'rotate(-3deg)',
            }}
          />
        )}
        {railLow && (
          <ScrollWorkPhoto
            src={railLow}
            className="absolute right-0 z-[60] h-52 w-32 md:h-60 md:w-36"
            style={{
              top: `${saree3Y}px`,
              transform: 'rotate(2deg)',
            }}
          />
        )}
      </div>

      <div
        className="absolute right-[8%] bottom-[8%] left-[8%] z-[70] flex items-end justify-between gap-6"
        style={{ opacity: bottomIronOpacity }}
      >
        <div
          className="w-[130px] md:w-[160px]"
          style={{ transform: `translateY(${bottomIronY}px) rotate(4deg)` }}
        >
          <IronBoxSvg className="w-full drop-shadow-2xl" steam={endProgress > 0.5} />
        </div>
        {finale && (
          <ScrollWorkPhoto
            src={finale}
            className="h-56 w-36 md:h-72 md:w-44"
            style={{
              opacity: finaleSareeOpacity,
              transform: `scale(${finaleSareeScale}) rotate(-2deg)`,
            }}
          />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-cream/50 via-transparent to-cream/50" />
    </div>
  )
}
