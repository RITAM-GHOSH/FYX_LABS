import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    
    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div 
      className={`fixed inset-0 bg-background z-50 flex flex-col justify-start items-center pt-24 transform transition-all duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button 
        onClick={onClose} 
        className="absolute top-8 right-8 text-foreground hover:text-primary transition-all"
        aria-label="Close menu"
      >
        <X size={24} />
      </button>
      
      <div className="w-full px-6 max-w-md">
        <ul className="flex flex-col space-y-6 items-center w-full">
          <li>
            <Link href="/" onClick={onClose} className="text-xl text-foreground hover:text-primary transition-all font-medium">
              Home
            </Link>
          </li>
          
          <li className="w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="services" className="border-none">
                <AccordionTrigger className="text-xl text-foreground hover:text-primary transition-all font-medium py-0">
                  Services
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                  <div className="w-full bg-card rounded-lg p-2">
                    <Link href="/services/web-development" onClick={onClose} className="block py-3 px-4 text-foreground hover:text-primary transition-all">
                      Web Development
                    </Link>
                    <Link href="/services/digital-marketing" onClick={onClose} className="block py-3 px-4 text-foreground hover:text-primary transition-all">
                      Digital Marketing
                    </Link>
                    <Link href="/services/ui-ux" onClick={onClose} className="block py-3 px-4 text-foreground hover:text-primary transition-all">
                      UI/UX Design
                    </Link>
                    <Link href="/services/mobile-apps" onClick={onClose} className="block py-3 px-4 text-foreground hover:text-primary transition-all">
                      Mobile App Development
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          
          <li className="w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="portfolio" className="border-none">
                <AccordionTrigger className="text-xl text-foreground hover:text-primary transition-all font-medium py-0">
                  Portfolio
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                  <div className="w-full bg-card rounded-lg p-2">
                    <Link href="/portfolio" onClick={onClose} className="block py-3 px-4 text-foreground hover:text-primary transition-all">
                      Case Studies
                    </Link>
                    <Link href="/portfolio/success-stories" onClick={onClose} className="block py-3 px-4 text-foreground hover:text-primary transition-all">
                      Success Stories
                    </Link>
                    <Link href="/portfolio/client-projects" onClick={onClose} className="block py-3 px-4 text-foreground hover:text-primary transition-all">
                      Client Projects
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          
          <li>
            <Link href="/about" onClick={onClose} className="text-xl text-foreground hover:text-primary transition-all font-medium">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={onClose} className="text-xl text-foreground hover:text-primary transition-all font-medium">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={onClose} className="text-xl text-foreground hover:text-primary transition-all font-medium">
              Contact
            </Link>
          </li>
          <li className="mt-8">
            <Button className="btn-primary">Get a Quote</Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
