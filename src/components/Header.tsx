import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-12 py-4 transition-colors duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"}`}>
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Scissor Salon Logo" className="h-14 w-auto" />
          <span className="sr-only">Scissor Salon</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-19">
          <div className="flex items-center space-x-12">
            <a href="/" className={`${scrolled ? "text-black" : "text-primary-foreground"} hover:text-gold transition-colors`}>
              HOME
            </a>
            <a href="/services" className={`${scrolled ? "text-black" : "text-primary-foreground"} hover:text-gold transition-colors`}>
              SERVICES
            </a>
            <a href="/gallery" className={`${scrolled ? "text-black" : "text-primary-foreground"} hover:text-gold transition-colors`}>
              GALLERY
            </a>
            <a href="/team" className={`${scrolled ? "text-black" : "text-primary-foreground"} hover:text-gold transition-colors`}>
              TEAM
            </a>
            <a href="#about" className={`${scrolled ? "text-black" : "text-primary-foreground"} hover:text-gold transition-colors`}>
              ABOUT
            </a>
            <a href="#contact" className={`${scrolled ? "text-black" : "text-primary-foreground"} hover:text-gold transition-colors`}>
              CONTACT
            </a>
          </div>
          <Link to="/auth">
            <Button className="bg-gold text-black hover:bg-gold/90 transition-colors ml-12">LOGIN</Button>
          </Link>
        </div>



        {/* Mobile menu button */}
        <button className={`md:hidden ${scrolled ? "text-black" : "text-primary-foreground"}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;