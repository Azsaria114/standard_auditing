import './App.css'

function About() {
  return (
    <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero__container">
            <div className="about-hero__content">
              <h1 className="about-hero__title h1-montserrat">
                <span className="about-hero__title-line-1">We are dedicated to redefining the</span>
                <span className="about-hero__title-line-2">way businesses achieve financial</span>
                <span className="about-hero__title-line-3">clarity and compliance.</span>
              </h1>
            </div>
            <div className="about-hero__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
                alt="Team meeting and presentation"
                loading="lazy"
              />
            </div>
          </div>
          <div className="about-hero__band">
            <p className="about-hero__band-text body-opensans">
              Every audit we conduct, every report we deliver, reflects our dedication to accuracy and transparency.
              From financial reviews to strategic advisory, we create value that strengthens your business at every level.
              Our goal is to be your trusted partner in achieving lasting financial confidence and growth.
            </p>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="about-intro">
          <div className="about-intro__grid">
            <div className="about-intro__text">
              <div className="about-intro__chip small-body-opensans">Who We Are</div>
              <h2 className="about-intro__title h3-montserrat">
                Your Trusted Partner <br /> in Smart Financial Solutions
              </h2>
              <p className="about-intro__description body-opensans">
                We are a team of experienced professionals dedicated to delivering transparent, data-driven, and personalized
                financial support that helps businesses grow with confidence.
              </p>
            </div>
            <div className="about-intro__media">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                alt="Professional business meeting discussion"
                loading="lazy"
              />
              <div className="about-intro__stats">
                <div className="about-intro__stat-card">
                  <div className="about-intro__stat-header">
                    <div className="about-intro__stat-label small-body-opensans">Audit Accuracy Score</div>
                    <span className="about-intro__stat-value small-body-opensans">95%</span>
                  </div>
                  <div className="about-intro__stat-bar">
                    <span style={{ width: '95%' }} />
                  </div>
                </div>
                <div className="about-intro__stat-card">
                  <div className="about-intro__stat-header">
                    <div className="about-intro__stat-label small-body-opensans">Client Satisfaction Rate</div>
                    <span className="about-intro__stat-value small-body-opensans">94%</span>
                  </div>
                  <div className="about-intro__stat-bar">
                    <span style={{ width: '94%' }} />
                  </div>
                </div>
              </div>
              <div className="about-intro__callout">
                <h3 className="about-intro__callout-title h5-montserrat">A Team You Can Rely On</h3>
                <p className="about-intro__callout-text small-body-opensans">
                  We're committed to guiding businesses with clarity, integrity, and expert support every step of the way.
                </p>
                <ul className="about-intro__callout-list small-body-opensans">
                  <li>25+ Years of Experience</li>
                  <li>4000+ Successful Projects</li>
                  <li>94% Client Satisfaction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
       {/* Our Core Values */}
<section className="core-values">
  <div className="core-values__header">
    <h2 className="core-values__title">Our Core Values</h2>
    <p className="core-values__subtitle">
      The foundation of Standard Auditing is built on principles that guide our work,
      inspire our team, and ensure we deliver excellence in every engagement.
    </p>
  </div>

  <div className="core-values__grid">
    {/* Integrity */}
    <div className="core-card">
      <div className="core-card__icon">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 5V11C4 15.5 7.5 19.2 12 20.5C16.5 19.2 20 15.5 20 11V5L12 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="core-card__content">
        <h3>Integrity</h3>
        <p>
          We uphold the highest ethical standards, ensuring honesty, fairness,
          and transparency in every engagement we undertake.
        </p>
      </div>
    </div>

    {/* Accuracy */}
    <div className="core-card">
      <div className="core-card__icon">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 3V21M3 12H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      </div>
      <div className="core-card__content">
        <h3>Accuracy</h3>
        <p>
          Precision is the foundation of our work. Every report and analysis we
          deliver reflects our commitment to detail and excellence.
        </p>
      </div>
    </div>

    {/* Reliability (tall) */}
    <div className="core-card core-card--tall">
      <div className="core-card__icon">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M8 9.5C8 8.9 8.4 8.5 9 8.5H9.5V7C9.5 6.4 9.9 6 10.5 6H13.5C14.1 6 14.5 6.4 14.5 7V8.5H15C15.6 8.5 16 8.9 16 9.5V11.5C16 12.1 15.6 12.5 15 12.5H14.5V14C14.5 14.6 14.1 15 13.5 15H10.5C9.9 15 9.5 14.6 9.5 14V12.5H9C8.4 12.5 8 12.1 8 11.5V9.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.5 16.5C6.2 16.5 6 16.7 6 17V17.5C6 17.8 6.2 18 6.5 18H7.5C7.8 18 8 17.8 8 17.5V17C8 16.7 7.8 16.5 7.5 16.5H6.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.5 16.5C17.2 16.5 17 16.7 17 17V17.5C17 17.8 17.2 18 17.5 18H18.5C18.8 18 19 17.8 19 17.5V17C19 16.7 18.8 16.5 18.5 16.5H17.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="core-card__content">
        <h3>Reliability</h3>
        <p>
          We deliver consistent and dependable results through meticulous processes
          and unwavering commitment to quality.
          <br /><br />
          Our clients trust us to provide accurate insights and timely support that
          strengthen long-term professional relationships.
        </p>
      </div>
    </div>

    {/* Progress (wide) */}
    <div className="core-card core-card--wide">
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
          We believe growth comes from continuous learning and innovation.
          By embracing new technologies, evolving financial standards, and modern audit practices, we ensure
          our clients stay ahead in a rapidly changing business landscape.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Our Team Section */}
        <section className="about-team">
          <div className="about-team__container">
            <div className="about-team__header">
              <h2 className="about-team__title h3-montserrat">Our Team</h2>
              <p className="about-team__subtitle small-body-opensans">
                Every member of Standard Auditing brings deep industry expertise and a shared commitment to integrity and accuracy.
                We take pride in the dedication, precision, and professionalism of our team. Together, we transform complex
                financial data into clear, strategic insights that empower businesses to grow with confidence.
              </p>
            </div>
            <div className="about-team__people">
              <div className="about-team__person">
                <div className="about-team__avatar about-team__avatar--1" />
                <div className="about-team__name h6-montserrat">Ravi Menon</div>
                <div className="about-team__role small-body-opensans">Managing Partner</div>
              </div>
              <div className="about-team__person">
                <div className="about-team__avatar about-team__avatar--2" />
                <div className="about-team__name h6-montserrat">Alex Lee</div>
                <div className="about-team__role small-body-opensans">Director</div>
              </div>
              <div className="about-team__person">
                <div className="about-team__avatar about-team__avatar--3" />
                <div className="about-team__name h6-montserrat">Priya Nair</div>
                <div className="about-team__role small-body-opensans">Engagement Lead</div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Our Insights Section */}
        <section className="about-insights">
          <div className="about-insights__container">
            <div className="about-insights__header">
              <span className="about-insights__tag h3-opensans-semibold">Insights</span>
              <h2 className="about-insights__title h1-montserrat">Explore Our Insights</h2>
            </div>
            <div className="about-insights__grid">
              <div className="about-insights__card">
                <h3 className="about-insights__card-title h5-montserrat">Industry Updates</h3>
                <p className="about-insights__card-text body-opensans">
                  Stay informed with the latest trends, regulations, and changes in the financial and auditing landscape.
                </p>
                <button type="button" className="about-insights__card-button body-opensans">
                  Read More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="about-insights__card">
                <h3 className="about-insights__card-title h5-montserrat">Case Studies</h3>
                <p className="about-insights__card-text body-opensans">
                  Discover how we've helped businesses achieve financial clarity and compliance through real-world examples.
                </p>
                <button type="button" className="about-insights__card-button body-opensans">
                  View Case Study
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="about-insights__card">
                <h3 className="about-insights__card-title h5-montserrat">Expert Guides</h3>
                <p className="about-insights__card-text body-opensans">
                  Access comprehensive guides and resources to help you navigate complex financial and tax requirements.
                </p>
                <button type="button" className="about-insights__card-button body-opensans">
                  Download
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Ahead Newsletter Section */}
        <section className="about-newsletter">
          <div className="about-newsletter__container">
            <h2 className="about-newsletter__title h1-montserrat">Stay Ahead With Smarter Financial Insights</h2>
            <form className="about-newsletter__form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="about-newsletter__input body-opensans"
                required
              />
              <button type="submit" className="about-newsletter__button body-opensans">
                Subscribe
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </section>
    </main>
  )
}

export default About

