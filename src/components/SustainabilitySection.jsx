export default function SustainabilitySection() {
  return (
    <section className="sustain-section" id="sustainability">
      <div className="sustain-container">
        <h2 className="sustain-title">SUSTAINABLE INDULGENCE</h2>
        <div className="sustain-grid">
          <figure className="sustain-media">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1800&auto=format&fit=crop"
              alt="FIVE Palm Jumeirah pool with skyline view"
            />
          </figure>

        <div className="sustain-content">
          <p className="sustain-intro">
            At FIVE Palm Jumeirah, luxury blends with eco-responsibility creating a Sustainable Entertainment
            Ecosystem. LEED Platinum Certified, and with a “You-Can-Have-It-All” mindset, we harness technology and
            innovation for guilt-free indulgence.
          </p>

          <div className="sustain-stats">
            <div className="sustain-stat">
              <div className="sustain-stat-title">CARBON</div>
              <div className="sustain-stat-text">5x More Carbon Efficient vs the Average Luxury Resort in UAE (CHSB 2023)</div>
            </div>
            <div className="sustain-stat">
              <div className="sustain-stat-title">ELECTRICITY</div>
              <div className="sustain-stat-text">100% of Electricity sourced through Green Power</div>
            </div>
            <div className="sustain-stat">
              <div className="sustain-stat-title">WATER</div>
              <div className="sustain-stat-text">40.6% Reduction in Water Consumption per Capita (2023 vs 2020)</div>
            </div>
          </div>

          <a className="sustain-more" href="#know-more">KNOW MORE <span className="i-play" aria-hidden /></a>
        </div>
        </div>
      </div>
    </section>
  )
}


