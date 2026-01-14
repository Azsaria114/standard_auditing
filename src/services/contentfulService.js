import contentfulClient from '../config/contentful'

// Helper function to slugify (matching your existing function)
function slugifyTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

// Helper function to format date
function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

// Transform Contentful entry to our article format
function transformArticle(entry) {
  const fields = entry.fields

  // Handle featured image
  const featuredImage = fields.featuredImage?.fields?.file?.url
    ? `https:${fields.featuredImage.fields.file.url}`
    : null

  // Handle related articles
  const relatedArticles = (fields.relatedArticles || []).map((related) => {
    const relatedFields = related.fields
    const relatedImage = relatedFields.featuredImage?.fields?.file?.url
      ? `https:${relatedFields.featuredImage.fields.file.url}`
      : null

    return {
      title: relatedFields.title,
      image: relatedImage,
      link: `/insights/article/${relatedFields.slug || slugifyTitle(relatedFields.title)}`,
    }
  })

  // Handle content - it could be a JSON object or already an array
  let content = []
  if (fields.content) {
    // If it's a string (JSON), parse it
    if (typeof fields.content === 'string') {
      try {
        content = JSON.parse(fields.content)
      } catch (e) {
        console.error('Error parsing content JSON:', e)
        content = []
      }
    } else if (Array.isArray(fields.content)) {
      content = fields.content
    } else if (fields.content.content) {
      // If it's a Contentful rich text field structure
      content = fields.content.content
    }
  }

  return {
    id: entry.sys.id,
    category: fields.category || 'Article',
    title: fields.title,
    intro: fields.intro || '',
    author: fields.author || 'Standard Auditing Team',
    authorRole: fields.authorRole || 'Content Writer',
    date: fields.publishedDate ? formatDate(fields.publishedDate) : '',
    readTime: fields.readTime || '5 min read',
    featuredImage: featuredImage,
    content: content,
    conclusion: fields.conclusion || '',
    disclaimer: fields.disclaimer || '',
    relatedArticles: relatedArticles,
    slug: fields.slug || slugifyTitle(fields.title),
  }
}

// Fetch all blog articles
export async function getAllBlogArticles() {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogArticle',
      order: '-fields.publishedDate',
      'fields.published': true,
      include: 2, // Include linked assets and entries
    })

    return response.items.map(transformArticle)
  } catch (error) {
    console.error('Error fetching blog articles:', error)
    // Return empty array on error to prevent crashes
    return []
  }
}

// Fetch a single blog article by slug
export async function getBlogArticleBySlug(slug) {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogArticle',
      'fields.slug': slug,
      'fields.published': true,
      limit: 1,
      include: 2, // Include linked assets and entries
    })

    if (response.items.length > 0) {
      return transformArticle(response.items[0])
    }
    return null
  } catch (error) {
    console.error('Error fetching blog article:', error)
    return null
  }
}

// Fetch featured articles for the hero section
export async function getFeaturedArticles(limit = 3) {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogArticle',
      'fields.featured': true,
      'fields.published': true,
      order: '-fields.publishedDate',
      limit: limit,
      include: 2,
    })

    return response.items.map(transformArticle)
  } catch (error) {
    console.error('Error fetching featured articles:', error)
    return []
  }
}

