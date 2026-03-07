const logos = ["TechCorp", "SalesHQ", "GrowthIO", "PipelineAI", "RevenueStack"];

const SocialProofBar = () => {
  return (
    <section className="py-12 border-y border-border">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest font-medium">
          Trusted by 2,500+ B2B Founders & Sales Teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((name) => (
            <div
              key={name}
              className="px-6 py-3 rounded-lg border border-border bg-secondary/30 backdrop-blur-sm text-muted-foreground font-semibold text-sm tracking-wide"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
