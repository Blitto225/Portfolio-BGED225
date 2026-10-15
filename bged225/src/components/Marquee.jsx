import { FourPointStar } from './Icons'
import TechIcon from './TechIcon'

export default function Marquee({ items, big = false, ribbon = false, showDivider = false }) {
  if (big) {
    return (
      <div className="marquee-big-section">
        <div className="marquee marquee-big">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div className="marquee-group" key={dup} aria-hidden={dup === 1}>
                {items.map((t, i) => (
                  <span className="marquee-big-item" key={i}>
                    {t}
                    <span className="marquee-plus">+</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {showDivider && (
          <div className="marquee-star-divider">
            <div className="divider-line" />
            <FourPointStar size={18} color="#ffffff" className="divider-star" />
            <div className="divider-line" />
          </div>
        )}
      </div>
    )
  }

  if (ribbon) {
    return (
      <div className="marquee marquee-white-ribbon">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div className="marquee-group" key={dup} aria-hidden={dup === 1}>
              {items.map((item, i) => {
                const name = typeof item === 'string' ? item : item.name
                return (
                  <span className="marquee-ribbon-item" key={name}>
                    {typeof item === 'string' ? null : <TechIcon name={item.icon} />}
                    <span>{name}</span>
                    <span className="ribbon-dot">&bull;</span>
                  </span>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="marquee">
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div className="marquee-group" key={dup} aria-hidden={dup === 1}>
            {items.map((t, i) => (
              <span className="marquee-item" key={i}>
                {t}
                <FourPointStar size={16} color="#c9f24b" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
