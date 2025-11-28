import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import standardAuditingLogo from '../assets/standard_auditing_logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.site-header')) {
        setIsMenuOpen(false)
        document.body.style.overflow = ''
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="site-header">
        <div className="site-header__container">
          <div className="site-header__logo-section">
            <div className="site-header__logo">
              <Link to="/">
                <img 
                  src={standardAuditingLogo} 
                  alt="Standard Auditing Logo" 
                  className="site-header__logo-image"
                />
              </Link>
            </div>
            <div className="site-header__separator"></div>
          </div>
          <button 
            type="button" 
            className="site-header__hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`site-header__hamburger-line ${isMenuOpen ? 'site-header__hamburger-line--open' : ''}`}></span>
            <span className={`site-header__hamburger-line ${isMenuOpen ? 'site-header__hamburger-line--open' : ''}`}></span>
            <span className={`site-header__hamburger-line ${isMenuOpen ? 'site-header__hamburger-line--open' : ''}`}></span>
          </button>
          <nav className={`site-header__nav ${isMenuOpen ? 'site-header__nav--open' : ''}`}>
            <Link to="/" className="site-header__nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="site-header__nav-link site-header__nav-link--dropdown" onClick={() => setIsMenuOpen(false)}>
              About
              <svg className="site-header__dropdown-icon" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6 L1 2 L7 2 Z" fill="currentColor"/>
              </svg>
            </Link>
            <a href="/#services" className="site-header__nav-link site-header__nav-link--dropdown" onClick={() => setIsMenuOpen(false)}>
              Services
              <svg className="site-header__dropdown-icon" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6 L1 2 L7 2 Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="/#insights" className="site-header__nav-link site-header__nav-link--dropdown" onClick={() => setIsMenuOpen(false)}>
              Insights
              <svg className="site-header__dropdown-icon" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6 L1 2 L7 2 Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="/#careers" className="site-header__nav-link" onClick={() => setIsMenuOpen(false)}>
              Careers
            </a>
            <button type="button" className="site-header__cta site-header__cta--sidebar" onClick={() => setIsMenuOpen(false)}>
              <span className="site-header__cta-text">Contact Us</span>
              <svg className="site-header__cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </nav>
          <button type="button" className="site-header__cta">
            <span className="site-header__cta-text">Contact Us</span>
            <svg className="site-header__cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </header>
      <div 
        className={`site-header__overlay ${isMenuOpen ? 'site-header__overlay--open' : ''}`}
        onClick={() => {
          setIsMenuOpen(false)
          document.body.style.overflow = ''
        }}
      />
    </>
  )
}

export default Header

