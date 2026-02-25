import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Shayan",
    text: "He puts in a lot of effort, staying up late for his clients. Built an amazing community of like-minded Fortnite players who want to improve and break their limits.",
    rating: 5,
  },
  {
    name: "Gud",
    text: "Puts in great effort and has an amazingly sharp analytical skill. Highly recommend.",
    rating: 5,
  },
  {
    name: "Money",
    text: "My box fighting improved massively after just one session. Highly recommend the monthly mentorship.",
    rating: 5,
  },
  {
    name: "Stumping & Sharp",
    text: "Our duo went from 0 earnings to consistent placements. The team coaching package is insane value.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="vouches" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Vouches
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
            COMMUNITY <span className="text-primary">APPROVED</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="frost-glass rounded-xl p-8 glow-border hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-glow-warm text-glow-warm"
                  />
                ))}
              </div>
              <p className="text-secondary-foreground leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
              <p className="font-heading text-lg font-semibold text-primary">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
