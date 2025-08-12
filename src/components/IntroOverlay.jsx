import { useEffect, useState } from 'react'

export default function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const hideTimer = setTimeout(() => setIsVisible(false), 2200)
    return () => clearTimeout(hideTimer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="intro-overlay" role="dialog" aria-live="polite">
      <div className="container">
        <div className="row">
          <div className="col col--left">
            <h1 className="intro-word">STAY</h1>
          </div>
          <div className="col col--right">
            <h1 className="intro-word">PLAY</h1>
            <p className="sub-heading">
              COME PLAY AT DUBAI’S <br /> HOTTEST BEACH HOTEL
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


