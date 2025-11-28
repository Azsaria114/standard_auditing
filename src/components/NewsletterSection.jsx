function NewsletterSection({ 
  title = "Your Business Finance Fix", 
  description = "Get weekly insights, checklists, and SME-friendly tips to manage cash flow, avoid fines, and keep more of your profits.Stay updated with guidance from certified tax consultants UAE and experienced Dubai corporate tax consultants."
}) {
  return (
    <section className="newsletter-section">
      <div className="newsletter-section__container">
        <h2 className="newsletter-section__title h1-montserrat">{title}</h2>
        <p className="newsletter-section__description body-opensans">
          {description}
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

export default NewsletterSection
