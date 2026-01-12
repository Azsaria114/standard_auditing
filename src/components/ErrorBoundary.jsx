import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({
      error,
      errorInfo
    })
    
    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="error-boundary">
          <div className="error-boundary__container">
            <div className="error-boundary__content">
              <h1 className="error-boundary__title h1-montserrat">
                Something went wrong
              </h1>
              <p className="error-boundary__message body-opensans">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
              </p>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="error-boundary__details">
                  <summary className="error-boundary__summary body-opensans">
                    Error Details (Development Only)
                  </summary>
                  <pre className="error-boundary__error-text">
                    {this.state.error.toString()}
                    {this.state.errorInfo && (
                      <>
                        {'\n\n'}
                        {this.state.errorInfo.componentStack}
                      </>
                    )}
                  </pre>
                </details>
              )}
              <div className="error-boundary__actions">
                <button
                  type="button"
                  onClick={this.handleReset}
                  className="error-boundary__button error-boundary__button--primary h3-opensans-semibold"
                >
                  Go to Home
                </button>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="error-boundary__button error-boundary__button--secondary h3-opensans-semibold"
                >
                  Reload Page
                </button>
              </div>
              <Link to="/contact" className="error-boundary__link body-opensans">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary




