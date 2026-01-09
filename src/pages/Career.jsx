import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Career.css'
import TargetIcon from '../assets/Target.svg?url'
import HandshakeIcon from '../assets/Handshake.svg?url'
import PuzzlePieceIcon from '../assets/PuzzlePiece.svg?url'
import ChartLineUpIcon from '../assets/ChartLineUp.svg?url'
import ChatsCircleIcon from '../assets/ChatsCircle.svg?url'
import TimerIcon from '../assets/Timer.svg?url'
import SuitcaseSimpleIcon from '../assets/SuitcaseSimple.svg?url'
import ScalesIcon from '../assets/Scales.svg?url'
import UsersFourIcon from '../assets/UsersFour.svg?url'
import BookOpenIcon from '../assets/BookOpen.svg?url'
import BankIcon from '../assets/Bank.svg?url'
import Vector2Icon from '../assets/Vector (2).svg?url'
import HeroImage from '../assets/Frame 1014.png'
import WorkHereImage from '../assets/Frame 1097.png'

// Newsletter Section (from Home.jsx)
function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-section__container">
        <h2 className="newsletter-section__title h1-montserrat">Your Business Finance Fix</h2>
        <p className="newsletter-section__description body-opensans">
          Get weekly insights, checklists, and SME-friendly tips to manage cash flow, avoid fines, and keep more of your profits. Stay updated with guidance from certified tax consultants UAE and experienced Dubai corporate tax consultants.
        </p>
        <Link to="/contact" className="newsletter-section__cta">
          <span className="newsletter-section__cta-text">Sign up for free updates</span>
          <svg className="newsletter-section__cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
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

  const handleInputFocus = (e) => {
    // Clear any browser autocomplete/autofill values for all inputs
    const fieldName = e.target.name
    // Clear the field if it's empty or matches placeholder
    if (!e.target.value || e.target.value.trim() === '' || e.target.value === e.target.placeholder) {
      setFormData(prev => ({
        ...prev,
        [fieldName]: ''
      }))
    }
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
    { icon: TargetIcon, text: 'Care about accuracy and details' },
    { icon: HandshakeIcon, text: 'Take ownership of your responsibilities' },
    { icon: PuzzlePieceIcon, text: 'Prefer clear systems over chaos' },
    { icon: ChartLineUpIcon, text: 'Want to learn and improve continuously' },
    { icon: ChatsCircleIcon, text: 'Communicate clearly and honestly' },
    { icon: TimerIcon, text: 'Take deadlines seriously' },
  ]

  const careerBenefits = [
    { icon: SuitcaseSimpleIcon, text: 'Exposure to real UAE business cases' },
    { icon: ScalesIcon, text: 'Strong foundations in auditing, tax, & compliance' },
    { icon: Vector2Icon, text: 'Clear career progression based on performance' },
    { icon: UsersFourIcon, text: 'Support from experienced professionals' },
    { icon: BankIcon, text: 'A professional environment built on trust and accountability' },
    { icon: BookOpenIcon, text: 'Transparency on role expectations, responsibilities & performance standards' },
  ]

  return (
    <main className="career-page">
      {/* Hero Section */}
      <section className="career-hero" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="career-hero__overlay"></div>
          <div className="career-hero__content">
          <div className="career-hero__badge">
            <span className="career-hero__badge-text">We're hiring</span>
          </div>
          <h1 className="career-hero__title h1-montserrat">
            Be Part of Work That Actually Matters
          </h1>
          <div className="career-hero__description body-opensans">
            <p>For over two decades, we've built our reputation on careful work and clear accountability.</p>
            <p>We value ownership, consistency, and doing things right.</p>
            <p>Flat hierarchies. Clear communication. Real responsibility.</p>
            <p>You'll be trusted to own your work and deliver it with care.</p>
          </div>
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
                  <span className="career-work-here__point-number">{point.number}</span>
                  <span className="career-work-here__point-text">{point.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="career-work-here__right">
            <div className="career-work-here__image-wrapper">
              <img 
                src={WorkHereImage}
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
                  <img src={item.icon} alt="" />
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
                  <img src={benefit.icon} alt="" />
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
            <form className="career-application__form" onSubmit={handleSubmit} autoComplete="off">
              <div className="career-application__field">
                <label htmlFor="name" className="career-application__label body-opensans">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="career-application__input body-opensans"
                  placeholder="e.g., John Doe"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
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
                  onFocus={handleInputFocus}
                  className="career-application__input body-opensans"
                  placeholder="e.g., john.doe@example.com"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
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
                  onFocus={handleInputFocus}
                  className="career-application__input body-opensans"
                  placeholder="e.g., +971 50 123 4567"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
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
                  onFocus={handleInputFocus}
                  className="career-application__input body-opensans"
                  placeholder="e.g., Junior Auditor"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
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
                  onFocus={handleInputFocus}
                  className="career-application__textarea body-opensans"
                  rows="4"
                  placeholder="Tell us about yourself and why you're interested in this role..."
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
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

