import { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { formatViewCount, recordAndGetVisitCount } from '../../lib/viewCount'

export default function ViewCounter() {
  const { language } = useLanguage()
  const [count, setCount] = useState(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    let cancelled = false

    recordAndGetVisitCount().then((value) => {
      if (!cancelled) setCount(value)
    })

    return () => {
      cancelled = true
    }
  }, [])

  const display = count != null ? formatViewCount(count) : '…'

  const label =
    language === 'ar'
      ? count != null
        ? `${display} زيارة`
        : 'عدد الزيارات'
      : count != null
        ? `${display} visits`
        : 'Visit count'

  const handleClick = () => {
    if (window.matchMedia('(hover: none)').matches) {
      setRevealed((value) => !value)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group inline-flex shrink-0 items-center rounded-full border border-sky/80 bg-white/70 px-2 py-1.5 text-ink shadow-sm transition-all duration-200 hover:border-primary/35 hover:bg-sky/20 sm:px-2.5"
      title={label}
      aria-label={label}
      aria-expanded={revealed}
    >
      <Eye size={15} strokeWidth={2} className="shrink-0 text-primary sm:h-4 sm:w-4" aria-hidden />
      <span
        className={`max-w-0 overflow-hidden whitespace-nowrap text-[0.6875rem] font-semibold tabular-nums text-ink/85 opacity-0 transition-all duration-200 ease-out sm:text-xs ${
          revealed ? 'ms-1 max-w-20 opacity-100' : ''
        } [@media(hover:hover)]:group-hover:ms-1 [@media(hover:hover)]:group-hover:max-w-20 [@media(hover:hover)]:group-hover:opacity-100`}
      >
        {display}
      </span>
    </button>
  )
}
