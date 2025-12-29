import React from 'react'
import './App.css'
import frame905 from './assets/Frame 905.png'
import frame647 from './assets/Frame 647.png'
import jyothi from './assets/Jyothi.jpg'
import kiran from './assets/Kiran.jpg'
import manoj from './assets/Manoj.jpg'
import nathan from './assets/Nathan.png'
import ramachandran from './assets/Ramachandran.jpg'
import vikram from './assets/Vikram.jpg'
import jafzaLogo from './assets/jafza.jpeg'
import dmccLogo from './assets/dmcc.jpeg'
import dafzaLogo from './assets/dubai_free_zone.jpeg'
import difcLogo from './assets/dubai_international.jpeg'
import shamsLogo from './assets/media city.jpeg'
import whatWeStandForImage from './assets/what we stand for.jpeg'

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
              We are dedicated to redefining the way businesses achieve financial clarity and compliance.
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
                  <img src={jafzaLogo} alt="Jafza - Jebel Ali Free Zone" />
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
                  <img src={jafzaLogo} alt="Jafza - Jebel Ali Free Zone" />
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
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H15M9 3V9M15 3H19C20.1046 3 21 3.89543 21 5V9M15 3V9M3 9V15M3 9H9M21 9V15M21 9H15M9 15V21M9 15H15M15 15V21M15 15H9M9 21H5C3.89543 21 3 20.1046 3 19V15M15 21H19C20.1046 21 21 20.1046 21 19V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 5V11C4 15.5 7.5 19.2 12 20.5C16.5 19.2 20 15.5 20 11V5L12 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M4 20H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M4 20V4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M4 18L6.5 15.5L9 17L11.5 13L14 15L16.5 11L19 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 13L21.5 10.5L19 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
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
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.6" />
          <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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

        {/* Stay Ahead Newsletter Section */}
        <section className="about-newsletter" style={{ backgroundImage: `url(${frame905})` }}>
          <div className="about-newsletter__container">
            <h2 className="about-newsletter__title h1-montserrat">Stay Ahead of Every Financial Rule Before It Affects Your Business</h2>
            <p className="about-newsletter__description body-opensans">
              <span className="about-newsletter__diamond-start">✦</span>Weekly insights to help Dubai business leaders cut costs, avoid tax trouble, & keep more of their profits.<span className="about-newsletter__diamond-end">✦</span>
            </p>
            <form className="about-newsletter__form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="about-newsletter__input body-opensans"
                required
              />
              <button type="submit" className="about-newsletter__button body-opensans">
                <span className="about-newsletter__button-text">Subscribe</span>
              </button>
            </form>
            <p className="about-newsletter__disclaimer small-body-opensans">
              By subscribing, you agree to receive insider-information from our team.
            </p>
          </div>
        </section>
    </main>
  )
}

export default About

