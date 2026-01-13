/**
 * Simple scroll animation utility
 * Fades in elements as they come into viewport
 */

let observer = null

export const initScrollAnimations = () => {
  // Cleanup existing observer
  if (observer) {
    observer.disconnect()
    observer = null
  }

  // Wait for DOM to be ready
  requestAnimationFrame(() => {
    const elements = document.querySelectorAll('[data-animate]')
    
    if (elements.length === 0) {
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('animate-visible')) {
            entry.target.classList.add('animate-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    elements.forEach((element) => {
      element.classList.add('animate-on-scroll')
      observer.observe(element)
    })
  })
}

export const cleanupScrollAnimations = () => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
}
