import { Lightbulb, PencilRuler, Code, Rocket } from "lucide-react";

const processes = [
  {
    step: 1,
    icon: <Lightbulb size={24} />,
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    stepBg: "bg-primary",
    title: "Discovery",
    description: "We thoroughly analyze your requirements, target audience, and business objectives to lay a solid foundation.",
  },
  {
    step: 2,
    icon: <PencilRuler size={24} />,
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary",
    stepBg: "bg-secondary",
    title: "Planning & Design",
    description: "We create detailed project plans and design mockups that align with your goals and user expectations.",
  },
  {
    step: 3,
    icon: <Code size={24} />,
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
    stepBg: "bg-accent",
    title: "Development",
    description: "Our skilled developers bring designs to life using cutting-edge technologies and best coding practices.",
  },
  {
    step: 4,
    icon: <Rocket size={24} />,
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    stepBg: "bg-primary",
    title: "Launch & Support",
    description: "We ensure smooth deployment and provide ongoing support to maintain optimal performance.",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Working Process</h2>
          <p className="section-subtitle">
            A structured approach to delivering exceptional results for every project we undertake.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process) => (
            <div key={process.step} className="relative">
              <div className={`absolute -top-6 -left-6 w-16 h-16 ${process.stepBg} text-white text-2xl font-bold rounded-full flex items-center justify-center z-10`}>
                {process.step}
              </div>
              <div className="service-card h-full text-center pt-16">
                <div className={`w-16 h-16 mx-auto ${process.iconBg} rounded-full flex items-center justify-center mb-6`}>
                  <span className={process.iconColor}>{process.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                <p className="text-muted-foreground">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
