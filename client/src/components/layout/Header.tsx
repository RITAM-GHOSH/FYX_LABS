import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import MobileMenu from "./MobileMenu";
import fyxLabsLogo from "@/assets/fyx-labs-logo.jpg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-background sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img src={fyxLabsLogo} alt="FYX LABS Logo" className="h-10 mr-2" />
              <h1 className="text-2xl font-bold text-white">
                <span className="text-primary">FYX</span> <span className="text-white">LABS</span>
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-foreground hover:text-primary transition-all font-medium">
                  Home
                </Link>
              </li>
              <li className="relative group">
                <a 
                  href="#" 
                  className="text-foreground hover:text-primary transition-all font-medium flex items-center"
                  onClick={(e) => e.preventDefault()}
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <div className="nav-dropdown absolute left-0 top-full mt-2 w-64 bg-card rounded-lg shadow-lg border border-border z-50">
                  <div className="p-4">
                    <Link href="/services/web-development" className="block py-2 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-all">
                      Web Development
                    </Link>
                    <Link href="/services/digital-marketing" className="block py-2 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-all">
                      Digital Marketing
                    </Link>
                    <Link href="/services/ui-ux" className="block py-2 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-all">
                      UI/UX Design
                    </Link>
                    <Link href="/services/mobile-apps" className="block py-2 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-all">
                      Mobile App Development
                    </Link>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a 
                  href="#" 
                  className="text-foreground hover:text-primary transition-all font-medium flex items-center"
                  onClick={(e) => e.preventDefault()}
                >
                  Portfolio <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <div className="nav-dropdown absolute left-0 top-full mt-2 w-64 bg-card rounded-lg shadow-lg border border-border z-50">
                  <div className="p-4">
                    <Link href="/portfolio" className="block py-2 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-all">
                      Case Studies
                    </Link>
                    <Link href="/portfolio/success-stories" className="block py-2 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-all">
                      Success Stories
                    </Link>
                    <Link href="/portfolio/client-projects" className="block py-2 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-all">
                      Client Projects
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/about" className="text-foreground hover:text-primary transition-all font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground hover:text-primary transition-all font-medium">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground hover:text-primary transition-all font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <Button className="btn-primary">Get a Quote</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary transition-all"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
