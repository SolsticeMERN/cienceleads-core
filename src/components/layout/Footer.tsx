import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30">
      {/* Book a Call CTA Banner */}
      <div className="border-b border-border">
        <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Ready to fill your pipeline?</h3>
            <p className="text-sm text-muted-foreground mt-1">Book a free strategy call and get a custom sample list for your ICP.</p>
          </div>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              Book a Free Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
              <img src={logoImg} alt="CienceLeads logo" className="h-8 w-8" />
              <span><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Cience</span>Leads</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Human-verified B2B leads with 0% bounce guarantee. Trusted by 2,500+ Founders and Sales VPs.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">hello@cienceleads.com</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All Services</Link>
              <Link to="/proof" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link>
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/b2b-lead-generation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">B2B Lead Generation</Link>
              <Link to="/linkedin-prospecting" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn Prospecting</Link>
              <Link to="/data-enrichment" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Data Enrichment</Link>
              <Link to="/email-lists" className="text-sm text-muted-foreground hover:text-foreground transition-colors">B2B Email Lists</Link>
            </nav>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Industries</h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/b2b-lead-generation-for-saas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Lead Gen for SaaS</Link>
              <Link to="/b2b-lead-generation-for-agencies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Lead Gen for Agencies</Link>
              <Link to="/b2b-lead-generation-for-startups" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Lead Gen for Startups</Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CienceLeads. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
            <span className="text-xs text-muted-foreground">USA · UK · Canada · Australia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
