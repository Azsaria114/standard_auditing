import { createClient } from 'contentful'

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
const environment = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master'

// Check if Contentful is configured
export const isContentfulConfigured = !!(spaceId && accessToken)

// Log warning in development if not configured (but don't crash)
if (!isContentfulConfigured) {
  if (import.meta.env.DEV) {
    console.warn('⚠️ Contentful configuration missing.')
    console.warn('Blog articles will not be available.')
    console.warn('Please ensure your .env file contains:')
    console.warn('VITE_CONTENTFUL_SPACE_ID=your_space_id')
    console.warn('VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token')
    console.warn('VITE_CONTENTFUL_ENVIRONMENT=master (optional)')
  }
}

// Create client only if configured, otherwise create a dummy client that will fail gracefully
const client = isContentfulConfigured
  ? createClient({
      space: spaceId,
      accessToken: accessToken,
      environment: environment,
    })
  : null

export default client

