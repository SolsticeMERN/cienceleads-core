import { usePageSEO } from "@/hooks/use-page-seo";

const PrivacyPolicy = () => {
  usePageSEO({
    title: "Privacy Policy | CienceLeads",
    description: "CienceLeads privacy policy. Learn how we collect, use, and protect your personal information.",
  });

  return (
    <main className="min-h-screen py-20">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: March 9, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-foreground [&_h3]:text-lg [&_h3]:font-medium [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
          <p>CienceLeads ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website cienceleads.com and use our services.</p>

          <h2>1. Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>When you submit a contact form, request a sample list, or engage our services, we may collect:</p>
          <ul>
            <li>Name and job title</li>
            <li>Company name and industry</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Monthly lead generation goals</li>
            <li>Any additional information you provide in messages</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and fulfill service requests</li>
            <li>Deliver lead generation, data enrichment, and prospecting services</li>
            <li>Send you relevant communications about our services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li><strong>Service providers</strong> who assist us in operating our website and delivering services (e.g., email delivery, hosting, analytics)</li>
            <li><strong>Legal authorities</strong> when required by law or to protect our rights</li>
            <li><strong>Business transfers</strong> in connection with a merger, acquisition, or sale of assets</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>

          <h2>5. Data Retention</h2>
          <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.</p>

          <h2>6. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Data portability</li>
          </ul>
          <p>To exercise any of these rights, please contact us at hello@cienceleads.com.</p>

          <h2>7. Cookies</h2>
          <p>Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings.</p>

          <h2>8. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites.</p>

          <h2>9. Children's Privacy</h2>
          <p>Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.</p>

          <h2>10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. The updated version will be indicated by the "Last updated" date at the top of this page.</p>

          <h2>11. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
          <p><strong>Email:</strong> hello@cienceleads.com</p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
