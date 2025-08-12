export default function WrapOverFooter() {
  return (
    <section className="wrap-over-footer" aria-label="Come Play">
      <div className="wrap-container" style={{maxWidth: '1240px', margin: '0 auto', padding: '0 24px'}}>
        <h2 style={{textAlign: 'center', textTransform: 'uppercase', letterSpacing: '.08em'}}>COME PLAY <span className="i-play" aria-hidden /></h2>
      </div>
      <div className="wrap-body" style={{maxWidth: '1240px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: 24}}>
        <h1 className="big-mark">FIVE</h1>
        <div className="triangle-right" />
        
      </div>
    </section>
  )
}




