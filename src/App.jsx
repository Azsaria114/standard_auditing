import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import standardAuditingLogo from './assets/standard_auditing_logo.png'
import Home from './Home'
import About from './About'

// Data constants
const services = [
  'Auditing',
  'Tax Advisory',
  'Company Formation',
  'Accounting & Bookkeeping',
  'VAT',
  'Corporate Tax',
]

const stats = [
  { value: '4000 +', label: 'Projects Successfully Completed' },
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

// Data constants removed (partners and valuesSliderContent moved to PartnersSection.jsx)

const serviceCards = [
  {
    title: 'AUDITING',
    icon: 'document-magnifying-glass',
    description: 'Satisfy regulatory requirements and give stakeholders confidence in your financial reports with help from a trusted audit firm near me offering professional auditing services near me across Dubai and the UAE.',
  },
  {
    title: 'VAT',
    icon: 'percentage',
    description: 'Submit accurate returns on time and reclaim every dirham you\'re entitled to with our specialized VAT return filing services UAE.',
  },
  {
    title: 'TAX ADVISORY',
    icon: 'line-chart',
    description: 'Pay only what you legally owe—find deductions, optimize structure, and reduce liabilities with the guidance of experienced tax consultants in Dubai',
  },
  {
    title: 'COMPANY FORMATION',
    icon: 'building',
    description: 'Choose the right jurisdiction, complete all paperwork, and launch operations faster—our tax consultancy services in Dubai ensure smooth registration and compliance.',
  },
  {
    title: 'ACCOUNTING & BOOKKEEPING',
    icon: 'calculator',
    description: 'Know exactly where your money goes with organized books and clear monthly reports handled by professional accounting services Dubai providers.',
  },
  {
    title: 'CORPORATE TAX',
    icon: 'dollar',
    description: 'Navigate UAE\'s new tax laws with expert UAE corporate tax filing services. We help you maximize deductions and stay compliant with the latest corporate tax regulations.',
  },
]

const trustBenefits = [
  { 
    title: 'Seamless Client Experience', 
    hoverText: 'Work with one dedicated team that understands your business and provides end-to-end tax consultancy services in Dubai.',
    icon: 'star' 
  },
  { 
    title: 'Industry-Trusted Professionals', 
    hoverText: 'Work with CPAs and chartered accountants who have handled hundreds of cases across auditing, VAT, and corporate tax in Dubai.',
    icon: 'star' 
  },
  { 
    title: 'Government - Approved Firm', 
    hoverText: 'Fully licensed and compliant—our audit firm in Dubai stands up to any regulatory scrutiny.',
    icon: 'star' 
  },
  { 
    title: 'Fast & Reliable Support', 
    hoverText: 'Questions answered the same day. Documents delivered on schedule.',
    icon: 'star' 
  },
  { 
    title: 'Comprehensive Service Suite', 
    hoverText: 'One firm handles audits, tax, bookkeeping, and advisory—no coordination headaches across multiple providers.',
    icon: 'star' 
  },
  { 
    title: 'Proven Track Record', 
    hoverText: '98% of clients renew year after year—they stay because we consistently protect their profits and deliver trusted accounting and auditing services in Dubai.',
    icon: 'star' 
  },
]

const pricingPlans = [
  {
    title: 'Corporate Tax (Filing Only)',
    price: 'AED 750',
    priceNote: '+VAT/month',
    description: 'Ideal for businesses under AED 3 million annual revenue, qualifying for Small Business Relief.',
    features: [
      'Corporate Tax Return Filing',
      'Eligibility Assessment for Small Business Relief',
      'Basic Compliance Check',
      'FTA Portal Review & Submission',
    ],
  },
  {
    title: 'Corporate Tax (Filing + Tax Payable)',
    price: 'AED 1500',
    priceNote: '+VAT/month',
    description: 'Suitable for companies obligated to compute and pay Corporate Tax under current FTA rules, typically those with revenues above AED 3 million.',
    features: [
      'Full Corporate Tax Return Filing handled by professional Corporate tax filing services Dubai',
      'Tax Computation & Payment Summary',
      'Review of Financials & Adjustments',
      'Compliance Review & Documentation',
      'FTA Portal Submission & Confirmation',
      'Basic Advisory on Deductions & Adjustments',
      'WhatsApp/Email Support',
    ],
  },
]

const videoTestimonials = [
  { 
    title: 'How We Helped an F&B Startup Save 30% in Annual Taxes',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
  },
  { 
    title: 'Client Success Story: Manufacturing Company',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
  },
  { 
    title: 'Tax Strategy That Saved Our Business',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop'
  },
  { 
    title: 'Why We Chose Standard Auditors',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop'
  },
]

const faqQuestions = [
  {
    question: 'What services do you offer?',
    answer: 'Our comprehensive services include tax advisory, corporate tax filing, VAT services, auditing, accounting & bookkeeping, and company formation. We provide end-to-end financial solutions tailored to your business needs.'
  },
  {
    question: 'Can you help me with VAT registration?',
    answer: 'Yes, we assist businesses with VAT registration, filing, and compliance. Our team ensures you meet all UAE VAT requirements and deadlines.'
  },
  {
    question: 'Will you improve my bookkeeping?',
    answer: 'Absolutely. We provide professional bookkeeping services that maintain accurate, organized records and help streamline your accounting processes.'
  },
  {
    question: 'How soon can I see business results?',
    answer: 'Results vary by service, but most clients see improvements within the first month. Our team works efficiently to deliver measurable outcomes quickly.'
  },
  {
    question: 'Are your services suitable for startups and SMEs?',
    answer: 'Yes, we specialize in supporting startups and SMEs with scalable financial solutions designed to grow with your business.'
  },
  {
    question: 'Do you handle company formation in the UAE?',
    answer: 'Yes, we offer complete company formation services in the UAE, including free zone and mainland setup, licensing, and all required documentation.'
  },
  {
    question: 'How do you ensure confidentiality and trust?',
    answer: 'We maintain strict confidentiality protocols, are government-registered, and follow international best practices to protect your sensitive financial information.'
  },
  {
    question: 'How can I get started?',
    answer: 'Getting started is easy. Simply contact us through our form or speak to one of our experts, and we\'ll guide you through the initial consultation process.'
  },
]

// Shared Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.site-header')) {
        setIsMenuOpen(false)
        document.body.style.overflow = ''
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="site-header">
        <div className="site-header__container">
          <div className="site-header__logo-section">
            <Link to="/" className="site-header__logo">
              <img 
                src={standardAuditingLogo} 
                alt="Standard Auditing Logo" 
                className="site-header__logo-image"
              />
            </Link>
            <div className="site-header__separator"></div>
          </div>
          <button 
            type="button" 
            className="site-header__hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`site-header__hamburger-line ${isMenuOpen ? 'site-header__hamburger-line--open' : ''}`}></span>
            <span className={`site-header__hamburger-line ${isMenuOpen ? 'site-header__hamburger-line--open' : ''}`}></span>
            <span className={`site-header__hamburger-line ${isMenuOpen ? 'site-header__hamburger-line--open' : ''}`}></span>
          </button>
          <nav className={`site-header__nav ${isMenuOpen ? 'site-header__nav--open' : ''}`}>
            <Link to="/" className="site-header__nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="site-header__nav-link site-header__nav-link--dropdown" onClick={() => setIsMenuOpen(false)}>
              About
              <svg className="site-header__dropdown-icon" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6 L1 2 L7 2 Z" fill="currentColor"/>
              </svg>
            </Link>
            <a href="/#services" className="site-header__nav-link site-header__nav-link--dropdown" onClick={() => setIsMenuOpen(false)}>
              Services
              <svg className="site-header__dropdown-icon" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6 L1 2 L7 2 Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="/#insights" className="site-header__nav-link site-header__nav-link--dropdown" onClick={() => setIsMenuOpen(false)}>
              Insights
              <svg className="site-header__dropdown-icon" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6 L1 2 L7 2 Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="/#careers" className="site-header__nav-link" onClick={() => setIsMenuOpen(false)}>
              Careers
            </a>
            <button type="button" className="site-header__cta site-header__cta--sidebar" onClick={() => setIsMenuOpen(false)}>
              <span className="site-header__cta-text">Contact Us</span>
              <svg className="site-header__cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </nav>
          <button type="button" className="site-header__cta">
            <span className="site-header__cta-text">Contact Us</span>
            <svg className="site-header__cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </header>
      <div 
        className={`site-header__overlay ${isMenuOpen ? 'site-header__overlay--open' : ''}`}
        onClick={() => {
          setIsMenuOpen(false)
          document.body.style.overflow = ''
        }}
      />
    </>
  )
}

// Shared Footer Component
function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__column">
          <div className="site-footer__logo-wrapper">
            <img 
              src={standardAuditingLogo} 
              alt="Standard Auditing Logo" 
              className="site-footer__logo-image"
            />
          </div>
          <address className="site-footer__address body-opensans">
            Office No 112, NBQ Building, Bank Street, Dubai, United Arab Emirates
          </address>
          <a href="mailto:info@standardauditors.com" className="site-footer__email body-opensans">
            info@standardauditors.com
          </a>
          <div className="site-footer__social">
            <a href="#" className="site-footer__social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </a>
            <a href="#" className="site-footer__social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28446C14.0247 3.61173 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61232 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </a>
            <a href="#" className="site-footer__social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5922C7.96035 11.7616 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79374 10.2009 8.40624C10.9477 8.01874 11.7977 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8716 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </a>
            <a href="#" className="site-footer__social-link" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.4981 4.80824 21.0707 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.42C2.92931 4.55318 2.50188 4.80824 2.16129 5.15941C1.8207 5.51057 1.57879 5.94541 1.46 6.42C1.14521 8.16156 0.991236 9.93062 1 11.7C0.991236 13.4694 1.14521 15.2384 1.46 16.98C1.57879 17.4546 1.8207 17.8894 2.16129 18.2406C2.50188 18.5918 2.92931 18.8468 3.4 18.98C5.12 19.4 12 19.4 12 19.4C12 19.4 18.88 19.4 20.6 18.98C21.0707 18.8468 21.4981 18.5918 21.8387 18.2406C22.1793 17.8894 22.4212 17.4546 22.54 16.98C22.8548 15.2384 23.0088 13.4694 23 11.7C23.0088 9.93062 22.8548 8.16156 22.54 6.42Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M9.75 15.02L15.5 11.7L9.75 8.38V15.02Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="site-footer__column">
          <h3 className="site-footer__column-title h5-montserrat">Services</h3>
          <ul className="site-footer__links">
            <li><a href="#" className="body-opensans">Tax Advisory</a></li>
            <li><a href="#" className="body-opensans">Corporate Tax</a></li>
            <li><a href="#" className="body-opensans">Auditing</a></li>
            <li><a href="#" className="body-opensans">Accounting & Bookkeeping</a></li>
            <li><a href="#" className="body-opensans">VAT</a></li>
            <li><a href="#" className="body-opensans">Company Formation</a></li>
          </ul>
        </div>
        <div className="site-footer__column">
          <h3 className="site-footer__column-title h5-montserrat">Support</h3>
          <ul className="site-footer__links">
            <li><a href="#" className="body-opensans">Help center</a></li>
            <li><a href="#" className="body-opensans">Ticket Support</a></li>
            <li><a href="#" className="body-opensans">FAQ</a></li>
            <li><a href="#" className="body-opensans">Contact</a></li>
          </ul>
        </div>
        <div className="site-footer__column">
          <h3 className="site-footer__column-title h5-montserrat">Company</h3>
          <ul className="site-footer__links">
            <li><Link to="/about" className="body-opensans">About us</Link></li>
            <li><a href="#" className="body-opensans">Leadership</a></li>
            <li><a href="#" className="body-opensans">Careers</a></li>
            <li><a href="#" className="body-opensans">News & articles</a></li>
            <li><a href="#" className="body-opensans">Legal Notices</a></li>
          </ul>
        </div>
      </div>
      <div className="site-footer__divider"></div>
      <div className="site-footer__bottom">
        <p className="site-footer__copyright small-body-opensans">
          Copyright © 2025 Standard Auditors, All rights reserved.
        </p>
        <div className="site-footer__legal">
          <a href="#" className="small-body-opensans">Terms of use</a>
          <a href="#" className="small-body-opensans">Cookies policy</a>
          <a href="#" className="small-body-opensans">Privacy policy</a>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
