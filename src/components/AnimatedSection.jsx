import { useScrollAnimation } from '../hooks/useScrollAnimation'

/**
 * AnimatedSection - Wrapper component that adds scroll-triggered animations
 * 
 * @param {string} animation - Animation type: 'fade-in', 'slide-up', 'slide-in-left', 'slide-in-right', 'scale-in'
 * @param {number} delay - Animation delay in seconds
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Child elements to animate
 */
export default function AnimatedSection({ 
  animation = 'fade-in', 
  delay = 0,
  className = '',
  children,
  ...props 
}) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    once: true,
  })

  const animationClass = `animate-${animation}`
  const delayClass = delay > 0 ? `animate-delay-${Math.min(Math.ceil(delay * 10), 6)}` : ''
  
  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isVisible ? `${animationClass} ${delayClass}` : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

