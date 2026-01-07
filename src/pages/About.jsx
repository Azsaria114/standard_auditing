import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/About.css'
import frame647 from '../assets/Frame 647.png'
import jyothi from '../assets/Jyothi.jpg'
import kiran from '../assets/Kiran.jpg'
import manoj from '../assets/Manoj.jpg'
import nathan from '../assets/Nathan.png'
import ramachandran from '../assets/Ramachandran.jpg'
import vikram from '../assets/Vikram.jpg'
// Partner logos for About page - using public folder for better Vercel compatibility (renamed to remove spaces)
const jafzaLogo = '/jafza.jpeg'
const dmccLogo = '/dmcc.jpeg'
const dafzaLogo = '/dubai_free_zone.jpeg'
const difcLogo = '/dubai_international.jpeg'
const shamsLogo = '/media-city.jpeg'
const whatWeStandForImage = '/what-we-stand-for.jpeg'
// Core Values Icons
import accountabilityIcon from '../assets/puzzle.svg?url'
import integrityIcon from '../assets/shield.svg?url'
import progressIcon from '../assets/rocket.svg?url'
import precisionIcon from '../assets/precsion.svg?url'
import speedIcon from '../assets/speed.svg?url'
import transparencyIcon from '../assets/maginify.svg?url'

function About() {
  const teamMembers = [
    { name: 'M.S. Nathan', role: 'Chief Executive Officer (CEO)', image: nathan },
    { name: 'Vikram Naganathan', role: 'Operations', image: vikram },
    { name: 'Manoj Chatturvedi', role: 'Senior Auditor', image: manoj },
    { name: 'Ramachandran.M', role: 'Senior Accountant', image: ramachandran },
    { name: 'Jyothilekshmi.I', role: 'Administrator', image: jyothi },
    { name: 'Kiran Krishnadas', role: 'Sales & Marketing Executive', image: kiran }
  ]
  
  // Removed carousel code - using static grid layout instead
  return (
    <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero__content">
            <h1 className="about-hero__title h1-montserrat">
              Your Trusted Partner in Achieving Financial Clarity & Protecting Your Profits.
            </h1>
            <div className="about-hero__image-wrapper">
              <img 
                src={frame647} 
                alt="Standard Auditing Team Meeting" 
                className="about-hero__image"
              />
            </div>
          </div>
          <div className="about-hero__support-section">
            <div className="about-hero__support-content">
              <p className="about-hero__support-text body-opensans">
                As a business owner you may already have accountants. What makes the difference is the people behind the work. Our team brings decades of hands-on experience in audits, tax and compliance. We have worked together for years. That continuity builds strong judgment and reliable systems. The result is faster execution and cleaner outcomes. You get financial control you can rely on.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Logos Section */}
        <section className="about-partners">
          <div className="about-partners__container">
            <div className="about-partners__loop">
              <div className="about-partners__track">
                {/* First set - Order: Jafza, DAFZA, DIFC, Shams, DMCC */}
                <div className="about-partners__logo">
                  <img src={jafzaLogo} alt="Jafza - Jebel Ali Free Zone" loading="lazy" />
                </div>
                <div className="about-partners__logo">
                  <img src={dafzaLogo} alt="Dubai Airport Freezone" />
                </div>
                <div className="about-partners__logo">
                  <img src={difcLogo} alt="Dubai International Financial Centre" />
                </div>
                <div className="about-partners__logo">
                  <img src={shamsLogo} alt="Sharjah Media City" />
                </div>
                <div className="about-partners__logo">
                  <img src={dmccLogo} alt="DMCC - Dubai Multi Commodities Centre" />
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="about-partners__logo">
                  <img src={jafzaLogo} alt="Jafza - Jebel Ali Free Zone" loading="lazy" />
                </div>
                <div className="about-partners__logo">
                  <img src={dafzaLogo} alt="Dubai Airport Freezone" loading="lazy" />
                </div>
                <div className="about-partners__logo">
                  <img src={difcLogo} alt="Dubai International Financial Centre" loading="lazy" />
                </div>
                <div className="about-partners__logo">
                  <img src={shamsLogo} alt="Sharjah Media City" loading="lazy" />
                </div>
                <div className="about-partners__logo">
                  <img src={dmccLogo} alt="DMCC - Dubai Multi Commodities Centre" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different Section */}
        <section className="about-intro">
          <div className="about-intro__grid">
            <div className="about-intro__left">
              <div className="about-intro__chip small-body-opensans">Who We Are</div>
              <h2 className="about-intro__title h3-montserrat">
                What Makes Us Different
              </h2>
              <div className="about-intro__media">
                <img
                  src={whatWeStandForImage}
                  alt="Professional business meeting discussion"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="about-intro__right">
              <div className="about-intro__points">
                <div className="about-intro__point">
                  <span className="about-intro__point-number">01</span>
                  <div className="about-intro__point-content">
                    <h3 className="about-intro__point-title">We fix problems, not just paperwork</h3>
                    <p className="about-intro__point-description">Other firms send you reports. We give you clarity and solutions that plug financial leaks, lower your tax bill, and eliminate compliance headaches.</p>
                  </div>
                </div>
                <div className="about-intro__point">
                  <span className="about-intro__point-number">02</span>
                  <div className="about-intro__point-content">
                    <h3 className="about-intro__point-title">We're faster than in-house teams</h3>
                    <p className="about-intro__point-description">Our systems are built for accuracy and speed. You get clean books, compliant filings, and audit-ready records in 15 days or less after you submit your documents.</p>
                  </div>
                </div>
                <div className="about-intro__point">
                  <span className="about-intro__point-number">03</span>
                  <div className="about-intro__point-content">
                    <h3 className="about-intro__point-title">We catch what others miss</h3>
                    <p className="about-intro__point-description">We've completed over 4,000 projects. That means we spot the leaks, risks, and compliance gaps that cost you money, often before you know they exist.</p>
                  </div>
                </div>
                <div className="about-intro__point">
                  <span className="about-intro__point-number">04</span>
                  <div className="about-intro__point-content">
                    <h3 className="about-intro__point-title">We handle the stress. You focus on growth.</h3>
                    <p className="about-intro__point-description">Let us manage the complex compliance, deadlines, and financial details. You get peace of mind and more time to build your business.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
       {/* Our Core Values */}
<section className="core-values">
  <div className="core-values__header">
    <h2 className="core-values__title">Our Core Values</h2>
  </div>

  <div className="core-values__grid">
    {/* Accountability - Spans 2 columns on top left */}
    <div className="core-card core-card--accountability">
      <div className="core-card__icon">
        <img src={accountabilityIcon} alt="Accountability" />
      </div>
      <div className="core-card__content">
        <h3>Accountability</h3>
        <p>
          One team. One responsibility. One outcome. You get a partner who stands behind the work, and stands with you when you need support or answers.
        </p>
      </div>
    </div>

    {/* Integrity - Spans 1 column to the right of Accountability */}
    <div className="core-card core-card--integrity">
      <div className="core-card__icon">
        <img src={integrityIcon} alt="Integrity" />
      </div>
      <div className="core-card__content">
        <h3>Integrity</h3>
        <p>
          You get honest numbers, clear explanations, & transparent advice. No sugarcoating. No hidden agendas. Just the facts you need to make smart decisions.
        </p>
      </div>
    </div>

    {/* Progress - Spans 1 column on far right, but taller (spanning 2 rows) */}
    <div className="core-card core-card--progress">
      <div className="core-card__icon">
        <img src={progressIcon} alt="Progress" />
      </div>
      <div className="core-card__content">
        <h3>Progress</h3>
        <p>
          We work with tight processes and expert teams so you're never waiting on numbers, filings, or audits. Fast delivery. No missed deadlines.
        </p>
      </div>
    </div>

    {/* Precision - Bottom left, 1 column */}
    <div className="core-card core-card--precision">
      <div className="core-card__icon">
        <img src={precisionIcon} alt="Precision" />
      </div>
      <div className="core-card__content">
        <h3>Precision</h3>
        <p>
          Every report, filing, and calculation goes through a system built for accuracy and consistency. This protects you from penalties, errors, and bad decisions caused by unclear data.
        </p>
      </div>
    </div>

    {/* Speed - To the right of Precision, 1 column */}
    <div className="core-card core-card--speed">
      <div className="core-card__icon">
        <img src={speedIcon} alt="Speed" />
      </div>
      <div className="core-card__content">
        <h3>Speed</h3>
        <p>
          We work with tight processes and expert teams so you're never waiting on numbers, filings, or audits. Fast delivery. No missed deadlines.
        </p>
      </div>
    </div>

    {/* Transparency - Spans 2 columns on bottom right */}
    <div className="core-card core-card--transparency">
      <div className="core-card__icon">
        <img src={transparencyIcon} alt="Transparency" />
      </div>
      <div className="core-card__content">
        <h3>Transparency</h3>
        <p>
          You see exactly where your money goes, what we're working on, and how every decision impacts your business. Clear communication and full visibility, every single time.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Our Team Section */}
        <section className="about-team">
          <div className="about-team__container">
            <div className="about-team__badge small-body-opensans">Our Team</div>
            <h2 className="about-team__title h1-montserrat">Experts Who Bring Order & Insight to Your Business</h2>
            <p className="about-team__subtitle body-opensans">
              Every team member is trained to go beyond routine accounting. We analyze, advise, and guide you with clarity backed by decades of combined experience.
            </p>
            <div className="about-team__content">
              <div className="about-team__grid">
                {teamMembers.map((member, index) => (
                  <div 
                    key={index}
                    className="about-team__person"
                  >
                    <div className="about-team__image-wrapper">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="about-team__avatar"
                      />
                      <div className="about-team__info-card">
                        <div className="about-team__name h6-montserrat">{member.name}</div>
                        <div className="about-team__role small-body-opensans">{member.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section - Same as Home Page */}
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
    </main>
  )
}

export default About

