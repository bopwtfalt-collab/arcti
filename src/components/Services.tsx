import { Crosshair, Gamepad2, Shield } from "lucide-react";

const services = [
  {
    icon: Crosshair,
    title: "1-on-1 Coaching",
    price: "$30",
    per: "/ session",
    features: [
      "VOD review & analysis",
      "Mechanics training",
      "Personalized game plan",
      "Discord follow-up support",
    ],
  },
  {
    icon: Gamepad2,
    title: "Duo / Trio Package",
    price: "$50",
    per: "/ session",
    features: [
      "Team synergy analysis",
      "Rotation & callout training",
      "Endgame positioning",
      "Custom scrims setup",
    ],
    featured: true,
  },
  {
    icon: Shield,
    title: "Monthly Mentorship",
    price: "$99",
    per: "/ month",
    features: [
      "4 coaching sessions",
      "Weekly VOD reviews",
      "Priority Discord access",
      "Tournament prep strategy",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Services
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
            COACHING <span className="text-primary">PACKAGES</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-xl p-8 transition-all duration-300 hover:scale-[1.02] ${
                service.featured
                  ? "bg-primary/10 border-2 border-primary/30 glow-box"
                  : "frost-glass glow-border"
              }`}
            >
              <service.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-heading text-4xl font-bold text-primary">
                  {service.price}
                </span>
                <span className="text-muted-foreground text-sm">
                  {service.per}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-secondary-foreground text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-heading font-semibold tracking-wider uppercase text-sm transition-all duration-300 ${
                  service.featured
                    ? "bg-primary text-primary-foreground glow-box hover:scale-105"
                    : "border border-frost/20 text-frost hover:border-primary/40"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
