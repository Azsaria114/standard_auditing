import React, { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import blog1Hero from '../assets/blog1 hero.jpg'

// Local (page-level) newsletter section — matches the existing Insights/Home pattern.
function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-section__container">
        <h2 className="newsletter-section__title h1-montserrat">Your Business Finance Fix</h2>
        <p className="newsletter-section__description body-opensans">
          Get weekly insights, checklists, and SME-friendly tips to manage cash flow, avoid fines, and keep more of your profits.
          Stay updated with guidance from certified tax consultants UAE and experienced Dubai corporate tax consultants.
        </p>
        <button type="button" className="newsletter-section__cta">
          <span className="newsletter-section__cta-text">Sign up for free updates</span>
          <svg className="newsletter-section__cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  )
}

function slugifyTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

const ARTICLE_DEFINITIONS = [
  {
    category: 'VAT',
    title: 'How To Get Back* VAT Paid on Employee Benefits Without Problems',
    intro: '',
    author: 'Standard Auditing Team',
    authorRole: 'Content Writer',
    date: 'January 15, 2025',
    readTime: '5 min read',
    featuredImage: blog1Hero,
    content: [
      {
        type: 'paragraph',
        text: 'Many UAE businesses pay VAT every day without knowing they can legally claim some of it back. This is very common among businesses, especially those registered for VAT in 2024 or later.',
      },
      {
        type: 'paragraph',
        text: 'One area that is often missed is employee benefits.',
        highlights: [{ text: 'employee benefits', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'The good news?',
        highlights: [{ text: 'The good news?', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'You may be able to reclaim VAT on some employee costs without increasing audit risk, if it is done the right way and aligned with UAE VAT rules.',
        highlights: [{ text: 'without increasing audit risk', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'This is an area often reviewed by Dubai corporate tax consultants during compliance checks, as missed claims are common among growing businesses.',
        highlights: [{ text: 'Dubai corporate tax consultants', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'Why Employee VAT Is Often Missed', semibold: true },
      {
        type: 'paragraph',
        text: 'Most business owners believe VAT paid on employees is not recoverable. This is not fully true.',
        highlights: [{ text: 'not fully true', color: 'blue', bold: true }],
      },
      { type: 'paragraph', text: 'VAT may be reclaimed when:' },
      {
        type: 'list',
        items: [
          'The cost is clearly related to business use',
          'The expense supports employees in doing their job',
          'Proper documents are available',
        ],
      },
      {
        type: 'paragraph',
        text: 'Because these rules are not simple, many companies avoid claiming anything at all and focus only on basic VAT return filing services in the UAE, without deeper review.',
        highlights: [{ text: 'VAT return filing services in the UAE', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'Employee Costs That May Be VAT Recoverable', semibold: true },
      {
        type: 'paragraph',
        text: 'Depending on your business and how expenses are structured, VAT may be claimed on:',
      },
      {
        type: 'list',
        items: [
          'Staff accommodation (when provided for business needs)',
          'Transportation arranged by the company',
          'Training and skill-development programs',
          'Work-related meals or refreshments',
          'Uniforms and safety equipment',
          'Mobile phones or laptops used for work',
        ],
      },
      {
        type: 'paragraph',
        text: 'Each item must meet Federal Tax Authority (FTA) requirements. Personal benefits mixed with business use need special care and proper allocation.',
      },

      { type: 'heading', text: 'The Biggest Mistake SMEs Make', semibold: true },
      {
        type: 'paragraph',
        text: 'The biggest risk is claiming VAT without proper checks.',
        highlights: [{ text: 'claiming VAT without proper checks', color: 'blue', bold: true }],
      },
      { type: 'paragraph', text: 'This includes:' },
      {
        type: 'list',
        items: [
          'Missing tax invoices',
          'Poor expense descriptions',
          'Claiming 100% VAT on mixed-use costs',
          'No clear business justification',
        ],
      },
      {
        type: 'paragraph',
        text: 'These issues are what usually trigger VAT audits—not the act of reclaiming VAT itself. This is why experienced firms offering VAT return filing services UAE-wide focus heavily on documentation and review.',
        highlights: [{ text: 'VAT return filing services UAE-wide', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'How to Reclaim VAT Safely', semibold: true },
      { type: 'paragraph', text: 'To avoid problems with the FTA:' },
      {
        type: 'list',
        items: [
          {
            title: 'Review past VAT returns',
            description: 'Many businesses have reclaim opportunities going back several months.',
          },
          {
            title: 'Separate personal and business expenses',
            description: 'Clear records reduce audit risk.',
          },
          {
            title: 'Fix documentation before filing',
            description: 'Strong paperwork protects your company.',
          },
          {
            title: 'Use professional review, not guesswork',
            description:
              'This is where businesses often combine VAT review with corporate tax filing services in Dubai to stay fully compliant.',
            highlights: [{ text: 'corporate tax filing services in Dubai', color: 'blue', bold: true }],
          },
        ],
      },

      { type: 'heading', text: 'Why This Matters for SMEs', semibold: true },
      {
        type: 'paragraph',
        text: 'For a business with 10–50 employees, even small VAT recoveries add up. Over a year, this can mean thousands of dirhams back into cash flow.',
        highlights: [{ text: 'thousands of dirhams back into cash flow', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'VAT is not just a compliance task. When handled correctly, it becomes a cost-control tool.',
        highlights: [{ text: 'cost-control tool', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'Final Thought', semibold: true },
      {
        type: 'paragraph',
        text: 'Reclaiming VAT on employee benefits can be legal, smart, and safe—when done correctly.',
        highlights: [{ text: 'when done correctly', color: 'blue', bold: true }],
      },
      { type: 'paragraph', text: 'The goal is not to claim more VAT.' },
      {
        type: 'paragraph',
        text: 'The goal is to claim only what you are allowed, with confidence.',
        highlights: [{ text: 'only what you are allowed', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'If you are unsure, a professional VAT review can help identify missed opportunities without putting your business at risk.',
        highlights: [{ text: 'without putting your business at risk', color: 'blue', bold: true }],
      },
    ],
    conclusion:
      '',
    disclaimer:
      '*VAT recovery depends on your business activities, documents, and how expenses are treated under UAE VAT law. Not all employee-related costs are eligible for VAT recovery. This article is for general information only and does not guarantee VAT refunds.',
    relatedArticles: [
      {
        title: 'How Free Zone Businesses Can Protect Their 0% Tax Status',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        link: '/insights',
      },
      {
        title: 'Why Mixing Mainland and Free Zone Income Can Cost You 9% Tax',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
        link: '/insights',
      },
      {
        title: 'Why Reporting Losses Can Attract Tax Attention',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
        link: '/insights',
      },
    ],
  },
]

function BlogArticle({
  category = 'VAT',
  title = 'Article Title',
  intro = 'Article introduction text',
  author = 'Standard Auditing Team',
  authorRole = 'Content Writer',
  authorImage = null,
  date = 'January 15, 2025',
  readTime = '5 min read',
  featuredImage = null,
  content = [],
  conclusion = '',
  disclaimer = '',
  relatedArticles = [],
}) {
  const [readingProgress, setReadingProgress] = useState(0)
  const [activeHeading, setActiveHeading] = useState(null)
  const [isRelatedPostsVisible, setIsRelatedPostsVisible] = useState(false)
  const [timelineProgress, setTimelineProgress] = useState(0)
  const [timelineNavHeight, setTimelineNavHeight] = useState(0)

  const headings = useMemo(() => {
    const base = content
      .map((section, index) => {
        if (section.type === 'heading') {
          return { id: `heading-${index}`, text: section.text, index }
        }
        return null
      })
      .filter(Boolean)

    if (conclusion) {
      base.push({ id: 'conclusion', text: 'Conclusion', index: content.length })
    }

    return base
  }, [content, conclusion])

  useEffect(() => {
    const updateReadingProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setReadingProgress(Math.min(100, Math.max(0, progress)))
    }

    const updateActiveHeading = () => {
      const scrollPosition = window.pageYOffset + 200
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

    const checkRelatedPostsVisibility = () => {
      const contentContainer = document.querySelector('.blog-article__content-container')
      const relatedPostsSection = document.querySelector('.blog-article__related-posts')

      if (contentContainer && relatedPostsSection) {
        const windowHeight = window.innerHeight
        const contentRect = contentContainer.getBoundingClientRect()
        const isContentFullyScrolled = contentRect.bottom <= windowHeight + 100
        setIsRelatedPostsVisible(isContentFullyScrolled)
      }
    }

    const updateTimelineProgress = () => {
      if (headings.length === 0) return

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight

      const firstHeading = document.getElementById(headings[0].id)
      const lastHeading = document.getElementById(headings[headings.length - 1].id)
      const timelineNav = document.querySelector('.blog-article__timeline-nav')

      if (firstHeading && lastHeading && timelineNav) {
        const firstTop = firstHeading.offsetTop
        const lastTop = lastHeading.offsetTop
        const contentHeight = Math.max(1, lastTop - firstTop)

        const navHeight = timelineNav.offsetHeight
        if (navHeight !== timelineNavHeight) {
          setTimelineNavHeight(navHeight)
        }

        const scrollPosition = scrollTop + windowHeight * 0.2
        const progress = Math.max(0, Math.min(100, ((scrollPosition - firstTop) / contentHeight) * 100))
        setTimelineProgress(progress)
      }
    }

    window.addEventListener('scroll', updateReadingProgress)
    window.addEventListener('scroll', updateActiveHeading)
    window.addEventListener('scroll', checkRelatedPostsVisibility)
    window.addEventListener('scroll', updateTimelineProgress)
    window.addEventListener('resize', checkRelatedPostsVisibility)
    window.addEventListener('resize', updateTimelineProgress)

    updateReadingProgress()
    updateActiveHeading()
    updateTimelineProgress()
    setTimeout(checkRelatedPostsVisibility, 100)

    return () => {
      window.removeEventListener('scroll', updateReadingProgress)
      window.removeEventListener('scroll', updateActiveHeading)
      window.removeEventListener('scroll', checkRelatedPostsVisibility)
      window.removeEventListener('scroll', updateTimelineProgress)
      window.removeEventListener('resize', checkRelatedPostsVisibility)
      window.removeEventListener('resize', updateTimelineProgress)
    }
  }, [headings, timelineNavHeight])

  return (
    <main className="blog-article">
      <div className="blog-article__progress-bar">
        <div className="blog-article__progress-fill" style={{ width: `${readingProgress}%` }} />
      </div>

      <section className="blog-article__hero">
        {featuredImage && (
          <div className="blog-article__hero-background">
            <img src={featuredImage} alt={title} loading="eager" />
            <div className="blog-article__hero-overlay"></div>
          </div>
        )}

        <Link to="/insights" className="blog-article__back-link">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="blog-article__back-text">Back to Insights</span>
        </Link>

        <div className="blog-article__hero-content">
          <p className="blog-article__hero-category small-body-opensans">{category}</p>
          <h1 className="blog-article__hero-title h1-montserrat">{title}</h1>
        </div>

        <a href="#content" className="blog-article__hero-read-more">
          <span className="blog-article__hero-read-text">Read More</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      <div className="blog-article__main-wrapper">
        <div className="blog-article__main-container">
          {headings.length > 0 && (
            <aside className={`blog-article__timeline ${isRelatedPostsVisible ? 'blog-article__timeline--scrollable' : ''}`}>
              <div className="blog-article__timeline-line">
                <div className="blog-article__timeline-progress" style={{ height: `${timelineProgress}%` }}></div>
              </div>
              <nav className="blog-article__timeline-nav">
                {headings.map((heading) => (
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

          <article id="content" className="blog-article__content">
            <div className="blog-article__content-container">
              <div className="blog-article__meta-info">
                <span className="blog-article__author-name-inline">by {author}</span>
                <span className="blog-article__meta-separator"> | </span>
                <span className="blog-article__date">{date}</span>
              </div>

              {content.map((section, index) => {
                const renderParagraph = (text, highlights = []) => {
                  if (!highlights || highlights.length === 0) return text

                  const sortedHighlights = highlights
                    .map((highlight) => {
                      const foundIndex = text.indexOf(highlight.text)
                      return { ...highlight, index: foundIndex }
                    })
                    .filter((h) => h.index !== -1)
                    .sort((a, b) => a.index - b.index)

                  const parts = []
                  let lastIndex = 0
                  let keyCounter = 0

                  sortedHighlights.forEach((highlight) => {
                    if (highlight.index > lastIndex) {
                      parts.push(
                        <React.Fragment key={`text-${keyCounter++}`}>
                          {text.substring(lastIndex, highlight.index)}
                        </React.Fragment>,
                      )
                    }

                    const className = `blog-article__highlight blog-article__highlight--${highlight.color} ${
                      highlight.bold ? 'blog-article__highlight--bold' : ''
                    }`
                    parts.push(
                      <span key={`highlight-${keyCounter++}`} className={className}>
                        {highlight.text}
                      </span>,
                    )

                    lastIndex = highlight.index + highlight.text.length
                  })

                  if (lastIndex < text.length) {
                    parts.push(<React.Fragment key={`text-${keyCounter++}`}>{text.substring(lastIndex)}</React.Fragment>)
                  }

                  return parts
                }

                const renderDescription = (text, highlights = []) => renderParagraph(text, highlights)

                return (
                  <div key={index} className="blog-article__section">
                    {section.type === 'heading' && (
                      <h2
                        id={`heading-${index}`}
                        className={`blog-article__heading h2-montserrat ${section.semibold ? 'blog-article__heading--semibold' : ''}`}
                      >
                        {section.text}
                      </h2>
                    )}

                    {section.type === 'paragraph' && (
                      <p className={`blog-article__paragraph body-opensans ${section.color ? `blog-article__paragraph--${section.color}` : ''}`}>
                        {section.highlights ? renderParagraph(section.text, section.highlights) : section.text}
                      </p>
                    )}

                    {section.type === 'list' && (
                      <div className="blog-article__list-wrapper">
                        {section.title ? <p className="blog-article__list-title body-opensans">{section.title}</p> : null}
                        <ul className="blog-article__list">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="blog-article__list-item body-opensans">
                              {typeof item === 'object' && item.title ? (
                                <>
                                  <span className="blog-article__list-item-title blog-article__highlight blog-article__highlight--blue blog-article__highlight--bold">
                                    {item.title}
                                  </span>
                                  {item.description ? (
                                    <span className="blog-article__list-item-description">
                                      {item.highlights ? renderDescription(item.description, item.highlights) : item.description}
                                    </span>
                                  ) : null}
                                </>
                              ) : (
                                item
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {section.type === 'callout' && (
                      <div className={`blog-article__callout blog-article__callout--${section.variant}`}>
                        <div className="blog-article__callout-icon"></div>
                        <div className="blog-article__callout-content">
                          <h3 className="blog-article__callout-title h4-montserrat">{section.title}</h3>
                          {section.text ? <p className="blog-article__callout-text body-opensans">{section.text}</p> : null}
                          {section.items ? (
                            <ul className="blog-article__callout-list">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="blog-article__callout-item body-opensans">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    )}

                    {section.type === 'image' && (
                      <div className="blog-article__image">
                        <img src={section.src} alt={section.alt || ''} loading="lazy" />
                        {section.caption ? <p className="blog-article__image-caption small-body-opensans">{section.caption}</p> : null}
                      </div>
                    )}
                  </div>
                )
              })}

              {conclusion ? (
                <div id="conclusion" className="blog-article__conclusion-section">
                  <h2 className="blog-article__conclusion-title h2-montserrat">Conclusion</h2>
                  <div className="blog-article__conclusion-text-wrapper">
                    {Array.isArray(conclusion) ? (
                      conclusion.map((para, idx) => (
                        <p key={idx} className="blog-article__conclusion-text body-opensans">
                          {para}
                        </p>
                      ))
                    ) : (
                      <p className="blog-article__conclusion-text body-opensans">{conclusion}</p>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </article>
        </div>
      </div>

      {disclaimer && (
        <section className="blog-article__disclaimer">
          <div className="blog-article__disclaimer-container">
            <p className="blog-article__disclaimer-text small-body-opensans">{disclaimer}</p>
          </div>
        </section>
      )}

      {relatedArticles && relatedArticles.length > 0 && (
        <section className="blog-article__related-posts">
          <div className="blog-article__related-posts-container">
            <h2 className="blog-article__related-posts-title h1-montserrat">More Like This</h2>
            <div className="blog-article__related-posts-grid">
              {relatedArticles.slice(0, 3).map((article, index) => (
                <article key={index} className="blog-article__related-post-card">
                  <Link to={article.link || '#'} className="blog-article__related-post-link">
                    <div className="blog-article__related-post-image-wrapper">
                      <img src={article.image} alt={article.title} loading="lazy" />
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

      <NewsletterSection />
    </main>
  )
}

export default function BlogArticlePage() {
  const { slug } = useParams()

  const articlesBySlug = useMemo(() => {
    const map = new Map()
    for (const article of ARTICLE_DEFINITIONS) {
      map.set(slugifyTitle(article.title), article)
    }
    return map
  }, [])

  const article = articlesBySlug.get(slug)

  if (!article) {
    return (
      <main className="blog-article blog-article--not-found">
        <section className="blog-article__not-found">
          <h1 className="h1-montserrat">Article not found</h1>
          <p className="body-opensans">This link may be outdated, or the article hasn’t been published yet.</p>
          <Link to="/insights" className="body-opensans">
            ← Back to Insights
          </Link>
        </section>
      </main>
    )
  }

  return <BlogArticle {...article} />
}


