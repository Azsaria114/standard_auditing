import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for scroll-triggered animations
 * Adds animation classes when elements enter the viewport
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @param {boolean} options.once - Whether to animate only once
 * @returns {Object} - { ref, isVisible }
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true,
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) {
              observer.unobserve(element)
            }
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, once])

  return { ref: elementRef, isVisible }
}

/**
 * Hook to animate multiple elements with staggered delays
 */
export const useStaggeredAnimation = (count, options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    staggerDelay = 100,
  } = options

  const [visibleItems, setVisibleItems] = useState(new Set())
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const children = container.querySelectorAll('[data-animate-item]')
    if (children.length === 0) return

    const observers = []

    children.forEach((child, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems((prev) => new Set([...prev, index]))
              }, index * staggerDelay)
              observer.unobserve(child)
            }
          })
        },
        {
          threshold,
          rootMargin,
        }
      )

      observer.observe(child)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [count, threshold, rootMargin, staggerDelay])

  return { ref: containerRef, visibleItems }
}

