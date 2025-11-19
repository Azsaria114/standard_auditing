import './App.css'
import section2Image from './assets/section2.jpg'

const services = [
  'Auditing',
  'Tax Advisory',
  'Company Formation',
  'Accounting & Bookkeeping',
  'VAT',
  'Corporate Tax',
]

const stats = [
  { value: '4000+', label: 'Projects Successfully Completed' },
  { value: '25+', label: 'Years Partnering with UAE Businesses' },
  { value: '98%', label: 'Clients Stay With Us' },
  { value: '500+', label: 'Reputed UAE Businesses Served' },
]

const serviceFeatures = [
  'Monthly bookkeeping and financial reporting with professional accounting services Dubai businesses rely on.',
  'Tax reduction strategy and planning with certified tax consultants UAE.',
  'VAT and corporate tax compliance managed by leading Dubai corporate tax consultants',
  'Year-end tax planning sessions aligned with the latest FTA regulations.',
]

const partners = [
  { name: 'RAK Free Trade Zone', logo: 'RAK' },
  { name: 'Ajman free zone', logo: 'AJ' },
  { name: 'Creative City', logo: 'CC' },
  { name: 'Jebel Ali Free Zone', logo: 'JAFZA' },
  { name: 'Dubai Multi commodities centre', logo: 'DMCC' },
  { name: 'Legrand', logo: 'L' },
  { name: 'Carl Stahl', logo: 'CS' },
]

const serviceCards = [
  {
    title: 'AUDITING',
    icon: '🔍',
    description: 'Satisfy regulatory requirements and give stakeholders confidence in your financial reports with help from a trusted audit firm near me offering professional auditing services near me across Dubai and the UAE.',
  },
  {
    title: 'VAT',
    icon: '%',
    description: 'Submit accurate returns on time and reclaim every dirham you\'re entitled to with our specialized VAT return filing services UAE.',
  },
  {
    title: 'TAX ADVISORY',
    icon: '📈',
    description: 'Pay only what you legally owe—find deductions, optimize structure, and reduce liabilities with the guidance of experienced tax consultants in Dubai',
  },
  {
    title: 'COMPANY FORMATION',
    icon: '🏛️',
    description: 'Choose the right jurisdiction, complete all paperwork, and launch operations faster—our tax consultancy services in Dubai ensure smooth registration and compliance.',
  },
  {
    title: 'ACCOUNTING & BOOKKEEPING',
    icon: '🧮',
    description: 'Know exactly where your money goes with organized books and clear monthly reports handled by professional accounting services Dubai providers.',
  },
  {
    title: 'CORPORATE TAX',
    icon: '$',
    description: 'Navigate UAE\'s new tax laws with expert UAE corporate tax filing services. We help you maximize deductions and stay compliant with the latest corporate tax regulations.',
  },
]

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-section__container">
        <div className="services-section__left">
          <button type="button" className="services-section__tag small-body-opensans">
            About Standard Auditing
          </button>
          <h2 className="services-section__left-title h2-montserrat">
            <span className="services-section__title-line-1">Service That's As Personal As</span>
            <span className="services-section__title-line-2">It Is Professional</span>
          </h2>
          <div className="services-section__image-wrapper">
            <img
              src={section2Image}
              alt="Professional team meeting"
              loading="lazy"
            />
          </div>
        </div>
        <div className="services-section__right">
          <h3 className="services-section__right-title h4-montserrat">
            <span className="services-section__right-line-1">Full-Service Accounting & Tax Advisory</span>
            <span className="services-section__right-line-2">For Your Business</span>
          </h3>
          <p className="services-section__description body-opensans">
            At Standard Auditing, we handle everything from daily bookkeeping to year-end tax planning—so you can focus on running your business. Our expert tax consultants in Dubai and UAE corporate tax filing services team ensure your books are accurate, your tax burden is minimized, and your compliance is bulletproof. We specialize in:
          </p>
          <ul className="services-section__features">
            {serviceFeatures.map((feature, index) => {
              // Handle Dubai corporate break first
              let parts = feature.split('Dubai corporate');
              let beforeDubai = parts[0];
              let afterDubai = parts.length > 1 ? parts[1] : '';
              
              // If no Dubai corporate, check for UAE break
              if (parts.length === 1) {
                const uaeParts = feature.split('UAE');
                beforeDubai = uaeParts[0];
                afterDubai = uaeParts.length > 1 ? uaeParts[1] : '';
                
                return (
                  <li key={index} className="services-section__feature">
                    <svg className="services-section__checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1.5" fill="none"/>
                      <path d="M6 10 L9 13 L14 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <span className="body-opensans">
                      {beforeDubai}
                      {afterDubai && (
                        <>
                          <br />
                          UAE{afterDubai}
                        </>
                      )}
                    </span>
                  </li>
                );
              }
              
              return (
                <li key={index} className="services-section__feature">
                  <svg className="services-section__checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1.5" fill="none"/>
                    <path d="M6 10 L9 13 L14 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                  <span className="body-opensans">
                    {beforeDubai}Dubai
                    {afterDubai && (
                      <>
                        <br />
                        corporate{afterDubai}
                      </>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="services-section__additional body-opensans">
            One point of contact, We handle everything, Upload docs once, we do the rest.
          </p>
          <button type="button" className="services-section__cta h3-opensans-semibold">
            <span className="services-section__cta-text">Learn More</span>
            <span className="services-section__arrow">→</span>
          </button>
          <div className="services-section__badge">
            <svg className="services-section__badge-svg" viewBox="0 0 90 90">
              <defs>
                <path id="circle-path" d="M 75,45 A 30,30 0 1,1 15,45 A 30,30 0 1,1 75,45" />
              </defs>
              <text className="services-section__badge-text">
                <textPath href="#circle-path" startOffset="0%">
                  GUARANTEED TRANSPARENCY • 
                </textPath>
              </text>
            </svg>
            <div className="services-section__badge-arrow">↓</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <main className="hero">
        <section className="hero__title-section">
          <div className="hero__eyebrow-wrapper">
            <span className="hero__eyebrow-line" aria-hidden="true" />
            <p className="hero__eyebrow-text h6-montserrat">Keep more of your profits</p>
          </div>
          <h1 className="hero__main-title h1-montserrat">
            <span className="hero__title-line-1">Trusted Financial Partner</span>
            <span className="hero__title-line-2">for Dubai Businesses</span>
          </h1>
        </section>
        <header className="hero__header">
          <div className="hero__services">
            {services.map((service) => (
              <button key={service} type="button" className="hero__service-pill body-opensans">
                {service}
              </button>
            ))}
          </div>
          <span className="hero__header-divider" aria-hidden="true" />
          <div className="hero__copy">
            <p className="hero__copy-text h2-opensans-regular">
              <strong>Protect your profits with proactive financial partnership.</strong>{' '}
              As one of the most trusted tax consultancy services in Dubai, we find
              tax efficiencies others miss, handle every compliance deadline, and
              deliver clear monthly reports—so you can make confident financial
              decisions without second-guessing your numbers.
            </p>
          </div>
        </header>

        <section className="hero__media" aria-label="Client collaboration">
          <div className="hero__image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Consultant presenting a financial plan to a team"
              loading="lazy"
            />
            <div className="hero__cta-card">
              <button type="button" className="hero__cta-banner">
                <strong>Schedule Your Complimentary Consultation</strong>
                <span>"Start Building a Stronger Financial Future"</span>
              </button>
            </div>
          </div>
          <div className="hero__stats-card">
            {stats.map((stat) => (
              <div className="hero__stat" key={stat.label}>
                <p className="hero__stat-value h6-montserrat">{stat.value}</p>
                <p className="hero__stat-label h2-opensans-regular">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <ServicesSection />
      <PartnersSection />
      <ServicesGridSection />
    </>
  )
}

function ServicesGridSection() {
  return (
    <section className="services-grid-section">
      <div className="services-grid-section__container">
        <div className="services-grid-section__header">
          <span className="services-grid-section__tag h3-opensans-semibold">Services We Offer</span>
          <h2 className="services-grid-section__title h1-montserrat">
            Everything Your Business Needs to Stay Compliant and Profitable
          </h2>
        </div>
        <div className="services-grid-section__grid">
          {serviceCards.map((service, index) => (
            <div key={index} className="services-grid-section__card">
              <div className="services-grid-section__card-header">
                <h3 className="services-grid-section__card-title h5-montserrat">{service.title}</h3>
                <div className="services-grid-section__icon-container">
                  <span className="services-grid-section__icon">{service.icon}</span>
                </div>
              </div>
              <p className="services-grid-section__card-description body-opensans">{service.description}</p>
              <a href="#" className="services-grid-section__expand-link small-body-opensans">
                Expand ≫
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PartnersSection() {
  return (
    <section className="partners-section">
      <h2 className="partners-section__title h2-montserrat">
        Trusted by Businesses Across UAE's Leading Free Zones
      </h2>
      <div className="partners-section__container">
        <div className="partners-section__grid">
          {partners.map((partner, index) => (
            <div key={index} className="partners-section__card">
              <div className="partners-section__logo">{partner.logo}</div>
              <p className="partners-section__name body-opensans">{partner.name}</p>
            </div>
          ))}
        </div>
        <div className="partners-section__middle">
          <div className="partners-section__center-card">
            <div className="partners-section__center-logo">S</div>
          </div>
          <div className="partners-section__connector"></div>
        </div>
        <div className="partners-section__right">
          <div className="partners-section__result-card">
            <p className="partners-section__result-text h3-montserrat">
              Real Businesses,<br />
              Real Results
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
