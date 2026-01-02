import React from 'react'
import ServicePageTemplate from './ServicePageTemplate'

function CorporateTax() {
  return (
    <ServicePageTemplate
      serviceId="corporate-tax"
      title="Corporate Tax"
      icon="dollar"
      heroDescription="Navigate UAE's new tax laws with expert corporate tax filing services. We help you maximize deductions and stay compliant with the latest corporate tax regulations."
      overview={[
        "The UAE's corporate tax regime requires careful navigation to ensure compliance while maximizing tax efficiency. Our expert team helps you understand and comply with corporate tax requirements, ensuring accurate filing and optimal tax positions.",
        "We stay current with all corporate tax regulations and changes, ensuring your business remains compliant while taking advantage of all available deductions and exemptions."
      ]}
      whatWeOffer={[
        {
          title: "Corporate Tax Return Filing",
          description: "Accurate preparation and timely filing of your corporate tax returns, ensuring compliance with FTA requirements and deadlines."
        },
        {
          title: "Tax Computation & Planning",
          description: "Calculation of your corporate tax liability with strategic planning to minimize your tax burden through legitimate deductions and exemptions."
        },
        {
          title: "Small Business Relief Assessment",
          description: "Evaluation of eligibility for small business relief and assistance with claiming this exemption where applicable."
        },
        {
          title: "Tax Compliance Review",
          description: "Comprehensive review of your tax position to ensure compliance and identify opportunities for tax optimization."
        },
        {
          title: "FTA Portal Management",
          description: "Handling of all FTA portal submissions, registrations, and communications on your behalf."
        }
      ]}
      whyChooseUs={[
        {
          title: "Up-to-Date Expertise",
          description: "Our team stays current with all corporate tax regulations and changes, ensuring you receive the most accurate and current advice."
        },
        {
          title: "Compliance Assurance",
          description: "We ensure your corporate tax returns are accurate and filed on time, protecting you from penalties and disputes."
        },
        {
          title: "Tax Optimization",
          description: "We help you maximize deductions and exemptions, ensuring you pay only what you legally owe while maintaining full compliance."
        },
        {
          title: "Efficient Processing",
          description: "Our streamlined processes ensure your corporate tax filing is handled efficiently, saving you time and reducing stress."
        }
      ]}
      process={[
        {
          title: "Tax Assessment",
          description: "We review your financial statements and business operations to assess your corporate tax position and identify all applicable deductions."
        },
        {
          title: "Tax Computation",
          description: "We calculate your corporate tax liability, ensuring all eligible deductions and exemptions are properly applied."
        },
        {
          title: "Return Preparation",
          description: "We prepare your corporate tax return with all required documentation and supporting schedules."
        },
        {
          title: "Filing & Submission",
          description: "We file your return through the FTA portal and provide you with confirmation and a summary of the filing."
        },
        {
          title: "Ongoing Support",
          description: "We provide ongoing support for any FTA queries, assessments, or changes in your tax position."
        }
      ]}
      faq={[
        {
          question: "When is corporate tax due in the UAE?",
          answer: "Corporate tax returns are typically due within 9 months of the end of your financial year. We'll ensure your returns are filed well before the deadline."
        },
        {
          question: "What is Small Business Relief?",
          answer: "Small Business Relief is available for businesses with revenue below AED 3 million. If eligible, you may be exempt from corporate tax. We can help assess your eligibility."
        },
        {
          question: "What documents are needed for corporate tax filing?",
          answer: "You'll need financial statements, supporting schedules, invoices, and other documentation. We'll provide you with a comprehensive checklist based on your specific situation."
        },
        {
          question: "Can you help with corporate tax planning?",
          answer: "Yes, we provide corporate tax planning services to help you structure your business operations and transactions in a tax-efficient manner while maintaining compliance."
        }
      ]}
    />
  )
}

export default CorporateTax

