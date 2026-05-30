export default function ContentImage({ src, alt, caption, className = '' }) {
  return (
    <figure className={`group overflow-hidden rounded-2xl border border-sky/60 bg-white/50 shadow-md ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {caption && (
        <figcaption className="border-t border-sky/40 bg-gradient-to-r from-sky/20 to-lavender/15 px-4 py-3 text-center text-sm font-medium text-ink/75">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
