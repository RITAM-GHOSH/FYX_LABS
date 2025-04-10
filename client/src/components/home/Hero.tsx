import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { StarIcon, Code, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Web Design & <span className="text-primary">Development</span> Company
            </h1>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We transform your digital ideas into remarkable products through our exceptional web design and development services tailored to your unique business needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">Get Started</Button>
              <Button variant="outline" className="btn-outline">View Our Work</Button>
            </div>
            <div className="flex items-center mt-12">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-primary">
                  U1
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center text-secondary">
                  U2
                </div>
                <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center text-accent">
                  U3
                </div>
              </div>
              <div className="ml-4">
                <p className="text-foreground font-semibold">500+ Happy Clients</p>
                <div className="flex text-accent">
                  <StarIcon className="h-4 w-4 fill-current" />
                  <StarIcon className="h-4 w-4 fill-current" />
                  <StarIcon className="h-4 w-4 fill-current" />
                  <StarIcon className="h-4 w-4 fill-current" />
                  <StarIcon className="h-4 w-4 fill-current" />
                  <span className="ml-2 text-muted-foreground">5.0 (450+ reviews)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-xl"></div>
              <div className="relative z-10 rounded-2xl w-full h-80 md:h-96 bg-muted overflow-hidden flex items-center justify-center">
                <div className="flex flex-col items-center text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-2 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                  <span>Web Development Team</span>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-card p-4 rounded-lg border border-border shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Code className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">10+ Years</p>
                    <p className="text-muted-foreground text-sm">Industry Experience</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-card p-4 rounded-lg border border-border shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Trophy className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">100+</p>
                    <p className="text-muted-foreground text-sm">Awards Won</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
