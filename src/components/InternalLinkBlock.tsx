import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface InternalLink {
  to: string;
  label: string;
}

interface InternalLinkBlockProps {
  title?: string;
  links: InternalLink[];
}

const InternalLinkBlock = ({ title = "Explore Related Services", links }: InternalLinkBlockProps) => {
  return (
    <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="flex items-center gap-2 text-sm text-primary hover:underline">
            <ArrowRight className="w-3.5 h-3.5 shrink-0" /> {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InternalLinkBlock;
