export default function BrandLogo({ className = 'h-11 w-11' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="dh-heart" x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4A90E2" />
          <stop offset="0.5" stopColor="#CDB4DB" />
          <stop offset="1" stopColor="#FFD23F" />
        </linearGradient>
        <linearGradient id="dh-glow" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A7C7E7" stopOpacity="0.5" />
          <stop offset="1" stopColor="#FFF7E6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#dh-glow)" />
      <path
        d="M24 38c-6.5-4.8-12-9.6-12-16.2C12 16.4 15.6 13 19.5 13c2.2 0 4.2 1.1 4.5 2.8.3-1.7 2.3-2.8 4.5-2.8 3.9 0 7.5 3.4 7.5 8.8C36 28.4 30.5 33.2 24 38z"
        fill="url(#dh-heart)"
      />
      <circle cx="17.5" cy="22" r="2" fill="#fff" fillOpacity="0.95" />
      <circle cx="30.5" cy="22" r="2" fill="#fff" fillOpacity="0.95" />
      <path
        d="M19 27.5c1.6 2.2 3.4 3.3 5 3.3s3.4-1.1 5-3.3"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeOpacity="0.9"
      />
    </svg>
  )
}
