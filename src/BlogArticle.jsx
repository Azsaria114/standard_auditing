import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import standardAuditingLogo from './assets/standard_auditing_logo.png'

function BlogArticle({ 
  category = "VAT",
  title = "Article Title",
  intro = "Article introduction text",
  author = "Standard Auditing Team",
  authorRole = "Content Writer",
  authorImage = null,
  date = "January 15, 2025",
  readTime = "5 min read",
  featuredImage = null,
  content = [],
  conclusion = "",
  disclaimer = "",
  relatedArticles = []
}) {
  const [readingProgress, setReadingProgress] = useState(0)
  const [activeHeading, setActiveHeading] = useState(null)
  const [isConclusionVisible, setIsConclusionVisible] = useState(false)

  // Extract headings from content
  const headings = content
    .map((section, index) => {
      if (section.type === 'heading') {
        return { id: `heading-${index}`, text: section.text, index }
      }
      return null
    })
    .filter(Boolean)

  // Add conclusion to headings if it exists
  if (conclusion) {
    headings.push({ id: 'conclusion', text: 'Conclusion', index: content.length })
  }

  useEffect(() => {
    const updateReadingProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setReadingProgress(Math.min(100, Math.max(0, progress)))
    }

    const updateActiveHeading = () => {
      const scrollPosition = window.pageYOffset + 200 // Offset for better detection
      
      // Check each heading
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i]
        const element = document.getElementById(heading.id)
        if (element) {
          const elementTop = element.offsetTop
          if (scrollPosition >= elementTop) {
            setActiveHeading(heading.id)
            break
          }
        }
      }
    }

    const checkConclusionVisibility = () => {
      // Check if we're near the end of the main content area
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const contentContainer = document.querySelector('.blog-article__content-container')
      
      if (contentContainer) {
        const containerRect = contentContainer.getBoundingClientRect()
        const containerTop = scrollTop + containerRect.top
        const containerHeight = containerRect.height
        const containerBottom = containerTop + containerHeight
        
        // Make timeline scrollable when user has scrolled past 80% of the content
        const scrollProgress = (scrollTop + windowHeight - containerTop) / containerHeight
        const shouldBeScrollable = scrollProgress >= 0.8
        
        setIsConclusionVisible(shouldBeScrollable)
      }
    }

    window.addEventListener('scroll', updateReadingProgress)
    window.addEventListener('scroll', updateActiveHeading)
    window.addEventListener('scroll', checkConclusionVisibility)
    window.addEventListener('resize', checkConclusionVisibility)
    updateReadingProgress()
    updateActiveHeading()
    // Delay to ensure DOM is ready
    setTimeout(checkConclusionVisibility, 100)

    return () => {
      window.removeEventListener('scroll', updateReadingProgress)
      window.removeEventListener('scroll', updateActiveHeading)
      window.removeEventListener('scroll', checkConclusionVisibility)
      window.removeEventListener('resize', checkConclusionVisibility)
    }
  }, [headings])

  return (
    <main className="blog-article">
      {/* Reading Progress Indicator */}
      <div className="blog-article__progress-bar">
        <div 
          className="blog-article__progress-fill" 
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Full-Width Hero Section with Background Image */}
      <section className="blog-article__hero">
        {featuredImage && (
          <div className="blog-article__hero-background">
            <img src={featuredImage} alt={title} loading="eager" />
            <div className="blog-article__hero-overlay"></div>
          </div>
        )}
        
        {/* Back to Insights Link */}
        <Link to="/insights" className="blog-article__back-link">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="blog-article__back-text">Back to Insights</span>
        </Link>

        {/* Hero Content - Centered */}
        <div className="blog-article__hero-content">
          <p className="blog-article__hero-category small-body-opensans">{category}</p>
          <h1 className="blog-article__hero-title h1-montserrat">{title}</h1>
        </div>

        {/* Read More at Bottom */}
        <a href="#content" className="blog-article__hero-read-more">
          <span className="blog-article__hero-read-text">Read More</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>

      {/* Main Content Area - Three Column Layout */}
      <div className="blog-article__main-wrapper">
        <div className="blog-article__main-container">
          {/* Left Sidebar - Timeline Navigation */}
          {headings.length > 0 && (
            <aside className={`blog-article__timeline ${isConclusionVisible ? 'blog-article__timeline--scrollable' : ''}`}>
              <div className="blog-article__timeline-line"></div>
              <nav className="blog-article__timeline-nav">
                {headings.map((heading, index) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`blog-article__timeline-item ${activeHeading === heading.id ? 'blog-article__timeline-item--active' : ''}`}
                  >
                    <span className="blog-article__timeline-dot"></span>
                    <span className="blog-article__timeline-text">{heading.text}</span>
                  </a>
                ))}
              </nav>
            </aside>
          )}

          {/* Center Column - Main Article Content */}
          <article id="content" className="blog-article__content">
            <div className="blog-article__content-container">
              {/* Author and Date Info */}
              <div className="blog-article__meta-info">
                <span className="blog-article__author-name-inline">by {author}</span>
                <span className="blog-article__meta-separator"> | </span>
                <span className="blog-article__date">{date}</span>
              </div>

              {content.map((section, index) => {
                // Helper function to render paragraph with highlights
                const renderParagraph = (text, highlights = []) => {
                  if (!highlights || highlights.length === 0) {
                    return text;
                  }
                  
                  let result = [];
                  let lastIndex = 0;
                  let keyCounter = 0;
                  
                  // Sort highlights by position
                  const sortedHighlights = highlights
                    .map(highlight => {
                      const index = text.indexOf(highlight.text);
                      return { ...highlight, index };
                    })
                    .filter(h => h.index !== -1)
                    .sort((a, b) => a.index - b.index);
                  
                  sortedHighlights.forEach((highlight) => {
                    // Add text before highlight
                    if (highlight.index > lastIndex) {
                      result.push(
                        <React.Fragment key={`text-${keyCounter++}`}>
                          {text.substring(lastIndex, highlight.index)}
                        </React.Fragment>
                      );
                    }
                    
                    // Add highlighted text
                    const className = `blog-article__highlight blog-article__highlight--${highlight.color} ${highlight.bold ? 'blog-article__highlight--bold' : ''}`;
                    result.push(
                      <span key={`highlight-${keyCounter++}`} className={className}>
                        {highlight.text}
                      </span>
                    );
                    
                    lastIndex = highlight.index + highlight.text.length;
                  });
                  
                  // Add remaining text
                  if (lastIndex < text.length) {
                    result.push(
                      <React.Fragment key={`text-${keyCounter++}`}>
                        {text.substring(lastIndex)}
                      </React.Fragment>
                    );
                  }
                  
                  return result;
                };

                return (
                  <div key={index} className="blog-article__section">
                    {section.type === 'heading' && (
                      <h2 id={`heading-${index}`} className={`blog-article__heading h2-montserrat ${section.semibold ? 'blog-article__heading--semibold' : ''}`}>{section.text}</h2>
                    )}
                
                    {section.type === 'paragraph' && (
                      <p className={`blog-article__paragraph body-opensans ${section.color ? `blog-article__paragraph--${section.color}` : ''}`}>
                        {section.highlights ? renderParagraph(section.text, section.highlights, section.color) : section.text}
                      </p>
                    )}
                
                    {section.type === 'list' && (
                      <div className="blog-article__list-wrapper">
                        {section.title && (
                          <p className="blog-article__list-title body-opensans">{section.title}</p>
                        )}
                        <ul className="blog-article__list">
                          {section.items.map((item, itemIndex) => {
                            const renderDescription = (text, highlights = []) => {
                              if (!highlights || highlights.length === 0) {
                                return text;
                              }
                              
                              let result = [];
                              let lastIndex = 0;
                              let keyCounter = 0;
                              
                              const sortedHighlights = highlights
                                .map(highlight => {
                                  const index = text.indexOf(highlight.text);
                                  return { ...highlight, index };
                                })
                                .filter(h => h.index !== -1)
                                .sort((a, b) => a.index - b.index);
                              
                              sortedHighlights.forEach((highlight) => {
                                if (highlight.index > lastIndex) {
                                  result.push(
                                    <React.Fragment key={`text-${keyCounter++}`}>
                                      {text.substring(lastIndex, highlight.index)}
                                    </React.Fragment>
                                  );
                                }
                                
                                const className = `blog-article__highlight blog-article__highlight--${highlight.color} ${highlight.bold ? 'blog-article__highlight--bold' : ''}`;
                                result.push(
                                  <span key={`highlight-${keyCounter++}`} className={className}>
                                    {highlight.text}
                                  </span>
                                );
                                
                                lastIndex = highlight.index + highlight.text.length;
                              });
                              
                              if (lastIndex < text.length) {
                                result.push(
                                  <React.Fragment key={`text-${keyCounter++}`}>
                                    {text.substring(lastIndex)}
                                  </React.Fragment>
                                );
                              }
                              
                              return result;
                            };

                            return (
                              <li key={itemIndex} className="blog-article__list-item body-opensans">
                                {typeof item === 'object' && item.title ? (
                                  <>
                                    <span className="blog-article__list-item-title blog-article__highlight blog-article__highlight--blue blog-article__highlight--bold">
                                      {item.title}
                                    </span>
                                    {item.description && (
                                      <span className="blog-article__list-item-description">
                                        {item.highlights ? renderDescription(item.description, item.highlights) : item.description}
                                      </span>
                                    )}
                                  </>
                                ) : (
                                  item
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
              
                  {section.type === 'callout' && (
                    <div className={`blog-article__callout blog-article__callout--${section.variant}`}>
                      <div className="blog-article__callout-icon">
                        {section.variant === 'insight' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {section.variant === 'mistake' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M12 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        )}
                        {section.variant === 'warning' && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 9V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M12 17H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        )}
                      </div>
                      <div className="blog-article__callout-content">
                        <h3 className="blog-article__callout-title h4-montserrat">{section.title}</h3>
                        {section.text && (
                          <p className="blog-article__callout-text body-opensans">{section.text}</p>
                        )}
                        {section.items && (
                          <ul className="blog-article__callout-list">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="blog-article__callout-item body-opensans">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
              
                    {section.type === 'image' && (
                      <div className="blog-article__image">
                        <img src={section.src} alt={section.alt || ''} loading="lazy" />
                        {section.caption && (
                          <p className="blog-article__image-caption small-body-opensans">{section.caption}</p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Conclusion Section */}
              {conclusion && (
                <div id="conclusion" className="blog-article__conclusion-section">
                  <h2 className="blog-article__conclusion-title h2-montserrat">Conclusion</h2>
                  <div className="blog-article__conclusion-text-wrapper">
                    {Array.isArray(conclusion) ? (
                      conclusion.map((para, index) => (
                        <p key={index} className="blog-article__conclusion-text body-opensans">{para}</p>
                      ))
                    ) : (
                      <p className="blog-article__conclusion-text body-opensans">{conclusion}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>

      {/* Disclaimer Block */}
      {disclaimer && (
        <section className="blog-article__disclaimer">
          <div className="blog-article__disclaimer-container">
            <p className="blog-article__disclaimer-text small-body-opensans">{disclaimer}</p>
          </div>
        </section>
      )}

      {/* Related Blog Posts Section */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="blog-article__related-posts">
          <div className="blog-article__related-posts-container">
            <h2 className="blog-article__related-posts-title h1-montserrat">More Like This</h2>
            <div className="blog-article__related-posts-grid">
              {relatedArticles.slice(0, 3).map((article, index) => (
                <article key={index} className="blog-article__related-post-card">
                  <Link to={article.link || '#'} className="blog-article__related-post-link">
                    <div className="blog-article__related-post-image-wrapper">
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                      />
                    </div>
                    <div className="blog-article__related-post-content">
                      <span className="blog-article__related-post-tag small-body-opensans">Article</span>
                      <h3 className="blog-article__related-post-title h4-montserrat">{article.title}</h3>
                      <span className="blog-article__related-post-read-more body-opensans">Read more</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
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
              <li><Link to="/services/tax-advisory" className="body-opensans">Tax Advisory</Link></li>
              <li><Link to="/services/corporate-tax" className="body-opensans">Corporate Tax</Link></li>
              <li><Link to="/services/auditing" className="body-opensans">Auditing</Link></li>
              <li><Link to="/services/accounting-bookkeeping" className="body-opensans">Accounting & Bookkeeping</Link></li>
              <li><Link to="/services/vat" className="body-opensans">VAT</Link></li>
              <li><Link to="/services/company-formation" className="body-opensans">Company Formation</Link></li>
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
              <li><Link to="/careers" className="body-opensans">Careers</Link></li>
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
    </main>
  )
}

export default BlogArticle

