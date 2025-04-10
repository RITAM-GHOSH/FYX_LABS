
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import CTA from "@/components/home/CTA";
import { Paintbrush, Layout, Monitor, Users, Laptop, Sparkles } from "lucide-react";

const UiUxDesign = () => {
  return (
    <>
      <Helmet>
        <title>UI/UX Design Services - FYX LABS</title>
      </Helmet>
      
      <main className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            UI/UX <span className="text-primary">Design</span> Services
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Creating intuitive and engaging digital experiences that delight users and drive business growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Layout className="h-8 w-8" />,
                title: "User Interface Design",
                description: "Beautiful, modern interfaces that align with your brand and engage users."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "User Experience Design",
                description: "Intuitive user flows and interactions that make your digital products a joy to use."
              },
              {
                icon: <Monitor className="h-8 w-8" />,
                title: "Responsive Design",
                description: "Seamless experiences across all devices and screen sizes."
              },
              {
                icon: <Laptop className="h-8 w-8" />,
                title: "Prototyping",
                description: "Interactive prototypes to visualize and test your product before development."
              },
              {
                icon: <Paintbrush className="h-8 w-8" />,
                title: "Design Systems",
                description: "Consistent and scalable design systems that streamline development."
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "User Testing",
                description: "Comprehensive user testing to validate and improve your designs."
              }
            ].map((service, index) => (
              <div key={index} className="p-6 rounded-lg bg-card border border-border">
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <CTA />
      </main>
    </>
  );
};

export default UiUxDesign;
