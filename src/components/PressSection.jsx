const articles = [
  {
    badge: 'GQ',
    img: 'https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1600&auto=format&fit=crop',
    title: "FIVE Palm Jumeirah: an oasis of luxury in the heart of Dubai",
  },
  {
    badge: 'Esquire',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
    title: "Dubai's FIVE is defining high-energy luxury for the world",
  },
  {
    badge: 'VOGUE',
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
    title: 'Vogue Reviews: FIVE Palm Jumeirah, Dubai',
  },
  {
    badge: 'AGBI',
    img: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop',
    title: 'Dubai hotel developer pins success on green credentials',
  },
  {
    badge: 'Traveller',
    img: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1600&auto=format&fit=crop',
    title: 'The Best Hotels in Dubai',
  },
]

export default function PressSection() {
  return (
    <section id="press" className="press-section">
      <div className="press-container">
        <div className="press-header">
          <h2 className="press-title">HOT OFF THE PRESS</h2>
          <a className="press-viewall" href="#view-all">VIEW ALL <span className="i-play" aria-hidden /></a>
        </div>

        <div className="press-grid">
          {articles.map((a) => (
            <article key={a.title} className="press-card">
              <div className="press-media">
                <img src={a.img} alt="" />
                <span className="press-badge">{a.badge}</span>
              </div>
              <h3 className="press-card-title">{a.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}




