import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Layers 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h1 className="text-2xl font-bold text-white mb-6">
              <span className="text-primary">FYX LABS</span>
            </h1>
            <p className="text-muted-foreground mb-6">
              A leading digital agency delivering innovative web solutions and digital marketing strategies to businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/web-development" className="text-muted-foreground hover:text-primary transition-all">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-muted-foreground hover:text-primary transition-all">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-muted-foreground hover:text-primary transition-all">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux" className="text-muted-foreground hover:text-primary transition-all">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/e-commerce" className="text-muted-foreground hover:text-primary transition-all">
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/it-consulting" className="text-muted-foreground hover:text-primary transition-all">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-all">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-all">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-all">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-all">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-all">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter to receive updates on our latest work and industry insights.
            </p>
            <form>
              <div className="flex mb-4">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="rounded-r-none bg-muted border-border" 
                />
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 text-white px-4 rounded-l-none"
                >
                  <Layers size={16} />
                </Button>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="consent" />
                <label 
                  htmlFor="consent" 
                  className="text-muted-foreground text-sm leading-tight cursor-pointer"
                >
                  I agree to receive emails from FYX LABS and can unsubscribe at any time.
                </label>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">© 2023 FYX LABS. All rights reserved.</p>
            <ul className="flex flex-wrap gap-6">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-all">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-all">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-muted-foreground hover:text-primary transition-all">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
