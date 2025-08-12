import { useEffect, useRef, useState } from 'react'

const logos = [
  'THE PENTHOUSE',
  'BOHEMIA',
  'MAIDEN SHANGHAI',
  'CINQUE',
  'BLING',
  'THE SOCIAL POOL',
]

const items = [
  {
    img:
      'https://images.unsplash.com/photo-1521334726092-b509a19597c6?q=80&w=1200&auto=format&fit=crop',
    alt: 'Night club lights',
  },
  {
    video:
      'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    alt: 'Playtime video',
  },
  {
    img:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
    alt: 'City lights',
  },
  {
    img:
      'https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1200&auto=format&fit=crop',
    alt: 'Party vibes',
  },
  {
    img:
      'https://images.unsplash.com/photo-1514517214688-6e3d1b7b5e42?q=80&w=1200&auto=format&fit=crop',
    alt: 'DJ booth',
  },
  {
    img:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    alt: 'Pool night',
  },
]

export default function PlaytimeSection() {
  const scrollerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateNav = () => {
    const el = scrollerRef.current
    if (!el) return
    const { scrollLeft, clientWidth, scrollWidth } = el
    setCanScrollLeft(scrollLeft > 2)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2)
  }

  useEffect(() => {
    updateNav()
    const el = scrollerRef.current
    if (!el) return
    const onScroll = () => updateNav()
    const onResize = () => updateNav()
    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const scrollByAmount = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const delta = (el.clientWidth * 0.9) * (dir === 'right' ? 1 : -1)
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section id="playtime" className="playtime-section">
      <div className="playtime-container">
        <div className="playtime-header">
          <h2 className="playtime-title">IT’S PLAYTIME <span className="playtime-caret" aria-hidden /></h2>
          <div className="playtime-controls swiper-navigation">
            <button className="p-nav swiper-button-prev" aria-label="Previous" onClick={() => scrollByAmount('left')} disabled={!canScrollLeft} />
            <button className="p-nav swiper-button-next" aria-label="Next" onClick={() => scrollByAmount('right')} disabled={!canScrollRight} />
          </div>
        </div>

        <ul className="playtime-logos">
          {logos.map((label) => (
            <li key={label} className="playtime-logo">{label}</li>
          ))}
        </ul>

        <div className="playtime-scroller" ref={scrollerRef}>
          <div className="playtime-track">
            {items.map((it, idx) => (
              <article key={idx} className="p-card">
                <div className="p-media">
                  {it.video ? (
                    <video
                      src={it.video}
                      aria-label={it.alt}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img src={it.img} alt={it.alt} />
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="playtime-divider" />

        <div className="playtime-bottom">
          <div className="playtime-bottom-grid">
            <div className="pt-left">
              <h3 className="pt-heading">A CELEBRATORY EXPERIENCE</h3>
            </div>
            <div className="pt-right">
              <p>
                Dubbed the Hottest Hotel in Dubai, indulge yourself at our dare-to-be-different immersive playground.
                Rediscover your senses with our nonstop entertainment lineup, award-winning dining, top nightlife,
                industry-leading spa sanctuary, and our 150-metre private beach. Be seen, be snapped, and come play
                at Palm Jumeirah’s most talked-about resort.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


