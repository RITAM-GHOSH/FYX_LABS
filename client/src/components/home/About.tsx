import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/10 rounded-3xl blur-xl"></div>
              <div className="relative z-10 rounded-2xl h-80 md:h-96 bg-muted overflow-hidden flex items-center justify-center">
                <div className="flex flex-col items-center text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-2 text-secondary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                  <span>IT Professionals</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-background rounded-lg p-4 border border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-primary text-3xl font-bold">10+</p>
                    <p className="text-muted-foreground text-sm">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-secondary text-3xl font-bold">200+</p>
                    <p className="text-muted-foreground text-sm">Team Members</p>
                  </div>
                  <div className="text-center">
                    <p className="text-accent text-3xl font-bold">500+</p>
                    <p className="text-muted-foreground text-sm">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-primary text-3xl font-bold">50+</p>
                    <p className="text-muted-foreground text-sm">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-primary font-medium">About Us</p>
            </div>
            <h2 className="section-title">We're a leading digital agency with global presence</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              FYX LABS is an award-winning IT company offering web design, web development, mobile app development, and digital marketing services to clients around the globe.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With over a decade of experience, our multidisciplinary team brings together expertise across all digital domains to deliver exceptional results for businesses of all sizes.
            </p>
            
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="text-primary" size={18} />
                </div>
                <p className="text-foreground font-medium">Results-driven approach</p>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="text-primary" size={18} />
                </div>
                <p className="text-foreground font-medium">Client-centered development</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="text-primary" size={18} />
                </div>
                <p className="text-foreground font-medium">Continuous innovation and improvement</p>
              </div>
            </div>
            
            <Button className="btn-primary">Discover More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
