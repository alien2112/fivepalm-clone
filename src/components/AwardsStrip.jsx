export default function AwardsStrip() {
  const awards = [
    '/25.11.24-FIVE-WEB-PALM-AWARDS-1.svg',
    '/25.11.24-FIVE-WEB-PALM-AWARDS-1-1.svg',
    '/25.11.24-FIVE-WEB-PALM-AWARDS-2-1.svg',
    '/25.11.24-FIVE-WEB-PALM-AWARDS-3-1 (1).svg',
    '/whatsonlogo.svg',
    '/michelin2025-1.png.webp',
  ]

  return (
    <section className="awards-strip" aria-label="Awards">
      <div className="awards-marquee">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={`top-${i}`} className="marquee-chunk">
            COME PLAY <span className="i-play" aria-hidden />
          </span>
        ))}
      </div>
      <div className="awards-row">
        {awards.map((src, idx) => (
          <div key={idx} className="award-item">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={src} />
          </div>
        ))}
      </div>
      <div className="awards-marquee">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={`bot-${i}`} className="marquee-chunk">
            COME PLAY <span className="i-play" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  )
}


