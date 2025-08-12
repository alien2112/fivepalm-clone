export default function DiscoverSection() {
  const cards = [
    {
      label: 'ROOMS',
      href: '#rooms-sec',
      img: 'https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1600&auto=format&fit=crop',
      alt: 'Resort pool and private cabanas',
    },
    {
      label: 'EAT & DRINK',
      href: '#dine',
      img: 'https://images.unsplash.com/photo-1532634896-26909d0d4b6a?q=80&w=1600&auto=format&fit=crop',
      alt: 'Fine dining and cocktails with skyline view',
    },
    {
      label: 'PLAY',
      href: '#events',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop',
      alt: 'DJ performing to a vibrant crowd',
    },
    {
      label: 'RELAX',
      href: '#relax',
      img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
      alt: 'Spa relaxation area with marble and warm lighting',
    },
  ]

  return (
    <section className="discover-section" id="discover">
      <div className="discover-container">
        <h2 className="discover-title">
          <span>REDISCOVER</span>
          <br />
          <span>YOUR SENSES</span>
        </h2>

        <div className="discover-grid">
          {cards.map((c) => (
            <article key={c.label} className="discover-card">
              <figure className="discover-media">
                <img src={c.img} alt={c.alt} />
              </figure>
              <a className="discover-link" href={c.href}>
                {c.label} <span className="i-play" aria-hidden />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


