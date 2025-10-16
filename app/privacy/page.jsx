"use client";

import { useEffect } from "react";
import styles from "@/app/style/info.module.css";

export default function PrivacyPolicy() {
  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.section}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(20px)";
      section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.info}>
      <div className={styles.infoHeader}>
        <h1>Privacy Policy</h1>
      </div>

      <div className={styles.section}>
        <h2>1. Introduction and Commitment to Privacy</h2>
        <p>
          ForeverWellnessCompany ("we," "us," "our," or "Company") is committed to protecting your privacy and ensuring transparency in our data practices. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, make purchases, or interact with our services. Please read this Privacy Policy carefully. If you do not agree with our data practices, please discontinue use of our website and services.
        </p>
      </div>

      <div className={styles.section}>
        <h2>2. Information We Collect</h2>
        <p>
          We collect information in the following categories:
        </p>
        <ul className={styles.bulletList}>
          <li><strong>Information You Provide Directly:</strong> When you create an account, complete a purchase, subscribe to our newsletter, or contact customer service, we collect your name, email address, phone number, billing address, shipping address, and payment information.</li>
          <li><strong>Transaction Information:</strong> Details about products purchased, order amounts, dates, and payment methods used.</li>
          <li><strong>Account Information:</strong> Username, password, account preferences, and communication history.</li>
          <li><strong>Automatically Collected Information:</strong> When you access our website, we automatically collect IP address, browser type, device identifiers, pages visited, time spent on pages, referring URLs, and cookie data.</li>
          <li><strong>Location Data:</strong> We may collect approximate location information based on IP address to comply with legal obligations and improve service delivery.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>3. Legal Basis for Processing</h2>
        <p>
          We process your personal data on the following legal bases:
        </p>
        <ul className={styles.bulletList}>
          <li>Performance of contract (fulfilling your purchase orders)</li>
          <li>Compliance with legal obligations</li>
          <li>Your explicit consent (marketing communications)</li>
          <li>Legitimate business interests (fraud prevention, website improvement)</li>
          <li>Protection of vital interests (safety and security)</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>4. Use of Your Information</h2>
        <p>
          We use collected information for the following purposes:
        </p>
        <ul className={styles.bulletList}>
          <li>Processing and fulfilling wellness product orders and transactions</li>
          <li>Providing customer support and responding to inquiries within 24 business hours</li>
          <li>Sending order confirmations, shipping notifications, and delivery updates</li>
          <li>Improving website functionality, user experience, and service quality</li>
          <li>Sending promotional emails, newsletters, and marketing communications (with your consent)</li>
          <li>Detecting, preventing, and addressing fraud and security issues</li>
          <li>Complying with legal, regulatory, and law enforcement requirements</li>
          <li>Conducting statistical analysis and market research</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>5. Information Sharing and Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to third parties without your explicit consent, except in the following circumstances:
        </p>
        <ul className={styles.bulletList}>
          <li><strong>Service Providers:</strong> We may share information with trusted third parties (payment processors, shipping partners, email service providers) who assist us in operating our website and conducting business, subject to confidentiality obligations.</li>
          <li><strong>Legal Compliance:</strong> We may disclose information when required by law, court order, government authority, or to protect our legal rights.</li>
          <li><strong>Business Transfers:</strong> In the event of merger, acquisition, bankruptcy, or similar transaction, your information may be transferred as part of that transaction.</li>
          <li><strong>Aggregate Data:</strong> We may share anonymized, aggregated data that cannot identify individuals.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>6. Data Security and Payment Processing</h2>
        <p>
          For your security, ForeverWellnessCompany does not directly handle payment card data or sensitive payment information. All payment processing is securely handled by Paystack, our integrated third-party payment processor. Paystack implements industry-leading security measures including SSL/TLS encryption, PCI DSS compliance, and advanced fraud detection protocols. When you make a payment through our Service, your payment information is transmitted directly to Paystack's secure servers and is not stored on our systems. For information about Paystack's security practices and data protection, please review their privacy policy at www.paystack.com. We secure your personal information (name, email, shipping address, order history) through restricted access protocols and secure data storage. However, we recommend maintaining strong passwords and not sharing sensitive information via unsecured channels.
        </p>
      </div>

      <div className={styles.section}>
        <h2>7. Data Retention</h2>
        <p>
          We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your data at any time, subject to legal and contractual obligations that may require us to retain certain information.
        </p>
      </div>

      <div className={styles.section}>
        <h2>8. Cookies and Tracking Technologies</h2>
        <p>
          Our website uses cookies, web beacons, pixels, and similar tracking technologies to enhance your browsing experience, analyze website traffic, understand user behavior, and remember your preferences. Types of cookies used include: essential cookies (site functionality), analytical cookies (traffic analysis), and marketing cookies (personalized advertising). You can control cookies through your browser settings. Disabling cookies may impair certain website features and functionality. We do not track "Do Not Track" signals at this time, as industry standards have not been established.
        </p>
      </div>

      <div className={styles.section}>
        <h2>9. Your Rights and Choices</h2>
        <p>
          Depending on your jurisdiction, you may have the following rights regarding your personal data:
        </p>
        <ul className={styles.bulletList}>
          <li><strong>Right to Access:</strong> Obtain a copy of the personal data we hold about you</li>
          <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete information</li>
          <li><strong>Right to Erasure:</strong> Request deletion of your personal data (subject to legal obligations)</li>
          <li><strong>Right to Restrict Processing:</strong> Limit how we use your information</li>
          <li><strong>Right to Data Portability:</strong> Receive your data in a portable, machine-readable format</li>
          <li><strong>Right to Object:</strong> Opt out of marketing communications and certain processing activities</li>
          <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for processing at any time</li>
        </ul>
        <p>
          To exercise these rights, contact us using the information in the Contact section below. We will respond within 30 days or as required by applicable law.
        </p>
      </div>

      <div className={styles.section}>
        <h2>10. Third-Party Links and Services</h2>
        <p>
          Our website may contain links to third-party websites and services operated by independent entities. We are not responsible for the privacy practices, content, or security measures of these external sites. We strongly encourage you to review the privacy policies of any third-party services before providing them with your information.
        </p>
      </div>

      <div className={styles.section}>
        <h2>11. Children's Privacy</h2>
        <p>
          Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will promptly delete such information. Parents or guardians who believe their child has provided information should contact us immediately.
        </p>
      </div>

      <div className={styles.section}>
        <h2>12. International Data Transfers</h2>
        <p>
          Your information may be transferred to, stored in, and processed in countries other than your country of residence, which may have different data protection laws. By using our services, you consent to such transfers. We implement appropriate safeguards to protect your information during international transfers.
        </p>
      </div>

      <div className={styles.section}>
        <h2>13. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or other factors. We will notify you of material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services following notification of material changes constitutes acceptance of the updated Privacy Policy.
        </p>
      </div>

      <div className={styles.section}>
        <h2>14. Governing Law and Jurisdiction</h2>
        <p>
          This Privacy Policy shall be governed by and construed in accordance with the laws of the Republic of Kenya, without regard to conflict of law principles. All matters relating to the collection, processing, use, and protection of your personal data are subject to Kenyan law, including the Data Protection Act, 2019 and the Constitution of Kenya, 2010. Any disputes, claims, or legal proceedings arising from this Privacy Policy or our data practices shall be resolved exclusively in the courts of Kenya, specifically the courts of competent jurisdiction in Nairobi County.
        </p>
      </div>

      <div className={styles.section}>
        <h2>15. Contact Information</h2>
        <p>
          If you have questions about this Privacy Policy, wish to exercise your rights, or have privacy concerns, please contact us:
        </p>
        <ul className={styles.bulletList}>
          <li><strong>Email:</strong> foreverwellnesscompany@gmail.comm</li>
          <li><strong>Phone:</strong> (+254) 796-620-365</li>
          <li><strong>Business Address:</strong> ForeverWellnessCompany Ltd., Nairobi, Kenya 00100</li>
          <li><strong>Response Time:</strong> We will respond to all inquiries within 30 days or as required by Kenyan law</li>
        </ul>
      </div>

      <div className={styles.section}>
        <p>
          <strong>Last Updated:</strong> October 2025
        </p>
        <p>
          This Privacy Policy is effective immediately for new users and visitors to our website. If you have previously accepted a different privacy policy, this updated version will become effective 30 days after posting unless you continue to use our services, which constitutes acceptance.
        </p>
      </div>
    </div>
  );
}