import { Trophy, Target, Zap, Users } from "lucide-react";

const stats = [
  { icon: Trophy, label: "Tournament Wins", value: "50+" },
  { icon: Target, label: "Students Coached", value: "300+" },
  { icon: Zap, label: "Win Rate Increase", value: "40%" },
  { icon: Users, label: "Community Vouches", value: "200+" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            About
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
            BATTLE-TESTED <span className="text-primary">EXPERTISE</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-secondary-foreground text-lg leading-relaxed mb-6">
              With years of competitive Fortnite experience at the highest level,
              I've developed strategies that consistently produce results. My
              coaching is backed by hundreds of vouches from the community.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're pushing for Champion League, preparing for FNCS, or
              just want to improve your mechanics, I tailor every session to your
              skill level and goals. From box fights to endgame rotations, we
              cover it all.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="frost-glass rounded-xl p-6 text-center glow-border"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-heading text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
