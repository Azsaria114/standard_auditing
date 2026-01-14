import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Insights.css'
import { getAllBlogArticles, getFeaturedArticles } from '../services/contentfulService'

// Slugify function to match BlogArticlePage
function slugifyTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

// Newsletter Section (from Home.jsx)
function NewsletterSection() {
  return (
    <section className="newsletter-section" data-animate="fade-in" data-animate-delay="0.2">
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

function Insights() {
  // Hero slideshow data
  const heroSlides = [
    {
      featured: 'Featured',
      title: 'Free Zone Substance Gaps',
      title2: 'That Cost 0% Tax',
      fullTitle: 'Why Free Zone Companies Must Show Real UAE Presence',
      description: 'Free zone incentives depend on meeting economic substance standards. Even minor gaps in structure or activity can result in the loss of 0% corporate tax eligibility.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop',
      slug: slugifyTitle('Why Free Zone Companies Must Show Real UAE Presence')
    },
    {
      featured: 'Featured',
      title: 'How To Get Back VAT Paid',
      title2: 'On Employee Benefits',
      fullTitle: 'How To Get Back* VAT Paid on Employee Benefits Without Problems',
      description: 'Learn how to reclaim VAT paid on employee benefits and avoid common pitfalls in the process.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
      slug: slugifyTitle('How To Get Back* VAT Paid on Employee Benefits Without Problems')
    },
    {
      featured: 'Featured',
      title: 'Why Mixing Mainland and Free Zone',
      title2: 'Income Can Cost You 9% Tax',
      fullTitle: 'Why Mixing Mainland and Free Zone Income Can Cost You 9% Tax',
      description: 'Understanding the tax implications of mixing mainland and free zone income is crucial for maintaining your tax benefits.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
      slug: slugifyTitle('Why Mixing Mainland and Free Zone Income Can Cost You 9% Tax')
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [blogArticles, setBlogArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [dynamicHeroSlides, setDynamicHeroSlides] = useState(heroSlides)

  // Fetch blog articles from Contentful
  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true)
        const articles = await getAllBlogArticles()
        
        // Transform for the blog grid (only need title, image, slug)
        const formattedArticles = articles.map(article => ({
          image: article.featuredImage || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
          title: article.title,
          slug: article.slug,
        }))
        setBlogArticles(formattedArticles)

        // Try to fetch featured articles for hero slides
        const featured = await getFeaturedArticles(3)
        if (featured.length > 0) {
          const featuredSlides = featured.map((article, index) => {
            // Split title into two parts if it's long
            const words = article.title.split(' ')
            const midPoint = Math.ceil(words.length / 2)
            const title1 = words.slice(0, midPoint).join(' ')
            const title2 = words.slice(midPoint).join(' ')
            
            return {
              featured: 'Featured',
              title: title1,
              title2: title2,
              fullTitle: article.title,
              description: article.intro || 'Read our latest insights on tax and compliance.',
              image: article.featuredImage || 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop',
              slug: article.slug,
            }
          })
          setDynamicHeroSlides(featuredSlides)
        }
      } catch (error) {
        console.error('Error fetching blog articles:', error)
        // Keep default data on error
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  // Auto-advance slideshow
  useEffect(() => {
    if (dynamicHeroSlides.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dynamicHeroSlides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [dynamicHeroSlides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <main className="insights-page">
      {/* Hero Slideshow Section */}
      <section className="insights-hero" data-animate="fade-in" data-animate-delay="0">
        <div className="insights-hero__slideshow">
          {dynamicHeroSlides.map((slide, index) => (
            <div
              key={index}
              className={`insights-hero__slide ${index === currentSlide ? 'insights-hero__slide--active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="insights-hero__overlay"></div>
              <Link to={`/insights/article/${slide.slug}`} className="insights-hero__content">
                <span className="insights-hero__featured">{slide.featured}</span>
                <h1 className="insights-hero__title h1-montserrat">
                  {slide.title}
                  {slide.title2 && <><br />{slide.title2}</>}
                </h1>
                <p className="insights-hero__description body-opensans">
                  {slide.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div className="insights-hero__dots">
          {dynamicHeroSlides.map((_, index) => (
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
      <section className="insights-blog" data-animate="slide-up" data-animate-delay="0.1">
        <div className="insights-blog__container">
          <h2 className="insights-blog__title h1-montserrat">Blog</h2>
          {loading ? (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
              <p className="body-opensans">Loading articles...</p>
            </div>
          ) : (
            <div className="insights-blog__grid">
              {blogArticles.length > 0 ? (
                blogArticles.map((article, index) => (
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
                  <Link to={`/insights/article/${article.slug}`} className="insights-blog__link body-opensans">
                    Read more
                  </Link>
                </div>
              </article>
                ))
              ) : (
                <div style={{ padding: '2rem', textAlign: 'center', gridColumn: '1 / -1' }}>
                  <p className="body-opensans">No articles available at the moment.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </main>
  )
}

export default Insights
