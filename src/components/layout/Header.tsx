import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "B2B Lead Generation",
        href: "/b2b-lead-generation",
        subPages: [
          { label: "Lead Generation Service", href: "/b2b-lead-generation/service" },
          { label: "Outsourced Lead Gen", href: "/b2b-lead-generation/outsourced" },
          { label: "Lead List Building", href: "/b2b-lead-generation/lead-list-building" },
          { label: "Verified B2B Leads", href: "/b2b-lead-generation/verified-leads" },
          { label: "Human Verified Leads", href: "/b2b-lead-generation/human-verified-leads" },
          { label: "Prospect Research", href: "/b2b-lead-generation/prospect-research" },
          { label: "Startup Lead Gen", href: "/b2b-lead-generation/startup-leads" },
        ],
      },
      {
        label: "LinkedIn Prospecting",
        href: "/linkedin-prospecting",
        subPages: [
          { label: "LinkedIn Service", href: "/linkedin-prospecting/service" },
          { label: "LinkedIn Lead Gen", href: "/linkedin-prospecting/lead-generation" },
          { label: "Outreach Strategy", href: "/linkedin-prospecting/outreach-strategy" },
          { label: "LinkedIn for SaaS", href: "/linkedin-prospecting/saas-leads" },
          { label: "Sales Prospecting", href: "/linkedin-prospecting/sales-prospecting" },
        ],
      },
      {
        label: "Data Enrichment",
        href: "/data-enrichment",
        subPages: [
          { label: "Enrichment Service", href: "/data-enrichment/service" },
          { label: "B2B Data Enrichment", href: "/data-enrichment/b2b-data-enrichment" },
          { label: "CRM Data Enrichment", href: "/data-enrichment/crm-data" },
          { label: "Email Verification", href: "/data-enrichment/email-verification" },
          { label: "Contact Data Cleaning", href: "/data-enrichment/contact-data-cleaning" },
        ],
      },
      {
        label: "B2B Email Lists",
        href: "/email-lists",
        subPages: [
          { label: "Email List Provider", href: "/email-lists/b2b-email-list-provider" },
          { label: "Buy B2B Email Lists", href: "/email-lists/buy-email-lists" },
          { label: "Accurate Email Lists", href: "/email-lists/accurate-email-lists" },
          { label: "Contact Database", href: "/email-lists/contact-database" },
          { label: "Targeted Prospect Lists", href: "/email-lists/targeted-prospect-lists" },
        ],
      },
      {
        label: "AI Website Development",
        href: "/ai-website-development",
      },
      {
        label: "By Industry",
        href: "/b2b-lead-generation-for-saas",
        subPages: [
          { label: "Lead Gen for SaaS", href: "/b2b-lead-generation-for-saas" },
          { label: "Lead Gen for Agencies", href: "/b2b-lead-generation-for-agencies" },
          { label: "Lead Gen for Startups", href: "/b2b-lead-generation-for-startups" },
        ],
      },
    ],
  },
  { label: "Case Studies", href: "/proof" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setDropdownOpen(false);
    setActiveSubmenu(null);
    setOpen(false);
  }, [location.pathname]);

  const serviceRoutes = ["/services", "/b2b-lead-generation", "/linkedin-prospecting", "/data-enrichment", "/email-lists", "/b2b-lead-generation-for-saas", "/b2b-lead-generation-for-agencies", "/b2b-lead-generation-for-startups"];
  const isServicesActive = serviceRoutes.some((r) => location.pathname.startsWith(r));

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <img src={logoImg} alt="CienceLeads logo" className="h-8 w-8" />
          <span><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Cience</span>Leads</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => { setDropdownOpen(!dropdownOpen); setActiveSubmenu(null); }}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground ${
                    isServicesActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl border border-border bg-background/95 backdrop-blur-xl shadow-xl p-2">
                    <Link
                      to="/services"
                      className="block px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                    >
                      All Services
                    </Link>
                    <div className="h-px bg-border my-1" />
                    {link.children.map((child) => (
                      <div
                        key={child.href}
                        className="relative"
                        onMouseEnter={() => setActiveSubmenu(child.href)}
                        onMouseLeave={() => setActiveSubmenu(null)}
                      >
                        <div className="flex items-center">
                          <Link
                            to={child.href}
                            className={`flex-1 px-3 py-2 rounded-lg text-sm transition-colors ${
                              location.pathname.startsWith(child.href)
                                ? "text-foreground bg-secondary/50"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                            }`}
                          >
                            {child.label}
                          </Link>
                          {child.subPages && (
                            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground mr-2 shrink-0" />
                          )}
                        </div>
                        {/* Sub-menu flyout */}
                        {child.subPages && activeSubmenu === child.href && (
                          <div className="absolute left-full top-0 ml-1 w-56 rounded-xl border border-border bg-background/95 backdrop-blur-xl shadow-xl p-2">
                            {child.subPages.map((sub) => (
                              <Link
                                key={sub.href}
                                to={sub.href}
                                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                                  location.pathname === sub.href
                                    ? "text-foreground bg-secondary/50"
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  location.pathname === link.href ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact">
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              Get a Free Sample List
              <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/80 backdrop-blur-xl max-h-[80vh] overflow-y-auto">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <Link
                    to={link.href}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors block ${
                      isServicesActive ? "text-foreground bg-secondary/50" : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                    }`}
                  >
                    {link.label}
                  </Link>
                  <div className="ml-4 flex flex-col gap-0.5 mt-1">
                    {link.children.map((child) => (
                      <div key={child.href}>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === child.href ? null : child.href)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                            location.pathname.startsWith(child.href)
                              ? "text-foreground bg-secondary/50"
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                          }`}
                        >
                          <span>{child.label}</span>
                          {child.subPages && (
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileExpanded === child.href ? "rotate-180" : ""}`} />
                          )}
                        </button>
                        {child.subPages && mobileExpanded === child.href && (
                          <div className="ml-4 flex flex-col gap-0.5 mt-0.5">
                            <Link
                              to={child.href}
                              className="px-3 py-1.5 rounded-lg text-xs text-primary hover:bg-secondary/30 transition-colors"
                            >
                              Overview →
                            </Link>
                            {child.subPages.map((sub) => (
                              <Link
                                key={sub.href}
                                to={sub.href}
                                className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                                  location.pathname === sub.href
                                    ? "text-foreground bg-secondary/50"
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "text-foreground bg-secondary/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 px-3">
              <Link to="/contact">
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Get a Free Sample List
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
