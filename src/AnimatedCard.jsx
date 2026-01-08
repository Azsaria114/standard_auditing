import { useState, useEffect, useRef } from 'react'
import './AnimatedCard.css'

/**
 * AnimatedCard Component
 * 
 * A card component with soft shadow, white background, and rounded corners.
 * The text animates with a smooth fade-in and slide-up effect when the card
 * enters the viewport. Animation triggers only once for optimal performance.
 * 
 * @returns {JSX.Element} The animated card component
 */
function AnimatedCard() {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger animation when card enters viewport
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            // Disconnect observer after animation triggers (one-time animation)
            observer.disconnect()
          }
        })
      },
      {
        // Trigger animation when 20% of card is visible
        threshold: 0.2,
        // Start observing slightly before card enters viewport for smoother experience
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    // Cleanup observer on unmount
    return () => {
      if (cardRef.current) {
        observer.disconnect()
      }
    }
  }, [isVisible])

  return (
    <div 
      ref={cardRef} 
      className={`animated-card ${isVisible ? 'animated-card--visible' : ''}`}
    >
      <p className="animated-card__text">
        Real Businesses,<br />
        Real Results
      </p>
    </div>
  )
}

export default AnimatedCard


