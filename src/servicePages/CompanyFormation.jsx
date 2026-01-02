import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function CompanyFormation() {
  return (
    <main className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero__container">
          <div className="service-hero__content">
            <h1 className="service-hero__title h1-montserrat">Company Formation</h1>
            <p className="service-hero__description body-opensans">
              Choose the right structure before it costs you later.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="service-overview">
        <div className="service-overview__container">
          <div className="service-overview__content">
            <p className="service-overview__text body-opensans">
              Company formation decisions affect tax, compliance, and operational flexibility.
            </p>
            <p className="service-overview__text body-opensans">
              Fixing a wrong structure later is costly.
            </p>
            <p className="service-overview__text body-opensans">
              We guide formation using experience across multiple industries.
            </p>
            <p className="service-overview__text body-opensans">
              Entity choices reflect current tax and compliance realities, not outdated assumptions.
            </p>
            <p className="service-overview__text body-opensans">
              Regulatory changes are considered before registration.
            </p>
            <p className="service-overview__text body-opensans">
              This prevents structural corrections later.
            </p>
          </div>
        </div>
      </section>

      {/* Business Owners Get Clarity Section */}
      <section className="service-examines">
        <div className="service-examines__container">
          <h2 className="service-examines__title h2-montserrat">Business owners get clarity on:</h2>
          <div className="service-examines__grid">
            <div className="service-examines__item">
              <div className="service-examines__checkmark">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M6 10 L9 13 L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <p className="service-examines__text body-opensans">Jurisdiction impact</p>
            </div>
            <div className="service-examines__item">
              <div className="service-examines__checkmark">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M6 10 L9 13 L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <p className="service-examines__text body-opensans">Tax implications</p>
            </div>
            <div className="service-examines__item">
              <div className="service-examines__checkmark">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M6 10 L9 13 L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <p className="service-examines__text body-opensans">Compliance obligations</p>
            </div>
            <div className="service-examines__item">
              <div className="service-examines__checkmark">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M6 10 L9 13 L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <p className="service-examines__text body-opensans">Long-term flexibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Result Section */}
      <section className="service-outcome">
        <div className="service-outcome__container">
          <p className="service-outcome__text body-opensans">
            The result is a structure that supports growth, remains compliant, and avoids unnecessary restructuring costs.
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="service-download">
        <div className="service-download__container">
          <p className="service-download__text body-opensans">
            Download our <strong>Free UAE Business Setup Decision Framework</strong>
          </p>
          <button className="service-download__button h3-opensans-semibold">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <span>Download Framework</span>
          </button>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="service-packages">
        <div className="service-packages__container">
          <h2 className="service-packages__title h2-montserrat">Company Formation Packages</h2>
          
          <div className="service-packages__grid">
            {/* Package 1 */}
            <div className="service-package">
              <div className="service-package__container">
                <h3 className="service-package__title h3-montserrat">Basic Formation</h3>
                <div className="service-package__price">
                  <span className="service-package__amount h1-montserrat">AED 4,000</span>
                  <span className="service-package__plus">+</span>
                  <span className="service-package__vat body-opensans">VAT</span>
                </div>
                <div className="service-package__features">
                  <div className="service-package__feature">
                    <svg className="service-package__checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M6 10 L9 13 L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <span className="body-opensans">License application and name reservation</span>
                  </div>
                  <div className="service-package__feature">
                    <svg className="service-package__checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M6 10 L9 13 L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <span className="body-opensans">Basic documentation and registration</span>
                  </div>
                  <div className="service-package__feature">
                    <svg className="service-package__checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M6 10 L9 13 L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <span className="body-opensans">Initial approvals</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 2 */}
            <div className="service-package">
              <div className="service-package__container">
                <h3 className="service-package__title h3-montserrat">Full Formation Package</h3>
                <div className="service-package__price">
                  <span className="service-package__amount h1-montserrat">AED 6,000</span>
                  <span className="service-package__plus">+</span>
                  <span className="service-package__vat body-opensans">VAT</span>
                </div>
                <div className="service-package__features">
                  <div className="service-package__feature">
                    <svg className="service-package__checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M6 10 L9 13 L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <span className="body-opensans">End-to-end setup with visas and bank account</span>
                  </div>
                  <div className="service-package__feature">
                    <svg className="service-package__checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M6 10 L9 13 L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <span className="body-opensans">Office/flexi-desk and compliance support</span>
                  </div>
                  <div className="service-package__feature">
                    <svg className="service-package__checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M6 10 L9 13 L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <span className="body-opensans">AML policies and tax registration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="service-packages__note body-opensans">
            Make the right decision with expert input. <strong>Book a Free 30-minute consultation now.</strong>
          </p>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="service-consultation">
        <div className="service-consultation__container">
          <div className="service-consultation__contact">
            <a href="tel:+971542119784" className="service-consultation__link body-opensans">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9841 21.5573 21.2126 21.3522 21.3992C21.1472 21.5858 20.9053 21.7261 20.6441 21.8102C20.3828 21.8944 20.1085 21.9206 19.8382 21.8872C16.7425 21.4986 13.787 20.4471 11.19 18.8102C8.77382 17.3054 6.72533 15.2569 5.2202 12.8402C3.58225 10.2412 2.53026 7.28399 2.1422 4.18622C2.10879 3.91589 2.13499 3.64159 2.2192 3.38032C2.30341 3.11905 2.44371 2.87716 2.6302 2.67222C2.8167 2.46728 3.04519 2.30372 3.3002 2.19222C3.55521 2.08072 3.83089 2.02374 4.1092 2.02422H7.1092C7.59585 2.02422 8.06808 2.21749 8.40993 2.55934C8.75178 2.90119 8.94505 3.37342 8.94505 3.86022C8.94505 4.81522 9.1602 5.75222 9.5702 6.60022C9.73706 6.97576 9.80742 7.38649 9.7752 7.79522C9.74298 8.20395 9.60919 8.59822 9.3852 8.94022L8.0952 10.2302C9.51473 12.7699 11.2301 15.0853 13.2002 17.1202L14.4902 15.8302C14.8322 15.6062 15.2265 15.4724 15.6352 15.4402C16.0439 15.408 16.4547 15.4783 16.8302 15.6452C17.6782 16.0552 18.6152 16.2702 19.5702 16.2702C20.057 16.2702 20.5292 16.4635 20.8711 16.8053C21.2129 17.1472 21.4062 17.6194 21.4062 18.1062L22 16.92Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              +971 54211 9784
            </a>
            <span className="service-consultation__separator">|</span>
            <a href="tel:+97143795200" className="service-consultation__link body-opensans">
              +971 4379 5200
            </a>
            <span className="service-consultation__separator">|</span>
            <a href="mailto:sales@standardauditors.com" className="service-consultation__link body-opensans">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              sales@standardauditors.com
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="service-cta__container">
          <h2 className="service-cta__title h2-montserrat">Ready to Get Started?</h2>
          <p className="service-cta__description body-opensans">
            Contact our team today to discuss how we can help with your company formation needs.
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

export default CompanyFormation

