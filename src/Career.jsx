import React, { useState } from 'react'
import './App.css'

// Newsletter Section (from Home.jsx)
function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-section__container">
        <h2 className="newsletter-section__title h1-montserrat">Your Business Finance Fix</h2>
        <p className="newsletter-section__description body-opensans">
          Get weekly insights, checklists, and SME-friendly tips to manage cash flow, avoid fines, and keep more of your profits. Stay updated with guidance from certified tax consultants UAE and experienced Dubai corporate tax consultants.
        </p>
        <button type="button" className="newsletter-section__cta">
          <span className="newsletter-section__cta-text">Sign up for free updates</span>
          <svg className="newsletter-section__cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  )
}

function Career() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    introduction: '',
    resume: null
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }
  const workHerePoints = [
    { number: '01', text: 'You work on real client problems, not simulated tasks' },
    { number: '02', text: "You're trusted to take responsibility from day one" },
    { number: '03', text: "You're encouraged to ask questions and improve how things are done" },
    { number: '04', text: 'You get clear processes and systems that support quality work' },
  ]

  const roleForYou = [
    { icon: 'target', text: 'Care about accuracy and details' },
    { icon: 'handshake', text: 'Take ownership of your responsibilities' },
    { icon: 'puzzle', text: 'Prefer clear systems over chaos' },
    { icon: 'trending-up', text: 'Want to learn and improve continuously' },
    { icon: 'message', text: 'Communicate clearly and honestly' },
    { icon: 'clock', text: 'Take deadlines seriously' },
  ]

  const careerBenefits = [
    { icon: 'building', text: 'Exposure to real UAE business cases' },
    { icon: 'scale', text: 'Strong foundations in auditing, tax, & compliance' },
    { icon: 'trending-up', text: 'Clear career progression based on performance' },
    { icon: 'users', text: 'Support from experienced professionals' },
    { icon: 'handshake', text: 'A professional environment built on trust and accountability' },
    { icon: 'document', text: 'Transparency on role expectations, responsibilities & performance standards' },
  ]

  return (
    <main className="career-page">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="career-hero__overlay"></div>
        <div className="career-hero__content">
          <div className="career-hero__badge">
            <span className="career-hero__badge-text">We're hiring</span>
          </div>
          <h1 className="career-hero__title h1-montserrat">
            Be Part of Work That Actually Matters
          </h1>
          <p className="career-hero__description body-opensans">
            For over two decades, we've built our reputation on careful work and clear accountability. We value ownership, consistency, and doing things right. Flat hierarchies. Clear communication. Real responsibility. You'll be trusted to own your work and deliver it with care.
          </p>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="career-openings">
        <div className="career-openings__container">
          <h2 className="career-openings__title h2-montserrat">Current openings</h2>
          <p className="career-openings__text body-opensans">
            If you believe you bring the qualities outlined above and a strong record of achievement, feel free to share your résumé at{' '}
            <a href="mailto:info@standardauditors.com" className="career-openings__email">
              info@standardauditors.com
            </a>
          </p>
        </div>
      </section>

      {/* What It's Like to Work Here Section */}
      <section className="career-work-here">
        <div className="career-work-here__grid">
          <div className="career-work-here__left">
            <h2 className="career-work-here__title h2-montserrat">What It's Like to Work Here</h2>
            <div className="career-work-here__points">
              {workHerePoints.map((point, index) => (
                <div key={index} className="career-work-here__point">
                  <div className="career-work-here__point-number">{point.number}</div>
                  <div className="career-work-here__point-text">{point.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="career-work-here__right">
            <div className="career-work-here__image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Modern office workspace"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* This Role Is for You If You Section */}
      <section className="career-role-for-you">
        <div className="career-role-for-you__container">
          <h2 className="career-role-for-you__title h2-montserrat">This Role Is for You If You</h2>
          <div className="career-role-for-you__grid">
            {roleForYou.map((item, index) => (
              <div key={index} className="career-role-for-you__item">
                <div className="career-role-for-you__icon">
                  {item.icon === 'target' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    </svg>
                  )}
                  {item.icon === 'handshake' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 12H4C3.46957 12 2.96086 12.2107 2.58579 12.5858C2.21071 12.9609 2 13.4696 2 14V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 6H13C12.4696 6 11.9609 6.21071 11.5858 6.58579C11.2107 6.96086 11 7.46957 11 8V12H16C16.5304 12 17.0391 12.2107 17.4142 12.5858C17.7893 12.9609 18 13.4696 18 14V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 7V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {item.icon === 'puzzle' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C10.8954 2 10 2.89543 10 4V6H8C6.89543 6 6 6.89543 6 8V10H4C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14H6V16C6 17.1046 6.89543 18 8 18H10V20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20V18H16C17.1046 18 18 17.1046 18 16V14H20C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10H18V8C18 6.89543 17.1046 6 16 6H14V4C14 2.89543 13.1046 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {item.icon === 'trending-up' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 15L12 9L8 13L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 7H22V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {item.icon === 'message' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {item.icon === 'clock' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <p className="career-role-for-you__text body-opensans">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Build Your Career With Us Section */}
      <section className="career-benefits">
        <div className="career-benefits__container">
          <h2 className="career-benefits__title h2-montserrat">Why Build Your Career With Us</h2>
          <div className="career-benefits__grid">
            {careerBenefits.map((benefit, index) => (
              <div key={index} className="career-benefits__card">
                <div className="career-benefits__icon">
                  {benefit.icon === 'building' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 21V7L13 2V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 21V11L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 9V9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 15V15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {benefit.icon === 'scale' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 7H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 7L12 3L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 17L12 21L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {benefit.icon === 'trending-up' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 15L12 9L8 13L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 7H22V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {benefit.icon === 'users' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {benefit.icon === 'handshake' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 12H4C3.46957 12 2.96086 12.2107 2.58579 12.5858C2.21071 12.9609 2 13.4696 2 14V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 6H13C12.4696 6 11.9609 6.21071 11.5858 6.58579C11.2107 6.96086 11 7.46957 11 8V12H16C16.5304 12 17.0391 12.2107 17.4142 12.5858C17.7893 12.9609 18 13.4696 18 14V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 7V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {benefit.icon === 'document' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <p className="career-benefits__text body-opensans">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Didn't Find the Right Role Section */}
      <section className="career-application">
        <div className="career-application__container">
          <div className="career-application__left">
            <h2 className="career-application__title h2-montserrat">Didn't Find the Right Role?</h2>
            <p className="career-application__text body-opensans">
              Not all opportunities are listed. If you believe you can contribute to our team, share your profile with us.
            </p>
            <p className="career-application__text body-opensans">
              We regularly review applications and reach out to potential candidates whose skills match our upcoming openings.
            </p>
          </div>
          <div className="career-application__right">
            <form className="career-application__form" onSubmit={handleSubmit}>
              <div className="career-application__field">
                <label htmlFor="name" className="career-application__label body-opensans">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="career-application__input body-opensans"
                  required
                />
              </div>
              <div className="career-application__field">
                <label htmlFor="email" className="career-application__label body-opensans">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="career-application__input body-opensans"
                  required
                />
              </div>
              <div className="career-application__field">
                <label htmlFor="phone" className="career-application__label body-opensans">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="career-application__input body-opensans"
                  required
                />
              </div>
              <div className="career-application__field">
                <label htmlFor="role" className="career-application__label body-opensans">Role</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="career-application__input body-opensans"
                  required
                />
              </div>
              <div className="career-application__field">
                <label htmlFor="introduction" className="career-application__label body-opensans">Short Introduction</label>
                <textarea
                  id="introduction"
                  name="introduction"
                  value={formData.introduction}
                  onChange={handleInputChange}
                  className="career-application__textarea body-opensans"
                  rows="4"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="career-application__field">
                <label htmlFor="resume" className="career-application__label body-opensans">Upload Resume</label>
                <div className="career-application__file-wrapper">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    className="career-application__file-input"
                    accept=".doc,.docx,.pdf"
                    required
                  />
                  <label htmlFor="resume" className="career-application__file-label">
                    <div className="career-application__file-content">
                      <p className="career-application__file-text body-opensans">Drop your resume here or browse</p>
                      <p className="career-application__file-note small-body-opensans">Max.file size: 4MB(doc,pdf)</p>
                    </div>
                  </label>
                </div>
              </div>
              <button type="submit" className="career-application__submit h3-opensans-semibold">
                <span className="career-application__submit-text">Submit Application</span>
                <svg className="career-application__submit-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </main>
  )
}

export default Career



