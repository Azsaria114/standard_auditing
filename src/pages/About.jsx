import React from 'react'
import './About.css'
import NewsletterSection from '../components/NewsletterSection'
import section2Image from '../assets/section2.jpg'

const coreValues = [
  {
    title: 'Integrity',
    description: 'We uphold the highest ethical standards, ensuring honesty, fairness, and transparency in every engagement we undertake.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Accuracy',
    description: 'Precision is the foundation of our work. Every report and analysis we deliver reflects our commitment to detail and excellence.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: 'Reliability',
    description: 'We deliver consistent and dependable results through meticulous processes and unwavering commitment to quality.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Progress',
    description: 'We believe growth comes from continuous learning and innovation. By embracing new technologies, we ensure our clients stay ahead.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

const teamMembers = [
  {
    name: 'Ravi Menon',
    role: 'Managing Partner',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop'
  },
  {
    name: 'Sarah Ahmed',
    role: 'Senior Auditor',
    image: 'https://images.unsplash.com/photo-1573496359-136d4755f340?w=400&h=400&fit=crop'
  },
  {
    name: 'Mohammed Ali',
    role: 'Tax Consultant',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  },
  {
    name: 'Elena Rodriguez',
    role: 'VAT Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
  }
]

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__content">
          <h1 className="about-hero__title h1-montserrat">
            We are dedicated to redefining the way businesses achieve financial clarity and compliance.
          </h1>
          <div className="about-hero__image-wrapper">
            <img 
              src={section2Image} 
              alt="Standard Auditing Team Meeting" 
              className="about-hero__image"
            />
          </div>
        </div>
      </section>

      {/* Intro / Stats Section */}
      <section className="about-intro">
        <div className="about-intro__container">
          <div className="about-intro__content">
            <span className="small-body-opensans" style={{ color: '#0A3D62', fontWeight: '600', display: 'block', marginBottom: '1rem' }}>Who We Are</span>
            <h2 className="h2-montserrat">Your Trusted Partner in Smart Financial Solutions</h2>
            <p className="body-opensans" style={{ color: '#475569', marginBottom: '1.5rem' }}>
              We are a team of experienced professionals dedicated to delivering transparent, data-driven, and personalized financial support that helps businesses grow with confidence.
            </p>
            <div className="about-intro__stats">
              <div className="about-intro__stat-card">
                <span className="about-intro__stat-value">90%</span>
                <span className="about-intro__stat-label">Audit Accuracy Score</span>
              </div>
              <div className="about-intro__stat-card">
                <span className="about-intro__stat-value">94%</span>
                <span className="about-intro__stat-label">Client Satisfaction Rate</span>
              </div>
            </div>
          </div>
          <div className="about-intro__card" style={{ background: '#fff', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3 className="h4-montserrat" style={{ color: '#0A3D62', marginBottom: '1rem' }}>A Team You Can Rely On</h3>
            <p className="body-opensans" style={{ color: '#64748b', marginBottom: '1.5rem' }}>
              We're committed to guiding businesses with clarity, integrity, and expert support every step of the way.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: '#0A3D62', fontWeight: '500' }}>
                <span>→</span> 10+ Years of Experience
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: '#0A3D62', fontWeight: '500' }}>
                <span>→</span> 300+ Successful Projects
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#0A3D62', fontWeight: '500' }}>
                <span>→</span> 95% Client Satisfaction
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <h2 className="core-values__title h2-montserrat">Our Core Values</h2>
        <p className="core-values__description body-opensans">
          The foundation of Standard Auditing is built on principles that guide our work, inspire our team, and ensure we deliver excellence in every engagement.
        </p>
        <div className="core-values__grid">
          {coreValues.map((value, index) => (
            <div key={index} className="core-values__card">
              <div className="core-values__icon">
                {value.icon}
              </div>
              <h3 className="h4-montserrat">{value.title}</h3>
              <p className="body-opensans">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="our-team">
        <h2 className="our-team__title h2-montserrat">Our Team</h2>
        <p className="our-team__description body-opensans">
          We take pride in the dedication, precision, and professionalism of our team. Every member of Standard Auditing brings deep industry expertise.
        </p>
        <div className="our-team__grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="our-team__card">
              <div className="our-team__image-wrapper">
                <img src={member.image} alt={member.name} className="our-team__image" />
              </div>
              <h3 className="our-team__name h5-montserrat">{member.name}</h3>
              <p className="our-team__role body-opensans">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Insights Section */}
      <section className="insights-section">
        <div className="insights-section__header">
          <span className="small-body-opensans" style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: '#E0F2FE', color: '#0A3D62', borderRadius: '20px', marginBottom: '1rem', fontWeight: '600' }}>Insights</span>
          <h2 className="insights-section__title h2-montserrat">Explore Our Insights</h2>
          <p className="body-opensans" style={{ maxWidth: '700px', margin: '0 auto 3rem', color: '#64748b' }}>
            At Standard Auditing, we believe knowledge builds confidence. Explore our curated resources to stay informed about the latest in auditing, compliance, and financial best practices.
          </p>
        </div>
        <div className="insights-section__grid">
          <div className="insights-card">
            <h3 className="h4-montserrat">Industry Updates</h3>
            <p className="body-opensans">Stay current with the latest auditing trends and compliance changes.</p>
            <button className="insights-card__btn">Read More</button>
          </div>
          <div className="insights-card">
            <h3 className="h4-montserrat">Case Studies</h3>
            <p className="body-opensans">See how we help clients improve accuracy and meet standards.</p>
            <button className="insights-card__btn">View Case Study</button>
          </div>
          <div className="insights-card">
            <h3 className="h4-montserrat">Expert Guides</h3>
            <p className="body-opensans">Get simple, practical tips to make audits smoother and smarter.</p>
            <button className="insights-card__btn">Download</button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection 
        title="Stay Ahead With Smarter Financial Insights"
        description="Get expert-curated auditing tips, compliance updates, and business finance insights — delivered straight to your inbox. Join leaders who trust us to keep them informed."
      />
    </div>
  )
}

export default About

