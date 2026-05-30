import BulletList from './BulletList'

export default function SubsectionCard({ title, points, children }) {
  return (
    <article className="rounded-2xl border border-sky/60 bg-white/50 p-6 shadow-sm sm:p-8">
      {title && <h3 className="mb-4 font-display text-lg font-bold text-primary">{title}</h3>}
      {points?.length > 0 && <BulletList items={points} />}
      {children}
    </article>
  )
}
