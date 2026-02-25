import { Crosshair, Gamepad2, Shield } from "lucide-react";

const services = [
  {
    icon: Crosshair,
    title: "VOD Review",
    price: "$5",
    per: "/ session",
    features: [
      "1-hour VOD review",
      "Gameplay breakdown",
      "Key mistakes identified",
      "Improvement priorities",
    ],
  },
  {
    icon: Crosshair,
    title: "VOD Review + Notes",
    price: "$7",
    per: "/ session",
    features: [
      "1-hour VOD review",
      "Written notes & takeaways",
      "Timestamped feedback",
      "Action plan summary",
    ],
  },
  {
    icon: Gamepad2,
    title: "Live Tournament Coaching",
    price: "$12",
    per: "/ session",
    features: [
      "Real-time in-game callouts",
      "Live decision coaching",
      "Endgame positioning help",
      "Post-match debrief",
    ],
    featured: true,
  },
  {
    icon: Shield,
    title: "Seasonal Coaching",
    price: "$20",
    per: "/ season",
    features: [
      "Full season mentorship",
      "Ongoing VOD reviews",
      "Priority support",
      "Spots extremely limited",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
