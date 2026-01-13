import React, { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Local (page-level) newsletter section ΓÇö matches the existing Insights/Home pattern.
function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-section__container">
        <h2 className="newsletter-section__title h1-montserrat">Your Business Finance Fix</h2>
        <p className="newsletter-section__description body-opensans">
          Get weekly insights, checklists, and SME-friendly tips to manage cash flow, avoid fines, and keep more of your profits.
          Stay updated with guidance from certified tax consultants UAE and experienced Dubai corporate tax consultants.
        </p>
        <Link to="/contact" className="newsletter-section__cta">
          <span className="newsletter-section__cta-text">Sign up for free updates</span>
          <svg className="newsletter-section__cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4H12V10M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

function slugifyTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

const ARTICLE_DEFINITIONS = [
  {
    category: 'Free Zone',
    title: 'Why Free Zone Companies Must Show Real UAE Presence',
    intro: '',
    author: 'Standard Auditing Team',
    authorRole: 'Content Writer',
    date: 'February 5, 2025',
    readTime: '7 min read',
    featuredImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
    content: [
      {
        type: 'paragraph',
        text: 'Free Zone companies in Dubai can enjoy 0% Corporate Tax only if they prove one thing clearly: They have a real business presence in the UAE.',
        highlights: [
          { text: '0% Corporate Tax', color: 'blue', bold: true },
          { text: 'business presence in the UAE', color: 'blue', bold: true },
        ],
      },
      {
        type: 'paragraph',
        text: 'Paper structures no longer work. If the FTA finds a weak substance, your company can lose the 0% rate and be taxed at 9%, not just for one yearΓÇöbut for up to five years.',
        highlights: [
          { text: 'taxed at 9%', color: 'blue', bold: true },
          { text: 'for up to five years', color: 'blue', bold: true },
        ],
      },
      {
        type: 'paragraph',
        text: 'This matters most for SMEs with 10ΓÇô50 employees, especially those registered from 2024 onward.',
        highlights: [
          { text: 'SMEs with 10ΓÇô50 employees', color: 'blue', bold: true },
          { text: 'registered from 2024 onward', color: 'blue', bold: true },
        ],
      },

      { type: 'heading', text: 'What "Real UAE Presence" Means', semibold: true },
      {
        type: 'paragraph',
        text: 'To qualify as a Qualifying Free Zone Person (QFZP), your business must:',
        highlights: [{ text: 'Qualifying Free Zone Person (QFZP)', color: 'blue', bold: true }],
      },
      {
        type: 'list',
        items: [
          'Carry out core income-generating activities (CIGAs) inside the Free Zone',
          'Have employees, assets, and expenses in the UAE that match your business size',
          'Avoid non-qualifying mainland income beyond allowed limits',
        ],
      },
      {
        type: 'paragraph',
        text: 'If these conditions are not met, the FTA can deny the 0% rate.',
      },

      { type: 'heading', text: 'Core Income-Generating Activities (CIGAs)', semibold: true },
      {
        type: 'paragraph',
        text: 'CIGAs are the activities that actually create revenue.',
        highlights: [{ text: 'activities that actually create revenue', color: 'blue', bold: true }],
      },
      { type: 'paragraph', text: 'Examples:' },
      {
        type: 'list',
        items: [
          'Manufacturing operations',
          'Distribution and logistics decisions',
          'Service delivery and contract execution',
          'IP development or management',
        ],
      },
      {
        type: 'paragraph',
        text: 'These activities must happen inside the Free Zone, not overseas or only on paper.',
        highlights: [{ text: 'inside the Free Zone', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'For distribution businesses, operations must be in approved Free Zones only.',
        highlights: [{ text: 'approved Free Zones', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'Employees, Assets, and Costs Must Match Reality', semibold: true },
      {
        type: 'paragraph',
        text: 'The FTA checks whether your resources make sense for your revenue.',
      },
      { type: 'paragraph', text: 'You must have:' },
      {
        type: 'list',
        items: [
          'A reasonable number of full-time employees in the UAE',
          'Employees who are qualified for their roles',
          'Physical assets (office, equipment) used for the business',
          'Operating expenses that reflect actual activity',
        ],
      },
      {
        type: 'paragraph',
        text: 'You cannot reuse the same employee across multiple key functions just to meet rules.',
      },

      { type: 'heading', text: 'Outsourcing: What Is Allowed and What Is Not', semibold: true },
      { type: 'paragraph', text: 'You may outsource CIGAs only if:' },
      {
        type: 'list',
        items: [
          'The service provider operates within the Free Zone',
          'You retain control and supervision',
          'Written contracts define scope and quality standards',
        ],
      },
      {
        type: 'paragraph',
        text: 'For qualifying intellectual property (IP), limited outsourcing outside the UAE is allowedΓÇöbut only with strong proof of R&D linkage and cost tracking.',
        highlights: [{ text: 'qualifying intellectual property (IP)', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'Uncontrolled outsourcing is a red flag during audits.',
      },

      { type: 'heading', text: 'Documents the FTA Expects to See', semibold: true },
      { type: 'paragraph', text: 'Free Zone companies should maintain:' },
      {
        type: 'list',
        items: [
          'Audited financial statements',
          'Transfer pricing compliance for related-party deals',
          'Clear income classification (qualifying vs non-qualifying)',
          'Employee records, contracts, and payroll',
          'Proof of assets and operating expenses',
          'Supervision records for outsourced work',
        ],
      },
      {
        type: 'paragraph',
        text: 'All of this must align with what you report in your tax return.',
      },

      { type: 'heading', text: 'Startups and New Free Zone Companies', semibold: true },
      { type: 'paragraph', text: 'Even startups with:' },
      {
        type: 'list',
        items: [
          'No revenue, or',
          'Early-stage losses',
        ],
      },
      {
        type: 'paragraph',
        text: 'must still meet substance rules.',
      },
      {
        type: 'paragraph',
        text: 'As long as there is no non-qualifying income and other conditions are met, 0% status can apply. But a weak setup in the early years can create problems later.',
        highlights: [{ text: 'no non-qualifying income', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'The Risk of Getting It Wrong', semibold: true },
      { type: 'paragraph', text: 'If the FTA finds non-compliance:' },
      {
        type: 'list',
        items: [
          '0% Corporate Tax is lost for the current year',
          'The 9% rate can apply for the next four years',
          'Audits become more frequent',
          'Cash flow and tax planning suffer',
        ],
      },

      { type: 'heading', text: 'Final Thought', semibold: true },
      {
        type: 'paragraph',
        text: 'Free Zone tax benefits are valuableΓÇöbut they are not automatic. The FTA expects real operations, real people, and real proof.',
        highlights: [{ text: 'real operations, real people, and real proof', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'If your structure is built for appearances, not substance, it will not survive an audit. Build it right from the start.',
      },
    ],
    conclusion: '',
    disclaimer: '',
    relatedArticles: [
      {
        title: 'How Free Zone Businesses Can Protect Their 0% Tax Status',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        link: '/insights/article/how-free-zone-businesses-can-protect-their-0-tax-status',
      },
      {
        title: 'Why Mixing Mainland and Free Zone Income Can Cost You 9% Tax',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
        link: '/insights/article/why-mixing-mainland-and-free-zone-income-can-cost-you-9-tax',
      },
      {
        title: 'Related-Party Deals That Can Hurt Your Profits',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
        link: '/insights/article/related-party-deals-that-can-hurt-your-profits',
      },
    ],
  },
  {
    category: 'Corporate Tax',
    title: 'Related-Party Deals That Can Hurt Your Profits',
    intro: '',
    author: 'Standard Auditing Team',
    authorRole: 'Content Writer',
    date: 'February 1, 2025',
    readTime: '7 min read',
    featuredImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop',
    content: [
      {
        type: 'paragraph',
        text: 'Many Dubai businesses lose profits not because of bad salesΓÇöbut because of how they deal with related parties.',
      },
      {
        type: 'paragraph',
        text: 'Payments to owners, group companies, or family members may look normal internally. But under UAE Corporate Tax, these transactions must follow market pricing rules. If they do not, the FTA can increase your taxable profit and apply penalties.',
        highlights: [{ text: 'market pricing rules', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'This risk is higher for businesses with 10ΓÇô50 employees, especially companies registered from 2024 onward.',
        highlights: [
          { text: 'businesses with 10ΓÇô50 employees', color: 'blue', bold: true },
          { text: 'registered from 2024 onward', color: 'blue', bold: true },
        ],
      },

      { type: 'heading', text: 'What Are Related-Party Transactions?', semibold: true },
      { type: 'paragraph', text: 'Related-party transactions include deals between:' },
      {
        type: 'list',
        items: [
          'A company and its owners or shareholders',
          'Group companies under common control',
          'Close family members',
          'Entities where the same person is a beneficial owner',
        ],
      },
      { type: 'paragraph', text: 'Examples include:' },
      {
        type: 'list',
        items: [
          'Management fees paid to the owner',
          'Rent paid to a shareholder',
          'Services billed by a sister company',
        ],
      },
      {
        type: 'paragraph',
        text: 'Under UAE Corporate Tax, all such transactions must follow the arm\'s-length principle. This means the price must be the same as if you were dealing with an unrelated third party.',
        highlights: [{ text: 'arm\'s-length principle', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'UAE Transfer Pricing Rules ΓÇô In Simple Terms', semibold: true },
      { type: 'paragraph', text: 'UAE Corporate Tax law requires:' },
      {
        type: 'list',
        items: [
          'Fair market pricing for related-party deals',
          'Clear disclosure in the tax return when thresholds are crossed',
        ],
      },
      { type: 'paragraph', text: 'You must report related-party transactions if:' },
      {
        type: 'list',
        items: [
          'Total related-party transactions exceed AED 40 million, or',
          'Any single category (goods, services, rent, interest) exceeds AED 4 million',
        ],
      },
      {
        type: 'paragraph',
        text: 'Payments to connected persons (owners, directors, relatives) must be disclosed if they exceed AED 500,000 in a year.',
        highlights: [
          { text: 'connected persons', color: 'blue', bold: true },
          { text: 'AED 500,000', color: 'blue', bold: true },
        ],
      },
      { type: 'paragraph', text: 'If pricing is not market-based, the FTA can:' },
      {
        type: 'list',
        items: [
          'Increase your taxable income',
          'Disallow expenses',
          'Apply penalties',
        ],
      },

      { type: 'heading', text: 'Common Mistakes That Reduce Profits', semibold: true },
      { type: 'paragraph', text: 'We see these issues often during audits:' },
      {
        type: 'list',
        items: [
          'Owners withdrawing money without proper salary or service agreements',
          'Group companies selling goods or services below market price',
          'High consulting or management fees paid to related parties without justification',
          'No written agreements or pricing logic',
        ],
      },
      {
        type: 'paragraph',
        text: 'When businesses cannot explain why a price makes business sense, the FTA adjusts profits upward. This pushes companies into higher 9% tax exposure, even when cash did not increase.',
        highlights: [
          { text: 'why a price makes business sense', color: 'blue', bold: true },
          { text: 'higher 9% tax exposure', color: 'blue', bold: true },
        ],
      },

      { type: 'heading', text: 'Penalties and Audit Impact', semibold: true },
      { type: 'paragraph', text: 'If disclosures are missed or incorrect:' },
      {
        type: 'list',
        items: [
          'Penalties start from AED 10,000',
          'Can go up to AED 1 million',
          'Repeated issues within 24 months can double penalties',
        ],
      },
      {
        type: 'paragraph',
        text: 'More importantly, audits slow operations, affect cash flow, and create compliance stress for leadership teams.',
      },

      { type: 'heading', text: 'How to Protect Your Profits', semibold: true },
      { type: 'paragraph', text: 'Business owners should act early:' },

      { type: 'heading', text: '1. Price Related Deals Like Market Deals', semibold: true },
      {
        type: 'paragraph',
        text: 'Use the same pricing logic you would use with an external vendor or customer.',
      },

      { type: 'heading', text: '2. Keep Written Agreements', semibold: true },
      {
        type: 'paragraph',
        text: 'Every related-party transaction should have a clear contract with scope, pricing, and terms.',
      },

      { type: 'heading', text: '3. Support Prices With Market Data', semibold: true },
      {
        type: 'paragraph',
        text: 'Annual benchmarking helps justify pricing if questioned by the FTA.',
      },

      { type: 'heading', text: '4. Maintain Clean Records', semibold: true },
      {
        type: 'paragraph',
        text: 'Separate ledgers and proper documentation reduce audit risk and protect deductions.',
      },

      { type: 'heading', text: 'Final Thought', semibold: true },
      {
        type: 'paragraph',
        text: 'Related-party deals are not illegal. But they must be priced fairly and documented properly.',
        highlights: [{ text: 'priced fairly and documented properly', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'The FTA is watching closelyΓÇöespecially for growing SMEs with internal transactions. Protect your profits by treating related-party deals the same way you would treat any external deal.',
      },
    ],
    conclusion: '',
    disclaimer: '',
    relatedArticles: [
      {
        title: 'Why Reporting Losses Can Attract Tax Attention',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
        link: '/insights/article/why-reporting-losses-can-attract-tax-attention',
      },
      {
        title: 'Why Mixing Mainland and Free Zone Income Can Cost You 9% Tax',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
        link: '/insights/article/why-mixing-mainland-and-free-zone-income-can-cost-you-9-tax',
      },
      {
        title: 'How Free Zone Businesses Can Protect Their 0% Tax Status',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        link: '/insights/article/how-free-zone-businesses-can-protect-their-0-tax-status',
      },
    ],
  },
  {
    category: 'Corporate Tax',
    title: 'Why Reporting Losses Can Attract Tax Attention',
    intro: '',
    author: 'Standard Auditing Team',
    authorRole: 'Content Writer',
    date: 'January 30, 2025',
    readTime: '8 min read',
    featuredImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=800&fit=crop',
    content: [
      {
        type: 'paragraph',
        text: 'Many business owners assume reporting losses keeps them off the tax radar. In reality, tax losses often attract more attention from the FTA, not less.',
        highlights: [{ text: 'tax losses often attract more attention from the FTA', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'Under UAE Corporate Tax, losses can reduce future tax bills. But only when they are reported correctly and fully supported. Poor documentation or incorrect filings can trigger audits, loss denial, and penalties.',
        highlights: [{ text: 'reported correctly and fully supported', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'This is especially relevant for Dubai SMEs with 10ΓÇô50 employees, registered from 2024 onward.',
        highlights: [
          { text: 'Dubai SMEs with 10ΓÇô50 employees', color: 'blue', bold: true },
          { text: 'from 2024 onward', color: 'blue', bold: true },
        ],
      },

      { type: 'heading', text: 'What Is a Tax Loss Under UAE Corporate Tax?', semibold: true },
      {
        type: 'paragraph',
        text: 'A tax loss happens when your allowed expenses are higher than your taxable income for the year.',
        highlights: [{ text: 'allowed expenses are higher than your taxable income', color: 'blue', bold: true }],
      },
      { type: 'paragraph', text: 'UAE rules allow you to:' },
      {
        type: 'list',
        items: [
          'Carry tax losses forward indefinitely',
          'Offset losses against up to 75% of future taxable profits',
          'Apply this only after the AED 375,000 exemption threshold',
        ],
      },
      {
        type: 'paragraph',
        text: 'If a loss is not declared in the original tax return, it is lost forever. You cannot claim it later.',
        highlights: [
          { text: 'not declared in the original tax return', color: 'blue', bold: true },
          { text: 'lost forever', color: 'blue', bold: true },
        ],
      },

      { type: 'heading', text: 'When Losses Cannot Be Used', semibold: true },
      { type: 'paragraph', text: 'Losses are restricted if:' },
      {
        type: 'list',
        items: [
          'Ownership changes exceed 50%',
          'The main business activity changes',
          'Losses occurred before UAE Corporate Tax started (pre-June 2023)',
        ],
      },
      {
        type: 'paragraph',
        text: 'These rules exist to prevent misuse and are strictly reviewed during audits.',
      },

      { type: 'heading', text: 'Why Losses Trigger FTA Scrutiny', semibold: true },
      { type: 'paragraph', text: 'The FTA closely reviews returns that show:' },
      {
        type: 'list',
        items: [
          'Large first-year losses',
          'Repeated losses over multiple years',
          'Losses without clear business reasons',
        ],
      },
      {
        type: 'paragraph',
        text: 'For new companies, losses are commonΓÇöbut they must make sense on paper.',
        highlights: [{ text: 'they must make sense on paper', color: 'blue', bold: true }],
      },
      { type: 'paragraph', text: 'The FTA checks:' },
      {
        type: 'list',
        items: [
          'Expense validity',
          'Asset depreciation',
          'Tax adjustments vs accounting figures',
          'Group transactions and transfers',
        ],
      },
      {
        type: 'paragraph',
        text: 'Even when no tax is payable, losses still matter.',
      },

      { type: 'heading', text: 'A Common Misunderstood Rule', semibold: true },
      {
        type: 'paragraph',
        text: 'If your company makes AED 300,000 profit and has a prior loss of AED 200,000:',
        highlights: [
          { text: 'AED 300,000 profit', color: 'blue', bold: true },
          { text: 'prior loss of AED 200,000', color: 'blue', bold: true },
        ],
      },
      {
        type: 'list',
        items: [
          'You must offset up to 75% of the profit',
          'Even though total profit is below AED 375,000',
          'Even though no tax is payable',
        ],
      },
      {
        type: 'paragraph',
        text: 'Incorrect handling here raises red flags during review.',
      },

      { type: 'heading', text: 'Documents You Must Have Ready', semibold: true },
      { type: 'paragraph', text: 'To support a loss claim, businesses should maintain:' },
      {
        type: 'list',
        items: [
          'Audited financial statements',
          'Clear reconciliation between accounting loss and tax loss',
          'Depreciation and asset schedules',
          'Ownership continuity proof',
          'Group structure records (if losses are transferred)',
        ],
      },
      { type: 'paragraph', text: 'For group loss transfers, companies must:' },
      {
        type: 'list',
        items: [
          'Have 75% common ownership',
          'Share the same financial year',
        ],
      },

      { type: 'heading', text: 'Special Risk for 2024+ Registered Businesses', semibold: true },
      {
        type: 'paragraph',
        text: 'For companies registered from 2024 onward, early filings set your compliance history.',
        highlights: [{ text: '2024 onward', color: 'blue', bold: true }],
      },
      { type: 'paragraph', text: 'Missing or incorrect loss reporting can:' },
      {
        type: 'list',
        items: [
          'Block future loss usage',
          'Trigger audits in later profitable years',
          'Create ongoing compliance risk',
        ],
      },
      {
        type: 'paragraph',
        text: 'Losses must be declared correctly in the first year itself.',
        highlights: [{ text: 'correctly in the first year itself', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'How to Reduce Risk While Claiming Losses', semibold: true },
      { type: 'paragraph', text: 'Business owners should:' },
      {
        type: 'list',
        items: [
          'Report losses accurately in the Corporate Tax return',
          'Support claims with clean financial records',
          'Align accounting and tax treatment',
          'Avoid inconsistencies across VAT, CT, and financial statements',
          'Review losses in context with transfer pricing and income segregation',
        ],
      },
      {
        type: 'paragraph',
        text: 'Some businesses opt for voluntary audits to validate loss positions early.',
        highlights: [{ text: 'voluntary audits', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'Final Thought', semibold: true },
      {
        type: 'paragraph',
        text: 'Reporting a loss is not a red flag on its own. But poorly documented losses are.',
        highlights: [{ text: 'poorly documented losses are', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'The FTA expects consistency, accuracy, and clear business reasoning. If your loss makes sense and is well-supported, it protects your future profits.',
      },
    ],
    conclusion: '',
    disclaimer: '',
    relatedArticles: [
      {
        title: 'Why Mixing Mainland and Free Zone Income Can Cost You 9% Tax',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
        link: '/insights/article/why-mixing-mainland-and-free-zone-income-can-cost-you-9-tax',
      },
      {
        title: 'How Free Zone Businesses Can Protect Their 0% Tax Status',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        link: '/insights/article/how-free-zone-businesses-can-protect-their-0-tax-status',
      },
      {
        title: 'How To Get Back VAT Paid on Employee Benefits Without Problems',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        link: '/insights/article/how-to-get-back-vat-paid-on-employee-benefits-without-problems',
      },
    ],
  },
  {
    category: 'Corporate Tax',
    title: 'Why Mixing Mainland and Free Zone Income Can Cost You 9% Tax',
    intro: '',
    author: 'Standard Auditing Team',
    authorRole: 'Content Writer',
    date: 'January 25, 2025',
    readTime: '7 min read',
    featuredImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=800&fit=crop',
    content: [
      {
        type: 'paragraph',
        text: 'Many Dubai businesses lose their Free Zone tax benefit for one simple reason: They mix mainland and Free Zone income in the same business.',
        highlights: [{ text: 'mix mainland and Free Zone income', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'When this happens, the UAE Federal Tax Authority (FTA) can apply 9% Corporate Tax on the entire profit, not just the mainland portion. This usually comes as a shock during tax filing or audit.',
        highlights: [{ text: '9% Corporate Tax on the entire profit', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'If you operate from a Free Zone but also earn income from mainland UAE clients, you must handle this carefully.',
      },

      { type: 'heading', text: 'UAE Corporate Tax ΓÇô What Business Owners Must Know', semibold: true },
      {
        type: 'paragraph',
        text: 'UAE Corporate Tax applies at 9% on taxable profits above AED 375,000.',
        highlights: [{ text: '9% on taxable profits above AED 375,000', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'This rule has been active since June 2023.',
        highlights: [{ text: 'June 2023', color: 'blue', bold: true }],
      },
      {
        type: 'list',
        items: [
          'Mainland companies pay 9% on all taxable income.',
          'Free Zone companies can pay 0% Corporate Tax, but only on qualifying income.',
        ],
      },
      {
        type: 'paragraph',
        text: 'The 0% rate is not automatic. You must meet specific conditions and maintain proper records.',
      },

      { type: 'heading', text: 'What Counts as Qualifying Income in a Free Zone', semibold: true },
      {
        type: 'paragraph',
        text: 'Free Zone companies get the 0% rate only on qualifying income, such as:',
        highlights: [{ text: 'qualifying income', color: 'blue', bold: true }],
      },
      {
        type: 'list',
        items: [
          'Sales to foreign customers',
          'Export revenue',
          'Transactions with other Free Zone entities',
          'Approved activities carried out within the Free Zone',
        ],
      },
      {
        type: 'paragraph',
        text: 'Income that does not qualify includes:',
        highlights: [{ text: 'does not qualify', color: 'blue', bold: true }],
      },
      {
        type: 'list',
        items: [
          'Sales to mainland UAE customers',
          'Local UAE sourcing',
          'Certain service activities not allowed under Free Zone rules',
        ],
      },
      {
        type: 'paragraph',
        text: 'If non-qualifying income exceeds the lower of:',
        highlights: [{ text: 'non-qualifying income exceeds', color: 'blue', bold: true }],
      },
      {
        type: 'list',
        items: [
          '5% of total revenue, or',
          'AED 5 million,',
        ],
      },
      {
        type: 'paragraph',
        text: 'the FTA can treat your business as non-qualifying.',
        highlights: [{ text: 'non-qualifying', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'That means 9% tax on all profits, not just the mainland part.',
        highlights: [{ text: '9% tax on all profits', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'Why Mixing Income Is Risky', semibold: true },
      {
        type: 'paragraph',
        text: 'Many SMEs issue invoices to mainland clients using the same company, same bank account, same books.',
      },
      { type: 'paragraph', text: 'This creates problems:' },
      {
        type: 'list',
        items: [
          'No clear separation between qualifying and non-qualifying income',
          'Weak evidence during tax audits',
          'Higher risk of losing Free Zone status',
        ],
      },
      {
        type: 'paragraph',
        text: 'For businesses registered in 2024 or later, scrutiny is higher.',
        highlights: [{ text: 'in 2024 or later', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'The FTA closely checks companies with 10ΓÇô50 employees, especially where:',
        highlights: [{ text: '10ΓÇô50 employees', color: 'blue', bold: true }],
      },
      {
        type: 'list',
        items: [
          'Revenue grows fast',
          'Related-party transactions exist',
          'Transfer pricing rules apply',
        ],
      },
      {
        type: 'paragraph',
        text: 'Without clean records, the FTA may apply 9% Corporate Tax to the full profit, plus penalties.',
        highlights: [{ text: '9% Corporate Tax to the full profit', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'How to Protect Your 0% Corporate Tax Status', semibold: true },
      { type: 'paragraph', text: 'Business owners should take these steps early:' },

      { type: 'heading', text: '1. Separate Your Income Properly', semibold: true },
      {
        type: 'paragraph',
        text: 'Maintain clear accounting separation between:',
        highlights: [{ text: 'clear accounting separation', color: 'blue', bold: true }],
      },
      {
        type: 'list',
        items: [
          'Free Zone qualifying income',
          'Mainland taxable income',
        ],
      },
      {
        type: 'paragraph',
        text: 'This may require separate ledgers, cost tracking, and internal controls.',
      },

      { type: 'heading', text: '2. Review Your Business Substance', semibold: true },
      { type: 'paragraph', text: 'You must show real activity in the Free Zone:' },
      {
        type: 'list',
        items: [
          'Employees',
          'Office space',
          'Decision-making',
          'Operational control',
        ],
      },
      {
        type: 'paragraph',
        text: 'Substance reviews should be done every year, not only during audits.',
        highlights: [{ text: 'every year', color: 'blue', bold: true }],
      },

      { type: 'heading', text: '3. Prepare Audited Financials Early', semibold: true },
      { type: 'paragraph', text: 'Audited accounts help:' },
      {
        type: 'list',
        items: [
          'Prove income segregation',
          'Support arm\'s-length pricing',
          'Reduce audit risk',
        ],
      },
      {
        type: 'paragraph',
        text: 'Waiting until tax filing time is often too late.',
      },

      { type: 'heading', text: 'Final Thought', semibold: true },
      {
        type: 'paragraph',
        text: 'Mixing mainland and Free Zone income is one of the fastest ways to lose your 0% tax rate.',
        highlights: [{ text: 'lose your 0% tax rate', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'Proper structure, clean records, and early planning protect your profitsΓÇöand your peace of mind.',
      },
    ],
    conclusion: '',
    disclaimer: '',
    relatedArticles: [
      {
        title: 'How Free Zone Businesses Can Protect Their 0% Tax Status',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        link: '/insights/article/how-free-zone-businesses-can-protect-their-0-tax-status',
      },
      {
        title: 'How To Get Back VAT Paid on Employee Benefits Without Problems',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        link: '/insights/article/how-to-get-back-vat-paid-on-employee-benefits-without-problems',
      },
      {
        title: 'Why Reporting Losses Can Attract Tax Attention',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
        link: '/insights/article/why-reporting-losses-can-attract-tax-attention',
      },
    ],
  },
  {
    category: 'Free Zone',
    title: 'How Free Zone Businesses Can Protect Their 0% Tax Status',
    intro: '',
    author: 'Standard Auditing Team',
    authorRole: 'Content Writer',
    date: 'January 20, 2025',
    readTime: '6 min read',
    featuredImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop',
    content: [
      {
        type: 'paragraph',
        text: 'A Free Zone company can do everything rightΓÇª and still lose its 0% corporate tax rate.',
      },
      {
        type: 'paragraph',
        text: 'No warning, no gradual increase. Just 9% tax on the full profit.',
        highlights: [{ text: '9% tax on the full profit', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'That\'s how the De Minimis rules work in 2025.',
        highlights: [{ text: 'De Minimis rules', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'What the De Minimis Rules Really Mean', semibold: true },
      {
        type: 'paragraph',
        text: 'The rules control how much non-qualifying income a Free Zone company is allowed to earn.',
        highlights: [{ text: 'how much non-qualifying income', color: 'blue', bold: true }],
      },
      { type: 'paragraph', text: 'If that limit is crossed:' },
      {
        type: 'list',
        items: [
          'The 0% corporate tax benefit is lost',
          '9% corporate tax applies to all income',
          'Not just the excess amount',
        ],
      },
      {
        type: 'paragraph',
        text: 'This often comes as a shock to founders and finance teams.',
      },

      { type: 'heading', text: 'How Businesses Cross the Line Without Knowing', semibold: true },
      {
        type: 'paragraph',
        text: 'Growth is usually the trigger.',
      },
      { type: 'paragraph', text: 'A Free Zone company:' },
      {
        type: 'list',
        items: [
          'Takes on mainland clients',
          'Adds new services',
          {
            title: 'Expands after setup through company formation services in Dubai',
            description: '',
            highlights: [{ text: 'company formation services in Dubai', color: 'blue', bold: true }],
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'Each step feels normal. But together, they can quietly break the De Minimis threshold.',
      },
      {
        type: 'paragraph',
        text: 'No alarm goes off. The problem shows up laterΓÇöoften during filing or an audit review.',
      },

      { type: 'heading', text: 'Activities That Commonly Create Risk', semibold: true },
      { type: 'paragraph', text: 'Risk increases when:' },
      {
        type: 'list',
        items: [
          'Mainland clients are invoiced directly',
          'Revenue streams are not clearly separated',
          'Qualifying and non-qualifying income are mixed',
          'Contracts don\'t match tax structure',
        ],
      },
      {
        type: 'paragraph',
        text: 'These issues are often discovered only after searching for an audit firm near me, when compliance questions arise.',
        highlights: [{ text: 'audit firm near me', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'The Real Mistake Decision Makers Make', semibold: true },
      {
        type: 'paragraph',
        text: 'The mistake is not expansion.',
      },
      {
        type: 'paragraph',
        text: 'The mistake is assuming structure still works as the business grows.',
        highlights: [{ text: 'assuming structure still works', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'Corporate tax rules are new. Free Zone benefits are conditional. Silence from the FTA does not mean safety.',
      },
      {
        type: 'paragraph',
        text: 'This is why proper tax advisory services in Dubai are now essentialΓÇönot optional.',
        highlights: [{ text: 'tax advisory services in Dubai', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'How to Protect the 0% Rate in 2025', semibold: true },
      { type: 'paragraph', text: 'Smart businesses do a few things early:' },
      {
        type: 'list',
        items: [
          'Track income by type, not just by total',
          'Separate mainland and Free Zone activity clearly',
          'Review contracts and invoicing flows',
          'Check De Minimis exposure before filing',
        ],
      },
      {
        type: 'paragraph',
        text: 'A qualified tax consultant in the UAE can identify risks before they turn into tax bills.',
        highlights: [{ text: 'tax consultant in the UAE', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'Why This Matters at the Leadership Level', semibold: true },
      { type: 'paragraph', text: 'Once the 0% rate is lost:' },
      {
        type: 'list',
        items: [
          'It applies to the full financial year',
          'It affects cash flow immediately',
          'Fixing it later is difficult',
        ],
      },
      {
        type: 'paragraph',
        text: 'This is not a compliance detail. It\'s a profit decision.',
        highlights: [{ text: 'profit decision', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'Final Thought', semibold: true },
      {
        type: 'paragraph',
        text: 'The De Minimis rules don\'t punish growth. They punish unclear structure.',
      },
      {
        type: 'paragraph',
        text: 'Businesses that plan stay at 0%. Businesses that assume pay 9%.',
        highlights: [{ text: 'Businesses that plan stay at 0%', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'Knowing the rules early keeps control where it belongsΓÇöwith you.',
        highlights: [{ text: 'with you', color: 'blue', bold: true }],
      },
    ],
    conclusion: '',
    disclaimer: '',
    relatedArticles: [
      {
        title: 'How To Get Back VAT Paid on Employee Benefits Without Problems',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        link: '/insights/article/how-to-get-back-vat-paid-on-employee-benefits-without-problems',
      },
      {
        title: 'Why Mixing Mainland and Free Zone Income Can Cost You 9% Tax',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
        link: '/insights/article/why-reporting-losses-can-attract-tax-attention',
      },
      {
        title: 'Why Reporting Losses Can Attract Tax Attention',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
        link: '/insights/article/why-reporting-losses-can-attract-tax-attention',
      },
    ],
  },
  {
    category: 'VAT',
    title: 'How To Get Back* VAT Paid on Employee Benefits Without Problems',
    intro: '',
    author: 'Standard Auditing Team',
    authorRole: 'Content Writer',
    date: 'January 15, 2025',
    readTime: '5 min read',
    featuredImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    content: [
      {
        type: 'paragraph',
        text: 'Many UAE businesses pay VAT every day without knowing they can legally claim some of it back. This is very common among businesses, especially those registered for VAT in 2024 or later.',
      },
      {
        type: 'paragraph',
        text: 'One area that is often missed is employee benefits.',
        highlights: [{ text: 'employee benefits', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'The good news?',
        highlights: [{ text: 'The good news?', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'You may be able to reclaim VAT on some employee costs without increasing audit risk, if it is done the right way and aligned with UAE VAT rules.',
        highlights: [{ text: 'without increasing audit risk', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'This is an area often reviewed by Dubai corporate tax consultants during compliance checks, as missed claims are common among growing businesses.',
        highlights: [{ text: 'Dubai corporate tax consultants', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'Why Employee VAT Is Often Missed', semibold: true },
      {
        type: 'paragraph',
        text: 'Most business owners believe VAT paid on employees is not recoverable. This is not fully true.',
        highlights: [{ text: 'not fully true', color: 'blue', bold: true }],
      },
      { type: 'paragraph', text: 'VAT may be reclaimed when:' },
      {
        type: 'list',
        items: [
          'The cost is clearly related to business use',
          'The expense supports employees in doing their job',
          'Proper documents are available',
        ],
      },
      {
        type: 'paragraph',
        text: 'Because these rules are not simple, many companies avoid claiming anything at all and focus only on basic VAT return filing services in the UAE, without deeper review.',
        highlights: [{ text: 'VAT return filing services in the UAE', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'Employee Costs That May Be VAT Recoverable', semibold: true },
      {
        type: 'paragraph',
        text: 'Depending on your business and how expenses are structured, VAT may be claimed on:',
      },
      {
        type: 'list',
        items: [
          'Staff accommodation (when provided for business needs)',
          'Transportation arranged by the company',
          'Training and skill-development programs',
          'Work-related meals or refreshments',
          'Uniforms and safety equipment',
          'Mobile phones or laptops used for work',
        ],
      },
      {
        type: 'paragraph',
        text: 'Each item must meet Federal Tax Authority (FTA) requirements. Personal benefits mixed with business use need special care and proper allocation.',
      },

      { type: 'heading', text: 'The Biggest Mistake SMEs Make', semibold: true },
      {
        type: 'paragraph',
        text: 'The biggest risk is claiming VAT without proper checks.',
        highlights: [{ text: 'claiming VAT without proper checks', color: 'blue', bold: true }],
      },
      { type: 'paragraph', text: 'This includes:' },
      {
        type: 'list',
        items: [
          'Missing tax invoices',
          'Poor expense descriptions',
          'Claiming 100% VAT on mixed-use costs',
          'No clear business justification',
        ],
      },
      {
        type: 'paragraph',
        text: 'These issues are what usually trigger VAT auditsΓÇönot the act of reclaiming VAT itself. This is why experienced firms offering VAT return filing services UAE-wide focus heavily on documentation and review.',
        highlights: [{ text: 'VAT return filing services UAE-wide', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'How to Reclaim VAT Safely', semibold: true },
      { type: 'paragraph', text: 'To avoid problems with the FTA:' },
      {
        type: 'list',
        items: [
          {
            title: 'Review past VAT returns',
            description: 'Many businesses have reclaim opportunities going back several months.',
          },
          {
            title: 'Separate personal and business expenses',
            description: 'Clear records reduce audit risk.',
          },
          {
            title: 'Fix documentation before filing',
            description: 'Strong paperwork protects your company.',
          },
          {
            title: 'Use professional review, not guesswork',
            description:
              'This is where businesses often combine VAT review with corporate tax filing services in Dubai to stay fully compliant.',
            highlights: [{ text: 'corporate tax filing services in Dubai', color: 'blue', bold: true }],
          },
        ],
      },

      { type: 'heading', text: 'Why This Matters for SMEs', semibold: true },
      {
        type: 'paragraph',
        text: 'For a business with 10ΓÇô50 employees, even small VAT recoveries add up. Over a year, this can mean thousands of dirhams back into cash flow.',
        highlights: [{ text: 'thousands of dirhams back into cash flow', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'VAT is not just a compliance task. When handled correctly, it becomes a cost-control tool.',
        highlights: [{ text: 'cost-control tool', color: 'blue', bold: true }],
      },

      { type: 'heading', text: 'Final Thought', semibold: true },
      {
        type: 'paragraph',
        text: 'Reclaiming VAT on employee benefits can be legal, smart, and safeΓÇöwhen done correctly.',
        highlights: [{ text: 'when done correctly', color: 'blue', bold: true }],
      },
      { type: 'paragraph', text: 'The goal is not to claim more VAT.' },
      {
        type: 'paragraph',
        text: 'The goal is to claim only what you are allowed, with confidence.',
        highlights: [{ text: 'only what you are allowed', color: 'blue', bold: true }],
      },
      {
        type: 'paragraph',
        text: 'If you are unsure, a professional VAT review can help identify missed opportunities without putting your business at risk.',
        highlights: [{ text: 'without putting your business at risk', color: 'blue', bold: true }],
      },
    ],
    conclusion:
      '',
    disclaimer:
      '*VAT recovery depends on your business activities, documents, and how expenses are treated under UAE VAT law. Not all employee-related costs are eligible for VAT recovery. This article is for general information only and does not guarantee VAT refunds.',
    relatedArticles: [
      {
        title: 'How Free Zone Businesses Can Protect Their 0% Tax Status',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        link: '/insights/article/why-reporting-losses-can-attract-tax-attention',
      },
      {
        title: 'Why Mixing Mainland and Free Zone Income Can Cost You 9% Tax',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
        link: '/insights/article/why-reporting-losses-can-attract-tax-attention',
      },
      {
        title: 'Why Reporting Losses Can Attract Tax Attention',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
        link: '/insights/article/why-reporting-losses-can-attract-tax-attention',
      },
    ],
  },
]

function findArticleSlugByTitle(title) {
  // Normalize titles for comparison (remove special characters and normalize spaces)
  const normalizeTitle = (t) => t.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim()
  const normalizedSearchTitle = normalizeTitle(title)
  
  // Find the article in ARTICLE_DEFINITIONS
  const article = ARTICLE_DEFINITIONS.find(def => {
    const normalizedDefTitle = normalizeTitle(def.title)
    return normalizedDefTitle === normalizedSearchTitle
  })
  
  if (article) {
    return `/insights/article/${slugifyTitle(article.title)}`
  }
  
  // Fallback: generate slug from the provided title
  return `/insights/article/${slugifyTitle(title)}`
}

function BlogArticle({
  category = 'VAT',
  title = 'Article Title',
  author = 'Standard Auditing Team',
  date = 'January 15, 2025',
  featuredImage = null,
  content = [],
  conclusion = '',
  disclaimer = '',
  relatedArticles = [],
}) {
  const [readingProgress, setReadingProgress] = useState(0)
  const [activeHeading, setActiveHeading] = useState(null)
  const [timelineNavHeight, setTimelineNavHeight] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const headings = useMemo(() => {
    const base = content
      .map((section, index) => {
        if (section.type === 'heading') {
          return { id: `heading-${index}`, text: section.text, index }
        }
        return null
      })
      .filter(Boolean)

    if (conclusion) {
      base.push({ id: 'conclusion', text: 'Conclusion', index: content.length })
    }

    return base
  }, [content, conclusion])

  useEffect(() => {
    const updateReadingProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setReadingProgress(Math.min(100, Math.max(0, progress)))
    }

    const updateActiveHeading = () => {
      // Don't highlight any heading if we're at the very top of the page
      if (window.pageYOffset < 100) {
        setActiveHeading(null)
        return
      }
      
      const scrollPosition = window.pageYOffset + 200
      let foundActive = false
      
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i]
        const element = document.getElementById(heading.id)
        if (element) {
          const elementTop = element.offsetTop
          if (scrollPosition >= elementTop) {
            setActiveHeading(heading.id)
            foundActive = true
            break
          }
        }
      }
      // If no heading is in view, don't highlight any
      if (!foundActive) {
        setActiveHeading(null)
      }
    }

    const updateTimelineNavHeight = () => {
      if (headings.length === 0) return

      const timelineNav = document.querySelector('.blog-article__timeline-nav')

      if (timelineNav) {
        const navHeight = timelineNav.offsetHeight
        if (navHeight !== timelineNavHeight) {
          setTimelineNavHeight(navHeight)
        }
      }
    }

    window.addEventListener('scroll', updateReadingProgress)
    window.addEventListener('scroll', updateActiveHeading)
    window.addEventListener('scroll', updateTimelineNavHeight)
    window.addEventListener('resize', updateTimelineNavHeight)

    updateReadingProgress()
    updateActiveHeading()
    updateTimelineNavHeight()

    return () => {
      window.removeEventListener('scroll', updateReadingProgress)
      window.removeEventListener('scroll', updateActiveHeading)
      window.removeEventListener('scroll', updateTimelineNavHeight)
      window.removeEventListener('resize', updateTimelineNavHeight)
    }
  }, [headings, timelineNavHeight])

  // Reveal sections on scroll (FAQ-like animation)
  useEffect(() => {
    const elements = document.querySelectorAll('.blog-article__section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('blog-article__section--in-view')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => elements.forEach((el) => observer.unobserve(el))
  }, [content, conclusion])

  const scrollToHeading = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const headerHeight = 110
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const scrollToContent = (e) => {
    e.preventDefault()
    const contentEl = document.getElementById('content')
    if (!contentEl) return
    // Calculate header height dynamically
    const header = document.querySelector('.site-header')
    const headerHeight = header ? header.offsetHeight : 110
    const extraPadding = 20
    const y = contentEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - extraPadding
    window.scrollTo({ 
      top: Math.max(0, y), 
      behavior: 'smooth' 
    })
  }

  return (
    <main className="blog-article">
      <div className="blog-article__progress-bar">
        <div className="blog-article__progress-fill" style={{ width: `${readingProgress}%` }} />
      </div>

      <button 
        type="button" 
        className="blog-article__hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`blog-article__hamburger-line ${isMenuOpen ? 'blog-article__hamburger-line--open' : ''}`}></span>
        <span className={`blog-article__hamburger-line ${isMenuOpen ? 'blog-article__hamburger-line--open' : ''}`}></span>
        <span className={`blog-article__hamburger-line ${isMenuOpen ? 'blog-article__hamburger-line--open' : ''}`}></span>
      </button>

      <nav className={`blog-article__nav ${isMenuOpen ? 'blog-article__nav--open' : ''}`}>
        <Link to="/" className="blog-article__nav-link" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" className="blog-article__nav-link" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
        <Link to="/insights" className="blog-article__nav-link" onClick={() => setIsMenuOpen(false)}>
          Insights
        </Link>
        <Link to="/career" className="blog-article__nav-link" onClick={() => setIsMenuOpen(false)}>
          Career
        </Link>
        <Link to="/contact" className="blog-article__nav-link" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </nav>

      <section className="blog-article__hero">
        {featuredImage && (
          <div className="blog-article__hero-background">
            <img src={featuredImage} alt={title} loading="eager" />
            <div className="blog-article__hero-overlay"></div>
          </div>
        )}

        <div className="blog-article__hero-content">
          <p className="blog-article__hero-category small-body-opensans">{category}</p>
          <h1 className="blog-article__hero-title h1-montserrat">{title}</h1>
          
          {/* CTA integrated in hero */}
          <div className="blog-article__hero-cta">
            <p className="blog-article__hero-cta-text">Need expert tax & compliance advice?</p>
            <Link to="/contact" className="blog-article__hero-cta-button">
              <span>Get Free Consultation</span>
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12.5L11 9L7 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        <a href="#content" className="blog-article__hero-read-more" onClick={scrollToContent}>
          <span className="blog-article__hero-read-text">Read More</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

          {headings.length > 0 && (
            <aside className="blog-article__timeline">
              <h4 className="blog-article__timeline-title">Contents</h4>
              <nav className="blog-article__timeline-nav">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={scrollToHeading(heading.id)}
                    className={`blog-article__timeline-item ${activeHeading === heading.id ? 'blog-article__timeline-item--active' : ''}`}
                  >
                    <span className="blog-article__timeline-text">{heading.text}</span>
                  </a>
                ))}
              </nav>
            </aside>
          )}

      <div className="blog-article__main-wrapper">
        <div className="blog-article__main-container">
          <article id="content" className="blog-article__content">
            <div className="blog-article__content-container">
              <div className="blog-article__meta-info">
                <span className="blog-article__author-name-inline">by {author}</span>
                <span className="blog-article__meta-separator"> | </span>
                <span className="blog-article__date">{date}</span>
              </div>

              {content.map((section, index) => {
                const renderParagraph = (text, highlights = []) => {
                  if (!highlights || highlights.length === 0) return text

                  const sortedHighlights = highlights
                    .map((highlight) => {
                      const foundIndex = text.indexOf(highlight.text)
                      return { ...highlight, index: foundIndex }
                    })
                    .filter((h) => h.index !== -1)
                    .sort((a, b) => a.index - b.index)

                  const parts = []
                  let lastIndex = 0
                  let keyCounter = 0

                  sortedHighlights.forEach((highlight) => {
                    if (highlight.index > lastIndex) {
                      parts.push(
                        <React.Fragment key={`text-${keyCounter++}`}>
                          {text.substring(lastIndex, highlight.index)}
                        </React.Fragment>,
                      )
                    }

                    const className = `blog-article__highlight blog-article__highlight--${highlight.color} ${
                      highlight.bold ? 'blog-article__highlight--bold' : ''
                    }`
                    parts.push(
                      <span key={`highlight-${keyCounter++}`} className={className}>
                        {highlight.text}
                      </span>,
                    )

                    lastIndex = highlight.index + highlight.text.length
                  })

                  if (lastIndex < text.length) {
                    parts.push(<React.Fragment key={`text-${keyCounter++}`}>{text.substring(lastIndex)}</React.Fragment>)
                  }

                  return parts
                }

                const renderDescription = (text, highlights = []) => renderParagraph(text, highlights)

                return (
                  <div key={index} className="blog-article__section">
                    {section.type === 'heading' && (
                      <h2
                        id={`heading-${index}`}
                        className={`blog-article__heading h2-montserrat ${section.semibold ? 'blog-article__heading--semibold' : ''}`}
                      >
                        {section.text}
                      </h2>
                    )}

                    {section.type === 'paragraph' && (
                      <p className={`blog-article__paragraph body-opensans ${section.color ? `blog-article__paragraph--${section.color}` : ''}`}>
                        {section.highlights ? renderParagraph(section.text, section.highlights) : section.text}
                      </p>
                    )}

                    {section.type === 'list' && (
                      <div className="blog-article__list-wrapper">
                        {section.title ? <p className="blog-article__list-title body-opensans">{section.title}</p> : null}
                        <ul className="blog-article__list">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="blog-article__list-item body-opensans">
                              {typeof item === 'object' && item.title ? (
                                <>
                                  <span className="blog-article__list-item-title blog-article__highlight blog-article__highlight--blue blog-article__highlight--bold">
                                    {item.title}
                                  </span>
                                  {item.description ? (
                                    <span className="blog-article__list-item-description">
                                      {item.highlights ? renderDescription(item.description, item.highlights) : item.description}
                                    </span>
                                  ) : null}
                                </>
                              ) : (
                                item
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {section.type === 'callout' && (
                      <div className={`blog-article__callout blog-article__callout--${section.variant}`}>
                        <div className="blog-article__callout-icon"></div>
                        <div className="blog-article__callout-content">
                          <h3 className="blog-article__callout-title h4-montserrat">{section.title}</h3>
                          {section.text ? <p className="blog-article__callout-text body-opensans">{section.text}</p> : null}
                          {section.items ? (
                            <ul className="blog-article__callout-list">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="blog-article__callout-item body-opensans">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    )}

                    {section.type === 'image' && (
                      <div className="blog-article__image">
                        <img src={section.src} alt={section.alt || ''} loading="lazy" />
                        {section.caption ? <p className="blog-article__image-caption small-body-opensans">{section.caption}</p> : null}
                      </div>
                    )}
                  </div>
                )
              })}

              {conclusion ? (
                <div id="conclusion" className="blog-article__conclusion-section">
                  <h2 className="blog-article__conclusion-title h2-montserrat">Conclusion</h2>
                  <div className="blog-article__conclusion-text-wrapper">
                    {Array.isArray(conclusion) ? (
                      conclusion.map((para, idx) => (
                        <p key={idx} className="blog-article__conclusion-text body-opensans">
                          {para}
                        </p>
                      ))
                    ) : (
                      <p className="blog-article__conclusion-text body-opensans">{conclusion}</p>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </article>
        </div>
      </div>

      {disclaimer && (
        <section className="blog-article__disclaimer">
          <div className="blog-article__disclaimer-container">
            <p className="blog-article__disclaimer-text small-body-opensans">{disclaimer}</p>
          </div>
        </section>
      )}

      {relatedArticles && relatedArticles.length > 0 && (
        <section className="blog-article__related-posts">
          <div className="blog-article__related-posts-container">
            <h2 className="blog-article__related-posts-title h1-montserrat">More Like This</h2>
            <div className="blog-article__related-posts-grid">
              {relatedArticles.slice(0, 3).map((article, index) => {
                // Use the link if it's already a valid article link, otherwise find the article by title
                let articleSlug
                if (article.link && article.link !== '/insights' && article.link.startsWith('/insights/article/')) {
                  articleSlug = article.link
                } else {
                  // Find the article by title to get the correct slug
                  articleSlug = findArticleSlugByTitle(article.title)
                }
                return (
                  <article key={index} className="blog-article__related-post-card">
                    <Link to={articleSlug} className="blog-article__related-post-link">
                      <div className="blog-article__related-post-image-wrapper">
                        <img src={article.image} alt={article.title} loading="lazy" />
                      </div>
                      <div className="blog-article__related-post-content">
                        <span className="blog-article__related-post-tag small-body-opensans">Article</span>
                        <h3 className="blog-article__related-post-title h4-montserrat">{article.title}</h3>
                        <span className="blog-article__related-post-read-more body-opensans">Read more</span>
                      </div>
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <NewsletterSection />
    </main>
  )
}

export default function BlogArticlePage() {
  const { slug } = useParams()

  const articlesBySlug = useMemo(() => {
    const map = new Map()
    for (const article of ARTICLE_DEFINITIONS) {
      map.set(slugifyTitle(article.title), article)
    }
    return map
  }, [])

  const article = articlesBySlug.get(slug)

  if (!article) {
    return (
      <main className="blog-article blog-article--not-found">
        <section className="blog-article__not-found">
          <h1 className="h1-montserrat">Article not found</h1>
          <p className="body-opensans">This link may be outdated, or the article hasnΓÇÖt been published yet.</p>
        </section>
      </main>
    )
  }

  return <BlogArticle {...article} />
}

