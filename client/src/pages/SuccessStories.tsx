
import { Helmet } from "react-helmet";
import CTA from "@/components/home/CTA";
import { Award, TrendingUp, Users } from "lucide-react";

const SuccessStories = () => {
  return (
    <>
      <Helmet>
        <title>Success Stories - FYX LABS</title>
      </Helmet>
      
      <main className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success <span className="text-primary">Stories</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Real results and transformations achieved through our partnership with clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "200% Revenue Growth",
                client: "E-commerce Platform",
                description: "Implemented advanced analytics and optimization strategies that led to significant revenue growth within 6 months."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "1M+ Active Users",
                client: "Social Media App",
                description: "Scaled user acquisition and engagement through innovative features and marketing campaigns."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Industry Recognition",
                client: "Healthcare Solution",
                description: "Developed an award-winning healthcare management platform that revolutionized patient care."
              }
            ].map((story, index) => (
              <div key={index} className="p-6 rounded-lg bg-card border border-border">
                <div className="mb-4 text-primary">{story.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{story.title}</h3>
                <p className="text-sm text-primary mb-2">{story.client}</p>
                <p className="text-muted-foreground">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <CTA />
      </main>
    </>
  );
};

export default SuccessStories;
