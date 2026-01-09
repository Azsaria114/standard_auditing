import { useParams, Link } from 'react-router-dom'
import '../styles/BlogArticle.css'

// Blog article data - for now just the first article
const blogArticles = {
  'how-to-get-back-vat-paid-on-employee-benefits': {
    title: 'How To Get Back VAT Paid on Employee Benefits Without Problems',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    content: `
      <p>Employee benefits are an essential part of any competitive compensation package. However, many businesses in the UAE are unaware that they can reclaim VAT paid on certain employee benefits, potentially saving significant amounts of money.</p>
      
      <h2>Understanding VAT on Employee Benefits</h2>
      <p>In the UAE, VAT is applicable to most goods and services. When you provide employee benefits such as accommodation, transportation, or meals, VAT may be charged on these services. The good news is that if these benefits are provided as part of employment contracts and meet certain conditions, you may be eligible to reclaim the VAT.</p>
      
      <h2>Eligible Employee Benefits for VAT Reclaim</h2>
      <p>Not all employee benefits qualify for VAT reclaim. The key is understanding which benefits are considered business expenses versus personal expenses. Generally, benefits that are:</p>
      <ul>
        <li>Directly related to business operations</li>
        <li>Required for employees to perform their duties</li>
        <li>Documented properly in employment contracts</li>
      </ul>
      <p>may qualify for VAT reclaim.</p>
      
      <h2>Common Pitfalls to Avoid</h2>
      <p>Many businesses face challenges when attempting to reclaim VAT on employee benefits. Common issues include:</p>
      <ul>
        <li>Insufficient documentation</li>
        <li>Mixing personal and business expenses</li>
        <li>Missing deadlines for VAT return filing</li>
        <li>Incorrect categorization of benefits</li>
      </ul>
      
      <h2>How to Successfully Reclaim VAT</h2>
      <p>To successfully reclaim VAT on employee benefits, follow these steps:</p>
      <ol>
        <li>Ensure all employee benefits are clearly documented in employment contracts</li>
        <li>Maintain detailed records of all VAT invoices related to employee benefits</li>
        <li>Separate business-related benefits from personal benefits</li>
        <li>File your VAT returns on time with accurate information</li>
        <li>Consult with a qualified tax advisor to ensure compliance</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Reclaiming VAT on employee benefits can provide significant savings for your business. However, it requires careful documentation, proper categorization, and adherence to FTA regulations. Working with experienced tax consultants can help you navigate this process smoothly and avoid common pitfalls.</p>
    `
  }
}

function BlogArticle() {
  const { slug } = useParams()
  const article = blogArticles[slug]

  if (!article) {
    return (
      <main className="blog-article-page">
        <div className="blog-article__container">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/insights" className="blog-article__back-link">Back to Insights</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="blog-article-page">
      <article className="blog-article">
        <div className="blog-article__header">
          <div className="blog-article__image-wrapper">
            <img src={article.image} alt={article.title} />
          </div>
          <div className="blog-article__header-content">
            <Link to="/insights" className="blog-article__back-link">← Back to Insights</Link>
            <h1 className="blog-article__title h1-montserrat">{article.title}</h1>
          </div>
        </div>
        <div className="blog-article__container">
          <div 
            className="blog-article__content body-opensans" 
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>
    </main>
  )
}

export default BlogArticle



