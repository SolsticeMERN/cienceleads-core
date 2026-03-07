import { Shield, Globe, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "2,500+", label: "Projects Delivered" },
  { icon: Globe, value: "4", label: "Continents Served" },
  { icon: Shield, value: "0%", label: "Bounce Rate" },
  { icon: Users, value: "50+", label: "Industries Covered" },
];

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 border-y border-border">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About CienceLeads
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto leading-relaxed">
          With <strong className="text-foreground">2,500+ projects delivered</strong> across 4 continents,
          CienceLeads is the B2B lead intelligence partner trusted by SaaS founders, agency owners,
          and VPs of Sales who demand <strong className="text-foreground">zero-bounce, revenue-ready data</strong>.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
