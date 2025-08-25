import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  description: string;
  showBookButton?: boolean;
}

const PageHeader = ({
  title,
  description,
  showBookButton = true,
}: PageHeaderProps) => {
  return (
    <>
      {/* Mobile/Desktop Header */}
      <header className="bg-background border-b border-border px-6 py-4 sticky top-0 z-50">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/logo.svg"
              alt="Scissor Salon Logo"
              className="h-14 w-auto"
            />
            <span className="sr-only">Scissor Salon</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-12">
              <a
                href="/"
                className="text-foreground hover:text-gold transition-colors"
              >
                HOME
              </a>
              <a
                href="/services"
                className="text-foreground hover:text-gold transition-colors"
              >
                SERVICES
              </a>
              <a
                href="/gallery"
                className="text-foreground hover:text-gold transition-colors"
              >
                GALLERY
              </a>
              <a
                href="/team"
                className="text-foreground hover:text-gold transition-colors"
              >
                TEAM
              </a>
              <a
                href="/#about"
                className="text-foreground hover:text-gold transition-colors"
              >
                ABOUT
              </a>
              <a
                href="/#contact"
                className="text-foreground hover:text-gold transition-colors"
              >
                CONTACT
              </a>
            </div>
            <Link to="/auth" className="ml-12">
              <Button className="bg-gold text-black hover:bg-gold/90 transition-colors">
                LOGIN
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Page Header */}
      <header className="bg-primary text-primary-foreground py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-slide-in">
            {description}
          </p>
        </div>
      </header>
    </>
  );
};

export default PageHeader;
