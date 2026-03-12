import { ArrowRight, Check } from "lucide-react";
import AEOBlock from "@/components/AEOBlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSEO } from "@/hooks/use-page-seo";
import { useFAQSchema } from "@/hooks/use-faq-schema";
import { useHowToSchema } from "@/hooks/use-howto-schema";
import { useSpeakableSchema } from "@/hooks/use-speakable-schema";
import { useBreadcrumbSchema } from "@/hooks/use-breadcrumb-schema";
import { useArticleSchema } from "@/hooks/use-article-schema";

import { emailVerificationSteps, emailVerificationFaqs } from "@/data/email-verification";

const HowToVerifyBusinessEmails = () => {
  usePageSEO(
    "How to Verify Business Email Addresses (2026 Guide) — CienceLeads",
    "How to verify business email addresses — SMTP verification, MX checks, catch-all detection, and best practices for clean B2B email lists.",
    { ogType: "article" }
  );
  useFAQSchema(emailVerificationFaqs);
  useHowToSchema({
    name: "How to Verify Business Email Addresses",
    description: "Step-by-step guide to verifying B2B email addresses using SMTP checks, MX record validation, catch-all detection, and role-based filtering.",
    totalTime: "PT30M",
    steps: emailVerificationSteps,
  });
  useSpeakableSchema({
    headline: "How to Verify Business Email Addresses (Step-by-Step Guide)",
    summary: "Learn how to verify business email addresses — SMTP verification, MX record checks, catch-all detection, and best practices for clean B2B email lists.",
    url: "/resources/how-to-verify-business-emails",
  });
  useBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "How to Verify Business Emails", url: "/resources/how-to-verify-business-emails" }]);
  useArticleSchema({ headline: "How to Verify Business Email Addresses (Step-by-Step Guide)", description: "Learn how to verify business email addresses — SMTP verification, MX record checks, catch-all detection, and best practices for clean B2B email lists.", url: "/resources/how-to-verify-business-emails", datePublished: "2026-02-05", dateModified: "2026-03-10" });

  return (
    <main className="container max-w-5xl mx-auto py-12">
      <section className="space-y-6">
        <div className="space-y-3">
          <Link to="/resources" className="text-sm text-muted-foreground hover:underline">
            <ArrowRight className="inline-block w-4 h-4 mr-1 mb-0.5" />
            Resources
          </Link>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            How to Verify Business Email Addresses (2026 Guide)
          </h1>
          <p className="text-xl text-muted-foreground">
            How to verify business email addresses — SMTP verification, MX checks, catch-all detection, and best practices for clean B2B email lists.
          </p>
        </div>
        <AEOBlock />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
        <div className="lg:col-span-2 space-y-6">
          <section id="toc" className="space-y-3">
            <h2 className="text-2xl font-bold">Table of Contents</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <a href="#why-verify" className="hover:underline">
                  Why Verify Business Emails?
                </a>
              </li>
              <li>
                <a href="#how-to-verify" className="hover:underline">
                  How to Verify Business Emails
                </a>
              </li>
              <li>
                <a href="#best-practices" className="hover:underline">
                  Email Verification Best Practices
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  Email Verification FAQs
                </a>
              </li>
            </ul>
          </section>

          <section id="why-verify" className="space-y-3">
            <h2 className="text-2xl font-bold">Why Verify Business Emails?</h2>
            <p>
              Verifying business email addresses is crucial for maintaining a clean and effective B2B email list. Here’s why:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-bold">Reduce Bounce Rates</span>: Sending emails to invalid addresses increases your bounce rate, damaging your sender reputation.
              </li>
              <li>
                <span className="font-bold">Improve Deliverability</span>: Verified emails ensure your messages reach the intended recipients, improving deliverability rates.
              </li>
              <li>
                <span className="font-bold">Enhance Sender Reputation</span>: A good sender reputation helps your emails avoid spam folders, increasing engagement.
              </li>
              <li>
                <span className="font-bold">Save Costs</span>: Avoid wasting resources on sending emails to non-existent addresses, optimizing your email marketing budget.
              </li>
            </ul>
          </section>

          <section id="how-to-verify" className="space-y-3">
            <h2 className="text-2xl font-bold">How to Verify Business Emails</h2>
            <p>
              Follow these steps to verify business email addresses effectively:
            </p>
            <ol className="list-decimal pl-5 space-y-4">
              {emailVerificationSteps.map((step, index) => (
                <li key={index} className="space-y-2">
                  <h3 className="font-semibold">{step.name}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="best-practices" className="space-y-3">
            <h2 className="text-2xl font-bold">Email Verification Best Practices</h2>
            <p>
              Follow these best practices to maintain a high-quality B2B email list:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-bold">Regular Verification</span>: Verify your email list regularly to remove invalid addresses and maintain data accuracy.
              </li>
              <li>
                <span className="font-bold">Real-Time Verification</span>: Implement real-time verification during signup to prevent invalid emails from entering your list.
              </li>
              <li>
                <span className="font-bold">Use Multiple Methods</span>: Combine SMTP verification, MX record checks, and catch-all detection for comprehensive verification.
              </li>
              <li>
                <span className="font-bold">Monitor Results</span>: Track verification results and adjust your strategies to optimize email deliverability.
              </li>
            </ul>
          </section>
        </div>

        <div className="lg:col-span-1">
          <aside className="sticky top-32 space-y-6">
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 space-y-4">
              <h2 className="text-lg font-bold">Featured Tools</h2>
              <ul className="space-y-3">
                <li>
                  <a href="/b2b-lead-generation" className="flex items-center gap-3 hover:underline">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    B2B Lead Generation
                  </a>
                </li>
                <li>
                  <a href="/email-verification" className="flex items-center gap-3 hover:underline">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    Email Verification
                  </a>
                </li>
                <li>
                  <a href="/data-enrichment" className="flex items-center gap-3 hover:underline">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    Data Enrichment
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 space-y-4">
              <h2 className="text-lg font-bold">Related Resources</h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/resources/how-to-build-a-prospect-list" className="flex items-center gap-3 hover:underline">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    How to Build a Prospect List
                  </Link>
                </li>
                <li>
                  <Link to="/resources/sales-prospect-research" className="flex items-center gap-3 hover:underline">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    Sales Prospect Research Guide
                  </Link>
                </li>
                <li>
                  <Link to="/resources/how-to-find-decision-makers" className="flex items-center gap-3 hover:underline">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    How to Find Decision Makers
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section id="faq" className="space-y-3 mt-16">
        <h2 className="text-2xl font-bold">Email Verification FAQs</h2>
        <div className="space-y-4">
          {emailVerificationFaqs.map((faq, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HowToVerifyBusinessEmails;
