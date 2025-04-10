import { Helmet } from "react-helmet";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CTA from "@/components/home/CTA";

const portfolioCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ui-ux", label: "UI/UX Design" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "marketing", label: "Digital Marketing" },
];

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Website",
    category: "ecommerce",
    tags: ["Web Development", "E-Commerce"],
    description: "A fully responsive e-commerce platform with advanced product filtering, user accounts, and secure payment processing.",
  },
  {
    id: 2,
    title: "Fitness Mobile App",
    category: "mobile",
    tags: ["Mobile App Development", "UI/UX"],
    description: "A comprehensive fitness app with workout tracking, nutrition planning, and progress analytics for iOS and Android platforms.",
  },
  {
    id: 3,
    title: "Marketing Dashboard",
    category: "web",
    tags: ["Web Development", "Data Visualization"],
    description: "A real-time analytics dashboard providing marketing teams with actionable insights and performance metrics.",
  },
  {
    id: 4,
    title: "Travel Booking Platform",
    category: "web",
    tags: ["Web Development", "UI/UX"],
    description: "An intuitive travel booking platform with integrated mapping, pricing comparison, and user reviews.",
  },
  {
    id: 5,
    title: "Healthcare Application",
    category: "mobile",
    tags: ["Mobile App Development", "Web Development"],
    description: "A secure healthcare application enabling patient-doctor communication, appointment scheduling, and medical record access.",
  },
  {
    id: 6,
    title: "Educational Platform",
    category: "web",
    tags: ["Web Development", "E-Learning"],
    description: "An interactive e-learning platform with course management, video integration, and progress tracking.",
  },
  {
    id: 7,
    title: "Restaurant Ordering System",
    category: "ecommerce",
    tags: ["E-Commerce", "UI/UX"],
    description: "A digital ordering system for restaurants with menu management, table reservations, and online payments.",
  },
  {
    id: 8,
    title: "Real Estate Website",
    category: "web",
    tags: ["Web Development", "UI/UX"],
    description: "A comprehensive real estate platform with property listings, advanced search filters, and virtual tours.",
  },
  {
    id: 9,
    title: "Corporate Brand Identity",
    category: "ui-ux",
    tags: ["UI/UX Design", "Branding"],
    description: "A complete brand identity system with logo design, color palette, typography, and digital asset guidelines.",
  },
  {
    id: 10,
    title: "Social Media Campaign",
    category: "marketing",
    tags: ["Digital Marketing", "Social Media"],
    description: "A multi-platform social media campaign that increased brand engagement by 200% and generated qualified leads.",
  },
  {
    id: 11,
    title: "Inventory Management System",
    category: "web",
    tags: ["Web Development", "Enterprise Solutions"],
    description: "A custom inventory management system with barcode scanning, alerts, and reporting for a manufacturing client.",
  },
  {
    id: 12,
    title: "Financial Services App",
    category: "mobile",
    tags: ["Mobile App Development", "Fintech"],
    description: "A secure financial services application with transaction history, budget tracking, and investment management.",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio | FYX LABS</title>
        <meta name="description" content="Explore our portfolio of successful projects that showcase our expertise and commitment to excellence in web development, digital marketing, and more." />
      </Helmet>

      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-primary font-medium">Our Portfolio</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Showcasing Our Best Work
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our collection of successful projects that demonstrate our expertise, creativity, and commitment to delivering exceptional results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" onValueChange={setActiveCategory} className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-muted overflow-x-auto flex-wrap justify-center">
                {portfolioCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="px-5 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <div key={item.id} className="portfolio-item rounded-xl overflow-hidden">
                    <div className="h-64 bg-muted flex items-center justify-center">
                      <div className="flex flex-col items-center text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <span>{item.title}</span>
                      </div>
                    </div>
                    <div className="portfolio-overlay">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-2">{item.tags.join(", ")}</p>
                      <p className="text-foreground mb-4 text-sm">{item.description}</p>
                      <Button className="px-5 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Case Studies</h2>
            <p className="section-subtitle">
              Detailed insights into our most impactful projects and the results we've achieved
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all">
              <div className="h-64 bg-muted flex items-center justify-center">
                <div className="flex flex-col items-center text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                  </svg>
                  <span>Case Study 1</span>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-4">
                  E-Commerce
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Transforming Online Sales for Fashion Retailer
                </h3>
                <p className="text-muted-foreground mb-4">
                  How we increased conversion rates by 150% and expanded the online customer base through a complete e-commerce redesign and optimization strategy.
                </p>
                <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto font-medium">
                  Read Full Case Study 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </Button>
              </div>
            </div>
            
            <div className="bg-background rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all">
              <div className="h-64 bg-muted flex items-center justify-center">
                <div className="flex flex-col items-center text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                  </svg>
                  <span>Case Study 2</span>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full mb-4">
                  Digital Marketing
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Scaling Lead Generation for SaaS Company
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our integrated digital marketing approach that resulted in a 200% increase in qualified leads and a 40% reduction in customer acquisition cost.
                </p>
                <Button variant="link" className="text-secondary hover:text-secondary/80 p-0 h-auto font-medium">
                  Read Full Case Study 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="btn-outline">View All Case Studies</Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Clients We've Worked With</h2>
            <p className="section-subtitle">
              We've had the privilege of partnering with businesses across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="flex justify-center">
                <div className="h-20 w-40 bg-card rounded-lg border border-border flex items-center justify-center transition-all hover:border-primary/50">
                  <span className="text-muted-foreground font-bold">Client {index}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default Portfolio;
