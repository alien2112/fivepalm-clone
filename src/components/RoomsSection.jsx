import { useEffect, useState } from 'react'

const slides = [
  { title: 'Superior', img: 'https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Deluxe', img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2a59?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Suite', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop' },
]

export default function RoomsSection() {
  const [index, setIndex] = useState(0)
  const canPrev = index > 0
  const canNext = index < slides.length - 1

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000)
    return () => clearInterval(id)
  }, [])

  const go = (dir) => {
    if (dir === 'left' && canPrev) setIndex((i) => i - 1)
    if (dir === 'right' && canNext) setIndex((i) => i + 1)
  }

  return (
    <section className="rooms-section" id="rooms-sec">
      <header className="rooms-header">
        <div className="rooms-header-inner">
          <h2 className="rooms-title">ROOMS <span className="rooms-caret" /></h2>
          <div className="rooms-right">
            <div className="rooms-tagline">Lifestyle Meets Luxury</div>
            <a href="#" className="rooms-all-link">All Rooms <span className="i-play" aria-hidden /></a>
          </div>
        </div>
      </header>

      <div className="rooms-hero">
        <div className="rooms-carousel">
          <div className="rooms-viewport">
            {slides.map((s, i) => (
              <figure key={s.title} className={`rooms-slide ${i === index ? 'is-active' : ''}`}>
                <img src={s.img} alt={s.title} />
              </figure>
            ))}

            <div className="rooms-topbar">
              <div className="rooms-chip">All Rooms</div>
              <div style={{display:'flex', alignItems:'center'}}>
                <div className="rooms-arrows swiper-navigation on-dark">
                  <button className="rooms-arrow swiper-button-prev" aria-label="Prev" onClick={() => go('left')} disabled={!canPrev} />
                  <button className="rooms-arrow swiper-button-next" aria-label="Next" onClick={() => go('right')} disabled={!canNext} />
                </div>
                <span className="rooms-count">{index + 1}/{slides.length}</span>
              </div>
            </div>

            <div className="rooms-bottom-left">
              <h3 className="rooms-roomtitle">{slides[index].title}</h3>
              <a href="#" className="rooms-explore">Explore <span className="i-play" aria-hidden /></a>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}



