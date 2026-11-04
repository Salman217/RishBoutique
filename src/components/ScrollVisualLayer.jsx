import { scrollJourneyPhotos } from '../data/gallery'
import { IronBoxSvg } from './visuals/IronBoxSvg'
import { ScrollWorkPhoto } from './visuals/ScrollWorkPhoto'

function lerp(a, b, t) {
  return a + (b - a) * t
}

function clamp01(v) {
  return Math.min(1, Math.max(0, v))
}

export function ScrollVisualLayer({ progress }) {
  const endStart = 0.78
  const endProgress = clamp01((progress - endStart) / (1 - endStart))
  const bottomIronOpacity = endProgress
  const bottomIronY = lerp(120, 0, endProgress)
  const finaleSareeScale = lerp(0.85, 1, endProgress)
  const finaleSareeOpacity = endProgress

  const { finale } = scrollJourneyPhotos

  return (
    <div
      className="scroll-visual-layer pointer-events-none fixed inset-0 z-30 hidden overflow-hidden lg:block"
      aria-hidden
    >
      <div
        className="absolute right-[8%] bottom-[8%] left-[8%] z-[70] flex items-end justify-end gap-6"
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

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-cream/40" />
    </div>
  )
}
