import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Snowy mountain landscape with glowing lights"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-ice font-body text-sm tracking-[0.3em] uppercase mb-4 animate-pulse-glow">
          Competitive Fortnite Coaching
        </p>
        <h1 className="font-heading text-6xl md:text-8xl font-bold leading-tight mb-6 glow-text text-foreground">
          DOMINATE
          <br />
          <span className="text-primary">THE STORM</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
          Elite coaching from a top-tier, community-vouched Fortnite competitor.
          Level up your gameplay with personalized strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-lg tracking-wider uppercase glow-box hover:scale-105 transition-transform duration-300"
          >
            Book a Session
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-frost/20 text-frost font-heading font-semibold text-lg tracking-wider uppercase frost-glass hover:border-primary/40 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-frost/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
