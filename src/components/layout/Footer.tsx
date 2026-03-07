import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-lg font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Cience</span>Leads
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              B2B lead generation agency delivering human-verified leads with 0% bounce guarantee. Trusted by 2,500+ Founders and Sales VPs worldwide.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              hello@cienceleads.com
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All Services</Link>
              <Link to="/proof" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link>
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
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CienceLeads. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            USA · UK · Canada · Australia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
