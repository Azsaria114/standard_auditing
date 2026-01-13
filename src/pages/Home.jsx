import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

// Slugify function to match BlogArticlePage
function slugifyTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}
import PartnersSection from '../PartnersSection'
import section2Image from '../assets/section2.jpg'
import heroImage from '../assets/heroimage.jpg'
import FileMagnifyingGlassIcon from '../assets/FileMagnifyingGlass.svg?url'
import PercentageIcon from '../assets/percentage.svg?url'
import ChartLineUpIcon from '../assets/ChartLineUp.svg?url'
import Vector3Icon from '../assets/Vector (3).svg?url'
import CalculatorIcon from '../assets/calculator.svg?url'
import FileMagnifyingGlass1Icon from '../assets/FileMagnifyingGlass (1).svg?url'
import onePointOfContactImage from '../assets/one point of contact.jpg'
import step2Image from '../assets/step 2.png'
import step3Image from '../assets/step3.jpg'

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
  { value: '4000+', label: 'Projects Successfully completed' },
  { value: '25+', label: 'Years Partnering with UAE Businesses' },
  { value: '98%', label: 'Clients Stay With Us' },
  { value: '500+', label: 'Reputed UAE Businesses Served' },
  { value: '★★★★★', label: '(4.9 Google Reviews)', isStar: true },
]

const serviceFeatures = [
  'Licensed audits conducted in line with UAE statutory requirements',
  'Ongoing bookkeeping and monthly financial reporting for clear management oversight',
  'Practical tax planning focused on reducing exposure and improving efficiency',
  'VAT and corporate tax compliance handled by experienced specialists',
  'Year-end tax reviews aligned with current FTA regulations and guidance',
]

const serviceCards = [
  {
    title: 'AUDITING',
    icon: 'document-magnifying-glass',
    description: 'Give stakeholders confidence in your financial reports. Satisfy regulatory requirements. With help from a trusted audit firm near you across Dubai and the UAE, you can get audit-ready in 15 days* or less.',
    path: '/services/auditing',
  },
  {
    title: 'VAT',
    icon: 'percentage',
    description: 'Reclaim every dirham you\'re entitled to with our specialized VAT return filing services UAE by submitting accurate returns on time.',
    path: '/services/vat',
  },
  {
    title: 'TAX ADVISORY',
    icon: 'line-chart',
    description: 'Pay only what you legally owe. Find deductions, optimize structure, and reduce liabilities with the guidance of experienced tax consultants in Dubai.',
    path: '/services/tax-advisory',
  },
  {
    title: 'COMPANY FORMATION',
    icon: 'building',
    description: 'Choose the right jurisdiction, complete all paperwork, and launch operations faster. Our tax consultancy services in Dubai ensure smooth registration and compliance.',
    path: '/services/company-formation',
  },
  {
    title: 'ACCOUNTING & BOOKKEEPING',
    icon: 'calculator',
    description: 'Know exactly where your money goes with organized books and clear monthly reports handled by professionals.',
    path: '/services/accounting-bookkeeping',
  },
  {
    title: 'CORPORATE TAX',
    icon: 'dollar',
    description: 'Navigate UAE\'s new tax laws with expert UAE corporate tax filing services. We help you maximize deductions and stay compliant with the latest corporate tax regulations.',
    path: '/services/corporate-tax',
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
    hoverText: 'Work with CPAs and chartered accountants who\'ve handled hundreds of cases across auditing, VAT, and corporate tax in Dubai.',
    icon: 'star' 
  },
  { 
    title: 'Government-Approved Firm', 
    hoverText: 'Fully licensed and compliant, our audit firm in Dubai stands up to any regulatory scrutiny.',
    icon: 'star' 
  },
  { 
    title: 'Fast & Reliable Support', 
    hoverText: 'Questions answered the same day. Documents delivered on schedule.',
    icon: 'star' 
  },
  { 
    title: 'Comprehensive Service Suite', 
    hoverText: 'One firm handles audits, tax, bookkeeping, and advisory. You will have no coordination headaches across multiple providers.',
    icon: 'star' 
  },
  { 
    title: 'Proven Track Record', 
    hoverText: '98% of clients renew year after year. They stay because we consistently protect their profits and deliver trusted accounting and auditing services in Dubai. See more here.',
    icon: 'star' 
  },
  { 
    title: 'Professional Indemnity Insurance', 
    hoverText: 'Your business is always protected. We carry full Professional Indemnity Insurance, so every service, from auditing to corporate tax filing, is backed by an additional layer of accountability and financial security.',
    icon: 'star' 
  },
]

const pricingPlans = [
  {
    title: 'Corporate Tax (Filing Only)',
    price: 'AED 750',
    priceNote: '+ VAT',
    description: 'Ideal for businesses under AED 3 million annual revenue, qualifying for Small Business Relief',
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
    priceNote: '+ VAT',
    description: 'Suitable for companies obligated to compute and pay Corporate Tax under current FTA rules, typically those with revenues above AED 3 million.',
    features: [
      'Full Corporate Tax Return Filing',
      'Tax Computation & Payment Summary',
      'Review of Financials & Adjustments',
      'Compliance Review & Documentation',
      'FTA Portal Submission & Confirmation',
      'Basic Advisory on Deductions & Adjustments',
      'WhatsApp/Email Support',
    ],
  },
]


const faqQuestions = [
  { 
    question: 'Why is auditing important for my business in Dubai?',
    answer: 'Auditing provides independent verification of your financial records, ensuring accuracy and compliance with UAE laws. It helps detect errors or fraud before they become issues and gives your stakeholders confidence in your financial health. Partnering with a reputed audit firm near me or auditing service in Dubai ensures professional oversight and compliance with the latest regulations.'
  },
  { 
    question: 'Do all companies in Dubai need to get an audit?',
    answer: 'Not all businesses are legally required to get audited. However, companies in free zones, public shareholding companies, and those subject to specific regulations typically must submit audited financial statements annually. Consulting a licensed audit firm in Dubai helps determine your audit obligations accurately.'
  },
  {
    question: 'What is involved in an internal audit?',
    answer: 'Internal audits review your financial and operational processes regularly to identify risks, ensure controls are effective, and suggest improvements to increase efficiency and compliance. Professional auditing services near me can tailor these reviews to your specific business needs.'
  },
  {
    question: 'What types of tax advisory services can help my Dubai business?',
    answer: 'Tax consultancy services in Dubai include corporate tax planning, VAT compliance, risk management, and optimizing tax liabilities under UAE law. Working with experienced tax consultants in Dubai ensures you stay compliant and tax-efficient.'
  },
  {
    question: 'How can tax advisory add value beyond compliance?',
    answer: 'Beyond compliance, tax consultancy services in Dubai help plan transactions, forecast tax impacts, optimize cash flow, and avoid penalties by adapting early to law changes. A qualified tax consultant UAE can identify strategic opportunities to strengthen your business finances.'
  },
  {
    question: 'What is corporate tax and who must pay it in Dubai?',
    answer: 'Corporate tax is a 9% tax on company profits introduced in the UAE. Businesses with profits exceeding AED 375,000 must register and pay corporate tax, while smaller businesses pay 0%. For compliance, engage trusted Dubai corporate tax consultants who can manage registration and filing efficiently.'
  },
  {
    question: 'What are the key steps in company formation in Dubai?',
    answer: 'Company formation involves choosing the right legal structure, reserving a trade name, obtaining licenses, opening a bank account, and registering for VAT and corporate tax if applicable. Professional accounting services in Dubai can guide you through these steps with legal and financial accuracy.'
  },
  {
    question: 'Can your firm help with all company formation procedures?',
    answer: 'Yes, we provide end-to-end company formation and compliance services, including legal advice, documentation, licensing, and ongoing financial reporting. Our accounting and tax consultancy services in Dubai ensure your business stays compliant from day one.'
  },
  {
    question: 'What types of companies can I form in Dubai?',
    answer: 'Common types include Limited Liability Companies (LLCs), Free Zone Companies, Branch Offices, and Sole Establishments—each with specific ownership rules and benefits. Our experts in company setup and accounting services in Dubai can help you choose the right structure.'
  },
  {
    question: 'Why is professional bookkeeping important for my business?',
    answer: 'Proper bookkeeping ensures accurate records, helps manage cash flow, supports tax filing, and provides insights into your financial performance. Reliable accounting services in Dubai help maintain compliance and business transparency.'
  },
  {
    question: 'Can I handle bookkeeping myself or do I need an accountant?',
    answer: 'Small businesses might handle basic bookkeeping themselves, but hiring professional accounting services in Dubai ensures accuracy, compliance, and efficient management of financial data—especially for VAT and corporate tax filing.'
  },
  {
    question: 'What financial reports should my business regularly review?',
    answer: 'Key reports include Profit & Loss statements, balance sheets, and cash flow statements. Regular reviews with your tax consultant in Dubai help monitor your company\'s financial health and identify cost-saving opportunities.'
  },
  {
    question: 'Do all businesses need to register for VAT in Dubai?',
    answer: 'Businesses with taxable supplies and imports exceeding AED 375,000 per year must register for VAT. Our VAT return filing services UAE ensure accurate registration and timely filing to avoid penalties.'
  },
  {
    question: 'What are my VAT filing obligations?',
    answer: 'Registered businesses must file VAT returns regularly (usually quarterly), showing tax collected on sales and paid on purchases. Our VAT return filing services UAE simplify this process with expert bookkeeping and submission support.'
  },
  {
    question: 'How can we help with VAT compliance?',
    answer: 'We offer VAT registration, bookkeeping setup, return filing, tax gap analysis, and audit representation. Our tax consultant UAE team ensures full VAT compliance and risk-free operations.'
  },
  {
    question: 'When do I need to register for UAE corporate tax?',
    answer: 'If your taxable profits exceed AED 375,000 annually, registration is mandatory through the FTA\'s EmaraTax portal. Our UAE corporate tax filing services handle registration, documentation, and submission professionally.'
  },
  {
    question: 'How do I file corporate tax returns?',
    answer: 'Corporate tax returns are filed online via the EmaraTax portal. Partnering with trusted Corporate tax filing services Dubai ensures accuracy and compliance with UAE tax regulations.'
  },
  {
    question: 'What are penalties for late tax filings or non-compliance?',
    answer: 'Penalties may include fines, interest on unpaid tax, and potential legal action. Engaging reliable tax consultancy services in Dubai helps you stay compliant and avoid unnecessary risks.'
  },
  {
    question: 'What is the difference between an accountant and an audit firm?',
    answer: 'Accountants handle daily financial tasks like bookkeeping and payroll, while an audit firm near me provides independent examination of records, strategic tax advice, and compliance assurance—enhancing credibility and transparency.'
  },
  {
    question: 'How often should I review my company\'s financial performance?',
    answer: 'Monthly reviews help identify issues early, while quarterly or annual external audits ensure compliance. Collaborating with a trusted audit firm in Dubai ensures accurate reporting and business insight.'
  },
  {
    question: 'Can your firm offer CFO-level advisory services?',
    answer: 'Yes, we offer strategic CFO-level support, including budgeting, cash flow management, and tax planning. Our tax consultant Dubai experts help you align financial goals with growth strategies.'
  },
  {
    question: 'What are the benefits of using professional services for company setup and compliance?',
    answer: 'Professional firms provide faster registration, proper licensing, tax registration, and ongoing compliance. Partnering with tax consultants in Dubai or accounting services Dubai providers ensures your business operates efficiently and meets all UAE legal requirements.'
  },
]

// Services Section
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
            <span className="services-section__right-line-1">Accounting & Tax Advisory Tailored</span>
            <span className="services-section__right-line-2">to Your Business</span>
          </h3>
          <p className="services-section__description body-opensans">
            At Standard Auditing, we handle everything from daily bookkeeping to year-end tax planning, so you can focus on running your business. Our expert tax consultants in Dubai and UAE corporate tax filing services team ensure your books are accurate, your tax burden is minimized.
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
          <button 
            type="button"
            className="services-section__cta h3-opensans-semibold"
            onClick={(e) => {
              e.preventDefault()
              // Check if mobile/tablet view
              const isMobileOrTablet = window.innerWidth <= 1024
              
              if (isMobileOrTablet) {
                // On mobile/tablet, scroll to top first
                window.scrollTo({ top: 0, behavior: 'smooth' })
                // Then open menu and dropdown after scroll starts
                setTimeout(() => {
                  window.dispatchEvent(new CustomEvent('openMobileServicesMenu'))
                }, 300) // Wait for scroll to start
              } else {
                // On desktop, scroll first, then open dropdown
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setTimeout(() => {
                  window.dispatchEvent(new CustomEvent('openServicesDropdown'))
                }, 500) // Delay to ensure smooth scroll completes before opening dropdown
              }
            }}
          >
            <span className="services-section__cta-text">Learn More</span>
            <span className="services-section__arrow">→</span>
          </button>
          <div className="services-section__badge">
            <svg className="services-section__badge-svg" viewBox="0 0 200 200">
              <defs>
                <path id="circle-path" d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
              </defs>
              <text className="services-section__badge-text">
                <textPath href="#circle-path" startOffset="0%" textLength="500" lengthAdjust="spacing">
                  GUARANTEED TRANSPARENCY
                </textPath>
              </text>
            </svg>
            <div className="services-section__badge-arrow">
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <Link 
              key={index} 
              to={service.path} 
              className="services-grid-section__card"
              style={{ textDecoration: 'none', display: 'block' }}
            >
                <div className="services-grid-section__icon-container">
                {service.icon === 'document-magnifying-glass' && (
                  <img src={FileMagnifyingGlassIcon} alt="Auditing" className="services-grid-section__icon" />
                )}
                {service.icon === 'percentage' && (
                  <img src={PercentageIcon} alt="VAT" className="services-grid-section__icon" />
                )}
                {service.icon === 'line-chart' && (
                  <img src={ChartLineUpIcon} alt="Tax Advisory" className="services-grid-section__icon" />
                )}
                {service.icon === 'building' && (
                  <img src={Vector3Icon} alt="Company Formation" className="services-grid-section__icon" />
                )}
                {service.icon === 'calculator' && (
                  <img src={CalculatorIcon} alt="Accounting & Bookkeeping" className="services-grid-section__icon" />
                )}
                {service.icon === 'dollar' && (
                  <img src={FileMagnifyingGlass1Icon} alt="Corporate Tax" className="services-grid-section__icon" />
                )}
              </div>
              <h3 className="services-grid-section__card-title h5-montserrat">{service.title}</h3>
              <p className="services-grid-section__card-description body-opensans">{service.description}</p>
              <span className="services-grid-section__expand-btn small-body-opensans">
                Expand &gt;&gt;
              </span>
            </Link>
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
          Why 500+ Businesses Trust Us<br />
          with Their Finances
        </h2>
        <div className="why-trust-section__grid">
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
          
          <div className="why-trust-section__card">
            <div className="why-trust-section__icon-circle">
              <svg className="why-trust-section__diamond-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L20 12L12 21L4 12L12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="why-trust-section__card-title body-opensans">{trustBenefits[6].title}</p>
            <div className="why-trust-section__card-hover-text">
              <div className="why-trust-section__hover-icon-wrapper">
                <div className="why-trust-section__hover-icon-circle">
                  <svg className="why-trust-section__hover-diamond-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L20 12L12 21L4 12L12 3Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
            </div>
              </div>
              <p className="why-trust-section__hover-text-content">
                {trustBenefits[6].hoverText}
              </p>
            </div>
          </div>
          
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
                {trustBenefits[5].hoverText.split(' See more here.')[0]}{' '}
                <a 
                  href="#testimonials" 
                  className="why-trust-section__see-more-link"
                  onClick={(e) => {
                    e.preventDefault();
                    const testimonialsSection = document.getElementById('testimonials');
                    if (testimonialsSection) {
                      const headerHeight = 110; // Approximate header height
                      const y = testimonialsSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
                    }
                  }}
                >
                  See more here.
                </a>
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
          <span className="pricing-section__title-line-1">Choose the Support Level</span>
          <span className="pricing-section__title-line-2">That Fits Your Business</span>
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
              <Link to="/contact" className="pricing-section__cta h3-opensans-semibold">
                Get in Touch
              </Link>
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

// Insights Section (using blog content from Insights page)
function VideoTestimonialsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(0)

  // Blog articles data (from Insights.jsx) - limited to 4
  const blogArticles = [
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      title: 'How To Get Back VAT Paid on Employee Benefits Without Problems',
      slug: slugifyTitle('How To Get Back VAT Paid on Employee Benefits Without Problems')
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      title: 'How Free Zone Businesses Can Protect Their 0% Tax Status',
      slug: slugifyTitle('How Free Zone Businesses Can Protect Their 0% Tax Status')
    },
    {
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
      title: 'Why Mixing Mainland and Free Zone Income Can Cost You 9% Tax',
      slug: slugifyTitle('Why Mixing Mainland and Free Zone Income Can Cost You 9% Tax')
    },
    {
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      title: 'Related-Party Deals That Can Hurt Your Profits',
      slug: slugifyTitle('Related-Party Deals That Can Hurt Your Profits')
    }
  ]

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
          {blogArticles.map((article, index) => {
            const isHovered = hoveredIndex === index
            const isShrunk = hoveredIndex !== null && hoveredIndex !== index
            
            return (
              <Link
                key={index} 
                to={`/insights/article/${article.slug}`}
                className={`video-testimonials-section__card ${isHovered ? 'video-testimonials-section__card--hovered' : ''} ${isShrunk ? 'video-testimonials-section__card--shrunk' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div className="video-testimonials-section__thumbnail">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="video-testimonials-section__thumbnail-image"
                  />
                  <p className="video-testimonials-section__card-title body-opensans">{article.title}</p>
                </div>
              </Link>
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
    <section className="client-testimonials-section" id="testimonials">
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
  const faqSectionRef = useRef(null)
  const faqRightRef = useRef(null)
  const scrollLockedRef = useRef(false)
  const faqItemRefs = useRef([])

  const toggleFAQ = (index) => {
    const isOpening = openIndex !== index
    setOpenIndex(openIndex === index ? null : index)
    
    // Scroll to the opened FAQ item after a short delay to allow animation to start
    if (isOpening && faqItemRefs.current[index] && faqRightRef.current) {
      setTimeout(() => {
        const itemElement = faqItemRefs.current[index]
        const container = faqRightRef.current
        if (itemElement && container) {
          // Calculate the position to scroll to (center the answer in view)
          const itemTop = itemElement.offsetTop
          const containerHeight = container.clientHeight
          
          // Scroll to show the item with some padding at the bottom
          const targetScroll = itemTop - (containerHeight / 3) // Show item in upper third of container
          const maxScroll = container.scrollHeight - containerHeight
          const finalScroll = Math.min(Math.max(0, targetScroll), maxScroll)
          
          container.scrollTo({
            top: finalScroll,
            behavior: 'smooth'
          })
        }
      }, 100) // Small delay to allow the answer to start expanding
    }
  }

  useEffect(() => {
    const handleWheel = (e) => {
      const faqSection = faqSectionRef.current
      const faqRight = faqRightRef.current
      if (!faqSection || !faqRight) return

      const rect = faqSection.getBoundingClientRect()
      const isInView = rect.top <= 120 && rect.bottom >= 200
      
      if (!isInView) return

      const scrollTop = faqRight.scrollTop
      const scrollHeight = faqRight.scrollHeight
      const clientHeight = faqRight.clientHeight
      const isAtTop = scrollTop <= 0
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5

      // If scrolling down and not at bottom of FAQ list
      if (e.deltaY > 0 && !isAtBottom) {
        e.preventDefault()
        faqRight.scrollTop += e.deltaY
        scrollLockedRef.current = true
        return
      }

      // If scrolling up and not at top of FAQ list
      if (e.deltaY < 0 && !isAtTop) {
        e.preventDefault()
        faqRight.scrollTop += e.deltaY
        scrollLockedRef.current = true
        return
      }

      // If at top and scrolling up, or at bottom and scrolling down, allow page scroll
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        scrollLockedRef.current = false
      }
    }

    const faqSection = faqSectionRef.current
    if (faqSection) {
      faqSection.addEventListener('wheel', handleWheel, { passive: false })
      return () => faqSection.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <section id="faq" className="faq-section" ref={faqSectionRef}>
      <div className="faq-section__container">
        <div className="faq-section__left">
          <span className="faq-section__badge small-body-opensans">FAQ</span>
          <h2 className="faq-section__title h1-montserrat">
            <span className="faq-section__title-line-1">Questions Our Clients</span>
            <span className="faq-section__title-line-2">Usually Ask Us</span>
          </h2>
          <p className="faq-section__intro body-opensans">
            If you've made it this far, you're ready to take control of your finances. Here's what most businesses ask before getting started with our tax consultancy services in Dubai.
          </p>
          <div className="faq-section__cta-section faq-section__cta-section--top">
            <h3 className="faq-section__cta-heading h4-montserrat">Still looking for answers?</h3>
            <Link to="/contact" className="faq-section__cta h3-opensans-semibold">
              <span className="faq-section__cta-text">Speak to our expert</span>
              <svg className="faq-section__cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
        <div className="faq-section__right" ref={faqRightRef}>
          <div className="faq-section__list">
            {faqQuestions.map((faq, index) => (
              <div 
                key={index} 
                className="faq-section__item"
                ref={(el) => (faqItemRefs.current[index] = el)}
              >
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

// Newsletter Section
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

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      title: 'One Point of Contact',
      image: onePointOfContactImage,
    },
    {
      title: 'We Handle Everything',
      image: step2Image,
    },
    {
      title: 'Upload Docs Once',
      titleLine2: 'We Do the Rest',
      image: step3Image,
    },
  ]

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-section__container">
        <div className="how-it-works-section__header">
          <h2 className="how-it-works-section__title h2-montserrat">How It Works</h2>
        </div>
        <div className="how-it-works-section__cards">
          {steps.map((step, index) => (
            <div key={index} className="how-it-works-section__step">
              <div className="how-it-works-section__card-box">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="how-it-works-section__card-image"
                />
              </div>
              <div className="how-it-works-section__card-content">
                <h3 className="how-it-works-section__card-title h4-montserrat">
                  {step.title}
                  {step.titleLine2 && (
                    <>
                      <br />
                      {step.titleLine2}
                    </>
                  )}
                </h3>
              </div>
              <div className="how-it-works-section__step-number">
                <span className="how-it-works-section__number-circle">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
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
            <p className="hero__eyebrow-text h6-montserrat">Your Trusted Partner</p>
          </div>
          <h1 className="hero__main-title h1-montserrat">
            <span className="hero__title-line-1">Audit, Tax & Compliance for</span>
            <span className="hero__title-line-2">Dubai Businesses</span>
          </h1>
        </section>
        
        <header className="hero__header">
          <div className="hero__services">
            <button type="button" className="hero__service-pill body-opensans">
              {services[0]}
            </button>
            <button type="button" className="hero__service-pill body-opensans">
              {services[1]}
            </button>
            <button type="button" className="hero__service-pill body-opensans">
              {services[3]}
            </button>
            <button type="button" className="hero__service-pill body-opensans">
              {services[2]}
            </button>
            <Link to="/contact" className="hero__service-pill body-opensans" style={{ textDecoration: 'none', display: 'inline-block' }}>
              {services[4]}
            </Link>
            <button type="button" className="hero__service-pill body-opensans">
              {services[5]}
            </button>
          </div>
          <span className="hero__header-divider" aria-hidden="true" />
          <div className="hero__copy">
            <p className="hero__copy-text h2-opensans-regular">
              <strong>Protect your profits with proactive financial partnership.</strong>{' '}
              We've seen it all across 25+ years of UAE business cases. That experience lets us move faster and work with precision others take years to build. Our teams spot risks early and opportunities quickly. To date, we've helped clients save AED 50 million+ in taxes and penalties avoided. You make decisions with numbers you trust.
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
            <Link to="/contact" className="hero__cta">
              <div className="hero__cta-content">
                <p className="hero__cta-primary">Schedule Your Complimentary Consultation</p>
                <p className="hero__cta-secondary">"Start Building a Stronger Financial Future"</p>
              </div>
            </Link>
          </div>
          <div className="hero__stats-card">
            {stats.map((stat, index) => (
              <div className="hero__stat" key={`${stat.value}-${index}`}>
                <p className={`hero__stat-value h6-montserrat ${stat.isStar ? 'hero__stat-value--stars' : ''}`}>{stat.value}</p>
                <div className="hero__stat-label-wrapper">
                  <p className="hero__stat-label h2-opensans-regular">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <ServicesSection />
      <HowItWorksSection />
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
