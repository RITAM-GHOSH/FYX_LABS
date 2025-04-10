import { StarIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Acodez delivered an exceptional e-commerce platform that exceeded our expectations. Their team's attention to detail and commitment to quality was evident throughout the project.",
    name: "Robert Johnson",
    position: "CEO, Fashion Brands Inc.",
    avatar: "RJ",
  },
  {
    id: 2,
    content: "The digital marketing strategy implemented by Acodez transformed our online presence. We've seen a significant increase in qualified leads and a 200% ROI on our marketing investment.",
    name: "Sarah Williams",
    position: "Marketing Director, Tech Solutions",
    avatar: "SW",
  },
  {
    id: 3,
    content: "Working with Acodez on our mobile app development was a seamless experience. Their team's technical expertise and innovative approach resulted in a product that our users love.",
    name: "David Chen",
    position: "Founder, HealthTech Innovations",
    avatar: "DC",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Hear directly from our clients about their experience working with us and the results we've delivered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="flex text-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-8 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-foreground font-medium">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
