import { MessageSquare, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
          Contact
        </p>
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
          READY TO <span className="text-primary">LEVEL UP?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Reach out on Discord or send me a message to book your session.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <a
            href="#"
            className="frost-glass rounded-xl p-8 glow-border hover:border-primary/40 transition-all duration-300 hover:scale-105 flex flex-col items-center gap-4"
          >
            <MessageSquare className="w-10 h-10 text-primary" />
            <div>
              <p className="font-heading text-xl font-bold text-foreground">
                Discord
              </p>
              <p className="text-muted-foreground text-sm">Fastest response</p>
            </div>
          </a>

          <a
            href="#"
            className="frost-glass rounded-xl p-8 glow-border hover:border-primary/40 transition-all duration-300 hover:scale-105 flex flex-col items-center gap-4"
          >
            <Mail className="w-10 h-10 text-primary" />
            <div>
              <p className="font-heading text-xl font-bold text-foreground">
                Email
              </p>
              <p className="text-muted-foreground text-sm">
                For detailed inquiries
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
