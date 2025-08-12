import { useEffect, useRef, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function PachaSection() {
  const restaurants = [
    {
      href: 'https://thepenthouse.co/dubai/',
      img: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/penthouse.svg',
      alt: 'The Penthouse'
    },
    {
      href: 'https://www.bohemiadubai.com/',
      img: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/bohelialogo.svg',
      alt: 'Bohemia'
    },
    {
      href: 'https://palmjumeirah.fivehotelsandresorts.com/eat-drink/cinque/',
      img: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/06/cinque-1-1.svg',
      alt: 'Cinque'
    },
    {
      href: 'https://maiden-shanghai.com/dubai/',
      img: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/06/Maiden-logo.svg',
      alt: 'Maiden Shanghai'
    },
    {
      href: 'https://palmjumeirah.fivehotelsandresorts.com/eat-drink/jade/',
      img: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/06/jade-logo.svg',
      alt: 'Jade'
    },
    {
      href: 'https://palmjumeirah.fivehotelsandresorts.com/eat-drink/praia/',
      img: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/07/praia.png.webp',
      alt: 'Praia'
    },
    {
      href: 'https://palmjumeirah.fivehotelsandresorts.com/eat-drink/numa/',
      img: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/09/NUMA-Black-logo.svg',
      alt: 'Numa'
    },
    {
      href: 'https://palmjumeirah.fivehotelsandresorts.com/eat-drink/beach-by-five/',
      img: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/06/beach-by-five-logo-2.svg',
      alt: 'Beach by FIVE'
    },
    {
      href: 'https://palmjumeirah.fivehotelsandresorts.com/eat-drink/detox-me-cafe/',
      img: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/06/detox-me-logo.svg',
      alt: 'Detox Me Cafe'
    },
    {
      href: 'https://palmjumeirah.fivehotelsandresorts.com/eat-drink/the-delisserie/',
      img: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/06/NEW-deli.svg',
      alt: 'The Delisserie'
    },
  ]

  const scrollerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateNavState = () => {
    const el = scrollerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 2)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2)
  }

  useEffect(() => {
    updateNavState()
    const el = scrollerRef.current
    if (!el) return
    const onScroll = () => updateNavState()
    const onResize = () => updateNavState()
    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const scrollByDirection = (direction) => {
    const el = scrollerRef.current
    if (!el) return
    const distance = (el.clientWidth * 0.9) * (direction === 'right' ? 1 : -1)
    el.scrollBy({ left: distance, behavior: 'smooth' })
  }

  return (
    <section className="pacha-section" id="pacha">
      <div className="pacha-container">
        <header className="pacha-header">
          <h2 className="pacha-title">
            PACHA ICONS <span className="pacha-cherries" aria-hidden />
          </h2>
          <div className="pacha-right">At FIVE LUXE</div>
        </header>

        <article className="pacha-hero">
          <div className="pacha-topbar">
            <span className="pacha-date">17th October, 7 PM (Doors Open 6 PM)</span>
            <div className="pacha-actions">
              <a className="pacha-book">BOOK NOW <span className="i-play" aria-hidden /></a>
              <button className="pacha-ico" aria-label="WhatsApp"><FaWhatsapp /></button>
            </div>
          </div>
          <div className="pacha-titlebar">
            <div className="pacha-eventtitle">CARL COX | Grand Dubai</div>
            <div className="pacha-eventsubtitle">Season Opening | Playa Pacha</div>
          </div>
          <figure className="pacha-media swiper-navigation on-dark">
            <img
              src="https://images.unsplash.com/photo-1620271344704-829f10be632a?q=80&w=1600&auto=format&fit=crop"
              alt="Pacha Icons Hero"
            />
          </figure>
        </article>

        <div className="culinary">
          <div className="culinary-header">
            <div className="pacha-subtitle">YOUR CULINARY PLAYGROUND</div>
            <div className="swiper-navigation">
              <button
                className="swiper-button-prev"
                aria-label="Previous"
                onClick={() => scrollByDirection('left')}
                disabled={!canScrollLeft}
              />
              <button
                className="swiper-button-next"
                aria-label="Next"
                onClick={() => scrollByDirection('right')}
                disabled={!canScrollRight}
              />
            </div>
          </div>

          <div className="culinary-scroller" ref={scrollerRef}>
            <div className="culinary-track">
              {restaurants.map((r) => (
                <article key={r.href} className="culinary-card">
                  <a className="culinary-link card" href={r.href} aria-label={r.alt} target="_blank" rel="noreferrer noopener">
                    <figure className="culinary-media">
                      <img src={r.img} alt={r.alt} />
                    </figure>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}



