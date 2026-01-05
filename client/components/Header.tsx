import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">H</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-black text-primary text-sm md:text-base">HajmaFólia</span>
              <span className="text-xs text-muted-foreground">LLumar® Partner</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Kezdőlap
            </Link>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Szolgáltatások
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium">
              Galéria
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              Rólunk
            </a>
            <a href="#prices" className="text-foreground hover:text-primary transition-colors font-medium">
              Árak
            </a>
            <a href="#film-types" className="text-foreground hover:text-primary transition-colors font-medium">
              Fólia típusok
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Moon className="h-5 w-5 transition-colors" />
              ) : (
                <Sun className="h-5 w-5 transition-colors" />
              )}
              <span className="sr-only">Toggle theme</span>
            </button>
            <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Kapcsolat
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium py-2">
              Kezdőlap
            </Link>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium py-2">
              Szolgáltatások
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium py-2">
              Galéria
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium py-2">
              Rólunk
            </a>
            <a href="#prices" className="text-foreground hover:text-primary transition-colors font-medium py-2">
              Árak
            </a>
            <a href="#film-types" className="text-foreground hover:text-primary transition-colors font-medium py-2">
              Fólia típusok
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors w-full text-left flex items-center gap-2"
            >
              {theme === "dark" ? (
                <Moon className="h-5 w-5 transition-colors" />
              ) : (
                <Sun className="h-5 w-5 transition-colors" />
              )}
              <span>Toggle theme</span>
            </button>
            <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors font-medium w-full mt-2">
              Kapcsolat
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
