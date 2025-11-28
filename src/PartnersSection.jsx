import { useState, useEffect, useRef } from 'react'
import section2Image from './assets/section2.jpg'
import rakLogo from './assets/rak.jpg'
import jafzaLogo from './assets/Jebel Ali Free Zone.jpg'
import legrandLogo from './assets/legrand.jpg'
import ajmanLogo from './assets/ajman.jpg'
import dmccLogo from './assets/dmcc.jpg'
import carlStahlLogo from './assets/carlstahl.jpg'
import creativeCityLogo from './assets/creativecity.jpg'
import saLogo from './assets/sa_logo.jpg'
import standardAuditingLogo from './assets/standard_auditing_logo.png'

const partners = [
  { name: 'RAK Free Trade Zone', logo: rakLogo },
  { name: 'Jebel Ali Free Zone', logo: jafzaLogo },
  { name: 'Legrand', logo: legrandLogo },
  { name: 'Ajman free zone', logo: ajmanLogo },
  { name: 'Dubai Multi commodities centre', logo: dmccLogo },
  { name: 'Carl Stahl', logo: carlStahlLogo },
  { name: 'Creative City', logo: creativeCityLogo },
]

const valuesSliderContent = [
  { text: 'Real Businesses,\nReal Results' },
  { text: '25+ years = We have\nseen (almost) every\nscenario' },
  { text: '4,000+ projects =\nPattern recognition\nat scale' },
  { text: '98% retention =\nClients stay with us' },
  { text: 'Government\nregistered =\nCredible & can\nhandle complex\ncases' },
  { text: 'Full service suite =\nNo need to hire\nmultiple vendors' },
]

function PartnersSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isCardVisible, setIsCardVisible] = useState(false)
  const cardRef = useRef(null)

  // Viewport animation - triggers once when card enters viewport
  useEffect(() => {
    // Set card as visible immediately, then animate if needed
    setIsCardVisible(true)
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCardVisible(true)
            observer.disconnect()
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    )

    const currentRef = cardRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.disconnect()
      }
    }
  }, [])

  // Slideshow animation - cycles through content continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % valuesSliderContent.length)
    }, 2500) // Auto-advance every 2.5 seconds - continuous looping

    return () => clearInterval(interval)
  }, [])
  return (
    <section className="partners-section">
      <h2 className="partners-section__title h2-montserrat">
        <span className="partners-section__title-line-1">Trusted by Businesses Across UAE</span>
        <span className="partners-section__title-line-2">Leading Free Zones</span>
      </h2>
      <div className="partners-section__container">
        <div className="partners-section__grid">
          {partners.map((partner, index) => (
            <div key={index} className={`partners-section__card ${index === 2 ? 'partners-section__card--legrand' : ''} ${index === 5 ? 'partners-section__card--carlstahl' : ''}`}>
              <div className="partners-section__logo">
                <img src={partner.logo} alt={partner.name} className="partners-section__logo-img" />
              </div>
              <p className="partners-section__name body-opensans">{partner.name}</p>
            </div>
          ))}
        </div>
        
        {/* Responsive Connector Line 1 */}
        <div className="partners-section__line-spacer partners-section__line-spacer--left"></div>

        <div className="partners-section__middle">
          <div className="partners-section__center-card">
            <img src={saLogo} alt="Standard Auditors" className="partners-section__center-logo-img" />
          </div>
        </div>

        {/* Responsive Connector Line 2 */}
        <div className="partners-section__line-spacer partners-section__line-spacer--right"></div>

        <div className="partners-section__right">
          <div 
            ref={cardRef}
            className={`partners-section__result-card ${isCardVisible ? 'partners-section__result-card--visible' : ''}`}
          >
            <div className="partners-section__result-slider">
              <div className="partners-section__result-track">
                {valuesSliderContent.map((item, index) => (
                  <div 
                    key={index} 
                    className={`partners-section__result-slide ${index === currentSlide ? 'active' : ''}`}
                  >
                    <p className="partners-section__result-text h3-montserrat">
                      {item.text.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < item.text.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
