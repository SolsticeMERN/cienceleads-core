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
              Zero-bounce B2B lead intelligence. Human-verified prospect lists trusted by 2,500+ Founders and Sales VPs worldwide.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              hello@cienceleads.com
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link>
              <Link to="/proof" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Proof</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">B2B Lead List Building</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn Prospecting</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Data Enrichment</Link>
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
