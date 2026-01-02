import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const services = [
  {
    id: 'auditing',
    title: 'AUDITING',
    icon: 'document-magnifying-glass',
    description: 'Satisfy regulatory requirements and give stakeholders confidence in your financial reports with help from a trusted audit firm near me offering professional auditing services near me across Dubai and the UAE.',
    shortDescription: 'Professional auditing services that ensure compliance and build stakeholder confidence.',
  },
  {
    id: 'vat',
    title: 'VAT',
    icon: 'percentage',
    description: 'Submit accurate returns on time and reclaim every dirham you\'re entitled to with our specialized VAT return filing services UAE.',
    shortDescription: 'Accurate VAT return filing and compliance services to maximize your entitlements.',
  },
  {
    id: 'tax-advisory',
    title: 'TAX ADVISORY',
    icon: 'line-chart',
    description: 'Pay only what you legally owe—find deductions, optimize structure, and reduce liabilities with the guidance of experienced tax consultants in Dubai',
    shortDescription: 'Expert tax planning and advisory to minimize liabilities and optimize your tax structure.',
  },
  {
    id: 'company-formation',
    title: 'COMPANY FORMATION',
    icon: 'building',
    description: 'Choose the right jurisdiction, complete all paperwork, and launch operations faster—our tax consultancy services in Dubai ensure smooth registration and compliance.',
    shortDescription: 'Complete company formation services for smooth registration and compliance.',
  },
  {
    id: 'accounting-bookkeeping',
    title: 'ACCOUNTING & BOOKKEEPING',
    icon: 'calculator',
    description: 'Know exactly where your money goes with organized books and clear monthly reports handled by professional accounting services Dubai providers.',
    shortDescription: 'Organized bookkeeping and clear financial reporting for better business insights.',
  },
  {
    id: 'corporate-tax',
    title: 'CORPORATE TAX',
    icon: 'dollar',
    description: 'Navigate UAE\'s new tax laws with expert UAE corporate tax filing services. We help you maximize deductions and stay compliant with the latest corporate tax regulations.',
    shortDescription: 'Expert corporate tax filing and compliance with the latest UAE tax regulations.',
  },
]

function Services() {
  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero__container">
          <div className="services-hero__content">
            <span className="services-hero__badge small-body-opensans">Our Services</span>
            <h1 className="services-hero__title h1-montserrat">
              Comprehensive Financial Solutions<br />
              for Your Business Success
            </h1>
            <p className="services-hero__description body-opensans">
              At Standard Auditing, we provide end-to-end financial services designed to keep your business compliant, profitable, and focused on growth. From daily bookkeeping to strategic tax planning, our expert team handles every aspect of your financial operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-overview">
        <div className="services-overview__container">
          <div className="services-overview__header">
            <span className="services-overview__tag h3-opensans-semibold">What We Offer</span>
            <h2 className="services-overview__title h1-montserrat">
              Everything Your Business Needs to Stay Compliant and Profitable
            </h2>
          </div>
          <div className="services-overview__grid">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={`/services/${service.id}`}
                className="services-overview__card"
              >
                <div className="services-overview__icon-container">
                  {service.icon === 'document-magnifying-glass' && (
                    <svg className="services-overview__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H15C15.5304 22 16.0391 21.7893 16.4142 21.4142C16.7893 21.0391 17 20.5304 17 20V8L13 2H9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13 2V8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12H11M9 15H15M9 18H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
                      <path d="M20.5 20.5L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                  {service.icon === 'percentage' && (
                    <svg className="services-overview__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 7L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
                      <circle cx="16" cy="16" r="1.5" fill="currentColor"/>
                      <path d="M9 12H15M9 15H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                  {service.icon === 'line-chart' && (
                    <svg className="services-overview__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 16L10 12L13 15L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="7" cy="16" r="1.5" fill="currentColor"/>
                      <circle cx="10" cy="12" r="1.5" fill="currentColor"/>
                      <circle cx="13" cy="15" r="1.5" fill="currentColor"/>
                      <circle cx="17" cy="9" r="1.5" fill="currentColor"/>
                    </svg>
                  )}
                  {service.icon === 'building' && (
                    <svg className="services-overview__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 21V7L12 3L20 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 21H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 21V13H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="6" y="9" width="2" height="2" rx="0.5" fill="currentColor"/>
                      <rect x="16" y="9" width="2" height="2" rx="0.5" fill="currentColor"/>
                      <rect x="6" y="15" width="2" height="2" rx="0.5" fill="currentColor"/>
                      <rect x="16" y="15" width="2" height="2" rx="0.5" fill="currentColor"/>
                      <path d="M12 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                  {service.icon === 'calculator' && (
                    <svg className="services-overview__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <rect x="7" y="6" width="10" height="4" rx="1" fill="currentColor"/>
                      <rect x="7.5" y="12" width="3" height="2" rx="0.5" fill="currentColor"/>
                      <rect x="13.5" y="12" width="3" height="2" rx="0.5" fill="currentColor"/>
                      <rect x="7.5" y="15.5" width="3" height="2" rx="0.5" fill="currentColor"/>
                      <rect x="13.5" y="15.5" width="3" height="2" rx="0.5" fill="currentColor"/>
                      <path d="M10.5 12H13.5M10.5 15.5H13.5" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"/>
                    </svg>
                  )}
                  {service.icon === 'dollar' && (
                    <svg className="services-overview__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 2H15C16.1046 2 17 2.89543 17 4V20C17 21.1046 16.1046 22 15 22H9C7.89543 22 7 21.1046 7 20V4C7 2.89543 7.89543 2 9 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M9 10H12C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 14H12C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="4" r="1" fill="currentColor"/>
                      <circle cx="12" cy="20" r="1" fill="currentColor"/>
                    </svg>
                  )}
                </div>
                <h3 className="services-overview__card-title h5-montserrat">{service.title}</h3>
                <p className="services-overview__card-description body-opensans">{service.shortDescription}</p>
                <div className="services-overview__card-link">
                  <span className="services-overview__link-text small-body-opensans">Learn More</span>
                  <svg className="services-overview__link-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="services-cta__container">
          <h2 className="services-cta__title h2-montserrat">
            Ready to Get Started?
          </h2>
          <p className="services-cta__description body-opensans">
            Contact our team today to discuss how we can help your business achieve financial clarity and compliance.
          </p>
          <Link to="/contact" className="services-cta__button h3-opensans-semibold">
            <span className="services-cta__button-text">Get in Touch</span>
            <svg className="services-cta__button-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Services

