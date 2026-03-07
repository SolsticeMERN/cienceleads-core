import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "B2B Lead Generation", href: "/b2b-lead-generation" },
      { label: "LinkedIn Prospecting", href: "/linkedin-prospecting" },
      { label: "Data Enrichment", href: "/data-enrichment" },
      { label: "B2B Email Lists", href: "/email-lists" },
    ],
  },
  { label: "Case Studies", href: "/proof" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const serviceRoutes = ["/services", "/b2b-lead-generation", "/linkedin-prospecting", "/data-enrichment", "/email-lists"];
  const isServicesActive = serviceRoutes.some((r) => location.pathname.startsWith(r));

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Cience</span>Leads
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground ${
                    isServicesActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl border border-border bg-background/95 backdrop-blur-xl shadow-xl p-2">
                    <Link
                      to="/services"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                    >
                      All Services
                    </Link>
                    <div className="h-px bg-border my-1" />
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => setDropdownOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          location.pathname === child.href
                            ? "text-foreground bg-secondary/50"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                      >
                        {child.label}
                      </Link>
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
        <div className="md:hidden border-t border-border/50 bg-background/80 backdrop-blur-xl">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors block ${
                      isServicesActive ? "text-foreground bg-secondary/50" : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                    }`}
                  >
                    {link.label}
                  </Link>
                  <div className="ml-4 flex flex-col gap-1 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => setOpen(false)}
                        className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                          location.pathname === child.href
                            ? "text-foreground bg-secondary/50"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
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
              <Link to="/contact" onClick={() => setOpen(false)}>
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
