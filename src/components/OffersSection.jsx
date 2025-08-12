import { useEffect, useRef, useState } from 'react'

const offers = [
  {
    title: 'PAY 3 STAY 4 OFFER',
    img:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop',
    alt: 'Guest by the pool with skyline view',
  },
  {
    title: 'ALL-INCLUSIVE OFFER',
    img:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop',
    alt: 'Friends relaxing at beach daybeds',
  },
  {
    title: 'FREE HALF BOARD OFFER',
    img:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop',
    alt: 'Hotel room with breakfast spread',
  },
]

export default function OffersSection() {
  const wrapperRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="offers-section featured-offers-section-new" id="offers">
      <div className="offers-container">
        <h2 className="offers-title">DUBAI’S HOTTEST BEACH HOTEL</h2>
        <p className="offers-subtitle">
          Luxury rooms and suites. 150-m private beach. Picture perfect pools. Insta-views.
          Award-winning restaurants. Stunning spa. Our unashamedly luxurious resort has it all!
          Enjoy complimentary group yoga with all room bookings.
        </p>

        <div
          ref={wrapperRef}
          className={`offers-card-wrapper ${isVisible ? 'is-visible' : ''}`}
        >
          <h3 className="offers-card-title">ROOM OFFERS AT FIVE</h3>

          <div className="offers-grid">
            {offers.map((o) => (
              <article key={o.title} className="offer-card">
                <figure className="offer-figure">
                  <img src={o.img} alt={o.alt} />
                </figure>
                <h4 className="offer-heading"><span>{o.title}</span></h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



