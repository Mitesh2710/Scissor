import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-wide">
          WELCOME TO SCISSOR SALON
        </h1>

        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light tracking-wider">
          CLASSIC BEAUTY WITH A MODERN TOUCH
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            variant="hero"
            size="lg"
            className="animate-slide-in transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-foreground"
          >
            <Link to="/services" aria-label="View Salon Menu">
              VIEW SALON MENU
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="animate-slide-in border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
          >
            <Link to="/appointment" aria-label="Book an Appointment">
              BOOK NOW
            </Link>
          </Button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <svg
          className="w-6 h-6 text-primary-foreground/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
