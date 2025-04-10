import { Link } from "wouter";
import {
  Code,
  LineChart,
  Smartphone,
  Paintbrush,
  ShoppingCart,
  Cog
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Code size={24} />,
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    title: "Web Development",
    description: "Build scalable, responsive and high-performance websites tailored for your business goals and target audience.",
    link: "/services/web-development",
    color: "primary",
  },
  {
    id: 2,
    icon: <LineChart size={24} />,
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary",
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to increase visibility, drive traffic, and generate qualified leads for your business.",
    link: "/services/digital-marketing",
    color: "secondary",
  },
  {
    id: 3,
    icon: <Smartphone size={24} />,
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
    title: "Mobile App Development",
    description: "Feature-rich, intuitive mobile applications for iOS and Android platforms with seamless user experience.",
    link: "/services/mobile-apps",
    color: "accent",
  },
  {
    id: 4,
    icon: <Paintbrush size={24} />,
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    title: "UI/UX Design",
    description: "Thoughtfully designed interfaces that enhance user experience and drive engagement across all digital platforms.",
    link: "/services/ui-ux",
    color: "primary",
  },
  {
    id: 5,
    icon: <ShoppingCart size={24} />,
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary",
    title: "E-Commerce Solutions",
    description: "Custom e-commerce platforms with secure payment gateways, inventory management, and conversion optimization.",
    link: "/services/e-commerce",
    color: "secondary",
  },
  {
    id: 6,
    icon: <Cog size={24} />,
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
    title: "IT Consulting",
    description: "Expert IT consultation to help businesses leverage technology for increased efficiency and competitive advantage.",
    link: "/services/it-consulting",
    color: "accent",
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer comprehensive digital solutions tailored to help businesses grow and succeed in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className={`w-14 h-14 ${service.iconBg} rounded-lg flex items-center justify-center mb-5`}>
                <span className={service.iconColor}>{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-5">
                {service.description}
              </p>
              <Link href={service.link} className={`inline-flex items-center text-${service.color} hover:text-${service.color}/80 font-medium transition-all`}>
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
