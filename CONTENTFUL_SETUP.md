# Contentful CMS Setup Guide

This guide will help you set up Contentful CMS for managing blog articles.

## Step 1: Create a Contentful Account

1. Go to [https://www.contentful.com](https://www.contentful.com)
2. Sign up for a free account (the free tier is sufficient for most use cases)
3. Create a new space (or use an existing one)

## Step 2: Create the Content Model

1. In your Contentful space, go to **Content model** in the top navigation
2. Click **Add content type**
3. Name it `blogArticle` (this is important - the code expects this exact name)
4. Add the following fields:

### Required Fields:

| Field Name | Field ID | Type | Settings |
|------------|----------|------|----------|
| Title | `title` | Short text | Required, Unique |
| Slug | `slug` | Short text | Required, Unique |
| Category | `category` | Short text | Required |
| Author | `author` | Short text | Required |
| Author Role | `authorRole` | Short text | Optional |
| Published Date | `publishedDate` | Date & time | Required |
| Read Time | `readTime` | Short text | Optional (e.g., "7 min read") |
| Featured Image | `featuredImage` | Media - Image | Optional |
| Intro | `intro` | Long text | Optional |
| Content | `content` | JSON Object | Required |
| Conclusion | `conclusion` | Long text | Optional |
| Disclaimer | `disclaimer` | Long text | Optional |
| Related Articles | `relatedArticles` | References - Blog Article | Multiple entries, Optional |
| Published | `published` | Boolean | Required (default: false) |
| Featured | `featured` | Boolean | Optional (for hero slides) |

### Content Field Structure

The `content` field should store a JSON array with the following structure:

```json
[
  {
    "type": "paragraph",
    "text": "Your paragraph text here",
    "highlights": [
      {
        "text": "highlighted text",
        "color": "blue",
        "bold": true
      }
    ]
  },
  {
    "type": "heading",
    "text": "Heading text",
    "semibold": true
  },
  {
    "type": "list",
    "items": [
      "Item 1",
      "Item 2",
      "Item 3"
    ]
  },
  {
    "type": "callout",
    "variant": "info",
    "title": "Callout Title",
    "text": "Callout text",
    "items": ["Item 1", "Item 2"]
  },
  {
    "type": "image",
    "src": "https://example.com/image.jpg",
    "alt": "Image description",
    "caption": "Optional caption"
  }
]
```

## Step 3: Get API Credentials

1. Go to **Settings** → **API keys** in your Contentful space
2. Under **Content delivery / preview tokens**, you'll see:
   - **Space ID** - Copy this
   - **Content Delivery API - access token** - Copy this

## Step 4: Configure Environment Variables

Create a `.env` file in the `standard_auditing` directory with the following:

```env
VITE_CONTENTFUL_SPACE_ID=your_space_id_here
VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token_here
VITE_CONTENTFUL_ENVIRONMENT=master
```

Replace `your_space_id_here` and `your_access_token_here` with the values from Step 3.

**Important:** 
- Never commit the `.env` file to git (it's already in `.gitignore`)
- For production, set these as environment variables in your hosting platform

## Step 5: Create Your First Article

1. Go to **Content** in Contentful
2. Click **Add entry** → Select `blogArticle`
3. Fill in all required fields
4. For the `content` field, paste your JSON content array
5. Make sure `published` is set to `true`
6. Click **Publish**

## Step 6: Test Your Setup

1. Start your development server: `npm run dev`
2. Navigate to `/insights` to see your blog articles
3. Click on an article to view the full content

## Tips

- **Slug Format:** Use lowercase with hyphens (e.g., `why-free-zone-companies-must-show-real-uae-presence`)
- **Featured Articles:** Set `featured` to `true` for articles you want to show in the hero slides
- **Images:** Upload images to Contentful's Media library, then reference them in your content
- **Related Articles:** Link other blog articles using the `relatedArticles` reference field

## Troubleshooting

- **No articles showing?** Check that `published` is set to `true` in Contentful
- **404 errors?** Verify the slug matches exactly (case-sensitive)
- **API errors?** Double-check your environment variables are correct and the Content Delivery API token is used (not Preview API)

## Migration from Hardcoded Articles

To migrate your existing articles from `ARTICLE_DEFINITIONS` in `BlogArticlePage.jsx`:

1. Copy each article's data
2. Create a new entry in Contentful
3. Map the fields accordingly
4. Convert the `content` array to JSON format
5. Publish the entry

The old `ARTICLE_DEFINITIONS` array can be kept as a backup/fallback if needed.

