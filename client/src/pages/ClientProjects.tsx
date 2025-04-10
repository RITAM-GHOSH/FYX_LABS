
import { Helmet } from "react-helmet";
import CTA from "@/components/home/CTA";
import { Code2, Palette, ShoppingBag } from "lucide-react";

const ClientProjects = () => {
  return (
    <>
      <Helmet>
        <title>Client Projects - FYX LABS</title>
      </Helmet>
      
      <main className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client <span className="text-primary">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Showcasing our diverse portfolio of successful client collaborations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <ShoppingBag className="h-8 w-8" />,
                title: "E-commerce Platform",
                category: "Web Development",
                description: "Built a scalable e-commerce platform with advanced inventory management and payment integration."
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "Brand Identity System",
                category: "UI/UX Design",
                description: "Created a comprehensive brand identity system including logo, guidelines, and digital assets."
              },
              {
                icon: <Code2 className="h-8 w-8" />,
                title: "Mobile Banking App",
                category: "Mobile Development",
                description: "Developed a secure and user-friendly mobile banking application with biometric authentication."
              }
            ].map((project, index) => (
              <div key={index} className="p-6 rounded-lg bg-card border border-border">
                <div className="mb-4 text-primary">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-sm text-primary mb-2">{project.category}</p>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <CTA />
      </main>
    </>
  );
};

export default ClientProjects;
