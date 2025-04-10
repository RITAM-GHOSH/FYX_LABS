
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import CTA from "@/components/home/CTA";
import { Smartphone, Rocket, Shield, Zap, Cloud, Code } from "lucide-react";

const MobileApps = () => {
  return (
    <>
      <Helmet>
        <title>Mobile App Development - FYX LABS</title>
      </Helmet>
      
      <main className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mobile App <span className="text-primary">Development</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Building powerful, feature-rich mobile applications for iOS and Android platforms.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "Native Apps",
                description: "High-performance native applications for iOS and Android platforms."
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Cross-Platform Development",
                description: "Cost-effective solutions that work seamlessly across multiple platforms."
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "App Store Optimization",
                description: "Strategic optimization to improve app visibility and downloads."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Secure Development",
                description: "Built-in security measures to protect user data and privacy."
              },
              {
                icon: <Cloud className="h-8 w-8" />,
                title: "Cloud Integration",
                description: "Seamless integration with cloud services and APIs."
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Performance Optimization",
                description: "Optimized for speed, battery life, and resource efficiency."
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

export default MobileApps;
