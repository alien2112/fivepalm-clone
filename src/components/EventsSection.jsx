import { useEffect, useRef, useState } from 'react'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'

const events = [
  {
    date: '30th August, 10 PM',
    title: 'The Penthouse Presents Tom & Collins',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    date: '6th September, 10 PM',
    title: 'Skyline Saturdays | SHOUSE | The Penthouse',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  },
  {
    date: '16th August, 10 PM',
    title: 'The Penthouse Presents HITTY',
    img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop',
  },
  {
    date: '22nd August, 10 PM',
    title: 'Hip Hop & RnB at The Penthouse | Cueball',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function EventsSection() {
  const scrollerRef = useRef(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  const updateNav = () => {
    const el = scrollerRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 2)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2)
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

  const scroll = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const delta = (el.clientWidth * 0.9) * (dir === 'right' ? 1 : -1)
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section className="events-section" id="events">
      <div className="events-container">
        <header className="events-header">
          <div className="events-header-left">
            <h2 className="events-title">Events <span className="events-caret" /></h2>
            <div className="events-subtitle">Immersive Entertainment at FIVE</div>
          </div>
        </header>

        <div className="events-controls swiper-navigation">
          <button className="e-nav swiper-button-prev" aria-label="Prev" onClick={() => scroll('left')} disabled={!canLeft} />
          <button className="e-nav swiper-button-next" aria-label="Next" onClick={() => scroll('right')} disabled={!canRight} />
        </div>

        <div className="events-scroller" ref={scrollerRef}>
          <div className="events-track">
            {events.map((e, i) => (
              <article key={i} className="event-card">
                <div className="event-topbar">
                  <span className="event-date">{e.date}</span>
                </div>
                <div className="event-title">{e.title}</div>
                <div className="event-actions">
                  <a className="event-book">BOOK NOW <span className="i-play" aria-hidden /></a>
                  <button className="event-ico" aria-label="WhatsApp"><FaWhatsapp /></button>
                  <button className="event-ico" aria-label="Call"><FaPhone /></button>
                </div>
                <figure className="event-media">
                  <img src={e.img} alt={e.title} />
                </figure>
              </article>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}



