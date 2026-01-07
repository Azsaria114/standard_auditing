import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ServicePage.css'

function ServicePageTemplate({ 
  serviceId,
  title,
  icon,
  heroDescription,
  overview,
  whatWeOffer,
  whyChooseUs,
  process,
  faq
}) {
  const renderIcon = () => {
    if (icon === 'document-magnifying-glass') {
      return (
        <svg className="service-hero__icon" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H15C15.5304 22 16.0391 21.7893 16.4142 21.4142C16.7893 21.0391 17 20.5304 17 20V8L13 2H9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 2V8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12H11M9 15H15M9 18H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M20.5 20.5L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
    if (icon === 'percentage') {
      return (
        <svg className="service-hero__icon" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 7L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
          <circle cx="16" cy="16" r="1.5" fill="currentColor"/>
          <path d="M9 12H15M9 15H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    }
    if (icon === 'line-chart') {
      return (
        <svg className="service-hero__icon" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 16L10 12L13 15L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="7" cy="16" r="1.5" fill="currentColor"/>
          <circle cx="10" cy="12" r="1.5" fill="currentColor"/>
          <circle cx="13" cy="15" r="1.5" fill="currentColor"/>
          <circle cx="17" cy="9" r="1.5" fill="currentColor"/>
        </svg>
      )
    }
    if (icon === 'building') {
      return (
        <svg className="service-hero__icon" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 21V7L12 3L20 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 21H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 21V13H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="6" y="9" width="2" height="2" rx="0.5" fill="currentColor"/>
          <rect x="16" y="9" width="2" height="2" rx="0.5" fill="currentColor"/>
          <rect x="6" y="15" width="2" height="2" rx="0.5" fill="currentColor"/>
          <rect x="16" y="15" width="2" height="2" rx="0.5" fill="currentColor"/>
          <path d="M12 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
    if (icon === 'calculator') {
      return (
        <svg className="service-hero__icon" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <rect x="7" y="6" width="10" height="4" rx="1" fill="currentColor"/>
          <rect x="7.5" y="12" width="3" height="2" rx="0.5" fill="currentColor"/>
          <rect x="13.5" y="12" width="3" height="2" rx="0.5" fill="currentColor"/>
          <rect x="7.5" y="15.5" width="3" height="2" rx="0.5" fill="currentColor"/>
          <rect x="13.5" y="15.5" width="3" height="2" rx="0.5" fill="currentColor"/>
          <path d="M10.5 12H13.5M10.5 15.5H13.5" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"/>
        </svg>
      )
    }
    if (icon === 'dollar') {
      return (
        <svg className="service-hero__icon" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2H15C16.1046 2 17 2.89543 17 4V20C17 21.1046 16.1046 22 15 22H9C7.89543 22 7 21.1046 7 20V4C7 2.89543 7.89543 2 9 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 10H12C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 14H12C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="4" r="1" fill="currentColor"/>
          <circle cx="12" cy="20" r="1" fill="currentColor"/>
        </svg>
      )
    }
    return null
  }

  return (
    <main className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero__container">
          <div className="service-hero__content">
            <h1 className="service-hero__title h1-montserrat">{title}</h1>
            <p className="service-hero__description body-opensans">{heroDescription}</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {overview && (
        <section className="service-overview">
          <div className="service-overview__container">
            <h2 className="service-overview__title h2-montserrat">Overview</h2>
            <div className="service-overview__content">
              {overview.map((paragraph, index) => (
                <p key={index} className="service-overview__text body-opensans">{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What We Offer Section */}
      {whatWeOffer && whatWeOffer.length > 0 && (
        <section className="service-what-we-offer">
          <div className="service-what-we-offer__container">
            <h2 className="service-what-we-offer__title h2-montserrat">What We Offer</h2>
            <div className="service-what-we-offer__grid">
              {whatWeOffer.map((item, index) => (
                <div key={index} className="service-what-we-offer__item">
                  <div className="service-what-we-offer__icon">
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M6 10 L9 13 L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                  <h3 className="service-what-we-offer__item-title h4-montserrat">{item.title}</h3>
                  <p className="service-what-we-offer__item-description body-opensans">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      {whyChooseUs && whyChooseUs.length > 0 && (
        <section className="service-why-choose">
          <div className="service-why-choose__container">
            <h2 className="service-why-choose__title h2-montserrat">Why Choose Standard Auditing</h2>
            <div className="service-why-choose__list">
              {whyChooseUs.map((point, index) => (
                <div key={index} className="service-why-choose__item">
                  <div className="service-why-choose__number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="service-why-choose__content">
                    <h3 className="service-why-choose__item-title h4-montserrat">{point.title}</h3>
                    <p className="service-why-choose__item-text body-opensans">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {process && process.length > 0 && (
        <section className="service-process">
          <div className="service-process__container">
            <h2 className="service-process__title h2-montserrat">Our Process</h2>
            <div className="service-process__steps">
              {process.map((step, index) => (
                <div key={index} className="service-process__step">
                  <div className="service-process__step-number">{index + 1}</div>
                  <div className="service-process__step-content">
                    <h3 className="service-process__step-title h4-montserrat">{step.title}</h3>
                    <p className="service-process__step-description body-opensans">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faq && faq.length > 0 && (
        <section className="service-faq">
          <div className="service-faq__container">
            <h2 className="service-faq__title h2-montserrat">Frequently Asked Questions</h2>
            <div className="service-faq__list">
              {faq.map((item, index) => (
                <div key={index} className="service-faq__item">
                  <h3 className="service-faq__question h4-montserrat">{item.question}</h3>
                  <p className="service-faq__answer body-opensans">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="service-cta">
        <div className="service-cta__container">
          <h2 className="service-cta__title h2-montserrat">Ready to Get Started?</h2>
          <p className="service-cta__description body-opensans">
            Contact our team today to discuss how we can help with your {title.toLowerCase()} needs.
          </p>
          <Link to="/contact" className="service-cta__button h3-opensans-semibold">
            <span className="service-cta__button-text">Contact Us</span>
            <svg className="service-cta__button-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ServicePageTemplate

