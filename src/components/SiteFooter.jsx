import { useEffect, useState } from 'react'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaSpotify, FaTripadvisor } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

export default function SiteFooter() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const formattedTime = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  }).format(time)

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-top">
        <nav className="footer-nav">
          <ul>
            <li><a href="#">About FIVE</a></li>
            <li><a href="#">In the Press</a></li>
            <li><a href="#">Trade Partners</a></li>
            <li><a href="#">Awards</a></li>
          </ul>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Culture</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
          <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
          <div className="footer-rightcol">
            <div className="footer-rightnote">
              <div>Elevating Luxury</div>
              <div>Redefining Entertainment</div>
            </div>
            <div className="footer-righttime">{formattedTime}</div>
            <div className="footer-icons">
              <a aria-label="Instagram" href="#"><FaInstagram /></a>
              <a aria-label="Facebook" href="#"><FaFacebookF /></a>
              <a aria-label="LinkedIn" href="#"><FaLinkedinIn /></a>
              <a aria-label="YouTube" href="#"><FaYoutube /></a>
              <a aria-label="Spotify" href="#"><FaSpotify /></a>
              <a aria-label="Tripadvisor" href="#"><FaTripadvisor /></a>
              <a aria-label="TikTok" href="#"><SiTiktok /></a>
            </div>
          </div>
        </nav>
      </div>

      
    </footer>
  )
}


