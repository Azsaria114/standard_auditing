import { useState, useEffect } from 'react'
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

function Insights() {
  // Hero slideshow data
  const heroSlides = [
    {
      featured: 'Featured',
      title: 'Free Zone Substance Gaps',
      title2: 'That Cost 0% Tax',
      description: 'Free zone incentives depend on meeting economic substance standards. Even minor gaps in structure or activity can result in the loss of 0% corporate tax eligibility.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop'
    },
    {
      featured: 'Featured',
      title: 'How To Get Back VAT Paid',
      title2: 'On Employee Benefits',
      description: 'Learn how to reclaim VAT paid on employee benefits and avoid common pitfalls in the process.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
    },
    {
      featured: 'Featured',
      title: 'Why Mixing Mainland and Free Zone',
      title2: 'Income Can Cost You 9% Tax',
      description: 'Understanding the tax implications of mixing mainland and free zone income is crucial for maintaining your tax benefits.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [heroSlides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Blog articles data
  const blogArticles = [
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      title: 'How To Get Back VAT Paid on Employee Benefits Without Problems',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      title: 'How Free Zone Businesses Can Protect Their 0% Tax Status',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
      title: 'Why Mixing Mainland and Free Zone Income Can Cost You 9% Tax',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      title: 'Related-Party Deals That Can Hurt Your Profits',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
      title: 'Why Reporting Losses Can Attract Tax Attention',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      title: 'Why Free Zone Companies Must Show Real UAE Presence',
      link: '#'
    }
  ]

  return (
    <main className="insights-page">
      {/* Hero Slideshow Section */}
      <section className="insights-hero">
        <div className="insights-hero__slideshow">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`insights-hero__slide ${index === currentSlide ? 'insights-hero__slide--active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="insights-hero__overlay"></div>
              <div className="insights-hero__content">
                <span className="insights-hero__featured">{slide.featured}</span>
                <h1 className="insights-hero__title h1-montserrat">
                  {slide.title}
                  {slide.title2 && <><br />{slide.title2}</>}
                </h1>
                <p className="insights-hero__description body-opensans">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="insights-hero__dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`insights-hero__dot ${index === currentSlide ? 'insights-hero__dot--active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="insights-blog">
        <div className="insights-blog__container">
          <h2 className="insights-blog__title h1-montserrat">Blog</h2>
          <div className="insights-blog__grid">
            {blogArticles.map((article, index) => (
              <article key={index} className="insights-blog__card">
                <div className="insights-blog__image-wrapper">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                  />
                </div>
                <div className="insights-blog__content">
                  <span className="insights-blog__tag small-body-opensans">Article</span>
                  <h3 className="insights-blog__card-title h4-montserrat">{article.title}</h3>
                  <a href={article.link} className="insights-blog__link body-opensans">
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </main>
  )
}

export default Insights





