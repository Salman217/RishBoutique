export function ScrollWorkPhoto({ src, alt = 'Finished saree', className = '', style }) {
  return (
    <div
      className={`overflow-hidden rounded-lg shadow-2xl ring-2 ring-cream/80 ring-offset-2 ring-offset-transparent ${className}`}
      style={style}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover object-center" draggable={false} />
    </div>
  )
}
