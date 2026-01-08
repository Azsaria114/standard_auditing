import { useState, useEffect, useRef } from 'react'
import jafzaLogo from './assets/Jebel Ali Free Zone.jpg'
import dafzaLogo from './assets/dubai_airport.jpg'
import dmccLogo from './assets/dmcc.jpg'
import meydanLogo from './assets/meydan.jpeg'
import shamsLogo from './assets/sharjah.png'
import dsoLogo from './assets/dso.jpg'
import ifzaLogo from './assets/ifza.png'
import saLogo from './assets/sa_logo.jpg'

// Free zones where we are registered auditors
const freeZones = [
  { name: 'DMCC', logo: dmccLogo },
  { name: 'DAFZA', logo: dafzaLogo },
  { name: 'JAFZA', logo: jafzaLogo },
  { name: 'DSO', logo: dsoLogo },
  { name: 'IFZA', logo: ifzaLogo },
  { name: 'MEYDAN', logo: meydanLogo },
  { name: 'SHMAS', logo: shamsLogo },
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
  const [isCardVisible, setIsCardVisible] = useState(true)
  const cardRef = useRef(null)

  // Viewport animation - triggers once when card enters viewport
  useEffect(() => {
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
          {freeZones.map((zone, index) => (
            <div key={index} className={`partners-section__card ${zone.name === 'MEYDAN' ? 'partners-section__card--meydan' : ''}`}>
              <div className="partners-section__logo">
                <img 
                  src={zone.logo} 
                  alt={zone.name} 
                  className={`partners-section__logo-img ${
                    zone.name === 'MEYDAN' ? 'partners-section__logo-img--meydan' : 
                    zone.name === 'IFZA' ? 'partners-section__logo-img--ifza' :
                    zone.name === 'DSO' ? 'partners-section__logo-img--dso' :
                    zone.name === 'SHMAS' ? 'partners-section__logo-img--shmas' : ''
                  }`} 
                />
              </div>
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
