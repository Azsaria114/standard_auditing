import React, { useState } from 'react'
import './App.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  })
  const [consent, setConsent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="contact-page">
      {/* Hero Header Section */}
      <section className="contact-hero">
        <div className="contact-hero__overlay"></div>
        <div className="contact-hero__content">
          <h1 className="contact-hero__title h1-montserrat">CONTACT US</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="contact-main">
        <div className="contact-main__container">
          {/* Left Side - Contact Information */}
          <div className="contact-main__left">
            <h2 className="contact-main__heading h2-montserrat">
              Get in —<br />touch with us
            </h2>
            <p className="contact-main__description body-opensans">
              We'll help you find the right solutions and pricing for your business. Fill out the form & our team will get in touch with you shortly.
            </p>
            
            <div className="contact-main__info">
              <div className="contact-main__info-item">
                <span className="contact-main__info-label body-opensans">Email:</span>
                <a href="mailto:info@standardauditors.com" className="contact-main__info-link body-opensans">
                  info@standardauditors.com
                </a>
              </div>
              
              <div className="contact-main__info-item">
                <span className="contact-main__info-label body-opensans">Address:</span>
                <p className="contact-main__info-text body-opensans">
                  Office No 112, NBQ Building, Bank Street Dubai, United Arab Emirates
                </p>
              </div>
              
              <div className="contact-main__info-item">
                <span className="contact-main__info-label body-opensans">Call Us:</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <a href="tel:+971542119784" className="contact-main__info-link body-opensans">
                    +971 54 211 9784
                  </a>
                  <a href="tel:+97143795200" className="contact-main__info-link body-opensans">
                    +971 4 379 5200
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-main__divider"></div>
            
            <div className="contact-main__social">
              <p className="contact-main__social-label body-opensans">Social media</p>
              <div className="contact-main__social-icons">
                  <a href="#" className="contact-main__social-icon" aria-label="Facebook">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </a>
                  <a href="#" className="contact-main__social-icon" aria-label="Twitter">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28446C14.0247 3.61173 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61232 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </a>
                  <a href="#" className="contact-main__social-icon" aria-label="Instagram">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5922C7.96035 11.7616 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79374 10.2009 8.40624C10.9477 8.01874 11.7977 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8716 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </a>
                  <a href="#" className="contact-main__social-icon" aria-label="YouTube">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.4981 4.80824 21.0707 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.42C2.92931 4.55318 2.50188 4.80824 2.16129 5.15941C1.8207 5.51057 1.57879 5.94541 1.46 6.42C1.14521 8.16156 0.991236 9.93062 1 11.7C0.991236 13.4694 1.14521 15.2384 1.46 16.98C1.57879 17.4546 1.8207 17.8894 2.16129 18.2406C2.50188 18.5918 2.92931 18.8468 3.4 18.98C5.12 19.4 12 19.4 12 19.4C12 19.4 18.88 19.4 20.6 18.98C21.0707 18.8468 21.4981 18.5918 21.8387 18.2406C22.1793 17.8894 22.4212 17.4546 22.54 16.98C22.8548 15.2384 23.0088 13.4694 23 11.7C23.0088 9.93062 22.8548 8.16156 22.54 6.42Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M9.75 15.02L15.5 11.7L9.75 8.38V15.02Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-main__right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__field">
                <label htmlFor="name" className="contact-form__label body-opensans">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-form__input body-opensans"
                  placeholder="Alexander Kimi"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="email" className="contact-form__label body-opensans">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-form__input body-opensans"
                  placeholder="AlexanderKimi07@gmail.com"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="phone" className="contact-form__label body-opensans">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="contact-form__input body-opensans"
                  placeholder="+91 9839482098"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="country" className="contact-form__label body-opensans">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="contact-form__input body-opensans"
                  placeholder="India"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="message" className="contact-form__label body-opensans">How we can help you?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-form__textarea body-opensans"
                  placeholder="Example: I need help with financial auditing for my company..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <div className="contact-form__checkbox">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                />
                <label htmlFor="consent" className="contact-form__checkbox-label small-body-opensans">
                  By submitting my personal data, I consent to Standard Auditing L.L.C collecting, processing & storing my information in accordance with the <a href="#" className="contact-form__link">Standard Auditing L.L.C Notice</a>.
                </label>
              </div>

              <button type="submit" className="contact-form__submit">
                <span className="contact-form__submit-text">Get FREE 30 min Consultation</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <div className="contact-map__container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785095734!2d55.2703!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTMuMSJF!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae&maptype=roadmap"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Standard Auditing Location"
            className="contact-map__iframe"
          ></iframe>
          
          {/* Review Popup */}
          <div className="contact-map__review">
            <div className="contact-map__review-header">
              <h3 className="contact-map__review-title">Standard Auditing</h3>
            </div>
            <div className="contact-map__review-rating">
              <div className="contact-map__review-stars">
                <span className="contact-map__review-star">★</span>
                <span className="contact-map__review-star">★</span>
                <span className="contact-map__review-star">★</span>
                <span className="contact-map__review-star">★</span>
                <span className="contact-map__review-star contact-map__review-star--half">★</span>
              </div>
              <span className="contact-map__review-rating-text">4.5</span>
              <span className="contact-map__review-count">(8)</span>
              <span className="contact-map__review-separator">·</span>
              <span className="contact-map__review-type">Auditor</span>
            </div>
            <div className="contact-map__review-info">
              <p className="contact-map__review-location">Dubai - United Arab Emirates</p>
              <p className="contact-map__review-phone">+971 54 211 9784, +971 4 379 5200</p>
              <p className="contact-map__review-hours">
                <span className="contact-map__hours-status">Open</span>
                <span className="contact-map__review-separator"> · </span>
                <span className="contact-map__hours-text">Closes 6:30 pm</span>
              </p>
            </div>
            <div className="contact-map__review-snippet">
              <svg className="contact-map__review-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <span className="contact-map__review-quote">"Very knowledgeable and experienced group"</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

