import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your digital presence?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Partner with us to create exceptional digital experiences that drive growth and success for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-primary">Get Started</Button>
            <Button variant="outline" className="btn-outline">Schedule a Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
