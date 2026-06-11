const KEY = 'downs-hearts-visits'
const SESSION_FLAG = 'downs-hearts-visit-counted'
const FALLBACK_KEY = 'downs-hearts-fallback-views'

const API_BASE = 'https://countapi.mileshilliard.com/api/v1'

/** @returns {Promise<number | null>} */
async function fetchCount() {
  const res = await fetch(`${API_BASE}/get/${KEY}`)
  if (!res.ok) return null
  const data = await res.json()
  if (data.error) return null
  return typeof data.value === 'number' ? data.value : null
}

/** @returns {Promise<number | null>} */
async function hitCount() {
  const res = await fetch(`${API_BASE}/hit/${KEY}`)
  if (!res.ok) return null
  const data = await res.json()
  return typeof data.value === 'number' ? data.value : null
}

function incrementFallback() {
  const next = Number(localStorage.getItem(FALLBACK_KEY) || '0') + 1
  localStorage.setItem(FALLBACK_KEY, String(next))
  return next
}

function getFallback() {
  return Number(localStorage.getItem(FALLBACK_KEY) || '0')
}

/**
 * Counts one visit per browser tab session, then returns the global total.
 * A new session starts when the tab/window is closed and the site is opened again.
 */
export async function recordAndGetVisitCount() {
  if (!sessionStorage.getItem(SESSION_FLAG)) {
    sessionStorage.setItem(SESSION_FLAG, '1')
    const hitValue = await hitCount()
    if (hitValue !== null) return hitValue
    return incrementFallback()
  }

  const count = await fetchCount()
  if (count !== null) return count
  return getFallback()
}

/** @param {number} n */
export function formatViewCount(n) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`
  if (n >= 10_000) return `${Math.round(n / 1000)}k`
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`
  return n.toLocaleString()
}
