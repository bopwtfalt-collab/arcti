import Snowfall from "@/components/Snowfall";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Snowfall />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 text-center">
        <p className="text-muted-foreground text-sm font-body">
          © 2025 FrostCoach. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
