const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 frost-glass">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-heading text-2xl font-bold text-primary glow-text">COACH
          <span className="text-foreground">ARCTI</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["About", "Services", "Vouches", "Contact"].map((item) =>
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider uppercase">

              {item}
            </a>
          )}
        </div>
        <a
          href="#contact"
          className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wider uppercase glow-box hover:scale-105 transition-transform duration-300">

          Book Now
        </a>
      </div>
    </nav>);

};

export default Navbar;
