import { useState } from 'react'
import PartnersSection from '../PartnersSection'
import section2Image from '../assets/section2.jpg'
import heroImage from '../assets/heroimage.jpg'
import NewsletterSection from '../components/NewsletterSection'

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

// Services Section
function ServicesSection() {
  return (
    <section className="services-section" id="services">
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
            {serviceFeatures.map((feature, index) => (
                  <li key={index} className="services-section__feature">
                    <svg className="services-section__checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1.5" fill="none"/>
                      <path d="M6 10 L9 13 L14 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                <span className="body-opensans">{feature}</span>
                  </li>
            ))}
          </ul>
          <p className="services-section__additional body-opensans">
            One point of contact, We handle everything, Upload docs once, we do the rest.
          </p>
          <button type="button" className="services-section__cta h3-opensans-semibold">
            <span className="services-section__cta-text">Learn More</span>
            <span className="services-section__arrow">→</span>
          </button>
          <div className="services-section__badge">
            <svg className="services-section__badge-svg" viewBox="0 0 200 200">
              <defs>
                <path id="circle-path" d="M 100,30 A 70,70 0 1,1 100,170 A 70,70 0 1,1 100,30" />
              </defs>
              <text className="services-section__badge-text">
                <textPath href="#circle-path" startOffset="5%">
                  GUARANTEED TRANSPARENCY
                </textPath>
              </text>
            </svg>
            <div className="services-section__badge-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8L7 11L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Grid Section
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
                <div className="services-grid-section__icon-container">
                {service.icon === 'document-magnifying-glass' && (
                  <svg className="services-grid-section__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H15C15.5304 22 16.0391 21.7893 16.4142 21.4142C16.7893 21.0391 17 20.5304 17 20V8L13 2H9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 2V8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12H11M9 15H15M9 18H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M20.5 20.5L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
                {service.icon === 'percentage' && (
                  <svg className="services-grid-section__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 7L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
                    <circle cx="16" cy="16" r="1.5" fill="currentColor"/>
                    <path d="M9 12H15M9 15H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )}
                {service.icon === 'line-chart' && (
                  <svg className="services-grid-section__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 16L10 12L13 15L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="7" cy="16" r="1.5" fill="currentColor"/>
                    <circle cx="10" cy="12" r="1.5" fill="currentColor"/>
                    <circle cx="13" cy="15" r="1.5" fill="currentColor"/>
                    <circle cx="17" cy="9" r="1.5" fill="currentColor"/>
                  </svg>
                )}
                {service.icon === 'building' && (
                  <svg className="services-grid-section__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <svg className="services-grid-section__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <svg className="services-grid-section__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2H15C16.1046 2 17 2.89543 17 4V20C17 21.1046 16.1046 22 15 22H9C7.89543 22 7 21.1046 7 20V4C7 2.89543 7.89543 2 9 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9 10H12C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 14H12C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="4" r="1" fill="currentColor"/>
                    <circle cx="12" cy="20" r="1" fill="currentColor"/>
                  </svg>
                )}
              </div>
              <h3 className="services-grid-section__card-title h5-montserrat">{service.title}</h3>
              <p className="services-grid-section__card-description body-opensans">{service.description}</p>
              <button type="button" className="services-grid-section__expand-btn small-body-opensans">
                Expand &gt;&gt;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Trust Section
function WhyTrustSection() {
  return (
    <section className="why-trust-section">
      <div className="why-trust-section__container">
        <h2 className="why-trust-section__title h1-montserrat">
          Why Businesses Trust<br>
          </br> Standard Auditors
        </h2>
        <div className="why-trust-section__grid">
          {/* Column 1 - 1 card (row 1) */}
          <div className="why-trust-section__card why-trust-section__card--first">
            <div className="why-trust-section__icon-circle">
              <svg className="why-trust-section__diamond-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L20 12L12 21L4 12L12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="why-trust-section__card-title body-opensans">{trustBenefits[0].title}</p>
            <div className="why-trust-section__card-hover-text">
              <div className="why-trust-section__hover-icon-wrapper">
                <div className="why-trust-section__hover-icon-circle">
                  <svg className="why-trust-section__hover-diamond-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L20 12L12 21L4 12L12 3Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="why-trust-section__hover-text-content">
                {trustBenefits[0].hoverText}
              </p>
            </div>
          </div>
          
          {/* Column 2 - 2 cards stacked (row 1) */}
          <div className="why-trust-section__card">
            <div className="why-trust-section__icon-circle">
              <svg className="why-trust-section__diamond-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L20 12L12 21L4 12L12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="why-trust-section__card-title body-opensans">{trustBenefits[2].title}</p>
            <div className="why-trust-section__card-hover-text">
              <div className="why-trust-section__hover-icon-wrapper">
                <div className="why-trust-section__hover-icon-circle">
                  <svg className="why-trust-section__hover-diamond-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L20 12L12 21L4 12L12 3Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="why-trust-section__hover-text-content">
                {trustBenefits[2].hoverText}
              </p>
            </div>
          </div>
          
          {/* Column 4 - 2 cards stacked (row 1, to the right of image) */}
          <div className="why-trust-section__card">
            <div className="why-trust-section__icon-circle">
              <svg className="why-trust-section__diamond-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L20 12L12 21L4 12L12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="why-trust-section__card-title body-opensans">{trustBenefits[3].title}</p>
            <div className="why-trust-section__card-hover-text">
              <div className="why-trust-section__hover-icon-wrapper">
                <div className="why-trust-section__hover-icon-circle">
                  <svg className="why-trust-section__hover-diamond-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L20 12L12 21L4 12L12 3Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="why-trust-section__hover-text-content">
                {trustBenefits[3].hoverText}
              </p>
            </div>
          </div>
          
          {/* Column 3 - Central Image (spans rows 1-2) */}
          <div className="why-trust-section__image-card">
            <div className="why-trust-section__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
                alt="Professional accountant person working with financial documents"
                loading="lazy"
              />
            </div>
            <div className="why-trust-section__label why-trust-section__label--top-left">
              Ready to Assist
            </div>
            <div className="why-trust-section__label why-trust-section__label--bottom-right">
              Trusted Advisor
            </div>
          </div>
          
          {/* Column 2 - 2 cards stacked (row 2) */}
          <div className="why-trust-section__card">
            <div className="why-trust-section__icon-circle">
              <svg className="why-trust-section__diamond-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L20 12L12 21L4 12L12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="why-trust-section__card-title body-opensans">{trustBenefits[1].title}</p>
            <div className="why-trust-section__card-hover-text">
              <div className="why-trust-section__hover-icon-wrapper">
                <div className="why-trust-section__hover-icon-circle">
                  <svg className="why-trust-section__hover-diamond-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L20 12L12 21L4 12L12 3Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="why-trust-section__hover-text-content">
                {trustBenefits[1].hoverText}
              </p>
            </div>
          </div>
          
          {/* Column 4 - 2 cards stacked (row 2, to the right of image) */}
          <div className="why-trust-section__card">
            <div className="why-trust-section__icon-circle">
              <svg className="why-trust-section__diamond-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L20 12L12 21L4 12L12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="why-trust-section__card-title body-opensans">{trustBenefits[4].title}</p>
            <div className="why-trust-section__card-hover-text">
              <div className="why-trust-section__hover-icon-wrapper">
                <div className="why-trust-section__hover-icon-circle">
                  <svg className="why-trust-section__hover-diamond-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L20 12L12 21L4 12L12 3Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="why-trust-section__hover-text-content">
                {trustBenefits[4].hoverText}
              </p>
            </div>
          </div>
          
          {/* Column 5 - 1 card (row 1) */}
          <div className="why-trust-section__card">
            <div className="why-trust-section__icon-circle">
              <svg className="why-trust-section__diamond-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L20 12L12 21L4 12L12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="why-trust-section__card-title body-opensans">{trustBenefits[5].title}</p>
            <div className="why-trust-section__card-hover-text">
              <div className="why-trust-section__hover-icon-wrapper">
                <div className="why-trust-section__hover-icon-circle">
                  <svg className="why-trust-section__hover-diamond-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L20 12L12 21L4 12L12 3Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="why-trust-section__hover-text-content">
                {trustBenefits[5].hoverText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Pricing Section
function PricingSection() {
  return (
    <section className="pricing-section">
      <div className="pricing-section__container">
        <span className="pricing-section__badge small-body-opensans">Service Packages</span>
        <h2 className="pricing-section__title h1-montserrat">
          <span className="pricing-section__title-line-1">Choose the Support Level that</span>
          <span className="pricing-section__title-line-2"> Fits Your Business</span>
        </h2>
        <div className="pricing-section__grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="pricing-section__card">
              <h3 className="pricing-section__card-title h3-montserrat">{plan.title}</h3>
              <div className="pricing-section__price">
                <span className="pricing-section__price-amount h1-montserrat">{plan.price}</span>
                <span className="pricing-section__price-note body-opensans">{plan.priceNote}</span>
              </div>
              <p className="pricing-section__card-description body-opensans">{plan.description}</p>
              <button type="button" className="pricing-section__cta h3-opensans-semibold">
                Get in Touch
              </button>
              <ul className="pricing-section__features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="pricing-section__feature">
                    <svg className="pricing-section__checkmark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M6 10 L9 13 L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <span className="body-opensans">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Video Testimonials Section
function VideoTestimonialsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(0)
  // Start with first card expanded (index 0)

  return (
    <section className="video-testimonials-section" id="insights">
      <div className="video-testimonials-section__container">
        <div className="video-testimonials-section__header">
          <span className="video-testimonials-section__tag h3-opensans-semibold">Insights</span>
          <h2 className="video-testimonials-section__title h1-montserrat">
            <span className="video-testimonials-section__title-line-1">How We've Helped</span>
            <span className="video-testimonials-section__title-line-2">Businesses Like Yours</span>
          </h2>
        </div>
        <div className="video-testimonials-section__grid">
          {videoTestimonials.map((video, index) => {
            const isHovered = hoveredIndex === index
            const isShrunk = hoveredIndex !== index
            
            return (
              <div 
                key={index} 
                className={`video-testimonials-section__card ${isHovered ? 'video-testimonials-section__card--hovered' : ''} ${isShrunk ? 'video-testimonials-section__card--shrunk' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                // Keep hovered state, don't reset on mouse leave
              >
                <div className="video-testimonials-section__thumbnail">
                  <img 
                    src={video.image} 
                    alt={video.title}
                    className="video-testimonials-section__thumbnail-image"
                  />
                <div className="video-testimonials-section__play-icon">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="32" fill="rgba(0, 0, 0, 0.6)"/>
                    <path d="M26 22L26 42L42 32L26 22Z" fill="white"/>
                  </svg>
                </div>
                  <p className="video-testimonials-section__card-title body-opensans">{video.title}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Client Testimonials Section
function ClientTestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      quote: "We have maintained a longstanding partnership with the esteemed team at Standard Auditing, which has greatly contributed to our successful journey. It gives us great pleasure to provide this reference, attesting to the exceptional quality of their services and the value they have brought to our business.",
      author: "Senthil Kumar",
      title: "Managing Director, Triway Technologies LLC"
    },
    {
      quote: "Standard Auditing played a crucial role in guiding us through the internal preparation, registration, and compliance process of VAT. Their invaluable advice and assistance have been instrumental in our successful journey. We extend our sincere gratitude for their support and expertise.",
      author: "Alex Smith",
      title: "CEO, Financial Report Limited"
    },
    {
      quote: "We have received an exemplary level of diligent and professional service from the team at Standard Auditing. Their proactive approach has been instrumental in our satisfaction. We are delighted to extend our referral of their services to our extensive personal and professional network.",
      author: "Mohammed A Omar",
      title: "CEO, Fortune Consulting FZE"
    },
    {
      quote: "We have been working with Standard Auditing since 2016 for our auditing, accounts, and taxation needs. They have streamlined our financial processes and proven to be both proficient and trustworthy. They are key allies to our success, and I wholeheartedly recommend them to anyone looking for dependable financial experts.",
      author: "Ravichandran",
      title: "Financial Manager, Silver Bright"
    }
  ]

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="client-testimonials-section">
      <div className="client-testimonials-section__container">
        <div className="client-testimonials-section__left">
          <span className="client-testimonials-section__tag h3-opensans-semibold">Testimonials</span>
          <h2 className="client-testimonials-section__title h1-montserrat">
            What Our Clients Say About <br></br>Working With Us
          </h2>
          <p className="client-testimonials-section__description body-opensans">
            Hear directly from business owners who've reduced costs, avoided penalties, and gained financial clarity with our expert accounting services Dubai and tax consultancy services in UAE.
          </p>
        </div>
        <div className="client-testimonials-section__right">
          <div className="client-testimonials-section__slider">
            <div 
              className="client-testimonials-section__track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <blockquote key={index} className="client-testimonials-section__quote">
                  <p className="client-testimonials-section__quote-text h2-opensans-regular">
                    "{testimonial.quote}"
                  </p>
                  <div className="client-testimonials-section__divider"></div>
                  <footer className="client-testimonials-section__author">
                    <p className="client-testimonials-section__author-name h4-montserrat">
                      {testimonial.author}
                    </p>
                    <p className="client-testimonials-section__author-title body-opensans">
                      {testimonial.title}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div className="client-testimonials-section__nav">
            {currentSlide > 0 && (
              <button 
                type="button" 
                className="client-testimonials-section__nav-btn" 
                aria-label="Previous testimonial"
                onClick={handlePrevious}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.75" y="0.75" width="18.5" height="18.5" rx="3.25" stroke="white" strokeOpacity="0.8" strokeWidth="1.5"/>
                  <path d="M11.5 6.5L8 10L11.5 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
            <button 
              type="button" 
              className="client-testimonials-section__nav-btn" 
              aria-label="Next testimonial"
              onClick={handleNext}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.75" y="0.75" width="18.5" height="18.5" rx="3.25" stroke="white" strokeOpacity="0.8" strokeWidth="1.5"/>
                <path d="M8.5 13.5L12 10L8.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-section__container">
        <div className="faq-section__left">
          <span className="faq-section__badge small-body-opensans">FAQ</span>
          <h2 className="faq-section__title h1-montserrat">
            <span className="faq-section__title-line-1">Questions Our Clients</span>
            <span className="faq-section__title-line-2">Usually Ask Us</span>
          </h2>
          <p className="faq-section__intro body-opensans">
            If you've made it this far, you're ready to take control of your finances. Here's what most businesses ask before getting started with our tax consultancy services in Dubai and audit firm near me support.
          </p>
          <div className="faq-section__cta-section faq-section__cta-section--top">
            <h3 className="faq-section__cta-heading h4-montserrat">Still looking for answer?</h3>
            <button type="button" className="faq-section__cta h3-opensans-semibold">
              <span className="faq-section__cta-text">Speak to our expert</span>
              <svg className="faq-section__cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="faq-section__right">
          <div className="faq-section__list">
            {faqQuestions.map((faq, index) => (
              <div key={index} className="faq-section__item">
                <div className="faq-section__divider"></div>
                <button
                  type="button"
                  className={`faq-section__question ${openIndex === index ? 'faq-section__question--open' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="faq-section__question-text body-opensans">{faq.question}</span>
                  <span className="faq-section__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="11" fill="white" stroke="#0A3D62" strokeWidth="1"/>
                      <path d="M7 10L12 15L17 10" stroke="#0A3D62" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </span>
                </button>
                <div className={`faq-section__answer-wrapper ${openIndex === index ? 'faq-section__answer-wrapper--open' : ''}`}>
                  <div className="faq-section__answer">
                    <p className="body-opensans">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Home() {
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
            {/* Left column: Auditing, Tax Advisory, Accounting & Bookkeeping (2 rows, 1 column) */}
            <button type="button" className="hero__service-pill body-opensans">
              {services[0]}
            </button>
            <button type="button" className="hero__service-pill body-opensans">
              {services[1]}
            </button>
            <button type="button" className="hero__service-pill body-opensans">
              {services[3]}
            </button>
            
            {/* Right side: Company Formation, VAT, Corporate Tax */}
            <button type="button" className="hero__service-pill body-opensans">
              {services[2]}
            </button>
            <button type="button" className="hero__service-pill body-opensans">
              {services[4]}
            </button>
            <button type="button" className="hero__service-pill body-opensans">
              {services[5]}
            </button>
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

        <div className="hero__media">
          <div className="hero__image-wrapper">
            <img
              src={heroImage}
              alt="Consultant presenting a financial plan to a team"
              loading="lazy"
            />
            <button type="button" className="hero__cta">
              <div className="hero__cta-content">
                <p className="hero__cta-primary">Schedule Your Complimentary Consultation</p>
                <p className="hero__cta-secondary">"Start Building a Stronger Financial Future"</p>
              </div>
            </button>
          </div>
          <div className="hero__stats-card">
            {stats.map((stat, index) => (
              <div className="hero__stat" key={`${stat.value}-${index}`}>
                <p className="hero__stat-value h6-montserrat">{stat.value}</p>
                <div className="hero__stat-label-wrapper">
                  <p className="hero__stat-label h2-opensans-regular">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <ServicesSection />
      <PartnersSection />
      <ServicesGridSection />
      <WhyTrustSection />
      <PricingSection />
      <VideoTestimonialsSection />
      <ClientTestimonialsSection />
      <FAQSection />
      <NewsletterSection />
    </>
  )
}

export default Home

