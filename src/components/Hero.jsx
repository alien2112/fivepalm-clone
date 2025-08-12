export default function Hero() {
  return (
    <section className="hero hero--video" id="top" aria-label="Intro">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/michelin2025-1.png.webp"
      >
        <source src="/hero.mp4" type="video/mp4" />
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
      </video>

      <div className="hero__content">
        <a className="explore-second" href="#offers">
          <span>Explore</span>
          <span className="hero__chevron chevron" aria-hidden />
        </a>
      </div>
    </section>
  )
}


