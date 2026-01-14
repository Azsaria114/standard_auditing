import { createClient } from 'contentful'

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
const environment = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master'

if (!spaceId || !accessToken) {
  console.error('Contentful configuration error: Missing required environment variables.')
  console.error('Please ensure your .env file contains:')
  console.error('VITE_CONTENTFUL_SPACE_ID=your_space_id')
  console.error('VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token')
  console.error('VITE_CONTENTFUL_ENVIRONMENT=master (optional)')
  console.error('\nAfter creating/updating .env, restart your development server.')
  throw new Error('Contentful configuration is missing. Check console for details.')
}

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
  environment: environment,
})

export default client

