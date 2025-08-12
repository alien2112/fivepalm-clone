import { useEffect, useState } from 'react'

function MenuIcon({ isOpen }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block',
        width: 18,
        height: 12,
        position: 'relative',
      }}
    >
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 2,
          background: '#111',
          transform: isOpen ? 'translateY(5px) rotate(45deg)' : 'none',
          transformOrigin: 'center',
          transition: 'transform 200ms ease',
        }}
      />
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 5,
          height: 2,
          background: '#111',
          opacity: isOpen ? 0 : 1,
          transition: 'opacity 150ms ease',
        }}
      />
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          background: '#111',
          transform: isOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
          transformOrigin: 'center',
          transition: 'transform 200ms ease',
        }}
      />
    </span>
  )
}

function Icon({ type, label }) {
  const path = {
    search:
      'M11 11l6 6m-3-8a5 5 0 11-10 0 5 5 0 0110 0z',
    phone:
      'M3 5a2 2 0 012-2h2l2 5-2 2a11 11 0 006 6l2-2 5 2v2a2 2 0 01-2 2A16 16 0 013 5z',
    leaf:
      'M5 19c6 0 14-8 14-14-6 0-14 8-14 14z',
  }[type]

  return (
    <svg
      aria-label={label}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        setIsSearchOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
    <header className="navbar">
      <div className="navbar__left">
        <button
          className="icon-button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((v) => !v)}
        >
          <MenuIcon isOpen={isOpen} />
        </button>
        <a href="#top" className="brand">
          <span>FIVE</span>
          <span className="brand__chevron i-play" aria-hidden />
          <span className="brand__location">PALM JUMEIRAH</span>
        </a>
      </div>

      <nav className={`navbar__center ${isOpen ? 'is-open' : ''}`} aria-label="Primary">
        <a href="#rooms">Rooms</a>
        <a href="#dine">Dine</a>
        <a href="#events">Events</a>
        <a href="#relax">Relax</a>
        <a href="#music">Music</a>
        <a href="#shop">Shop</a>
      </nav>

      <div className="navbar__right">
        <ul className="navbar__actions" aria-label="Utility">
          <li>
            <button
              className="icon-button"
              aria-label="Search"
              aria-expanded={isSearchOpen}
              aria-controls="navbar-search-panel"
              onClick={() => setIsSearchOpen((v) => !v)}
            >
              <Icon type="search" label="Search" />
            </button>
          </li>
          <li>
            <a className="icon-button" href="https://palmjumeirah.fivehotelsandresorts.com/contact/" aria-label="Call us" target="_blank" rel="noreferrer noopener">
              <Icon type="phone" label="Phone" />
            </a>
          </li>
          <li>
            <a className="icon-button" href="https://palmjumeirah.fivehotelsandresorts.com/sustainability-at-five/" aria-label="Sustainability" target="_blank" rel="noreferrer noopener">
              <Icon type="leaf" label="Leaf" />
            </a>
          </li>
        </ul>
      </div>
    </header>

    <div id="navbar-search-panel" className={`navbar-search ${isSearchOpen ? 'is-open' : ''}`} role="dialog" aria-label="Search">
      <div className="navbar-search__inner">
        <input
          type="text"
          placeholder="Search for Rooms, events, venues..."
          aria-label="Search input"
          className="navbar-search__input"
        />
        <button className="navbar-search__submit">Search</button>
      </div>
    </div>

    <div className={`navbar-drawer ${isOpen ? 'is-open' : ''}`} role="dialog" aria-label="Menu">
      <div className="navbar-drawer__overlay" onClick={() => setIsOpen(false)} />
      <aside className="navbar-drawer__panel">
        <button className="navbar-drawer__close" aria-label="Close menu" onClick={() => setIsOpen(false)} />
        <nav className="navbar-drawer__nav">
          <a href="#rooms" onClick={() => setIsOpen(false)}>Rooms</a>
          <a href="#dine" onClick={() => setIsOpen(false)}>Dine</a>
          <a href="#events" onClick={() => setIsOpen(false)}>Events</a>
          <a href="#relax" onClick={() => setIsOpen(false)}>Relax</a>
          <a href="#music" onClick={() => setIsOpen(false)}>Music</a>
          <a href="#shop" onClick={() => setIsOpen(false)}>Shop</a>
        </nav>
      </aside>
    </div>
    </>
  )
}





