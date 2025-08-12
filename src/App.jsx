import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StickyCTA from './components/StickyCTA'
import IntroOverlay from './components/IntroOverlay'
import OffersSection from './components/OffersSection'
import PlaytimeSection from './components/PlaytimeSection'
import PressSection from './components/PressSection'
import SiteFooter from './components/SiteFooter'
import RoomsSection from './components/RoomsSection'
import EventsSection from './components/EventsSection'
import PachaSection from './components/PachaSection'
import DiscoverSection from './components/DiscoverSection'
import SustainabilitySection from './components/SustainabilitySection'
import AwardsStrip from './components/AwardsStrip'

export default function App() {
  return (
    <div className="page">
      <IntroOverlay />
      <Navbar />
      <div className="content-over-footer">
        <Hero />
        <AwardsStrip />
        <OffersSection />
        <PlaytimeSection />
        <RoomsSection />
        <EventsSection />
        <PachaSection />
        <DiscoverSection />
        <SustainabilitySection />
        <PressSection />
      </div>
      <SiteFooter />
      <StickyCTA />
    </div>
  )
}
