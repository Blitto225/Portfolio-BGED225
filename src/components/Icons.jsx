export function MultiRayStar({ size = 24, color = '#c9f24b', className = '' }) {
  // 16 radiating rounded rays matching the Creatix starburst
  const rays = Array.from({ length: 16 }, (_, i) => i * 22.5)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="translate(50, 50)">
        {rays.map((angle) => (
          <rect
            key={angle}
            x="-3"
            y="-48"
            width="6"
            height="26"
            rx="3"
            fill={color}
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="14" fill={color} />
      </g>
    </svg>
  )
}

export function FourPointStar({ size = 18, color = '#c9f24b', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"
        fill={color}
      />
    </svg>
  )
}

export function SproutIcon({ size = 26, color = '#c9f24b', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 24C8 17 13 11 20 9M8 24C15 24 21 19 23 12M8 24L24 8"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="23" cy="9" r="2.5" fill={color} />
    </svg>
  )
}

export function SolutionsSparks({ className = '' }) {
  return (
    <svg
      width="34"
      height="26"
      viewBox="0 0 40 30"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '8px' }}
    >
      <path d="M6 10 C14 8, 22 14, 28 12" stroke="#c9f24b" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 18 C20 16, 28 22, 36 20" stroke="#c9f24b" strokeWidth="3" strokeLinecap="round" />
      <path d="M4 25 C10 24, 18 28, 24 27" stroke="#c9f24b" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function HeroDoodle({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Halo around head */}
      <circle
        cx="200"
        cy="150"
        r="130"
        stroke="#e5e7eb"
        strokeWidth="1.5"
        strokeDasharray="6 6"
      />
      {/* Curly squiggle on the left */}
      <path
        d="M60 220 C40 200, 50 170, 70 175 C90 180, 85 210, 65 230 C45 250, 70 270, 85 260"
        stroke="#9ca3af"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function Barcode({ className = '' }) {
  return (
    <svg
      width="44"
      height="18"
      viewBox="0 0 44 18"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="2" y1="1" x2="2" y2="17" stroke="#0d0f11" strokeWidth="2" strokeLinecap="round" />
      <line x1="7" y1="1" x2="7" y2="17" stroke="#0d0f11" strokeWidth="1" strokeLinecap="round" />
      <line x1="11" y1="1" x2="11" y2="17" stroke="#0d0f11" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1="1" x2="16" y2="17" stroke="#0d0f11" strokeWidth="1" strokeLinecap="round" />
      <line x1="20" y1="1" x2="20" y2="17" stroke="#0d0f11" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="1" x2="24" y2="17" stroke="#0d0f11" strokeWidth="2" strokeLinecap="round" />
      <line x1="29" y1="1" x2="29" y2="17" stroke="#0d0f11" strokeWidth="1" strokeLinecap="round" />
      <line x1="33" y1="1" x2="33" y2="17" stroke="#0d0f11" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="1" x2="38" y2="17" stroke="#0d0f11" strokeWidth="1" strokeLinecap="round" />
      <line x1="42" y1="1" x2="42" y2="17" stroke="#0d0f11" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function LightbulbDoodle({ size = 42, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Lightbulb glass outline in soft coral/red */}
      <path
        d="M22 36 C17 32, 14 26, 16 19 C18 12, 25 8, 32 9 C39 10, 44 16, 43 23 C42 28, 39 32, 36 36 L36 41 C36 42, 35 43, 34 43 L24 43 C23 43, 22 42, 22 41 Z"
        stroke="#f87171"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M25 43 L25 46 C25 47, 26 48, 27 48 L31 48 C32 48, 33 47, 33 46 L33 43" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
      {/* Inner filament */}
      <path d="M25 28 L28 22 L31 28" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Radiating rays */}
      <line x1="29" y1="2" x2="29" y2="6" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
      <line x1="44" y1="8" x2="41" y2="12" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="21" x2="45" y2="22" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="8" x2="17" y2="12" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="21" x2="13" y2="22" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function ServiceDoodle({ className = '' }) {
  return (
    <svg
      viewBox="0 0 300 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="150" cy="150" r="110" stroke="rgba(96, 165, 250, 0.4)" strokeWidth="1.5" strokeDasharray="5 5" />
      <circle cx="150" cy="150" r="130" stroke="rgba(96, 165, 250, 0.25)" strokeWidth="1" />
      <path
        d="M90 190 C120 230, 200 240, 240 180"
        stroke="rgba(96, 165, 250, 0.6)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <text x="140" y="80" fill="rgba(147, 197, 253, 0.7)" fontSize="11" fontFamily="Space Grotesk">
        Digital
      </text>
    </svg>
  )
}

export function QuoteBubble({ size = 32, className = '' }) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: '8px',
        background: '#c9f24b',
        color: '#0d0f11',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'serif',
        fontSize: size * 0.55,
        fontWeight: 'bold',
        lineHeight: 1,
        flexShrink: 0,
      }}
    >
      &ldquo;
    </div>
  )
}

export function TogglePill({ active = true, onToggle, className = '' }) {
  return (
    <div
      onClick={onToggle}
      className={className}
      style={{
        width: 58,
        height: 28,
        borderRadius: 9999,
        background: '#16191d',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        display: 'flex',
        alignItems: 'center',
        padding: '2px 4px',
        cursor: 'pointer',
        justifyContent: active ? 'flex-end' : 'flex-start',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: 9999,
          background: '#c9f24b',
          boxShadow: '0 2px 6px rgba(201, 242, 75, 0.4)',
        }}
      />
    </div>
  )
}

export function TeamAvatarIcon({ variant = 1 }) {
  // Stylized minimal lime avatar illustrations
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: '#c9f24b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#0d0f11',
        flexShrink: 0,
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d0f11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {variant % 3 === 1 && (
          <>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </>
        )}
        {variant % 3 === 2 && (
          <>
            <circle cx="12" cy="8" r="4" />
            <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
            <line x1="12" y1="12" x2="12" y2="15" />
          </>
        )}
        {variant % 3 === 0 && (
          <>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </>
        )}
      </svg>
    </div>
  )
}

